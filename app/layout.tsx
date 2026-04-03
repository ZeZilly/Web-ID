import type { Metadata, Viewport } from "next";
import { Inter, Space_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import LenisProvider from "@/components/providers/lenis-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://multilingual.no"),
  title: {
    default: "Multilingual AI Quality & Localization Specialist | Trondheim, Norway",
    template: "%s | multilingual.no",
  },
  description:
    "Independent multilingual AI quality specialist based in Trondheim, Norway. Expert AI data operations, RLHF training, Nordic localization, and professional interpretation services. State-authorized translator with 10+ years experience.",
  keywords: [
    "multilingual AI quality specialist Norway",
    "AI data operations consultant",
    "RLHF specialist Nordic",
    "localization QA Norway",
    "Norwegian Turkish interpreter Trondheim",
    "Nordic AI localization",
    "AI localization Nordic markets",
    "state-authorized translator Norway",
    "multilingual data annotation",
    "Norwegian localization expert",
  ],
  authors: [{ name: "multilingual.no" }],
  creator: "multilingual.no",
  publisher: "multilingual.no",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    alternateLocale: ["en_US", "sv_SE", "tr_TR"],
    url: "https://multilingual.no",
    siteName: "multilingual.no",
    title: "Multilingual AI Quality & Localization Specialist | Trondheim, Norway",
    description:
      "Independent multilingual AI quality specialist. Expert AI data operations, RLHF training, Nordic localization, and professional interpretation. Based in Trondheim.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "multilingual.no - AI Quality & Localization Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multilingual AI Quality & Localization Specialist",
    description:
      "Independent AI quality specialist based in Trondheim, Norway. Expert RLHF, Nordic localization, and interpretation services.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://multilingual.no",
    languages: {
      "nb-NO": "https://multilingual.no",
      "en-US": "https://multilingual.no/en",
      "sv-SE": "https://multilingual.no/sv",
    },
  },
  category: "Business Services",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F9FA" },
    { media: "(prefers-color-scheme: dark)", color: "#0A2540" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://multilingual.no/#business",
      name: "multilingual.no",
      description:
        "Independent multilingual AI quality specialist offering AI data operations, RLHF training, Nordic localization, and professional interpretation services.",
      url: "https://multilingual.no",
      telephone: "",
      email: "contact@multilingual.no",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Trondheim",
        addressRegion: "Trøndelag",
        addressCountry: "NO",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 63.4305,
        longitude: 10.3951,
      },
      areaServed: [
        { "@type": "Country", name: "Norway" },
        { "@type": "Country", name: "Sweden" },
        { "@type": "Country", name: "Denmark" },
        { "@type": "Country", name: "Finland" },
      ],
      serviceType: [
        "AI Data Operations",
        "RLHF Training",
        "Localization",
        "Translation",
        "Interpretation",
        "Quality Assurance",
      ],
      knowsLanguage: ["nb", "en", "sv", "tr", "da"],
      priceRange: "$$",
    },
    {
      "@type": "Person",
      "@id": "https://multilingual.no/#person",
      name: "multilingual.no",
      jobTitle: "Multilingual AI Quality Specialist",
      worksFor: { "@id": "https://multilingual.no/#business" },
      knowsLanguage: [
        { "@type": "Language", name: "Norwegian" },
        { "@type": "Language", name: "English" },
        { "@type": "Language", name: "Swedish" },
        { "@type": "Language", name: "Turkish" },
        { "@type": "Language", name: "Danish" },
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "professional certification",
          name: "State-Authorized Translator",
          recognizedBy: {
            "@type": "Organization",
            name: "Norwegian Government",
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://multilingual.no/#website",
      url: "https://multilingual.no",
      name: "multilingual.no",
      publisher: { "@id": "https://multilingual.no/#business" },
      inLanguage: ["nb-NO", "en-US", "sv-SE"],
    },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${spaceMono.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <LenisProvider>{children}</LenisProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
