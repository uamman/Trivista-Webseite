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
    icon: "home",
  },
  {
    title: "Individualisierung",
    description:
      "Käufer können aus verschiedenen Grundrissvarianten wählen und durch die Auswahl von Materialien und Oberflächen ihre persönliche Note einbringen.",
    icon: "palette",
  },
  {
    title: "Wohnlage",
    description:
      "Die exklusive Lage in Kobelwald bietet eine unverbaubare Fernsicht und eine ruhige, naturnahe Umgebung. Hier finden Sie den idealen Rückzugsort, um den Alltagsstress hinter sich zu lassen.",
    icon: "mountain",
  },
  {
    title: "Nachhaltigkeit",
    description:
      "Das Projekt setzt auf nachhaltige Materialien und Bauweisen, um eine umweltfreundliche und energieeffiziente Wohnlösung zu bieten. Die Tiefgarage ist für die Nutzung von E-Mobilität vorbereitet.",
    icon: "leaf",
  },
];

export const MILESTONES = [
  { label: "Projektierung", status: "completed" as const },
  { label: "Baubewilligung", status: "completed" as const },
  { label: "Vermarktungsstart", status: "completed" as const },
  { label: "Baubeginn", status: "active" as const },
  { label: "Rohbau", status: "upcoming" as const },
  { label: "Innenausbau", status: "upcoming" as const },
  { label: "Objektübergabe", status: "upcoming" as const },
];

export const PARTNERS = [
  {
    name: "Rhycasa AG",
    role: "Vermarktung",
    address: "Poststrasse 5, 9443 Widnau",
    url: "https://rhycasa.ch",
  },
  {
    name: "Archraum AG",
    role: "Architektur",
    address: "Rorschacherstrasse 24, 9450 Altstätten SG",
    url: "https://archraum.ch",
  },
  {
    name: "Stieger Baugeschäft AG",
    role: "Bauherr",
    address: "Im Lehen 11, 9463 Oberriet SG",
    url: "https://stiegerbau.ch",
  },
];

export const LOCATION_HIGHLIGHTS = [
  {
    title: "Fernsicht",
    description:
      "Geniessen Sie die atemberaubende Fernsicht auf das Rheintal und darüber hinaus.",
    icon: "eye",
  },
  {
    title: "Naturnah",
    description:
      "Geniessen Sie die Nähe zur Natur und vielfältige Freizeitmöglichkeiten im Grünen.",
    icon: "trees",
  },
  {
    title: "Ruhe",
    description:
      "Finden Sie Ruhe und Erholung in einer verkehrsberuhigten und lärmarmen Umgebung.",
    icon: "volume-x",
  },
];

export const INFRASTRUCTURE_TABS = [
  {
    id: "bildung",
    label: "Bildung",
    description:
      "Die Gemeinde Oberriet bietet eine Primarschule mit Kindergarten direkt vor Ort. Das Oberstufenzentrum befindet sich in Oberriet und ist bequem mit dem Schulbus erreichbar.",
  },
  {
    id: "einkaufen",
    label: "Einkaufen",
    description:
      "In der näheren Umgebung finden Sie Coop, Migros, Denner sowie verschiedene Bäckereien in Oberriet. Alle Geschäfte des täglichen Bedarfs sind in wenigen Minuten erreichbar.",
  },
  {
    id: "verkehr",
    label: "Verkehr",
    description:
      "Eine direkte Linienbusverbindung erschliesst die Gemeinde. Der Bahnhof Oberriet ist in nur 5 Minuten erreichbar. Die Autobahnauffahrt bietet schnelle Anbindung an das überregionale Strassennetz.",
  },
];

export const PROJECT_DESCRIPTION = {
  title: "Projekt und Architektur",
  text: "Im idyllischen Kobelwald entstehen drei exklusive Gebäudekörper mit insgesamt 12 hochwertigen Eigentumswohnungen. Die moderne Architektur verbindet klare Linien mit natürlichen Materialien und fügt sich harmonisch in die ländliche Umgebung ein. Grosszügige Fensterfronten schaffen fliessende Übergänge zwischen Innen- und Aussenraum und ermöglichen eine einzigartige Fernsicht auf das Rheintal.",
};

export const APARTMENTS = [
  {
    building: "Haus A",
    units: [
      { id: "A1", floor: "EG", rooms: "3.5", area: 95, status: "available" as const },
      { id: "A2", floor: "EG", rooms: "4.5", area: 115, status: "reserved" as const },
      { id: "A3", floor: "OG", rooms: "3.5", area: 95, status: "available" as const },
      { id: "A4", floor: "OG", rooms: "4.5", area: 115, status: "available" as const },
    ],
  },
  {
    building: "Haus B",
    units: [
      { id: "B1", floor: "EG", rooms: "3.5", area: 90, status: "sold" as const },
      { id: "B2", floor: "EG", rooms: "4.5", area: 110, status: "available" as const },
      { id: "B3", floor: "OG", rooms: "3.5", area: 90, status: "reserved" as const },
      { id: "B4", floor: "OG", rooms: "4.5", area: 110, status: "available" as const },
    ],
  },
  {
    building: "Haus C",
    units: [
      { id: "C1", floor: "EG", rooms: "4.5", area: 120, status: "available" as const },
      { id: "C2", floor: "EG", rooms: "5.5", area: 135, status: "available" as const },
      { id: "C3", floor: "OG", rooms: "4.5", area: 120, status: "sold" as const },
      { id: "C4", floor: "OG", rooms: "5.5", area: 135, status: "available" as const },
    ],
  },
];
