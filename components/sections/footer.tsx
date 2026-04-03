"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Mail, Linkedin, MapPin } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative py-16 lg:py-20 border-t border-border/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg border border-primary/30 flex items-center justify-center">
                <span className="font-mono text-sm font-bold text-primary">AI</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">multilingual.no</p>
                <p className="text-xs text-muted-foreground">AI Data Ops & RLHF Specialist</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md mb-6">
              {t("tagline")}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:contact@multilingual.no"
                className="p-2 rounded-lg border border-border/50 bg-card/30 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg border border-border/50 bg-card/30 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Navigation
            </h4>
            <nav className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Credentials", href: "#credentials" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@multilingual.no"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0" />
                contact@multilingual.no
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />
                Norway
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} multilingual.no. {t("copyright")}.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {t("privacy")}
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {t("terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
