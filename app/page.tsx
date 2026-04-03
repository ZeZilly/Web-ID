import { getLocale } from "next-intl/server";
import Navigation from "@/components/navigation";
import ScrollContainer from "@/components/providers/scroll-container";
import HeroSection from "@/components/sections/hero-section";
import TrustBar from "@/components/sections/trust-bar";
import AboutSection from "@/components/sections/about-section";
import ServicesSection from "@/components/sections/services-section";
import WhySection from "@/components/sections/why-section";
import CredentialsSection from "@/components/sections/credentials-section";
import LanguagesSection from "@/components/sections/languages-section";
import NordicSection from "@/components/sections/nordic-section";
import WorkModelSection from "@/components/sections/work-model-section";
import FAQSection from "@/components/sections/faq-section";
import ContactSection from "@/components/sections/contact-section";
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
          <TrustBar />
          <AboutSection />
          <ServicesSection />
          <WhySection />
          <CredentialsSection />
          <LanguagesSection />
          <NordicSection />
          <WorkModelSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </ScrollContainer>
    </>
  );
}
