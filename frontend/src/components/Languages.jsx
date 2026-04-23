import React from "react";
import { useApp } from "../context/AppContext";
import { useInView } from "../hooks/useInView";
import { Languages as LangIcon } from "lucide-react";

const LanguageBar = ({ item, delay, inView }) => {
  return (
    <div className={`reveal reveal-delay-${delay} ${inView ? "in-view" : ""}`}>
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-[15px] font-semibold">{item.name}</span>
        <span
          className="text-[11px] font-mono uppercase tracking-[0.1em]"
          style={{ color: "var(--muted)" }}
        >
          {item.level}
        </span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: "var(--surface-2)" }}
      >
        <div
          className="h-full rounded-full transition-all duration-[1200ms] ease-out"
          style={{
            width: inView ? `${item.score}%` : "0%",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
          }}
        />
      </div>
    </div>
  );
};

const Languages = () => {
  const { t } = useApp();
  const [ref, inView] = useInView();

  return (
    <section id="languages" ref={ref} className="section">
      <div className={`reveal ${inView ? "in-view" : ""}`}>
        <div className="scanline mb-4">{t.languages.kicker}</div>
        <div className="flex items-end justify-between flex-wrap gap-3 mb-12">
          <h2 className="display text-[36px] md:text-[56px]">{t.languages.title}</h2>
          <div
            className="flex items-center gap-2 text-[12px] font-mono"
            style={{ color: "var(--muted)" }}
          >
            <LangIcon size={14} style={{ color: "var(--accent)" }} />
            {t.languages.items.length} languages
          </div>
        </div>
      </div>

      <div className="card-surface p-6 md:p-10">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {t.languages.items.map((item, i) => (
            <LanguageBar
              key={item.name}
              item={item}
              delay={(i % 5) + 1}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
