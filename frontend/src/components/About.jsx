import React from "react";
import { useApp } from "../context/AppContext";
import { useInView } from "../hooks/useInView";

const About = () => {
  const { t } = useApp();
  const [ref, inView] = useInView();

  return (
    <section id="about" ref={ref} className="section">
      <div className={`reveal ${inView ? "in-view" : ""}`}>
        <div className="scanline mb-4">{t.about.kicker}</div>
        <h2 className="display text-[36px] md:text-[56px] mb-12">{t.about.title}</h2>
      </div>

      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16">
        {/* Body */}
        <div className="space-y-6">
          {t.about.body.map((p, i) => (
            <p
              key={i}
              className={`reveal reveal-delay-${i + 1} ${inView ? "in-view" : ""} text-[16px] md:text-[18px] leading-relaxed`}
              style={{ color: "var(--text-2)" }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4 self-start">
          {t.about.stats.map((s, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} ${inView ? "in-view" : ""} card-surface p-6`}
            >
              <div
                className="text-[32px] md:text-[40px] font-bold leading-none mb-2"
                style={{
                  background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.value}
              </div>
              <div
                className="text-[12px] font-mono uppercase tracking-[0.1em]"
                style={{ color: "var(--muted)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
