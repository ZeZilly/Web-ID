"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Cpu, BookOpen, Scale, Sparkles } from "lucide-react";

const capabilities = [
  { icon: Cpu, key: "aiTraining" },
  { icon: BookOpen, key: "localization" },
  { icon: Scale, key: "compliance" },
  { icon: Sparkles, key: "quality" },
];

export default function NordicSection() {
  const t = useTranslations("nordic");

  return (
    <section id="nordic" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              {t("label")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {t("title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              {t("description")}
            </p>

            <div className="space-y-4">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-muted-foreground">{t(`points.${i}`)}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Capabilities Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="group p-6 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 hover:border-primary/20 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <cap.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {t(`capabilities.${cap.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(`capabilities.${cap.key}.description`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
