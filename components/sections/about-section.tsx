"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FileCheck, Clock, CheckCircle2 } from "lucide-react";

const highlights = [
  { icon: FileCheck, key: "nda" },
  { icon: Clock, key: "response" },
  { icon: CheckCircle2, key: "quality" },
];

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono text-sm uppercase tracking-widest mb-4 block">
              {t("title")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {t("trust")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              {t("description")}
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-xl border border-border/50 bg-card/30"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="text-foreground font-medium">
                  {t(`highlights.${item.key}`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
