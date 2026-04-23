import React from "react";
import { useApp } from "../context/AppContext";
import { useInView } from "../hooks/useInView";
import { Award, GraduationCap, CheckCircle2 } from "lucide-react";

const Certifications = () => {
  const { t } = useApp();
  const [ref, inView] = useInView();

  return (
    <section id="certifications" ref={ref} className="section">
      <div className={`reveal ${inView ? "in-view" : ""}`}>
        <div className="scanline mb-4">{t.certifications.kicker}</div>
        <h2 className="display text-[36px] md:text-[56px] mb-12">{t.certifications.title}</h2>
      </div>

      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6">
        {/* Certification groups */}
        <div className="card-surface p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{
                background: "var(--accent-soft)",
                border: "1px solid var(--accent-border)",
                color: "var(--accent)",
              }}
            >
              <Award size={18} />
            </div>
            <div>
              <div className="text-[17px] font-bold">15+ AI Evaluation Certifications</div>
              <div
                className="text-[12px] font-mono"
                style={{ color: "var(--muted)" }}
              >
                mindy-support tracks
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {t.certifications.groups.map((group, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${(i % 5) + 1} ${inView ? "in-view" : ""}`}
              >
                <div
                  className="text-[11px] font-mono uppercase tracking-[0.14em] mb-2"
                  style={{ color: "var(--accent)" }}
                >
                  {group.name}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 text-[12px] font-mono px-2.5 py-1 rounded-md"
                      style={{
                        background: "var(--surface-2)",
                        color: "var(--text-2)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <CheckCircle2
                        size={12}
                        style={{ color: "var(--accent)" }}
                      />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Training */}
        <div className="card-surface p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{
                background: "var(--accent-soft)",
                border: "1px solid var(--accent-border)",
                color: "var(--accent)",
              }}
            >
              <GraduationCap size={18} />
            </div>
            <div>
              <div className="text-[17px] font-bold">{t.certifications.trainingTitle}</div>
              <div
                className="text-[12px] font-mono"
                style={{ color: "var(--muted)" }}
              >
                ongoing education
              </div>
            </div>
          </div>

          <ul className="space-y-3">
            {t.certifications.training.map((item, i) => (
              <li
                key={i}
                className={`reveal reveal-delay-${(i % 4) + 1} ${inView ? "in-view" : ""} flex gap-3 items-start text-[14px]`}
                style={{ color: "var(--text-2)" }}
              >
                <div
                  className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                  style={{ background: "var(--accent)" }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
