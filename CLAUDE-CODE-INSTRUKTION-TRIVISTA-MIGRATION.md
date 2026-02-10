# Claude Code Instruktion: Migration trivista.ch (WordPress → Next.js)

## Projektübersicht

Migriere die Website **trivista.ch** von WordPress zu Next.js. Die Seite ist ein Neubauprojekt-Showcase für exklusive Wohnungen in Kobelwald (St. Galler Rheintal), betrieben von der **Rhycasa AG** (Widnau).

Die Seite ist klein (4-6 Seiten), primär statischer Content mit Bildern, und eignet sich perfekt für eine performante Next.js-Seite.

---

## Schritt 1: WordPress-Daten beschaffen

### Option A: Server-Zugang (bevorzugt)

Falls SSH/SFTP-Zugang zum Hosting vorhanden ist:

```bash
# WordPress-Verzeichnis herunterladen
scp -r user@server:/pfad/zu/wordpress/ ./wp-backup/

# Datenbank-Export
wp db export trivista-backup.sql
# oder: mysqldump -u user -p datenbankname > trivista-backup.sql
```

**Wichtige Dateien:**
- `wp-content/uploads/` → Alle Bilder und Medien (Renderings, Logos etc.)
- `wp-content/themes/[aktives-theme]/` → Design-Referenz, Templates
- `wp-content/plugins/` → Aktive Plugins (Funktionalität die nachgebaut werden muss)
- Datenbank-Dump → Inhalte, Menüs, Custom Fields

### Option B: REST API (falls aktiviert)

```bash
# Testen ob die API aktiv ist
curl https://trivista.ch/wp-json/wp/v2/pages
curl https://trivista.ch/wp-json/wp/v2/posts
curl https://trivista.ch/wp-json/wp/v2/media

# Alle Seiten als JSON exportieren
curl -s "https://trivista.ch/wp-json/wp/v2/pages?per_page=100" > pages.json
curl -s "https://trivista.ch/wp-json/wp/v2/media?per_page=100" > media.json
```

### Option C: Web Scraping (Fallback)

Falls kein Server-Zugang und keine REST API verfügbar:

```bash
# Seiten herunterladen mit wget
wget --mirror --convert-links --page-requisites --no-parent https://trivista.ch/

# Oder mit httrack
httrack https://trivista.ch/ -O ./trivista-mirror
```

---

## Schritt 2: Seitenstruktur & Inhalte

### Bekannte Seitenstruktur

Die Website hat folgende Seiten und Navigationsstruktur:

```
trivista.ch/
├── / (Startseite = Projekt)
├── /wohnlage/
├── /angebot/
├── /kontakt/
├── /impressum/
└── /datenschutzerklaerung/
```

**Navigation:**
- Hauptmenü links: Projekt, Wohnlage
- Hauptmenü rechts: Angebot, Kontakt
- Logo zentriert (verlinkt auf Startseite)

### Seiteninhalte (bereits erfasst)

#### Startseite (`/`)
- **Hero-Bereich**: "Trivista - Erhaben Wohnen" / "Exklusive Neubauwohnungen in Kobelwald"
- **Projekt und Architektur**: Beschreibungstext über die drei Gebäudekörper, Architektur, Materialien
- **CTA-Button**: "zum Wohnungsangebot" → /angebot/
- **Video-Hintergrund**: `wp-content/uploads/2024/06/video-bg.webp`
- **Vorteile des Projekts** (4 Karten):
  - Wohnkomfort: "Die Trivista-Wohnungen bieten modernste Architektur und Ausstattung für höchsten Wohnkomfort. Die begrenzte Anzahl der Wohneinheiten garantiert viel Privatsphäre und Exklusivität."
  - Individualisierung: "Käufer können aus verschiedenen Grundrissvarianten wählen und durch die Auswahl von Materialien und Oberflächen ihre persönliche Note einbringen."
  - Wohnlage: "Die exklusive Lage in Kobelwald bietet eine unverbaubare Fernsicht und eine ruhige, naturnahe Umgebung. Hier finden Sie den idealen Rückzugsort, um den Alltagsstress hinter sich zu lassen."
  - Nachhaltigkeit: "Das Projekt setzt auf nachhaltige Materialien und Bauweisen, um eine umweltfreundliche und energieeffiziente Wohnlösung zu bieten. Die Tiefgarage ist für die Nutzung von E-Mobilität vorbereitet."
