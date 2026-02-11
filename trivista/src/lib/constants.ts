export const SITE_NAME = "Trivista";
export const SITE_URL = "https://trivista.ch";
export const SITE_DESCRIPTION =
  "Exklusive Neubauwohnungen in Kobelwald – Erhaben Wohnen mit Fernblick auf das Rheintal.";

export const NAV_LINKS_LEFT = [
  { label: "Projekt", href: "/" },
  { label: "Wohnlage", href: "/wohnlage/" },
];

export const NAV_LINKS_RIGHT = [
  { label: "Angebot", href: "/angebot/" },
  { label: "Kontakt", href: "/kontakt/" },
];

export const WHATSAPP = {
  number: "+41717637500",
  name: "Ueli Ammann",
  role: "Immobilienberater",
  defaultMessage:
    "Guten Tag, ich würde gerne mehr über das Projekt Trivista erfahren. Bitte nehmen Sie Kontakt mit mir auf.",
  get url() {
    return `https://wa.me/${this.number}?text=${encodeURIComponent(this.defaultMessage)}`;
  },
};

export const ADVANTAGES = [
  {
    title: "Wohnkomfort",
    description:
      "Die Trivista-Wohnungen bieten modernste Architektur und Ausstattung für höchsten Wohnkomfort. Die begrenzte Anzahl der Wohneinheiten garantiert viel Privatsphäre und Exklusivität.",
    icon: "/images/icons/advantages/wohnkomfort.svg",
    image: "/images/advantages/icon-change-img.webp",
  },
  {
    title: "Individualisierung",
    description:
      "Käufer können aus verschiedenen Grundrissvarianten wählen und durch die Auswahl von Materialien und Oberflächen ihre persönliche Note einbringen.",
    icon: "/images/icons/advantages/individualisierung.svg",
    image: "/images/advantages/icon-change-img-2.webp",
  },
  {
    title: "Wohnlage",
    description:
      "Die exklusive Lage in Kobelwald bietet eine unverbaubare Fernsicht und eine ruhige, naturnahe Umgebung. Hier finden Sie den idealen Rückzugsort, um den Alltagsstress hinter sich zu lassen.",
    icon: "/images/icons/advantages/wohnlage.svg",
    image: "/images/advantages/icon-change-img-3.webp",
  },
  {
    title: "Nachhaltigkeit",
    description:
      "Das Projekt setzt auf nachhaltige Materialien und Bauweisen, um eine umweltfreundliche und energieeffiziente Wohnlösung zu bieten. Die Tiefgarage ist für die Nutzung von E-Mobilität vorbereitet.",
    icon: "/images/icons/advantages/nachhaltigkeit.svg",
    image: "/images/advantages/icon-change-img-4.webp",
  },
];

export const MILESTONES = [
  { label: "Projektierung", status: "completed" as const, icon: "/images/icons/milestones/Projektierung.svg" },
  { label: "Baubewilligung", status: "completed" as const, icon: "/images/icons/milestones/Baubewilligung.svg" },
  { label: "Vermarktungsstart", status: "completed" as const, icon: "/images/icons/milestones/Vermarktungsstart.svg" },
  { label: "Baubeginn", status: "active" as const, icon: "/images/icons/milestones/Baubeginn.svg" },
  { label: "Rohbau", status: "upcoming" as const, icon: "/images/icons/milestones/Rohbau.svg" },
  { label: "Innenausbau", status: "upcoming" as const, icon: "/images/icons/milestones/Innenausbau.svg" },
  { label: "Objektübergabe", status: "upcoming" as const, icon: "/images/icons/milestones/Objektuebergabe.svg" },
];

export const PARTNERS = [
  {
    name: "Rhycasa AG",
    role: "Vermarktung",
    address: "Bahnhofstrasse 28, 9443 Widnau",
    url: "https://rhycasa.ch",
    logo: "/images/logo/rhycasa-white.svg",
  },
  {
    name: "Archraum AG",
    role: "Architektur",
    address: "Rorschacherstrasse 24, 9450 Altstätten SG",
    url: "https://archraum.ch",
    logo: "/images/partners/archraum.svg",
  },
  {
    name: "Stieger Baugeschäft AG",
    role: "Bauherr",
    address: "Im Lehen 11, 9463 Oberriet SG",
    url: "https://stiegerbau.ch",
    logo: "/images/partners/stieger.svg",
  },
];

