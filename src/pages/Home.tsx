import { Link } from "react-router-dom";
import {
  AlertTriangle,
  Zap,
  CheckCircle,
  Globe,
  RefreshCw,
  Mic,
  Network,
  Sliders,
  ClipboardCheck,
  ArrowUpRight,
  Languages,
} from "lucide-react";

const localizedSamples: Array<{
  locale: string;
  lang: string;
  dir?: "ltr" | "rtl";
  flag: string;
  headline: string;
}> = [
  { locale: "Norsk bokmål", lang: "nb", flag: "NO", headline: "Global rekkevidde. Lokal resonans." },
  { locale: "Svenska", lang: "sv", flag: "SE", headline: "Global räckvidd. Lokal resonans." },
  { locale: "Dansk", lang: "da", flag: "DK", headline: "Global rækkevidde. Lokal resonans." },
  { locale: "Suomi", lang: "fi", flag: "FI", headline: "Globaali ulottuvuus. Paikallinen resonanssi." },
  { locale: "Deutsch", lang: "de", flag: "DE", headline: "Globale Reichweite. Lokale Resonanz." },
  { locale: "Français", lang: "fr", flag: "FR", headline: "Portée mondiale. Résonance locale." },
  { locale: "Nederlands", lang: "nl", flag: "NL", headline: "Mondiaal bereik. Lokale resonantie." },
  { locale: "Español", lang: "es", flag: "ES", headline: "Alcance global. Resonancia local." },
];

