"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqKeys = [
  "whatIsRlhf",
  "turnaround",
  "industries",
  "confidentiality",
  "languages",
  "pricing",
];

export default function FAQSection() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
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
          <p className="text-lg text-muted-foreground text-pretty">
            {t("description")}
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqKeys.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-xl border border-border/50 bg-card/30 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-card/50 transition-colors duration-300"
              >
                <span className="font-medium text-foreground pr-4">
                  {t(`items.${key}.question`)}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-muted-foreground">
                      {t(`items.${key}.answer`)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
