import React from "react";
import { useApp } from "../context/AppContext";
import { useInView } from "../hooks/useInView";
import { ExternalLink, FolderGit2 } from "lucide-react";

const Projects = () => {
  const { t } = useApp();
  const [ref, inView] = useInView();

  return (
    <section id="projects" ref={ref} className="section">
      <div className={`reveal ${inView ? "in-view" : ""}`}>
        <div className="scanline mb-4">{t.projects.kicker}</div>
        <h2 className="display text-[36px] md:text-[56px] mb-12">{t.projects.title}</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {t.projects.items.map((proj, i) => (
          <a
            key={i}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`reveal reveal-delay-${(i % 3) + 1} ${inView ? "in-view" : ""} card-surface p-6 group flex flex-col`}
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: "var(--accent-soft)",
                  border: "1px solid var(--accent-border)",
                  color: "var(--accent)",
                }}
              >
                <FolderGit2 size={18} />
              </div>
              <ExternalLink
                size={16}
                className="opacity-50 group-hover:opacity-100 transition-opacity"
                style={{ color: "var(--muted)" }}
              />
            </div>

            <div
              className="text-[11px] font-mono uppercase tracking-[0.14em] mb-2"
              style={{ color: "var(--accent)" }}
            >
              {proj.status}
            </div>
            <h3 className="text-[18px] font-bold mb-3 leading-tight">{proj.name}</h3>
            <p
              className="text-[14px] leading-relaxed mb-5 flex-1"
              style={{ color: "var(--text-2)" }}
            >
              {proj.desc}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {proj.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2 py-0.5 rounded"
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
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
