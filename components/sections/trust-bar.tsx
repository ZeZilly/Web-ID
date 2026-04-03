"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Shield, Award, Globe2, Briefcase } from "lucide-react";

const trustItems = [
  { icon: Shield, key: "certified" },
  { icon: Award, key: "experience" },
  { icon: Globe2, key: "languages" },
  { icon: Briefcase, key: "clients" },
];

export default function TrustBar() {
  const t = useTranslations("trustBar");

  return (
    <section className="relative py-12 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center gap-3 group"
            >
              <div className="p-3 rounded-xl border border-border/50 bg-card/50 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/5">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {t(`${item.key}.value`)}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t(`${item.key}.label`)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
