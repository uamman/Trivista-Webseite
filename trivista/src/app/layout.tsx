import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PartnersSection = dynamic(() => import("@/components/home/PartnersSection"));
const WhatsAppWidget = dynamic(() => import("@/components/layout/WhatsAppWidget"));
const CookieBanner = dynamic(() => import("@/components/layout/CookieBanner"));

const lato = Lato({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "300", "400", "700"],
  display: "swap",
  variable: "--font-lato",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#26413C",
};

export const metadata: Metadata = {
  title: {
    default: "Neubauprojekt Trivista Kobelwald | Trivista",
    template: "%s | Trivista",
  },
  description:
    "Trivista steht für modernes Wohnen in naturnaher Umgebung. Die drei separaten Gebäudekörper fügen sich harmonisch in das Dorfbild von Kobelwald ein und bieten exklusive Eigentumswohnungen mit Fernblick auf das Rheintal.",
  metadataBase: new URL("https://trivista.ch"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Neubauprojekt Trivista Kobelwald | Trivista",
    description:
      "Trivista steht für modernes Wohnen in naturnaher Umgebung. Exklusive Eigentumswohnungen mit Fernblick auf das Rheintal.",
    url: "https://trivista.ch",
    siteName: "Trivista",
    locale: "de_CH",
    type: "website",
    images: [
      {
        url: "/images/hero/video-bg.webp",
        width: 1920,
        height: 1080,
        alt: "Neubauprojekt Trivista Kobelwald – Erhaben Wohnen mit Fernblick",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neubauprojekt Trivista Kobelwald | Trivista",
    description:
      "Exklusive Eigentumswohnungen in Kobelwald mit Fernblick auf das Rheintal.",
    images: ["/images/hero/video-bg.webp"],
  },
  icons: {
    icon: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD Structured Data matching WP live site
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://trivista.ch/#website",
      url: "https://trivista.ch/",
      name: "Trivista",
      description:
        "Trivista steht für modernes Wohnen in naturnaher Umgebung.",
      inLanguage: "de-CH",
    },
    {
      "@type": "RealEstateAgent",
      "@id": "https://trivista.ch/#organization",
      name: "Trivista",
      url: "https://trivista.ch",
      logo: {
        "@type": "ImageObject",
        url: "https://trivista.ch/images/logo/trivista-color-logo.webp",
      },
      image: "https://trivista.ch/images/hero/video-bg.webp",
      description:
        "Exklusive Neubauwohnungen in Kobelwald – Erhaben Wohnen mit Fernblick auf das Rheintal.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bahnhofstrasse 28",
        addressLocality: "Widnau",
        postalCode: "9443",
        addressCountry: "CH",
      },
      telephone: "+41717637500",
      email: "info@rhycasa.ch",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "17:00",
      },
      sameAs: [
        "https://www.instagram.com/rhycasa_ag/",
        "https://www.linkedin.com/company/rhycasa-ag/",
        "https://www.youtube.com/@rhycasaag",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH" className={lato.variable}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <PartnersSection />
        <Footer />
        <WhatsAppWidget />
        <CookieBanner />
      </body>
    </html>
  );
}
