"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Clock, FileText, Handshake, Repeat } from "lucide-react";

const models = [
  { icon: Clock, key: "hourly" },
  { icon: FileText, key: "project" },
  { icon: Handshake, key: "retainer" },
  { icon: Repeat, key: "ongoing" },
];

export default function WorkModelSection() {
  const t = useTranslations("workModel");

  return (
    <section id="work-model" className="relative py-24 lg:py-32 bg-card/20">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model, index) => (
            <motion.div
              key={model.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl border border-border/50 bg-background hover:border-primary/30 transition-all duration-300"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="p-3 rounded-xl border border-border/50 bg-card/50 w-fit mb-4 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-300">
                  <model.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t(`models.${model.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t(`models.${model.key}.description`)}
                </p>
                <p className="text-xs text-primary font-medium">
                  {t(`models.${model.key}.ideal`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl border border-border/50 bg-card/30"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            {t("process.title")}
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center mx-auto mb-3">
                  {i + 1}
                </div>
                <h4 className="font-medium text-foreground mb-1">
                  {t(`process.steps.${i}.title`)}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t(`process.steps.${i}.description`)}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
