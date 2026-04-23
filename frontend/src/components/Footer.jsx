import React from "react";
import { useApp } from "../context/AppContext";
import { personalInfo } from "../mock";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const { t } = useApp();
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative z-10 mt-16 pt-10 pb-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-mono text-[11px] font-bold"
                style={{
                  background: "var(--accent-soft)",
                  border: "1px solid var(--accent-border)",
                  color: "var(--accent)",
                }}
              >
                MZO
              </div>
              <span className="text-[15px] font-semibold">{personalInfo.name}</span>
            </div>
            <p
              className="text-[13px] max-w-sm"
              style={{ color: "var(--muted)" }}
            >
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-105"
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                color: "var(--muted)",
              }}
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-105"
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                color: "var(--muted)",
              }}
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-105"
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                color: "var(--muted)",
              }}
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <button
              onClick={scrollTop}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-105"
              style={{
                background: "var(--accent-soft)",
                border: "1px solid var(--accent-border)",
                color: "var(--accent)",
              }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="soft-divider" />

        <div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-6 text-[12px] font-mono"
          style={{ color: "var(--muted)" }}
        >
          <div>
            © {year} {personalInfo.name}. {t.footer.rights}
          </div>
          <div className="flex gap-4">
            <span>cv.multilingual.no</span>
            <span className="inline-flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--accent)" }}
              />
              online
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
