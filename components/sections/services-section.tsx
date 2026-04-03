"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, Brain, Languages, FileCheck, Headphones } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Data Operations",
    description: "RLHF training data, quality assurance, and model evaluation",
  },
  {
    icon: Languages,
    title: "Localization",
    description: "Professional translation and cultural adaptation services",
  },
  {
    icon: FileCheck,
    title: "Quality Assurance",
    description: "Linguistic QA, LQA testing, and content review",
  },
  {
    icon: Headphones,
    title: "Interpretation",
    description: "Professional interpreting for meetings and conferences",
  },
];

export default function ServicesSection() {
  const t = useTranslations("services");

  return (
    <section
      id="services"
      className="relative py-32 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-aurora font-mono text-sm uppercase tracking-widest mb-4 block">
              {t("title")}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
              What I Do
            </h2>
          </div>
          <button className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-aurora transition-colors">
            {t("viewAll")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-xl border border-border/50 bg-card/30 hover:bg-card/50 transition-all duration-300 hover:border-aurora/30 cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 p-4 rounded-xl bg-aurora/10 text-aurora group-hover:bg-aurora/20 transition-colors">
                  <service.icon className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-aurora transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-aurora transition-all -translate-x-2 group-hover:translate-x-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
