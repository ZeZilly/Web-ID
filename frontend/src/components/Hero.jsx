import React from "react";
import { useApp } from "../context/AppContext";
import { useInView } from "../hooks/useInView";
import { personalInfo } from "../mock";
import { ArrowRight, Download, MapPin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  const { t } = useApp();
  const [ref, inView] = useInView();

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      ref={ref}
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden"
    >
      <div className="grid-backdrop" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className={`reveal ${inView ? "in-view" : ""}`}>
          <div className="kicker mb-6">{t.hero.kicker}</div>
        </div>

        <div className={`reveal reveal-delay-1 ${inView ? "in-view" : ""}`}>
          <h1
            className="display text-[44px] sm:text-[64px] md:text-[86px] lg:text-[104px] mb-4"
            style={{ color: "var(--text)" }}
          >
            Mehmet
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Zeki Oguz.
            </span>
          </h1>
        </div>

        <div className={`reveal reveal-delay-2 ${inView ? "in-view" : ""} mb-8`}>
          <p
            className="text-[15px] md:text-[17px] font-medium max-w-3xl"
            style={{ color: "var(--accent-2)" }}
          >
            {t.hero.role}
          </p>
        </div>

        <div className={`reveal reveal-delay-3 ${inView ? "in-view" : ""}`}>
          <p
            className="text-[15px] md:text-[17px] leading-relaxed max-w-[62ch] mb-8"
            style={{ color: "var(--text-2)" }}
          >
            {t.hero.summary}
          </p>
        </div>

        {/* Signal chips */}
        <div className={`reveal reveal-delay-4 ${inView ? "in-view" : ""}`}>
          <div className="flex flex-wrap gap-2 mb-10">
            {t.hero.signals.map((s, i) => (
              <span key={i} className="signal-chip">
                signal: {s}
              </span>
            ))}
          </div>
        </div>

        {/* CTA buttons */}
        <div className={`reveal reveal-delay-4 ${inView ? "in-view" : ""}`}>
          <div className="flex flex-wrap gap-3 mb-12">
            <a href="#contact" onClick={scrollToContact} className="btn-primary">
              {t.hero.cta1}
              <ArrowRight size={16} />
            </a>
            <button
              onClick={() => window.print()}
              className="btn-secondary"
              aria-label={t.hero.cta2}
            >
              <Download size={16} />
              {t.hero.cta2}
            </button>
          </div>
        </div>

        {/* Contact meta */}
        <div className={`reveal reveal-delay-5 ${inView ? "in-view" : ""}`}>
          <div
            className="flex flex-wrap gap-x-6 gap-y-3 text-[13px] font-mono"
            style={{ color: "var(--muted)" }}
          >
            <span className="inline-flex items-center gap-2">
              <MapPin size={13} style={{ color: "var(--accent)" }} />
              {personalInfo.location}
            </span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
            >
              <Mail size={13} style={{ color: "var(--accent)" }} />
              {personalInfo.email}
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition-colors"
            >
              linkedin.com/in/zekiogz
            </a>
            <span>+47 455 46 080</span>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="hidden md:flex items-center gap-3 mt-20 absolute right-6 bottom-4">
          <span
            className="text-[10px] font-mono uppercase tracking-[0.2em]"
            style={{ color: "var(--muted)" }}
          >
            {t.hero.scrollHint}
          </span>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center animate-bounce"
            style={{
              border: "1px solid var(--accent-border)",
              color: "var(--accent)",
            }}
          >
            <ArrowDown size={14} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
