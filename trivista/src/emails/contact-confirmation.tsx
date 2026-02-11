import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Button,
  Img,
  Hr,
  Link,
  Preview,
} from '@react-email/components';

const FONT_FAMILY =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif';

const COLORS = {
  primary: '#26413C',
  accent: '#61CE70',
  accentLight: '#E0F5E3',
  accentDark: '#4BA856',
  textPrimary: '#1E2A3F',
  textSecondary: '#6B7684',
  bgSecondary: '#FAF9F8',
  border: '#E0E0E0',
  white: '#FFFFFF',
};

interface ContactConfirmationProps {
  anrede?: string;
  vorname?: string;
  nachname?: string;
  email?: string;
  telefon?: string;
  bemerkung?: string;
}

export default function ContactConfirmation({
  anrede = '',
  vorname = 'Maria',
  nachname = 'Muster',
  email = 'maria.muster@example.com',
  telefon = '+41 79 123 45 67',
  bemerkung = 'Ich interessiere mich für eine 4½-Zimmer-Wohnung. Bitte kontaktieren Sie mich für eine Besichtigung.',
}: ContactConfirmationProps) {
  const anredeLabel = anrede === 'herr' ? 'Herr' : anrede === 'frau' ? 'Frau' : '';
  const fullName = `${anredeLabel} ${vorname} ${nachname}`.trim();
  const previewText = `Vielen Dank für Ihre Anfrage, ${vorname}. Wir melden uns in Kürze bei Ihnen.`;

  return (
    <Html lang="de" style={{ colorScheme: 'light' }}>
      <Head>
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light only" />
        <style>
          {`
            :root { color-scheme: light only; }
            [data-ogsc], [data-ogsb] {
              color: inherit !important;
              background-color: inherit !important;
            }
            u + .body { background-color: #FAF9F8 !important; }
            .light-bg { background-color: #FFFFFF !important; }
            .light-text { color: #1E2A3F !important; }
            .light-text-secondary { color: #6B7684 !important; }
            @media (prefers-color-scheme: dark) {
              .body, .light-bg { background-color: #FFFFFF !important; }
              .light-text { color: #1E2A3F !important; }
              .light-text-secondary { color: #6B7684 !important; }
              h1, h2, h3, p, span, td, div { color: inherit !important; }
            }
            @media only screen and (max-width: 480px) {
              .container { padding: 16px !important; }
              .heading { font-size: 24px !important; }
              .detail-label { width: 100% !important; display: block !important; padding-bottom: 4px !important; }
              .detail-value { width: 100% !important; display: block !important; }
            }
          `}
        </style>
      </Head>
      <Preview>{previewText}</Preview>
      <Body style={bodyStyle} className="body">
        <Container style={containerStyle} className="light-bg">
          {/* Header */}
          <Section style={headerStyle}>
            <Img
              src="https://trivista.ch/images/logo/trivista-color-logo.webp"
              width="140"
              height="40"
              alt="Trivista"
              style={{ display: 'block', margin: '0 auto' }}
            />
          </Section>

          {/* Success Indicator */}
          <Section style={successSectionStyle}>
            <Text style={checkmarkStyle}>&#10003;</Text>
            <Heading style={h1Style} className="heading">
              Anfrage erhalten
            </Heading>
            <Text style={subtitleStyle}>
              Vielen Dank für Ihre Kontaktaufnahme, {vorname}.
            </Text>
          </Section>

          {/* Main Content */}
          <Section style={contentStyle}>
            <Text style={textStyle}>
              Wir haben Ihre Anfrage erhalten und werden uns innerhalb von{' '}
              <strong style={{ color: COLORS.textPrimary }}>
                1–2 Werktagen
              </strong>{' '}
              bei Ihnen melden.
            </Text>

            {/* Inquiry Summary */}
            <Section style={summaryBoxStyle}>
              <Text style={summaryTitleStyle}>Ihre Anfrage im Überblick</Text>

              {/* Name */}
              <Section style={detailRowStyle}>
                <Text style={detailLabelStyle} className="detail-label">
                  Name
                </Text>
                <Text style={detailValueStyle} className="detail-value">
                  {fullName}
                </Text>
              </Section>

              <Hr style={detailDividerStyle} />

              {/* E-Mail */}
              <Section style={detailRowStyle}>
                <Text style={detailLabelStyle} className="detail-label">
                  E-Mail
                </Text>
                <Text style={detailValueStyle} className="detail-value">
                  {email}
                </Text>
              </Section>

              <Hr style={detailDividerStyle} />

              {/* Telefon */}
              {telefon && (
                <>
                  <Section style={detailRowStyle}>
                    <Text style={detailLabelStyle} className="detail-label">
                      Telefon
                    </Text>
                    <Text style={detailValueStyle} className="detail-value">
                      {telefon}
                    </Text>
                  </Section>
                  <Hr style={detailDividerStyle} />
                </>
              )}

              {/* Bemerkung */}
              {bemerkung && (
                <Section style={detailRowStyle}>
                  <Text style={detailLabelStyle} className="detail-label">
                    Bemerkung
                  </Text>
                  <Text style={detailValueStyle} className="detail-value">
                    {bemerkung}
                  </Text>
                </Section>
              )}
            </Section>

            {/* Next Steps */}
            <Text style={nextStepsTitleStyle}>So geht es weiter</Text>

            <Section style={stepStyle}>
              <Text style={stepNumberStyle}>1</Text>
              <Text style={stepTextStyle}>
                Wir prüfen Ihre Anfrage und ordnen sie dem richtigen
                Ansprechpartner zu.
              </Text>
            </Section>

            <Section style={stepStyle}>
              <Text style={stepNumberStyle}>2</Text>
              <Text style={stepTextStyle}>
                Unser Team meldet sich telefonisch oder per E-Mail bei Ihnen.
              </Text>
            </Section>

            <Section style={stepStyle}>
              <Text style={stepNumberStyle}>3</Text>
              <Text style={stepTextStyle}>
                Gemeinsam besprechen wir Ihr Anliegen und die nächsten Schritte.
              </Text>
            </Section>

            {/* CTA */}
            <Section style={{ textAlign: 'center', padding: '24px 0 8px' }}>
              <Button href="https://trivista.ch/angebot/" style={buttonStyle}>
                Wohnungen entdecken
              </Button>
            </Section>
          </Section>

          <Hr style={hrStyle} />

          {/* Contact Hint */}
          <Section style={contactHintStyle}>
            <Text style={contactHintTextStyle}>
              Dringende Anliegen? Rufen Sie uns direkt an:
            </Text>
            <Text style={phoneStyle}>
              <Link href="tel:+41717637500" style={phoneLinkStyle}>
                +41 71 763 75 00
              </Link>
            </Text>
          </Section>

          <Hr style={hrStyle} />

          {/* Footer */}
          <Section style={footerStyle}>
            <Img
              src="https://trivista.ch/images/logo/trivista-color-logo.webp"
              width="100"
              height="28"
              alt="Trivista"
              style={{ display: 'block', margin: '0 auto 16px auto' }}
            />
            <Text style={footerTextStyle}>
              Rhycasa AG · Bahnhofstrasse 28 · CH-9443 Widnau
            </Text>
            <Text style={footerTextStyle}>
              <Link href="mailto:info@rhycasa.ch" style={footerLinkStyle}>
                info@rhycasa.ch
              </Link>
              {' · '}
              <Link href="https://trivista.ch" style={footerLinkStyle}>
                trivista.ch
              </Link>
            </Text>
            <Text style={footerLegalStyle}>
              <Link
                href="https://trivista.ch/datenschutzerklaerung/"
                style={footerLinkStyle}
              >
                Datenschutz
              </Link>
              {' · '}
              <Link
                href="https://trivista.ch/impressum/"
                style={footerLinkStyle}
              >
                Impressum
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// === STYLES ===

const bodyStyle: React.CSSProperties = {
  backgroundColor: COLORS.bgSecondary,
  fontFamily: FONT_FAMILY,
  margin: 0,
  padding: '40px 20px',
};

const containerStyle: React.CSSProperties = {
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: COLORS.white,
  borderRadius: '12px',
  overflow: 'hidden',
};

const headerStyle: React.CSSProperties = {
  padding: '32px 24px',
  textAlign: 'center',
  borderBottom: `1px solid ${COLORS.border}`,
};

const successSectionStyle: React.CSSProperties = {
  padding: '40px 24px 24px',
  textAlign: 'center',
};

const checkmarkStyle: React.CSSProperties = {
  display: 'inline-block',
  width: '56px',
  height: '56px',
  lineHeight: '56px',
  borderRadius: '50%',
  backgroundColor: COLORS.accentLight,
  color: COLORS.accent,
  fontSize: '28px',
  fontWeight: 700,
  textAlign: 'center',
  margin: '0 auto 16px auto',
};

const h1Style: React.CSSProperties = {
  fontSize: '28px',
  fontWeight: 700,
  lineHeight: '1.3',
  color: COLORS.textPrimary,
  margin: '0 0 8px 0',
  fontFamily: FONT_FAMILY,
};

const subtitleStyle: React.CSSProperties = {
  fontSize: '16px',
  lineHeight: '1.6',
  color: COLORS.textSecondary,
  margin: 0,
  fontFamily: FONT_FAMILY,
};

const contentStyle: React.CSSProperties = {
  padding: '8px 24px 32px',
};

const textStyle: React.CSSProperties = {
  fontSize: '16px',
  lineHeight: '1.6',
  color: COLORS.textSecondary,
  margin: '0 0 24px 0',
  fontFamily: FONT_FAMILY,
};

const summaryBoxStyle: React.CSSProperties = {
  backgroundColor: COLORS.bgSecondary,
  borderRadius: '12px',
  border: `1px solid ${COLORS.border}`,
  padding: '20px 24px',
  marginBottom: '32px',
};

const summaryTitleStyle: React.CSSProperties = {
  fontSize: '14px',
  fontWeight: 600,
  color: COLORS.textPrimary,
  margin: '0 0 16px 0',
  letterSpacing: '0.3px',
  fontFamily: FONT_FAMILY,
};

const detailRowStyle: React.CSSProperties = {
  padding: '4px 0',
};

const detailLabelStyle: React.CSSProperties = {
  fontSize: '13px',
  fontWeight: 500,
  color: COLORS.textSecondary,
  margin: '0 0 4px 0',
  fontFamily: FONT_FAMILY,
};

const detailValueStyle: React.CSSProperties = {
  fontSize: '14px',
  color: COLORS.textPrimary,
  margin: 0,
  lineHeight: '1.5',
  fontFamily: FONT_FAMILY,
};

const detailDividerStyle: React.CSSProperties = {
  borderColor: COLORS.border,
  borderTopWidth: '1px',
  margin: '8px 0',
};

const nextStepsTitleStyle: React.CSSProperties = {
  fontSize: '18px',
  fontWeight: 600,
  color: COLORS.textPrimary,
  margin: '0 0 16px 0',
  fontFamily: FONT_FAMILY,
};

const stepStyle: React.CSSProperties = {
  marginBottom: '12px',
  paddingLeft: '44px',
  position: 'relative' as const,
};

const stepNumberStyle: React.CSSProperties = {
  position: 'absolute' as const,
  left: '0',
  top: '0',
  width: '32px',
  height: '32px',
  lineHeight: '32px',
  borderRadius: '50%',
  backgroundColor: COLORS.accentLight,
  color: COLORS.accentDark,
  fontSize: '14px',
  fontWeight: 700,
  textAlign: 'center',
  margin: 0,
  fontFamily: FONT_FAMILY,
};

const stepTextStyle: React.CSSProperties = {
  fontSize: '14px',
  lineHeight: '1.6',
  color: COLORS.textSecondary,
  margin: 0,
  paddingTop: '6px',
  fontFamily: FONT_FAMILY,
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: COLORS.primary,
  color: COLORS.white,
  fontSize: '16px',
  fontWeight: 600,
  textDecoration: 'none',
  textAlign: 'center',
  display: 'inline-block',
  padding: '14px 28px',
  borderRadius: '30px',
  border: `1px solid ${COLORS.primary}`,
  fontFamily: FONT_FAMILY,
};

const hrStyle: React.CSSProperties = {
  borderColor: COLORS.border,
  borderTopWidth: '1px',
  margin: 0,
};

const contactHintStyle: React.CSSProperties = {
  padding: '20px 24px',
  textAlign: 'center',
};

const contactHintTextStyle: React.CSSProperties = {
  fontSize: '13px',
  color: COLORS.textSecondary,
  margin: '0 0 4px 0',
  fontFamily: FONT_FAMILY,
};

const phoneStyle: React.CSSProperties = {
  margin: 0,
};

const phoneLinkStyle: React.CSSProperties = {
  fontSize: '16px',
  fontWeight: 600,
  color: COLORS.primary,
  textDecoration: 'none',
};

const footerStyle: React.CSSProperties = {
  padding: '24px',
  backgroundColor: COLORS.bgSecondary,
};

const footerTextStyle: React.CSSProperties = {
  fontSize: '12px',
  color: COLORS.textSecondary,
  margin: '0 0 4px 0',
  textAlign: 'center',
  fontFamily: FONT_FAMILY,
};

const footerLinkStyle: React.CSSProperties = {
  color: COLORS.primary,
  textDecoration: 'underline',
  textUnderlineOffset: '3px',
};

const footerLegalStyle: React.CSSProperties = {
  fontSize: '11px',
  color: COLORS.textSecondary,
  margin: '12px 0 0 0',
  textAlign: 'center',
  fontFamily: FONT_FAMILY,
};