export const LOCATION_HIGHLIGHTS = [
  {
    title: "Fernsicht",
    description:
      "Geniessen Sie die atemberaubende Fernsicht auf das Rheintal und darüber hinaus.",
    icon: "/images/icons/highlights/fernsicht.svg",
  },
  {
    title: "Naturnah",
    description:
      "Geniessen Sie die Nähe zur Natur und vielfältige Freizeitmöglichkeiten im Grünen.",
    icon: "/images/icons/highlights/naturnah.svg",
  },
  {
    title: "Ruhe",
    description:
      "Finden Sie Ruhe und Erholung in einer verkehrsberuhigten und lärmarmen Umgebung.",
    icon: "/images/icons/highlights/ruhe.svg",
  },
];

export const INFRASTRUCTURE_TABS = [
  {
    id: "bildung",
    label: "Bildung",
    description:
      "Die Gemeinde Oberriet bietet eine Primarschule mit Kindergarten direkt vor Ort. Das Oberstufenzentrum befindet sich in Oberriet und ist bequem mit dem Schulbus erreichbar.",
    image: "/images/wohnlage/bildung.jpg",
  },
  {
    id: "einkaufen",
    label: "Einkaufen",
    description:
      "In der näheren Umgebung finden Sie Coop, Migros, Denner sowie verschiedene Bäckereien in Oberriet. Alle Geschäfte des täglichen Bedarfs sind in wenigen Minuten erreichbar.",
    image: "/images/wohnlage/einkaufen.jpg",
  },
  {
    id: "verkehr",
    label: "Verkehr",
    description:
      "Eine direkte Linienbusverbindung erschliesst die Gemeinde. Der Bahnhof Oberriet ist in nur 5 Minuten erreichbar. Die Autobahnauffahrt bietet schnelle Anbindung an das überregionale Strassennetz.",
    image: "/images/wohnlage/verkehr.jpg",
  },
];

export const PROJECT_DESCRIPTION = {
  title: "Projekt und Architektur",
  text: "Im idyllischen Kobelwald entstehen drei exklusive Gebäudekörper mit insgesamt 12 hochwertigen Eigentumswohnungen. Die moderne Architektur verbindet klare Linien mit natürlichen Materialien und fügt sich harmonisch in die ländliche Umgebung ein. Grosszügige Fensterfronten schaffen fliessende Übergänge zwischen Innen- und Aussenraum und ermöglichen eine einzigartige Fernsicht auf das Rheintal.",
};

export const APARTMENTS = [
  { id: 1, svgId: "apartment-1--roof", floor: "Dachgeschoss", price: "auf Anfrage", rooms: "5½ oder 4½", area: 128, status: "available" as const, floorPlan: "/docs/grundriss-wohnung-1.pdf" },
  { id: 2, svgId: "apartment-1--first", floor: "Obergeschoss", price: "auf Anfrage", rooms: "5½ oder 4½", area: 128, status: "available" as const, floorPlan: "/docs/grundriss-wohnung-2.pdf" },
  { id: 3, svgId: "apartment-1--ground", floor: "Erdgeschoss", price: "auf Anfrage", rooms: "5½ oder 4½", area: 128, status: "available" as const, floorPlan: "/docs/grundriss-wohnung-3.pdf" },
  { id: 4, svgId: "apartment-2--roof", floor: "Dachgeschoss", price: "auf Anfrage", rooms: "5½ oder 4½", area: 128, status: "available" as const, floorPlan: "/docs/grundriss-wohnung-4.pdf" },
  { id: 5, svgId: "apartment-2--first", floor: "Obergeschoss", price: "auf Anfrage", rooms: "5½ oder 4½", area: 128, status: "reserved" as const, floorPlan: "/docs/grundriss-wohnung-5.pdf" },
  { id: 6, svgId: "apartment-2--ground", floor: "Erdgeschoss", price: "auf Anfrage", rooms: "5½ oder 4½", area: 128, status: "available" as const, floorPlan: "/docs/grundriss-wohnung-6.pdf" },
  { id: 7, svgId: "apartment-3--roof", floor: "Dachgeschoss", price: "auf Anfrage", rooms: "5½ oder 4½", area: 128, status: "reserved" as const, floorPlan: "/docs/grundriss-wohnung-7.pdf" },
  { id: 8, svgId: "apartment-3--first", floor: "Obergeschoss", price: "auf Anfrage", rooms: "5½ oder 4½", area: 128, status: "available" as const, floorPlan: "/docs/grundriss-wohnung-8.pdf" },
  { id: 9, svgId: "apartment-3--ground", floor: "Erdgeschoss", price: "auf Anfrage", rooms: "5½ oder 4½", area: 128, status: "available" as const, floorPlan: "/docs/grundriss-wohnung-9.pdf" },
];