- **Impressionen**: Bildergalerie mit Tabs "Innen" (9 Bilder) und "Aussen" (9 Bilder)
- **Meilensteine-Timeline**: Projektierung → Baubewilligung → Vermarktungsstart → Baubeginn → Rohbau → Innenausbau → Objektübergabe
- **Partner-Bereich** (3 Logos + Infos):
  - Vermarktung: Rhycasa AG, Poststrasse 5, 9443 Widnau (Link: rhycasa.ch)
  - Architektur: Archraum AG, Rorschacherstrasse 24, 9450 Altstätten SG (Link: archraum.ch)
  - Bauherr: Stieger Baugeschäft AG, Im Lehen 11, 9463 Oberriet SG (Link: stiegerbau.ch)

#### Wohnlage (`/wohnlage/`)
- **Hero**: "Trivista - Wohnlage"
- **Intro-Text**: "Idyllisches Wohnen mit Fernblick" – Beschreibung der Lage in Kobelwald
- **3 Highlights** (Icons):
  - Fernsicht: "Geniessen Sie die atemberaubende Fernsicht auf das Rheintal und darüber hinaus."
  - Naturnah: "Geniessen Sie die Nähe zur Natur und vielfältige Freizeitmöglichkeiten im Grünen."
  - Ruhe: "Finden Sie Ruhe und Erholung in einer verkehrsberuhigten und lärmarmen Umgebung."
- **Infrastruktur-Tabs**: Bildung, Einkaufen, Verkehr (jeweils mit Bild und Beschreibung)
  - Bildung: Primarschule mit Kindergarten, Oberstufenzentrum in Oberriet, Schulbus
  - Einkaufen: Coop, Migros, Denner, Bäckereien in Oberriet
  - Verkehr: Linienbusverbindung, Bahnhof Oberriet (5 Min.), Autobahnauffahrt
- **Partner-Bereich** (gleich wie Startseite)

#### Angebot (`/angebot/`)
- Noch zu erfassen (Zugriff wurde durch Rate-Limiting blockiert)
- Vermutlich: Wohnungsliste mit Grundrissen, Preisen, Verfügbarkeit

#### Kontakt (`/kontakt/`)
- Noch zu erfassen
- Vermutlich: Kontaktformular + WhatsApp-Integration

### Globale Elemente

- **Footer**: Impressum-Link, Datenschutzerklärung-Link, "© 2024 Rhycasa AG"
- **WhatsApp-Widget** (auf allen Seiten):
  - Bild: Ueli Ammann
  - Text: "Guten Tag, ich würde gerne mehr über das Projekt Trivista erfahren. Bitte nehmen Sie Kontakt mit mir auf."
  - Rolle: "Immobilienberater"
  - Name: "Ueli Ammann"
  - WhatsApp-Link: `https://wa.me/+41717637500`

---

## Schritt 3: Next.js Projekt aufsetzen

### Tech Stack

```bash
npx create-next-app@latest trivista --typescript --tailwind --app --src-dir
cd trivista
npm install framer-motion lucide-react sharp
```

- **Next.js 14+** mit App Router
- **TypeScript**
- **Tailwind CSS** für Styling
- **Framer Motion** für Animationen (Parallax, Fade-ins etc.)
- **Sharp** für Bildoptimierung
- **next/image** für automatische Bildoptimierung

### Projektstruktur

