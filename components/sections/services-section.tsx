"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, Brain, Languages, FileCheck, Headphones } from "lucide-react";

const services = [
  { icon: Brain, key: "aiDataOps" },
  { icon: Languages, key: "localization" },
  { icon: Headphones, key: "interpretation" },
  { icon: FileCheck, key: "quality" },
];

export default function ServicesSection() {
  const t = useTranslations("services");

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
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

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 lg:p-8 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 transition-all duration-300 hover:border-primary/30"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {t(`items.${service.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`items.${service.key}.description`)}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all -translate-x-2 group-hover:translate-x-0 shrink-0 mt-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
