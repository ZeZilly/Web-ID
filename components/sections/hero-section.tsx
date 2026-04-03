"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("hero");

  const handleScrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-aurora/30 bg-aurora/5 text-aurora text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aurora opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-aurora" />
            </span>
            {t("description")}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight"
        >
          {t("title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            {t("cta.primary")}
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </button>
          <button
            onClick={handleScrollToAbout}
            className="group flex items-center gap-2 px-8 py-4 rounded-lg border border-border/50 bg-card/30 text-foreground font-medium transition-all duration-300 hover:border-primary/50 hover:bg-card/50"
          >
            {t("cta.secondary")}
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