export default function Home() {
  return (
    <main className="pt-[80px]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/hero-bg.png" alt="" className="w-full h-full object-cover object-center" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background"></div>
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-xl md:py-[120px] flex flex-col items-center text-center gap-md">
        <span className="inline-flex items-center gap-2 bg-surface-container-low border border-surface-container-highest rounded-full px-sm py-xs font-label-caps text-[12px] text-on-surface-variant uppercase tracking-wider font-semibold">
          Based in Norway 🇳🇴 | Serving Global Brands
        </span>
        <h1 className="font-h1 text-[48px] leading-[1.1] tracking-[-0.02em] font-semibold text-on-background max-w-3xl text-balance">
          Multi-Agent AI Localization.
          <br />
          Engineered for Nordic Precision.
        </h1>
        <p className="font-body-lg text-[18px] leading-[1.6] text-on-surface-variant max-w-2xl text-pretty">
          multilingual.no orchestrates specialized AI agents alongside expert
          human linguists to deliver culturally flawless localization across
          Norwegian, Nordic, and global markets&mdash;with rubric-based
          evaluation and enterprise-grade governance at every step.
        </p>
        <div className="flex flex-col sm:flex-row gap-sm mt-xs">
          <Link
            to="/request-services"
            className="bg-primary text-on-primary font-button text-[14px] font-medium px-md py-sm rounded-DEFAULT hover:bg-on-primary-fixed-variant transition-colors shadow-sm"
          >
            Start Your Global Expansion
          </Link>
          <a
            href="#how-it-works"
            className="bg-transparent text-on-background border border-surface-container-highest font-button text-[14px] font-medium px-md py-sm rounded-DEFAULT hover:bg-surface-container-low transition-colors inline-flex items-center justify-center"
          >
            Explore Our Workflow
          </a>
        </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="bg-surface-container-low py-xl border-y border-surface-container-highest">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-xl">
          <div className="flex flex-col gap-sm">
            <div className="flex items-center gap-2 text-error font-label-caps text-[12px] uppercase tracking-wider font-semibold mb-xs">
              <AlertTriangle size={16} />
              THE PROBLEM
            </div>
            <h2 className="font-h2 text-[30px] leading-[1.2] tracking-[-0.01em] font-semibold text-on-background">
              Traditional translation is broken.
            </h2>
            <p className="font-body-md text-on-surface-variant">
              Traditional agencies are slow and expensive. Pure AI translation lacks
              cultural context and brand voice. You are forced to choose between
              speed, cost, and quality.
            </p>
          </div>
          <div className="bg-surface border border-surface-container-highest rounded-lg p-lg shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Zap size={100} />
            </div>
            <div className="flex items-center gap-2 text-primary font-label-caps text-[12px] uppercase tracking-wider font-semibold mb-sm relative z-10">
              <CheckCircle size={16} />
              THE SOLUTION
            </div>
            <h3 className="font-h3 text-[24px] leading-[1.3] tracking-[-0.01em] font-semibold text-on-background mb-sm relative z-10">
              The Hybrid Engine
            </h3>
            <p className="font-body-md text-on-surface-variant relative z-10">
              Our proprietary AI agents handle the heavy lifting of translation and
              context mapping, while expert human linguists ensure cultural
              accuracy, nuance, and brand alignment. The result is flawless
              localization at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-xl" id="services">
        <div className="text-center mb-xl">
          <h2 className="font-h2 text-[30px] font-semibold text-on-background mb-sm">
            Enterprise Localization Services
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
            Tailored solutions for brands expanding into complex linguistic markets.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-gutter">
          <div className="bg-surface border border-surface-container-highest rounded-lg p-md hover:-translate-y-1 transition-transform duration-200">
            <div className="w-12 h-12 bg-primary-container/20 rounded-DEFAULT flex items-center justify-center mb-md">
              <Globe className="text-primary" size={24} />
            </div>
            <h3 className="font-h3 text-[24px] font-semibold text-on-background mb-xs">
              Market Entry Localization
            </h3>
            <p className="font-body-sm text-[14px] text-on-surface-variant">
              Comprehensive adaptation of your core product, website, and marketing
              materials for a flawless launch in new regions.
            </p>
          </div>
          <div className="bg-surface border border-surface-container-highest rounded-lg p-md hover:-translate-y-1 transition-transform duration-200">
            <div className="w-12 h-12 bg-primary-container/20 rounded-DEFAULT flex items-center justify-center mb-md">
              <RefreshCw className="text-primary" size={24} />
            </div>
            <h3 className="font-h3 text-[24px] font-semibold text-on-background mb-xs">
              Global Content Retainer
            </h3>
            <p className="font-body-sm text-[14px] text-on-surface-variant">
              Ongoing, high-volume localization for dynamic content, updates, and
              campaigns integrated directly into your CI/CD pipeline.
            </p>
          </div>
          <div className="bg-surface border border-surface-container-highest rounded-lg p-md hover:-translate-y-1 transition-transform duration-200">
            <div className="w-12 h-12 bg-primary-container/20 rounded-DEFAULT flex items-center justify-center mb-md">
              <Mic className="text-primary" size={24} />
            </div>
            <h3 className="font-h3 text-[24px] font-semibold text-on-background mb-xs">
              Brand Voice Adaptation
            </h3>
            <p className="font-body-sm text-[14px] text-on-surface-variant">
              Deep cultural consulting to ensure your brand's unique tone and
              personality resonate authentically with local audiences.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="bg-on-background text-surface py-xl" id="how-it-works">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-xl">
            <h2 className="font-h2 text-[30px] font-semibold text-surface mb-sm">
              The Workflow
            </h2>
            <p className="font-body-md text-outline-variant max-w-2xl mx-auto">
              Precision engineering meets linguistic artistry.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-gutter relative">
            <div className="relative z-10 flex flex-col gap-sm">
              <div className="w-10 h-10 rounded-full bg-surface-tint/20 border border-surface-tint flex items-center justify-center font-button text-[14px] font-medium text-surface-tint mb-xs">
                1
              </div>
              <h3 className="font-button text-[14px] font-medium text-surface">
                Analyze &amp; Align
              </h3>
              <p className="font-body-sm text-[14px] text-outline-variant">
                We establish explicit rubrics and evaluation frameworks, aligning
                your content, brand guidelines, and target demographics to
                accurately configure AI models.
              </p>
            </div>
            <div className="relative z-10 flex flex-col gap-sm">
              <div className="w-10 h-10 rounded-full bg-surface-tint/20 border border-surface-tint flex items-center justify-center font-button text-[14px] font-medium text-surface-tint mb-xs">
                2
              </div>
              <h3 className="font-button text-[14px] font-medium text-surface">
                AI-Powered Generation
              </h3>
              <p className="font-body-sm text-[14px] text-outline-variant">
                Leveraging multi-model orchestration and agentic workflows, we
                generate localized drafts prioritizing structural consistency and
                adherence to guidelines.
              </p>
            </div>
            <div className="relative z-10 flex flex-col gap-sm">
              <div className="w-10 h-10 rounded-full bg-surface-tint/20 border border-surface-tint flex items-center justify-center font-button text-[14px] font-medium text-surface-tint mb-xs">
                3
              </div>
              <h3 className="font-button text-[14px] font-medium text-surface">
                Human Expert Verification
              </h3>
              <p className="font-body-sm text-[14px] text-outline-variant">
                Native linguists conduct disciplined rubric-based reviews to inject
                cultural nuance, ensuring flawless linguistic precision and context
                mapping.
              </p>
            </div>
            <div className="relative z-10 flex flex-col gap-sm">
              <div className="w-10 h-10 rounded-full bg-surface-tint/20 border border-surface-tint flex items-center justify-center font-button text-[14px] font-medium text-surface-tint mb-xs">
                4
              </div>
              <h3 className="font-button text-[14px] font-medium text-surface">
                Deploy &amp; Scale
              </h3>
              <p className="font-body-sm text-[14px] text-outline-variant">
                Final assets are delivered seamlessly via API or preferred formats,
                integrated directly into your continuous integration pipelines for
                global deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="bg-surface py-xl border-b border-surface-container-highest">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-xl">
            <h2 className="font-h2 text-[30px] font-semibold text-on-background mb-sm">
              Technical Capabilities
            </h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              Bridging the gap between specialized AI evaluation and
              enterprise-grade localization.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-gutter">
            <div className="bg-surface-container-lowest border border-surface-container-highest rounded-lg p-md shadow-sm">
              <div className="w-10 h-10 bg-primary/10 rounded-DEFAULT flex items-center justify-center mb-sm">
                <Network className="text-primary" size={20} />
              </div>
              <h3 className="font-h3 text-[24px] font-semibold text-on-background mb-xs">
                Agent Orchestration Platform
              </h3>
              <p className="font-body-sm text-[14px] text-on-surface-variant mb-md">
                Designing and deploying multi-step agent workflows to handle complex
                localization tasks with guided setup and operational oversight.
              </p>
              <div className="flex gap-2">
                <span className="inline-block bg-surface-container px-2 py-1 rounded-DEFAULT font-label-caps text-[10px] uppercase font-semibold text-on-surface-variant">
                  Agents
                </span>
                <span className="inline-block bg-surface-container px-2 py-1 rounded-DEFAULT font-label-caps text-[10px] uppercase font-semibold text-on-surface-variant">
                  Orchestration
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest border border-surface-container-highest rounded-lg p-md shadow-sm">
              <div className="w-10 h-10 bg-primary/10 rounded-DEFAULT flex items-center justify-center mb-sm">
                <Sliders className="text-primary" size={20} />
              </div>
              <h3 className="font-h3 text-[24px] font-semibold text-on-background mb-xs">
                Multi-Model Evaluation Harness
              </h3>
              <p className="font-body-sm text-[14px] text-on-surface-variant mb-md">
                Comparative testing frameworks probing prompt adherence,
                reliability, and failure modes across multiple LLMs for optimal
                quality.
              </p>
              <div className="flex gap-2">
                <span className="inline-block bg-surface-container px-2 py-1 rounded-DEFAULT font-label-caps text-[10px] uppercase font-semibold text-on-surface-variant">
                  Evaluation
                </span>
                <span className="inline-block bg-surface-container px-2 py-1 rounded-DEFAULT font-label-caps text-[10px] uppercase font-semibold text-on-surface-variant">
                  Benchmarking
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest border border-surface-container-highest rounded-lg p-md shadow-sm">
              <div className="w-10 h-10 bg-primary/10 rounded-DEFAULT flex items-center justify-center mb-sm">
                <ClipboardCheck className="text-primary" size={20} />
              </div>
              <h3 className="font-h3 text-[24px] font-semibold text-on-background mb-xs">
                AI Quality Rating
              </h3>
              <p className="font-body-sm text-[14px] text-on-surface-variant mb-md">
                Rigorous assessment of AI-generated responses using explicit
                criteria for safety, factuality, coherence, and user-intent
                alignment.
              </p>
              <div className="flex gap-2">
                <span className="inline-block bg-surface-container px-2 py-1 rounded-DEFAULT font-label-caps text-[10px] uppercase font-semibold text-on-surface-variant">
                  Rubrics
                </span>
                <span className="inline-block bg-surface-container px-2 py-1 rounded-DEFAULT font-label-caps text-[10px] uppercase font-semibold text-on-surface-variant">
                  Quality Assurance
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multilingual Coverage Section */}
      <section
        className="bg-surface-container-low py-xl border-y border-surface-container-highest"
        id="languages"
        aria-labelledby="languages-heading"
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-md mb-xl">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-primary font-label-caps text-[12px] uppercase tracking-wider font-semibold mb-xs">
                <Languages size={16} aria-hidden="true" />
                Multilingual Coverage
              </div>
              <h2
                id="languages-heading"
                className="font-h2 text-[30px] leading-[1.2] tracking-[-0.01em] font-semibold text-on-background mb-sm text-balance"
              >
                One brand voice, every target locale.
              </h2>
              <p className="font-body-md text-on-surface-variant text-pretty">
                Our agentic localization pipeline preserves tone, terminology, and
                intent across Nordic, European, and global languages&mdash;validated
                by native linguists and measured against explicit quality rubrics.
              </p>
            </div>
            <p className="font-label-caps text-[12px] uppercase tracking-wider font-semibold text-on-surface-variant">
              Sample headline &ldquo;Global Reach. Local Resonance.&rdquo;
            </p>
          </div>
          <ul
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter"
          >
            {localizedSamples.map((sample) => (
              <li
                key={sample.lang}
                className="bg-surface border border-surface-container-highest rounded-lg p-md hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="flex items-center justify-between mb-sm">
                  <span className="font-label-caps text-[12px] uppercase tracking-wider font-semibold text-on-surface-variant">
                    {sample.locale}
                  </span>
                  <span
                    className="font-mono text-[11px] tracking-wider text-on-surface-variant bg-surface-container px-2 py-1 rounded-DEFAULT"
                    aria-label={`Language code ${sample.lang}`}
                  >
                    {sample.lang.toUpperCase()}-{sample.flag}
                  </span>
                </div>
                <p
                  lang={sample.lang}
                  dir={sample.dir ?? "ltr"}
                  className="font-h3 text-[20px] leading-[1.3] tracking-[-0.01em] font-semibold text-on-background text-balance"
                >
                  {sample.headline}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Trust & Authority Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-xl" id="about">
        <div className="grid md:grid-cols-2 gap-xl items-center">
          <div>
            <h2 className="font-h2 text-[30px] font-semibold text-on-background mb-sm">
              Led by Expertise
            </h2>
            <p className="font-body-md text-on-surface-variant mb-md">
              Our leadership combines decades of experience in both advanced
              artificial intelligence evaluation and deep linguistic study. We bring
              disciplined rubric-based review and hands-on experimentation in
              multi-model workflows to ensure unparalleled localization quality.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary font-button text-[14px] font-medium hover:underline"
            >
              View Founder's Profile &amp; Credentials
              <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="bg-surface-container-lowest border border-surface-container-highest rounded-lg p-sm shadow-sm flex items-center gap-md">
            <div className="w-24 h-24 rounded-DEFAULT overflow-hidden shrink-0 border border-surface-container-highest">
              <img src="/founder.png" alt="Mehmet Zeki Oguz" className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <h3 className="font-h3 text-[24px] font-semibold text-on-background">
                Mehmet Zeki Oguz
              </h3>
              <p className="font-body-sm text-[14px] text-on-surface-variant mb-xs">
                AI Agent Evaluation Specialist &amp; Lead Linguist
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="inline-block bg-surface-container px-2 py-1 rounded-DEFAULT font-label-caps text-[10px] uppercase font-semibold text-on-surface-variant">
                  Multi-Model Evaluation
                </span>
                <span className="inline-block bg-surface-container px-2 py-1 rounded-DEFAULT font-label-caps text-[10px] uppercase font-semibold text-on-surface-variant">
                  Nordic Linguistics
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
