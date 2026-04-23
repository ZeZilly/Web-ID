import React from "react";
import { useApp } from "../context/AppContext";
import { useInView } from "../hooks/useInView";
import { Sparkles, Wrench, Target, Globe } from "lucide-react";

const iconMap = [Sparkles, Wrench, Target, Globe];

const Skills = () => {
  const { t } = useApp();
  const [ref, inView] = useInView();

  return (
    <section id="skills" ref={ref} className="section">
      <div className={`reveal ${inView ? "in-view" : ""}`}>
        <div className="scanline mb-4">{t.skills.kicker}</div>
        <h2 className="display text-[36px] md:text-[56px] mb-12">{t.skills.title}</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4 md:gap-5 mb-16">
        {t.skills.cards.map((card, i) => {
          const Icon = iconMap[i % iconMap.length];
          return (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 4) + 1} ${inView ? "in-view" : ""} card-surface p-6 md:p-7 group`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{
                    background: "var(--accent-soft)",
                    border: "1px solid var(--accent-border)",
                    color: "var(--accent)",
                  }}
                >
                  <Icon size={20} />
                </div>
                <span
                  className="text-[11px] font-mono"
                  style={{ color: "var(--muted)" }}
                >
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-[19px] font-bold mb-2">{card.title}</h3>
              <p
                className="text-[14.5px] leading-relaxed mb-5"
                style={{ color: "var(--text-2)" }}
              >
                {card.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md"
                    style={{
                      background: "var(--surface-2)",
                      color: "var(--muted)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Tech stack marquee */}
      <div className={`reveal ${inView ? "in-view" : ""}`}>
        <div className="scanline mb-4">{t.skills.stackTitle}</div>
        <div className="ticker">
          <div className="ticker-track py-2">
            {[...t.skills.stack, ...t.skills.stack].map((item, i) => (
              <span
                key={i}
                className="font-mono text-[13px] px-4 py-2 rounded-full whitespace-nowrap"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--text-2)",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
