"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, GraduationCap, Briefcase, Award } from "lucide-react";

const credentialCategories = [
  {
    icon: GraduationCap,
    title: "Education",
    count: 3,
  },
  {
    icon: Briefcase,
    title: "Experience",
    count: 5,
  },
  {
    icon: Award,
    title: "Certifications",
    count: 4,
  },
];

export default function CredentialsSection() {
  const t = useTranslations("credentials");

  return (
    <section
      id="credentials"
      className="relative py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
              Background & Expertise
            </h2>
          </div>
          <button className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-aurora transition-colors">
            {t("viewAll")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Credentials overview */}
        <div className="grid sm:grid-cols-3 gap-6">
          {credentialCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-xl border border-border/50 bg-card/30 hover:bg-card/50 transition-all duration-300 hover:border-aurora/30 cursor-pointer text-center"
            >
              <div className="inline-flex p-4 rounded-xl bg-aurora/10 text-aurora group-hover:bg-aurora/20 transition-colors mb-6">
                <category.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-aurora transition-colors">
                {category.title}
              </h3>
              <p className="text-3xl font-bold text-aurora">
                {category.count}+
              </p>
            </motion.div>
          ))}
        </div>

        {/* Placeholder for detailed credentials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 p-8 rounded-2xl border border-border/30 bg-card/20"
        >
          <div className="h-32 flex items-center justify-center">
            <p className="text-muted-foreground text-sm">
              Detailed credentials placeholder
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