```
src/
├── app/
│   ├── layout.tsx          # Root Layout mit Navigation + Footer + WhatsApp Widget
│   ├── page.tsx            # Startseite (Projekt)
│   ├── wohnlage/
│   │   └── page.tsx
│   ├── angebot/
│   │   └── page.tsx
│   ├── kontakt/
│   │   └── page.tsx
│   ├── impressum/
│   │   └── page.tsx
│   └── datenschutzerklaerung/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation mit Logo
│   │   ├── Footer.tsx      # Footer mit Links
│   │   └── WhatsAppWidget.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── ProjectSection.tsx
│   │   ├── AdvantagesSection.tsx
│   │   ├── GallerySection.tsx    # Tabs Innen/Aussen mit Lightbox
│   │   ├── MilestonesTimeline.tsx
│   │   └── PartnersSection.tsx
│   ├── wohnlage/
│   │   ├── LocationHero.tsx
│   │   ├── HighlightsSection.tsx
│   │   └── InfrastructureTabs.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── SectionHeading.tsx
│       └── TabSwitcher.tsx
├── lib/
│   └── constants.ts        # Alle Textinhalte, Partner-Daten etc.
└── public/
    └── images/
        ├── logo/
        ├── innen/           # Innen-Renderings (1-9)
        ├── aussen/          # Aussen-Renderings (1-9)
        ├── wohnlage/        # Bilder für Wohnlage-Seite
        └── partners/        # Partner-Logos
```

---

## Schritt 4: Design-Richtlinien

### Visueller Stil

Die aktuelle Seite hat ein **hochwertiges, immobilien-typisches Design**:
- Dunkle Hero-Bereiche mit grossen Bildern
- Klare Typografie, viel Weissraum
- Dezente Animationen (Fade-in beim Scrollen)
- Bildergalerie mit Tab-Umschaltung (Innen/Aussen)
- Timeline/Meilensteine visuell dargestellt

### Farbpalette (aus aktuellem Design ableiten)

```css
/* Aus dem WordPress-Theme extrahieren, ungefähre Werte: */
--color-primary: #1a1a1a;     /* Dunkel/Schwarz für Text und Heros */
--color-secondary: #8B7355;   /* Warm/Gold-Braun für Akzente (typisch Immobilien) */
--color-background: #ffffff;
--color-surface: #f5f5f5;
--color-text: #333333;
--color-text-light: #666666;
```

### Typografie

- Überschriften: Serifenlose Schrift, dünn/light, grosse Grössen
- Fliesstext: Gut lesbar, 16-18px Basisgrösse
- Generell: Elegantes, ruhiges Erscheinungsbild passend zu Premium-Immobilien

### Responsive Design

- Mobile-first Ansatz
- Hamburger-Menü auf Mobile
- Bildergalerie: 1 Spalte mobile, 3 Spalten Desktop
- WhatsApp-Widget: Unten rechts fixiert

---

## Schritt 5: SEO-Migration

### Kritisch: URL-Struktur beibehalten

Die URLs müssen 1:1 übernommen werden, damit kein SEO-Ranking verloren geht:

```
/ → /
/wohnlage/ → /wohnlage/
/angebot/ → /angebot/
/kontakt/ → /kontakt/
/impressum/ → /impressum/
/datenschutzerklaerung/ → /datenschutzerklaerung/
```

### Meta-Tags pro Seite

```tsx
// In jeder page.tsx:
export const metadata: Metadata = {
  title: 'Seitentitel | Trivista',
  description: 'Beschreibung...',
  openGraph: {
    title: '...',
    description: '...',
    images: ['/images/og-image.jpg'],
    locale: 'de_CH',
    type: 'website',
  },
};
```

### Weitere SEO-Massnahmen

- `robots.txt` und `sitemap.xml` generieren
- Canonical URLs setzen
- Structured Data (JSON-LD) für RealEstateListing hinzufügen
- Trailing Slashes konsistent behandeln (WordPress hatte Trailing Slashes → beibehalten)
- `next.config.js`:
  ```js
  module.exports = {
    trailingSlash: true,
  }
  ```

