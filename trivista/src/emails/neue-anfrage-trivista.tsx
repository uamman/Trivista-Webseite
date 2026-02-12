import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
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
  textPrimary: '#1E2A3F',
  textSecondary: '#6B7684',
  bgSecondary: '#FAF9F8',
  border: '#E0E0E0',
  white: '#FFFFFF',
  internal: '#FDBE21',
  internalLight: '#FFF5DE',
};

interface NeueAnfrageTrivistaProps {
  anrede?: string;
  vorname?: string;
  nachname?: string;
  email?: string;
  telefon?: string;
  bemerkung?: string;
}

export default function NeueAnfrageTrivista({
  anrede = 'herr',
  vorname = 'Max',
  nachname = 'Muster',
  email = 'max.muster@example.com',
  telefon = '+41 79 123 45 67',
  bemerkung = '',
}: NeueAnfrageTrivistaProps) {
  const anredeLabel = anrede === 'herr' ? 'Herr' : anrede === 'frau' ? 'Frau' : '';
  const fullName = `${anredeLabel} ${vorname} ${nachname}`.trim();
  const previewText = `Neue Kontaktanfrage von ${fullName} über trivista.ch`;

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
            @media (prefers-color-scheme: dark) {
              .body, .light-bg { background-color: #FFFFFF !important; }
              h1, h2, h3, p, span, td, div { color: inherit !important; }
            }
            @media only screen and (max-width: 480px) {
              .container { padding: 12px !important; }
              .heading { font-size: 22px !important; }
              .content-pad { padding: 20px 16px !important; }
            }
          `}
        </style>
      </Head>
      <Preview>{previewText}</Preview>
      <Body style={bodyStyle} className="body">
        <Container style={containerStyle} className="light-bg">
          {/* Orange accent bar (internal mail) */}
          <Section style={accentBarStyle} />

          {/* Header */}
          <Section style={headerStyle}>
            <Img
              src="https://trivista.ch/images/logo/trivista-color-logo.webp"
              width="124"
              height="68"
              alt="Trivista"
              style={{ display: 'block', margin: '0 auto' }}
            />
          </Section>

          {/* Notification Badge */}
          <Section style={notificationSection}>
            <Text style={badgeStyle}>Neue Anfrage</Text>
            <Heading style={headingStyle} className="heading">
              Kontaktanfrage Trivista
            </Heading>
            <Text style={locationStyle}>
              Über das Kontaktformular auf trivista.ch
            </Text>
          </Section>

          {/* Greeting */}
          <Section style={contentStyle} className="content-pad">
            <Text style={textStyle}>
              {fullName} hat soeben eine Anfrage über das Kontaktformular auf
              trivista.ch eingereicht.
            </Text>
          </Section>

          {/* Contact Details */}
          <Section style={cardSectionStyle} className="content-pad">
            <Text style={sectionTitleStyle}>Kontaktdaten</Text>
            <Section style={cardStyle}>
              <table cellPadding="0" cellSpacing="0" style={{ width: '100%' }}>
                <tr>
                  <td style={labelCellStyle}>Name</td>
                  <td style={valueCellStyle}>{fullName}</td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{ borderBottom: `1px solid ${COLORS.border}`, height: '1px' }}
                  />
                </tr>
                <tr>
                  <td style={labelCellStyle}>E-Mail</td>
                  <td style={valueCellStyle}>
                    <Link href={`mailto:${email}`} style={linkStyle}>
                      {email}
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{ borderBottom: `1px solid ${COLORS.border}`, height: '1px' }}
                  />
                </tr>
                <tr>
                  <td style={labelCellStyle}>Telefon</td>
                  <td style={valueCellStyle}>
                    <Link
                      href={`tel:${telefon.replace(/\s/g, '')}`}
                      style={linkStyle}
                    >
                      {telefon}
                    </Link>
                  </td>
                </tr>
              </table>
            </Section>
          </Section>

          {/* Message (only if provided) */}
          {bemerkung && (
            <Section style={cardSectionStyle} className="content-pad">
              <Text style={sectionTitleStyle}>Bemerkung</Text>
              <Section style={messageCardStyle}>
                <Text style={messageTextStyle}>{bemerkung}</Text>
              </Section>
            </Section>
          )}

          {/* Quick Actions */}
          <Section style={actionsSectionStyle} className="content-pad">
            <table cellPadding="0" cellSpacing="0" style={{ width: '100%' }}>
              <tr>
                <td style={{ width: '50%', textAlign: 'center', paddingRight: '8px' }}>
                  <Link
                    href={`tel:${telefon.replace(/\s/g, '')}`}
                    style={actionButtonStyle}
                  >
                    Anrufen
                  </Link>
                </td>
                <td style={{ width: '50%', textAlign: 'center', paddingLeft: '8px' }}>
                  <Link
                    href={`mailto:${email}?subject=Ihre Anfrage auf trivista.ch`}
                    style={actionButtonStyle}
                  >
                    E-Mail senden
                  </Link>
                </td>
              </tr>
            </table>
          </Section>

          <Hr style={hrStyle} />

          {/* Footer */}
          <Section style={footerStyle}>
            <Text style={footerTextStyle}>
              Automatische Benachrichtigung von trivista.ch
            </Text>
            <Text style={footerTextStyle}>
              Diese E-Mail wurde generiert, weil eine Anfrage über das
              Kontaktformular eingegangen ist.
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
  padding: '40px 16px',
};

const containerStyle: React.CSSProperties = {
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: COLORS.white,
  borderRadius: '16px',
  overflow: 'hidden',
  border: `1px solid ${COLORS.border}`,
};

const accentBarStyle: React.CSSProperties = {
  height: '4px',
  backgroundColor: COLORS.internal,
};

const headerStyle: React.CSSProperties = {
  padding: '28px 24px 24px',
  textAlign: 'center',
};

const notificationSection: React.CSSProperties = {
  padding: '0 24px 20px',
  textAlign: 'center',
};

const badgeStyle: React.CSSProperties = {
  display: 'inline-block',
  backgroundColor: COLORS.internalLight,
  color: '#6B4F0E',
  fontSize: '12px',
  fontWeight: 600,
  padding: '4px 12px',
  borderRadius: '9999px',
  letterSpacing: '0.2px',
  margin: '0 0 12px 0',
  fontFamily: FONT_FAMILY,
};

const headingStyle: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: '1.2',
  color: COLORS.textPrimary,
  margin: '0 0 4px 0',
  fontFamily: FONT_FAMILY,
};

const locationStyle: React.CSSProperties = {
  fontSize: '14px',
  color: COLORS.textSecondary,
  margin: 0,
  fontFamily: FONT_FAMILY,
};

const contentStyle: React.CSSProperties = {
  padding: '0 24px 16px',
};

const textStyle: React.CSSProperties = {
  fontSize: '15px',
  lineHeight: '1.65',
  color: COLORS.textSecondary,
  margin: 0,
  fontFamily: FONT_FAMILY,
};

const cardSectionStyle: React.CSSProperties = {
  padding: '12px 24px',
};

const sectionTitleStyle: React.CSSProperties = {
  fontSize: '13px',
  fontWeight: 600,
  color: COLORS.textSecondary,
  margin: '0 0 8px 0',
  letterSpacing: '0.3px',
  textTransform: 'uppercase' as const,
  fontFamily: FONT_FAMILY,
};

const cardStyle: React.CSSProperties = {
  backgroundColor: COLORS.bgSecondary,
  borderRadius: '12px',
  padding: '16px 20px',
  border: `1px solid ${COLORS.border}`,
};

const labelCellStyle: React.CSSProperties = {
  width: '80px',
  fontSize: '13px',
  color: COLORS.textSecondary,
  padding: '10px 0',
  verticalAlign: 'top',
  fontFamily: FONT_FAMILY,
};

const valueCellStyle: React.CSSProperties = {
  fontSize: '14px',
  fontWeight: 500,
  color: COLORS.textPrimary,
  padding: '10px 0',
  verticalAlign: 'top',
  fontFamily: FONT_FAMILY,
};

const linkStyle: React.CSSProperties = {
  color: COLORS.primary,
  textDecoration: 'none',
  fontWeight: 500,
};

const messageCardStyle: React.CSSProperties = {
  backgroundColor: COLORS.bgSecondary,
  borderRadius: '12px',
  padding: '16px 20px',
  borderLeft: `3px solid ${COLORS.internal}`,
};

const messageTextStyle: React.CSSProperties = {
  fontSize: '14px',
  lineHeight: '1.65',
  color: COLORS.textPrimary,
  margin: 0,
  fontStyle: 'italic',
  fontFamily: FONT_FAMILY,
};

const actionsSectionStyle: React.CSSProperties = {
  padding: '16px 24px 28px',
};

const actionButtonStyle: React.CSSProperties = {
  display: 'inline-block',
  backgroundColor: COLORS.primary,
  color: COLORS.white,
  fontSize: '14px',
  fontWeight: 600,
  textDecoration: 'none',
  padding: '12px 24px',
  borderRadius: '10px',
  fontFamily: FONT_FAMILY,
  width: '100%',
  textAlign: 'center',
  boxSizing: 'border-box',
};

const hrStyle: React.CSSProperties = {
  borderColor: COLORS.border,
  borderTopWidth: '1px',
  margin: 0,
};

const footerStyle: React.CSSProperties = {
  padding: '20px 24px',
  backgroundColor: COLORS.bgSecondary,
};

const footerTextStyle: React.CSSProperties = {
  fontSize: '12px',
  color: COLORS.textSecondary,
  margin: '0 0 4px 0',
  textAlign: 'center',
  lineHeight: '1.5',
  fontFamily: FONT_FAMILY,
};
