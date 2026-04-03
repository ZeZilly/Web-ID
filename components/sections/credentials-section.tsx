"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FileText, Mic2, Cpu, Database, CheckCircle2 } from "lucide-react";

const credentials = [
  { icon: FileText, key: "translator" },
  { icon: Mic2, key: "interpreter" },
  { icon: Cpu, key: "rlhf" },
  { icon: Database, key: "dataOps" },
];

export default function CredentialsSection() {
  const t = useTranslations("credentials");

  return (
    <section id="credentials" className="relative py-24 lg:py-32 overflow-hidden">
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

        {/* Credentials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((credential, index) => (
            <motion.div
              key={credential.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 transition-all duration-300 hover:border-primary/30 text-center"
            >
              <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors mb-4">
                <credential.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {t(`items.${credential.key}.title`)}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {t(`items.${credential.key}.issuer`)}
              </p>
              <div className="flex items-center justify-center gap-1 text-xs text-primary">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Verified</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