---

## Schritt 6: Spezial-Funktionalitäten

### WhatsApp-Widget

Floating Button unten rechts, öffnet WhatsApp-Chat mit vordefinierter Nachricht:

```tsx
// components/layout/WhatsAppWidget.tsx
const WHATSAPP_NUMBER = '+41717637500';
const DEFAULT_MESSAGE = 'Guten Tag, ich würde gerne mehr über das Projekt Trivista erfahren. Bitte nehmen Sie Kontakt mit mir auf.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;
```

- Zeigt Bild von Ueli Ammann
- Name + Rolle "Immobilienberater"
- Click → öffnet WhatsApp

### Kontaktformular

Das Kontaktformular muss serverseitig verarbeitet werden. Optionen:
- **Next.js Server Actions** mit E-Mail-Versand (z.B. Resend, Nodemailer)
- **Formspree** oder **Netlify Forms** als einfache Alternative
- **n8n Webhook** (falls gewünscht, da n8n bereits im Tech-Stack ist)

### Bildergalerie

- Tab-Switcher: "Innen" und "Aussen"
- Grid-Layout mit Thumbnails
- Lightbox für Vollbild-Ansicht (z.B. `yet-another-react-lightbox`)
- Lazy Loading für Performance

### Meilensteine-Timeline

- Horizontale Timeline mit Icons/Punkten
- Aktueller Meilenstein visuell hervorgehoben
- Responsive: Horizontal auf Desktop, Vertikal auf Mobile

---

## Schritt 7: Deployment

### Empfohlenes Hosting

Da die Seite primär statisch ist, eignen sich:
- **Vercel** (Optimal für Next.js, gratis Tier reicht)
- **Hetzner** (falls Self-Hosting gewünscht, mit Docker/Coolify)

### Domain-Umstellung

1. Next.js Seite deployen und testen
2. DNS von trivista.ch auf neues Hosting umstellen
3. SSL-Zertifikat einrichten (automatisch bei Vercel, Let's Encrypt bei Hetzner)
4. Altes WordPress abschalten

### Build & Export

```bash
# Statischer Export (falls kein Server-Side Rendering benötigt)
npm run build
# oder: next build && next export

# Docker (für Self-Hosting)
docker build -t trivista .
docker run -p 3000:3000 trivista
```

---

## Schritt 8: Qualitätsprüfung

### Checkliste vor Go-Live

- [ ] Alle Seiten und URLs funktionieren
- [ ] Alle Bilder geladen und optimiert
- [ ] Mobile-Ansicht getestet (iPhone, Android)
- [ ] WhatsApp-Widget funktioniert
- [ ] Kontaktformular versendet E-Mails
- [ ] SEO-Meta-Tags korrekt
- [ ] Sitemap.xml generiert
- [ ] Lighthouse Score > 90 (Performance, Accessibility, SEO)
- [ ] Favicon und OG-Images gesetzt
- [ ] HTTPS aktiv
- [ ] 404-Seite vorhanden
- [ ] Impressum und Datenschutz korrekt verlinkt
- [ ] Google Search Console nach DNS-Umstellung aktualisiert

---

## Wichtige Hinweise

- **Sprache**: Deutsch (Schweizer Hochdeutsch, "ss" statt "ß")
- **Locale**: de_CH
- **Währung**: CHF (falls Preise auf Angebots-Seite)
- **Bilder**: Alle Bilder aus `wp-content/uploads/` müssen heruntergeladen und in `/public/images/` organisiert werden. Formate in WebP konvertieren wo möglich.
- **Fonts**: Vom WordPress-Theme die verwendeten Schriftarten identifizieren und über `next/font` einbinden
- **Analytics**: Falls Google Analytics oder ähnliches aktiv war, in Next.js einbinden
