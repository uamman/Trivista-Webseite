# Trivista – Wohnüberbauung Kobelwald

Webseite für die Wohnüberbauung Trivista in Kobelwald (St. Galler Rheintal). Neubau-Projekt der Rhycasa AG mit 9 Eigentumswohnungen.

**Live:** [trivista.ch](https://trivista.ch)

## Tech-Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS 4
- **Animationen:** Framer Motion
- **E-Mail:** Resend + React Email
- **Validierung:** Zod
- **Bildoptimierung:** Sharp (AVIF/WebP)
- **Icons:** Lucide React
- **Sprache:** TypeScript

## Seiten

| Route | Beschreibung |
|---|---|
| `/` | Homepage mit Hero-Video, Vorteile, Galerie, Partner |
| `/angebot` | Wohnungsangebot mit interaktivem Gebäude-Navigator |
| `/wohnlage` | Standort Kobelwald mit 360°-Tour und Infrastruktur-Tabs |
| `/kontakt` | Kontaktformular mit E-Mail-Versand via Resend |
| `/datenschutzerklaerung` | Datenschutzerklärung (DSG-konform) |
| `/impressum` | Impressum |

## Setup

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten (Port 3000)
npm run dev

# Production Build
npm run build
npm start
```

### Umgebungsvariablen

`.env.local` anlegen:

```
RESEND_API_KEY=re_xxxxxxxxxx
```

## Projektstruktur

```
trivista/
├── public/
│   ├── images/          # Bilder (Gallery, Hero, Icons, Logos, etc.)
│   ├── video/           # Hero-Video (MP4)
│   ├── docs/            # PDFs (Grundrisse, Baubeschrieb, etc.)
│   └── vr-tour/         # 360° VR-Tour (statisch)
├── src/
│   ├── app/             # Next.js App Router (Seiten + API)
│   ├── components/      # React-Komponenten
│   │   ├── home/        # Homepage-Sections
│   │   ├── wohnlage/    # Wohnlage-Sections
│   │   ├── angebot/     # Angebot-Sections
│   │   ├── layout/      # Header, Footer, Cookie-Banner
│   │   └── ui/          # Wiederverwendbare UI-Komponenten
│   ├── emails/          # React Email Templates
│   └── lib/             # Konstanten, Resend-Client
└── next.config.ts       # Bildoptimierung, Security-Headers, Redirects
```

## Features

- **Responsive Design** mit Mobile-First-Ansatz
- **Hero-Video** mit WebP-Poster und optimiertem MP4
- **Interaktiver Gebäude-Navigator** (SVG) auf der Angebotsseite
- **360° VR-Tour** für die Umgebung (Kobelwald)
- **Galerie** mit Carousel (Desktop: 2 Bilder, Mobile: 1 Bild + Swipe)
- **Kontaktformular** mit Bestätigungs-Mail an Kunden + interne Benachrichtigung
- **SEO:** Sitemap, Robots, OpenGraph, strukturierte Daten
- **Security-Headers:** X-Frame-Options, CSP, Permissions-Policy
- **WordPress-Redirects:** Alle alten WP-URLs (wp-admin, wp-content, etc.) → 301

## Deployment

Die Seite kann auf jeder Node.js-Plattform deployed werden. Für Vercel einfach das Repository verbinden – keine zusätzliche Konfiguration nötig.
