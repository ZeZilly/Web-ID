import React, { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";
import { languagesList } from "../mock";
import { Sun, Moon, Focus, Maximize2, Menu, X } from "lucide-react";

const Header = () => {
  const { theme, toggleTheme, lang, setLang, focusMode, toggleFocus, t } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#certifications", label: t.nav.certifications },
    { href: "#contact", label: t.nav.contact },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "color-mix(in srgb, var(--bg) 82%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(140%)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="flex items-center gap-2 group"
          aria-label="Home"
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center font-mono text-[13px] font-bold transition-transform group-hover:scale-105"
            style={{
              background: "var(--accent-soft)",
              border: "1px solid var(--accent-border)",
              color: "var(--accent)",
            }}
          >
            MZO
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-[13px] font-semibold" style={{ color: "var(--text)" }}>
              Mehmet Zeki Oguz
            </span>
            <span className="text-[10px] font-mono" style={{ color: "var(--muted)" }}>
              cv.multilingual.no
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-2 text-[13px] font-medium rounded-md transition-all hover:text-[var(--accent)]"
              style={{ color: "var(--muted)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <div
            className="hidden sm:flex items-center gap-0.5 p-0.5 rounded-full"
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
            }}
          >
            {languagesList.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className="px-2.5 py-1 text-[11px] font-mono font-semibold rounded-full transition-all"
                style={{
                  background: lang === l.code ? "var(--accent)" : "transparent",
                  color: lang === l.code ? "#0a0d12" : "var(--muted)",
                }}
                aria-label={`Switch language to ${l.name}`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Focus mode */}
          <button
            onClick={toggleFocus}
            className="hidden md:inline-flex items-center justify-center w-9 h-9 rounded-full transition-all"
            style={{
              background: focusMode ? "var(--accent-soft)" : "var(--surface-2)",
              border: `1px solid ${focusMode ? "var(--accent-border)" : "var(--border)"}`,
              color: focusMode ? "var(--accent)" : "var(--muted)",
            }}
            aria-label={focusMode ? t.footer.standardView : t.footer.focusMode}
            title={focusMode ? t.footer.standardView : t.footer.focusMode}
          >
            {focusMode ? <Maximize2 size={15} /> : <Focus size={15} />}
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full transition-all"
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              color: "var(--muted)",
            }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Mobile menu */}
          <button
            onClick={() => setMobileOpen((p) => !p)}
            className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-full"
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              color: "var(--muted)",
            }}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t"
          style={{
            borderColor: "var(--border)",
            background: "color-mix(in srgb, var(--bg) 92%, transparent)",
            backdropFilter: "blur(16px)",
          }}
        >
          <nav className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-3 text-[14px] font-medium rounded-md"
                style={{ color: "var(--text-2)" }}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-1 pt-3 sm:hidden">
              {languagesList.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className="flex-1 py-2 text-[12px] font-mono font-semibold rounded-md transition-all"
                  style={{
                    background: lang === l.code ? "var(--accent)" : "var(--surface-2)",
                    color: lang === l.code ? "#0a0d12" : "var(--muted)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
