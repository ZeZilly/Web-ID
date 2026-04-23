import React from "react";
import { useApp } from "../context/AppContext";
import { useInView } from "../hooks/useInView";
import { Briefcase, ChevronRight } from "lucide-react";

const JobCard = ({ job, index }) => {
  const [ref, inView] = useInView();
  return (
    <article
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} card-surface p-6 md:p-8 relative`}
    >
      {/* Timeline dot */}
      <div
        className="absolute -left-[9px] top-10 hidden md:flex w-4 h-4 rounded-full items-center justify-center"
        style={{
          background: "var(--bg)",
          border: "2px solid var(--accent)",
        }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "var(--accent)" }}
        />
      </div>

      <div className="flex flex-wrap justify-between gap-3 items-start mb-2">
        <div>
          <div
            className="text-[11px] font-mono uppercase tracking-[0.14em] mb-2"
            style={{ color: "var(--accent)" }}
          >
            0{index + 1} / {job.type}
          </div>
          <h3 className="text-[22px] md:text-[26px] font-bold leading-tight">{job.role}</h3>
          <div
            className="text-[15px] font-semibold mt-1"
            style={{ color: "var(--accent-2)" }}
          >
            {job.company}
          </div>
        </div>
        <div
          className="text-[12px] font-mono px-3 py-1.5 rounded-full whitespace-nowrap"
          style={{
            background: "var(--surface-2)",
            color: "var(--muted)",
            border: "1px solid var(--border)",
          }}
        >
          {job.period}
        </div>
      </div>

      <ul className="mt-5 space-y-3">
        {job.bullets.map((b, i) => (
          <li
            key={i}
            className="flex gap-3 text-[14.5px] leading-relaxed"
            style={{ color: "var(--text-2)" }}
          >
            <ChevronRight
              size={16}
              className="flex-shrink-0 mt-1"
              style={{ color: "var(--accent)" }}
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mt-6 pt-6" style={{ borderTop: "1px dashed var(--border)" }}>
        {job.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-mono px-2.5 py-1 rounded-md"
            style={{
              background: "var(--accent-soft)",
              color: "var(--accent)",
              border: "1px solid var(--accent-border)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

const Experience = () => {
  const { t } = useApp();
  const [ref, inView] = useInView();

  return (
    <section id="experience" ref={ref} className="section">
      <div className={`reveal ${inView ? "in-view" : ""}`}>
        <div className="scanline mb-4">{t.experience.kicker}</div>
        <div className="flex items-end justify-between flex-wrap gap-3 mb-12">
          <h2 className="display text-[36px] md:text-[56px]">{t.experience.title}</h2>
          <div
            className="flex items-center gap-2 text-[12px] font-mono"
            style={{ color: "var(--muted)" }}
          >
            <Briefcase size={14} style={{ color: "var(--accent)" }} />
            {t.experience.items.length} roles
          </div>
        </div>
      </div>

      <div
        className="relative md:pl-10 space-y-6"
        style={{ borderLeft: "none" }}
      >
        {/* Vertical line (desktop) */}
        <div
          className="hidden md:block absolute left-0 top-2 bottom-2 w-px"
          style={{
            background: "linear-gradient(180deg, var(--accent), transparent)",
          }}
        />
        {t.experience.items.map((job, i) => (
          <JobCard key={i} job={job} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
