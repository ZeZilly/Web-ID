"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Lightbulb,
  MessageSquare,
  Shield,
  Target,
  CheckCircle2,
} from "lucide-react";

const reasons = [
  { icon: Lightbulb, key: "expertise" },
  { icon: MessageSquare, key: "communication" },
  { icon: Shield, key: "confidentiality" },
  { icon: Target, key: "precision" },
];

export default function WhySection() {
  const t = useTranslations("why");

  return (
    <section id="why" className="relative py-24 lg:py-32">
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

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 lg:p-8 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                  <reason.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {t(`reasons.${reason.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {t(`reasons.${reason.key}.description`)}
                  </p>
                  <ul className="space-y-2">
                    {[0, 1, 2].map((i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                        <span>{t(`reasons.${reason.key}.points.${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