export const PARKING = {
  type: "Tiefgarage",
  available: 18,
  price: "auf Anfrage",
  floorPlan: "/docs/untergeschoss.pdf",
};

export const PROCESS_STEPS = [
  {
    id: "interesse",
    title: "Interesse",
    content: "Gerne nehmen wir uns die Zeit, Ihnen das Neubauprojekt «Trivista» ausführlich zu präsentieren. Nutzen Sie die Gelegenheit, sich ein umfassendes Bild von der Planung, der Lage und der Atmosphäre zu machen. Wir stellen Ihnen die verschiedenen Materialisierungsoptionen vor und beraten Sie zu den individuellen Gestaltungsmöglichkeiten.",
  },
  {
    id: "finanzierung",
    title: "Finanzierung",
    content: "Eine solide Finanzierung ist die Basis für den Kauf einer Immobilie. Auf Wunsch organisieren wir für Sie ein Beratungsgespräch mit einem unserer renommierten Finanzierungspartner, der Sie umfassend berät und die für Sie bestmögliche Finanzierungslösung erarbeitet.",
  },
  {
    id: "reservation",
    title: "Reservation",
    content: "Der erste Schritt zum Eigenheim ist die Reservation. Mit Ihrer Zusage und einer Anzahlung auf ein Treuhandkonto reservieren wir die Immobilie für Sie und beginnen mit der Vorbereitung der Kaufabwicklung.",
  },
  {
    id: "kaufvertrag",
    title: "Kaufvertrag",
    content: "Wir beauftragen das zuständige Grundbuchamt mit der Erstellung des Kaufvertrages und sorgen für eine reibungslose Koordination zwischen Ihnen, dem Verkäufer und der Bank. Zur Beurkundung begleiten wir Sie zum Grundbuchamt.",
  },
  {
    id: "wohnungsuebergabe",
    title: "Wohnungsübergabe",
    content: "Nach Fertigstellung der Immobilie findet die Endabnahme statt. Wir übergeben Ihnen die Immobilie offiziell und führen eine detaillierte Abnahme durch, um sicherzustellen, dass alle Arbeiten vereinbarungsgemäss ausgeführt wurden. Damit beginnt für Sie ein neuer Lebensabschnitt in Ihrem neuen Zuhause.",
  },
  {
    id: "nachbetreuung",
    title: "Nachbetreuung",
    content: "Auch nach dem erfolgreichen Abschluss des Kaufprozesses sind wir Ihr zuverlässiger Partner. Ob bei Fragen rund um die Immobilie oder bei administrativen Anliegen – wir stehen Ihnen mit unserer umfassenden Expertise gerne zur Seite.",
  },
];

export const DOCUMENTS = [
  {
    label: "Verkaufsbroschüre",
    href: "https://www.flipsnack.com/BCB5575569B/eb14f12d-80d5-49e0-a73f-e21bce619c9c",
    image: "/images/downloadcenter/verkaufsdokumentation-trivista-kobelwald.jpg",
    external: true,
  },
  {
    label: "Grundrisspläne",
    href: "/docs/grundrissplaene-alle.pdf",
    image: "/images/downloadcenter/grundrissplan-trivista-kobelwald.jpg",
  },
  {
    label: "Umgebungsplan",
    href: "/docs/umgebungsplan.pdf",
    image: "/images/downloadcenter/umgebungsplan-trivista-kobelwald.jpg",
  },
  {
    label: "Kurzbaubeschrieb",
    href: "/docs/kurzbaubeschrieb.pdf",
    image: "/images/downloadcenter/baubeschrieb-trivista-kobelwald.jpg",
  },
];

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/rhycasa/", icon: "/images/icons/social/instagram.svg" },
  { label: "LinkedIn", href: "https://ch.linkedin.com/company/rhycasa-ag", icon: "/images/icons/social/linkedin.svg" },
  { label: "YouTube", href: "https://www.youtube.com/@rhycasaag", icon: "/images/icons/social/youtube.svg" },
];
