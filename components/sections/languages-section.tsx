"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Globe, ArrowRight } from "lucide-react";

const languagePairs = [
  { from: "Norwegian", to: "English", code: "NO-EN" },
  { from: "Norwegian", to: "Turkish", code: "NO-TR" },
  { from: "Swedish", to: "English", code: "SV-EN" },
  { from: "Turkish", to: "English", code: "TR-EN" },
  { from: "Danish", to: "English", code: "DA-EN" },
  { from: "German", to: "English", code: "DE-EN" },
];

const regions = [
  { key: "nordic", languages: ["Norwegian", "Swedish", "Danish"] },
  { key: "european", languages: ["German", "French", "Spanish"] },
  { key: "crossBorder", languages: ["Turkish", "English"] },
];

export default function LanguagesSection() {
  const t = useTranslations("languages");

  return (
    <section id="languages" className="relative py-24 lg:py-32 bg-card/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            {t("label")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("description")}
          </p>
        </motion.div>

        {/* Language Pairs Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            {t("pairs.title")}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {languagePairs.map((pair, index) => (
              <motion.div
                key={pair.code}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group p-4 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 text-center"
              >
                <p className="text-xs text-muted-foreground mb-1">{pair.from}</p>
                <ArrowRight className="h-3 w-3 text-primary mx-auto my-1" />
                <p className="text-xs text-muted-foreground mb-2">{pair.to}</p>
                <p className="font-mono text-sm font-bold text-primary">
                  {pair.code}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Regional Coverage */}
        <div className="grid md:grid-cols-3 gap-6">
          {regions.map((region, index) => (
            <motion.div
              key={region.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-border/50 bg-card/30"
            >
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {t(`regions.${region.key}.title`)}
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                {t(`regions.${region.key}.description`)}
              </p>
              <div className="flex flex-wrap gap-2">
                {region.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
