import { getLocale } from "next-intl/server";
import Navigation from "@/components/navigation";
import ScrollContainer from "@/components/providers/scroll-container";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ServicesSection from "@/components/sections/services-section";
import CredentialsSection from "@/components/sections/credentials-section";
import Footer from "@/components/sections/footer";
import { type Locale } from "@/i18n/config";

export default async function Home() {
  const locale = (await getLocale()) as Locale;

  return (
    <>
      <Navigation locale={locale} />
      <ScrollContainer>
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <CredentialsSection />
        </main>
        <Footer />
      </ScrollContainer>
    </>
  );
}
