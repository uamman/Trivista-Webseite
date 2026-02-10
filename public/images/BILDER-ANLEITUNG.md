# Bilder-Verzeichnis — Trivista

Dieses Verzeichnis enthält aktuell **SVG-Platzhalter**. Diese müssen durch die echten Bilder aus der WordPress-Installation ersetzt werden.

## Quelle
WordPress-Server: `wp-content/uploads/`

## Verzeichnisstruktur

```
images/
├── hero-trivista.svg          → Ersetzen durch: video-bg.webp (wp-content/uploads/2024/06/)
├── BILDER-ANLEITUNG.md        → Diese Datei
├── logo/
│   ├── trivista-logo.svg      → Ersetzen durch echtes Logo
│   └── rhycasa-logo.svg       → Ersetzen durch echtes Rhycasa-Logo
├── innen/
│   ├── innen-1.svg            → 9 Innenansicht-Renderings
│   ├── innen-2.svg              aus der WordPress-Galerie
│   ├── ...                      (Tab "Innen" auf Startseite)
│   └── innen-9.svg
├── aussen/
│   ├── aussen-1.svg           → 9 Aussenansicht-Renderings
│   ├── aussen-2.svg             aus der WordPress-Galerie
│   ├── ...                      (Tab "Aussen" auf Startseite)
│   └── aussen-9.svg
├── wohnlage/
│   ├── hero-wohnlage.svg      → Hero-Bild für /wohnlage/
│   ├── bildung.svg            → Infrastruktur-Tab "Bildung"
│   ├── einkaufen.svg          → Infrastruktur-Tab "Einkaufen"
│   └── verkehr.svg            → Infrastruktur-Tab "Verkehr"
└── partners/
    ├── rhycasa.svg            → Logo Rhycasa AG (Vermarktung)
    ├── archraum.svg           → Logo Archraum AG (Architektur)
    └── stieger.svg            → Logo Stieger Baugeschäft AG (Bauherr)
```

## Bildformate

Empfohlene Formate für die Produktion:
- **Fotos/Renderings**: WebP (mit JPEG-Fallback)
- **Logos**: SVG (Vektorgrafiken)
- **Hero-Bilder**: WebP, mind. 1400px breit

## Vorgehensweise

1. WordPress-Bilder aus `wp-content/uploads/` herunterladen
2. Bilder in die passenden Unterordner kopieren
3. In WebP konvertieren (z.B. mit `cwebp` oder Sharp)
4. Platzhalter-SVGs durch echte Bilder ersetzen
5. Dateinamen in den Komponenten anpassen
