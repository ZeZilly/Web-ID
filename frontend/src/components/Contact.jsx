import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { useInView } from "../hooks/useInView";
import { personalInfo } from "../mock";
import { Send, Mail, MapPin, Phone, Linkedin, CheckCircle2 } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const { t } = useApp();
  const { toast } = useToast();
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    // Mock submission — stored locally for now
    await new Promise((r) => setTimeout(r, 900));
    try {
      const stored = JSON.parse(localStorage.getItem("cv-messages") || "[]");
      stored.push({ ...form, at: new Date().toISOString() });
      localStorage.setItem("cv-messages", JSON.stringify(stored));
    } catch {
      // ignore
    }
    setSending(false);
    setSent(true);
    toast({ title: t.contact.form.success });
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact" ref={ref} className="section">
      <div className={`reveal ${inView ? "in-view" : ""}`}>
        <div className="scanline mb-4">{t.contact.kicker}</div>
        <h2 className="display text-[36px] md:text-[56px] mb-4">{t.contact.title}</h2>
        <p
          className="text-[16px] md:text-[17px] max-w-[60ch] mb-12"
          style={{ color: "var(--text-2)" }}
        >
          {t.contact.intro}
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
        {/* Info panel */}
        <div className={`reveal reveal-delay-1 ${inView ? "in-view" : ""} card-surface p-6 md:p-8 space-y-5`}>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-4 group"
          >
            <div
              className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
              style={{
                background: "var(--accent-soft)",
                border: "1px solid var(--accent-border)",
                color: "var(--accent)",
              }}
            >
              <Mail size={18} />
            </div>
            <div>
              <div
                className="text-[10px] font-mono uppercase tracking-[0.14em] mb-0.5"
                style={{ color: "var(--muted)" }}
              >
                Email
              </div>
              <div className="text-[14px] font-medium group-hover:text-[var(--accent)] transition-colors">
                {personalInfo.email}
              </div>
            </div>
          </a>

          <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-4 group">
            <div
              className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
              style={{
                background: "var(--accent-soft)",
                border: "1px solid var(--accent-border)",
                color: "var(--accent)",
              }}
            >
              <Phone size={18} />
            </div>
            <div>
              <div
                className="text-[10px] font-mono uppercase tracking-[0.14em] mb-0.5"
                style={{ color: "var(--muted)" }}
              >
                Phone
              </div>
              <div className="text-[14px] font-medium group-hover:text-[var(--accent)] transition-colors">
                {personalInfo.phone}
              </div>
            </div>
          </a>

          <div className="flex items-center gap-4">
            <div
              className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background: "var(--accent-soft)",
                border: "1px solid var(--accent-border)",
                color: "var(--accent)",
              }}
            >
              <MapPin size={18} />
            </div>
            <div>
              <div
                className="text-[10px] font-mono uppercase tracking-[0.14em] mb-0.5"
                style={{ color: "var(--muted)" }}
              >
                Location
              </div>
              <div className="text-[14px] font-medium">{personalInfo.location}</div>
            </div>
          </div>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group"
          >
            <div
              className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
              style={{
                background: "var(--accent-soft)",
                border: "1px solid var(--accent-border)",
                color: "var(--accent)",
              }}
            >
              <Linkedin size={18} />
            </div>
            <div>
              <div
                className="text-[10px] font-mono uppercase tracking-[0.14em] mb-0.5"
                style={{ color: "var(--muted)" }}
              >
                LinkedIn
              </div>
              <div className="text-[14px] font-medium group-hover:text-[var(--accent)] transition-colors">
                linkedin.com/in/zekiogz
              </div>
            </div>
          </a>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className={`reveal reveal-delay-2 ${inView ? "in-view" : ""} card-surface p-6 md:p-8`}
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                className="block text-[11px] font-mono uppercase tracking-[0.14em] mb-2"
                style={{ color: "var(--muted)" }}
              >
                {t.contact.form.name}
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg text-[14px] transition-colors"
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                }}
              />
            </div>
            <div>
              <label
                className="block text-[11px] font-mono uppercase tracking-[0.14em] mb-2"
                style={{ color: "var(--muted)" }}
              >
                {t.contact.form.email}
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg text-[14px]"
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                }}
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-[11px] font-mono uppercase tracking-[0.14em] mb-2"
              style={{ color: "var(--muted)" }}
            >
              {t.contact.form.subject}
            </label>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg text-[14px]"
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
            />
          </div>

          <div className="mb-5">
            <label
              className="block text-[11px] font-mono uppercase tracking-[0.14em] mb-2"
              style={{ color: "var(--muted)" }}
            >
              {t.contact.form.message}
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg text-[14px] resize-none"
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="btn-primary w-full sm:w-auto justify-center"
          >
            {sent ? (
              <>
                <CheckCircle2 size={16} />
                {t.contact.form.success}
              </>
            ) : sending ? (
              <>{t.contact.form.sending}</>
            ) : (
              <>
                <Send size={16} />
                {t.contact.form.submit}
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
