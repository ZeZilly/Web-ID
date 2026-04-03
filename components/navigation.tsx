"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./language-switcher";
import ThemeToggle from "./theme-toggle";
import { type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

interface NavigationProps {
  locale: Locale;
}

const navItems = [
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "credentials", href: "#credentials" },
  { key: "languages", href: "#languages" },
  { key: "faq", href: "#faq" },
  { key: "contact", href: "#contact" },
];

export default function Navigation({ locale }: NavigationProps) {
  const t = useTranslations("nav");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "glass py-3" : "py-6"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative h-10 w-10 rounded-lg border border-aurora/30 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-aurora/60">
              <div className="absolute inset-0 bg-gradient-to-br from-aurora/10 to-transparent" />
              <span className="font-mono text-sm font-bold text-aurora">AI</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-foreground">Data Ops</p>
              <p className="text-xs text-muted-foreground">RLHF Specialist</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {t(item.key)}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-aurora transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <LanguageSwitcher currentLocale={locale} />

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-6 pb-4 flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.key}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    {t(item.key)}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
