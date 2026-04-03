"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Shield, Award, Globe, Zap } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "Quality Assured" },
  { icon: Award, label: "Certified Expert" },
  { icon: Globe, label: "Multilingual" },
  { icon: Zap, label: "Fast Delivery" },
];

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-aurora font-mono text-sm uppercase tracking-widest mb-4 block">
            {t("title")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {t("trust")}
          </h2>
        </motion.div>

        {/* Trust indicators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-xl border border-border/50 bg-card/30 hover:bg-card/50 transition-all duration-300 hover:border-aurora/30"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 rounded-lg bg-aurora/10 text-aurora group-hover:bg-aurora/20 transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Placeholder content area */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 p-8 rounded-2xl border border-border/30 bg-card/20"
        >
          <div className="h-48 flex items-center justify-center">
            <p className="text-muted-foreground text-sm">
              About content placeholder
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
