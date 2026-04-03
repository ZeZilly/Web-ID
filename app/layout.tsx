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
  title: "AI Data Ops & RLHF Specialist | Multilingual AI Quality",
  description:
    "Independent AI Data Operations and RLHF Specialist based in Norway. Multilingual AI quality, localization, and interpretation services.",
  keywords: [
    "AI",
    "RLHF",
    "Data Operations",
    "Localization",
    "Translation",
    "Norway",
    "Multilingual",
  ],
  authors: [{ name: "AI Data Ops Specialist" }],
  openGraph: {
    title: "AI Data Ops & RLHF Specialist",
    description: "Multilingual AI Quality, Localization & Interpretation",
    type: "website",
    locale: "no_NO",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A2540",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
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
      <body className="min-h-screen bg-background font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <LenisProvider>{children}</LenisProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
