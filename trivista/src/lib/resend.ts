import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

type SendEmailParams = Parameters<typeof resend.emails.send>[0];

export async function sendEmailWithRetry(
  params: SendEmailParams,
  idempotencyKey: string,
  maxRetries = 3
): Promise<string> {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const { data, error } = await resend.emails.send(params, {
      idempotencyKey,
    });

    if (!error) return data!.id;

    // Non-retryable errors — throw immediately
    if (
      ['validation_error', 'invalid_idempotent_request'].includes(error.name)
    ) {
      throw new Error(`${error.name}: ${error.message}`);
    }

    if (attempt === maxRetries) {
      throw new Error(
        `Failed after ${maxRetries + 1} attempts: ${error.message}`
      );
    }

    // Exponential backoff: 1s, 2s, 4s
    await new Promise((r) => setTimeout(r, Math.pow(2, attempt) * 1000));
  }

  // TypeScript: unreachable, but satisfies return type
  throw new Error('Unexpected: retry loop exited without result');
}
