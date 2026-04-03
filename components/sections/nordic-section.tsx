"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Cpu, BookOpen, Scale, Sparkles, ArrowRight } from "lucide-react";

const capabilities = [
  { icon: Cpu, key: "aiTraining" },
  { icon: BookOpen, key: "localization" },
  { icon: Scale, key: "compliance" },
  { icon: Sparkles, key: "quality" },
];

export default function NordicSection() {
  const t = useTranslations("nordic");

  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="nordic" className="relative py-24 lg:py-32 bg-card/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
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
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t("description")}
          </p>
        </motion.div>

        {/* Intro paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <p className="text-lg text-muted-foreground text-center text-pretty leading-relaxed">
            {t("intro")}
          </p>
        </motion.div>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="grid gap-4">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-xl border border-border/30 bg-card/20"
              >
                <div className="shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {t(`points.${i}`)}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="group p-6 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 hover:border-primary/20 transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <cap.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {t(`capabilities.${cap.key}.title`)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(`capabilities.${cap.key}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent text-center">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {t("cta.title")}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t("cta.description")}
            </p>
            <button
              onClick={handleScrollToContact}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              {t("cta.button")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
