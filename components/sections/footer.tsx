"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Mail, Linkedin, MapPin } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative py-20 border-t border-border/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-12 mb-16"
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg border border-aurora/30 flex items-center justify-center">
                <span className="font-mono text-sm font-bold text-aurora">AI</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Data Ops</p>
                <p className="text-xs text-muted-foreground">RLHF Specialist</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Independent AI Data Operations & RLHF Specialist based in Norway
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@example.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-aurora transition-colors"
              >
                <Mail className="h-4 w-4" />
                contact@example.com
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-aurora transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Norway
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Legal
            </h4>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-aurora transition-colors"
              >
                {t("privacy")}
              </a>
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-aurora transition-colors"
              >
                {t("terms")}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} AI Data Ops. {t("copyright")}.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">
              Built with precision
            </span>
            <span className="h-1 w-1 rounded-full bg-aurora" />
          </div>
        </div>
      </div>
    </footer>
  );
}
