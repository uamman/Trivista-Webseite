import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { z } from 'zod';
import { render } from '@react-email/components';
import { sendEmailWithRetry } from '@/lib/resend';
import ContactConfirmation from '@/emails/contact-confirmation';
import NeueAnfrageTrivista from '@/emails/neue-anfrage-trivista';

// Zod schema matching the contact form fields
const contactSchema = z.object({
  anrede: z.string().optional(),
  vorname: z.string().min(1),
  nachname: z.string().min(1),
  email: z.string().email(),
  telefon: z.string().min(1),
  bemerkung: z.string().optional(),
});

// Rate limiting
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(request: Request) {
  try {
    // 1. Rate limiting
    const headersList = await headers();
    const ip =
      headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      headersList.get('x-real-ip') ||
      'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          error:
            'Zu viele Anfragen. Bitte versuchen Sie es später erneut.',
        },
        { status: 429 }
      );
    }

    // 2. Validate body
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Ungültige Eingabe.', details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const formData = parsed.data;
    const timestamp = Date.now();

    // 3. Build anrede label for subject line
    const anredeLabel =
      formData.anrede === 'herr'
        ? 'Herr'
        : formData.anrede === 'frau'
          ? 'Frau'
          : '';
    const contactName = `${anredeLabel} ${formData.vorname} ${formData.nachname}`.trim();

    // 4. Send confirmation email to customer
    const confirmationHtml = await render(
      ContactConfirmation({
        anrede: formData.anrede,
        vorname: formData.vorname,
        nachname: formData.nachname,
        email: formData.email,
        telefon: formData.telefon,
        bemerkung: formData.bemerkung,
      })
    );

    const confirmationPromise = sendEmailWithRetry(
      {
        from: 'Trivista <noreply@rhycasa.ch>',
        to: formData.email,
        replyTo: 'info@rhycasa.ch',
        subject: `Ihre Anfrage bei Trivista — Wir melden uns bei Ihnen`,
        html: confirmationHtml,
        tags: [{ name: 'type', value: 'trivista-contact-confirmation' }],
      },
      `trivista-confirmation/${formData.email}/${timestamp}`
    );

    // 5. Send internal notification to info@rhycasa.ch
    const notificationHtml = await render(
      NeueAnfrageTrivista({
        anrede: formData.anrede,
        vorname: formData.vorname,
        nachname: formData.nachname,
        email: formData.email,
        telefon: formData.telefon,
        bemerkung: formData.bemerkung,
      })
    );

    const notificationPromise = sendEmailWithRetry(
      {
        from: 'Trivista <noreply@rhycasa.ch>',
        to: 'info@rhycasa.ch',
        subject: `Neue Kontaktanfrage Trivista: ${contactName}`,
        html: notificationHtml,
        tags: [{ name: 'type', value: 'trivista-contact-notification' }],
      },
      `trivista-notification/${formData.email}/${timestamp}`
    );

    // 6. Wait for both emails
    await Promise.all([confirmationPromise, notificationPromise]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Ein unerwarteter Fehler ist aufgetreten.' },
      { status: 500 }
    );
  }
}
