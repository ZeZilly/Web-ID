"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Mail, MapPin, Clock, Send, CheckCircle2, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactSection() {
  const t = useTranslations("contact");
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    type: "inquiry",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormState("success");
    setTimeout(() => {
      setFormState("idle");
      setFormData({ name: "", email: "", company: "", message: "", type: "inquiry" });
    }, 3000);
  };

  const contactInfo = [
    { icon: Mail, key: "email", value: "contact@multilingual.no" },
    { icon: MapPin, key: "location", value: "Trondheim, Norway" },
    { icon: Clock, key: "response", value: "24-48 hours" },
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-card/20">
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

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.key} className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      {t(`info.${item.key}.label`)}
                    </p>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl border border-border/50 bg-card/30">
              <h3 className="font-semibold text-foreground mb-3">
                {t("availability.title")}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t("availability.description")}
              </p>
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <span className="text-sm text-green-400 font-medium">
                  {t("availability.status")}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 lg:p-8 rounded-2xl border border-border/50 bg-card/30"
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t("form.name")} <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    autoComplete="name"
                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                    placeholder={t("form.namePlaceholder")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t("form.email")} <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                    placeholder={t("form.emailPlaceholder")}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t("form.company")}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    autoComplete="organization"
                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                    placeholder={t("form.companyPlaceholder")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t("form.type")}
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                  >
                    <option value="inquiry">{t("form.types.inquiry")}</option>
                    <option value="quote">{t("form.types.quote")}</option>
                    <option value="consultation">{t("form.types.consultation")}</option>
                    <option value="other">{t("form.types.other")}</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t("form.message")} <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 resize-none"
                  placeholder={t("form.messagePlaceholder")}
                />
              </div>

              {/* Privacy note */}
              <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
                <Lock className="h-4 w-4 shrink-0" aria-hidden="true" />
                <p>{t("form.privacy")}</p>
              </div>

              <button
                type="submit"
                disabled={formState !== "idle"}
                className={cn(
                  "w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-medium transition-all duration-300",
                  formState === "success"
                    ? "bg-green-500 text-white"
                    : "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25",
                  formState === "submitting" && "opacity-80 cursor-not-allowed"
                )}
              >
                {formState === "idle" && (
                  <>
                    <Send className="h-4 w-4" aria-hidden="true" />
                    {t("form.submit")}
                  </>
                )}
                {formState === "submitting" && (
                  <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-label="Sending message" />
                )}
                {formState === "success" && (
                  <>
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    {t("form.success")}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
