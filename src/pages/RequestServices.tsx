import { useState } from "react";
import { User, FileText, Globe, Sliders, Mail, CheckCircle2, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required").max(100),
  company: z.string().max(150),
  email: z.string().email("Invalid email address").max(200),
  projectTitle: z.string().min(2, "Project title is required").max(200),
  description: z.string().max(5000),
  budget: z.string().max(50),
  contentType: z.string().max(50),
  estimatedWords: z.coerce.number().optional().default(0),
  sourceLanguage: z.string().max(50),
  targetLanguages: z.string().max(500),
  services: z.array(z.string()).max(10),
  preferredStartDate: z.string().max(50),
  deliveryDeadline: z.string().max(50),
});

type FormData = z.infer<typeof formSchema>;

export default function RequestServices() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      projectTitle: "",
      description: "",
      budget: "",
      contentType: "web",
      estimatedWords: 0,
      sourceLanguage: "en",
      targetLanguages: "",
      services: [],
      preferredStartDate: "",
      deliveryDeadline: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError("");
    try {
      await addDoc(collection(db, "quoteRequests"), {
        ...data,
        createdAt: serverTimestamp(),
      });
      setSubmitSuccess(true);
      window.scrollTo(0, 0);
    } catch (err) {
      console.error("Firebase Error: ", err);
      setSubmitError("An error occurred while submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <main className="flex-grow max-w-7xl mx-auto px-gutter w-full py-xl pt-[120px] flex items-center justify-center min-h-[60vh]">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-primary w-8 h-8" />
          </div>
          <h1 className="font-h2 text-[32px] font-semibold text-on-surface mb-2">Request Received</h1>
          <p className="font-body-md text-on-surface-variant mb-6">
            Thank you for reaching out. Our team will review your project specifications and get back to you within 24 hours with a custom proposal.
          </p>
          <button
            onClick={() => window.location.href = "/"}
            className="bg-primary text-on-primary font-button px-6 py-2 rounded-DEFAULT hover:bg-primary/90 transition-colors"
          >
            Return to Home
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow max-w-7xl mx-auto px-gutter w-full py-xl pt-[120px]">
      {/* Hero Section */}
      <div className="mb-xl max-w-3xl">
        <h1 className="font-h1 text-[48px] leading-[1.1] tracking-[-0.02em] font-semibold text-on-surface mb-sm">
          Project Specification
        </h1>
        <p className="font-body-lg text-[18px] leading-[1.6] text-on-surface-variant">
          Detail your localization requirements below. Our specialized AI models
          and expert linguists are ready to align with your global strategy.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
        {/* Form Area */}
        <div className="lg:col-span-8">
          {submitError && (
            <div className="mb-6 p-4 bg-error/10 border border-error/20 rounded-md text-error text-sm">
              {submitError}
            </div>
          )}
          <form className="space-y-lg" onSubmit={handleSubmit(onSubmit)}>
            {/* Section 1: Contact Information */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg">
              <div className="flex items-center gap-xs mb-md border-b border-outline-variant pb-sm">
                <User className="text-primary" size={24} />
                <h2 className="font-h3 text-[24px] tracking-[-0.01em] font-semibold text-on-surface">
                  Client Details
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div>
                  <label className="block font-label-caps text-[12px] uppercase font-semibold text-on-surface-variant mb-xs">
                    Full Name *
                  </label>
                  <input
                    {...register("fullName")}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-xs font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="Jane Doe"
                    type="text"
                  />
                  {errors.fullName && <span className="text-error text-xs mt-1 block">{errors.fullName.message}</span>}
                </div>
                <div>
                  <label className="block font-label-caps text-[12px] uppercase font-semibold text-on-surface-variant mb-xs">
                    Company
                  </label>
                  <input
                    {...register("company")}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-xs font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="Acme Corp"
                    type="text"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block font-label-caps text-[12px] uppercase font-semibold text-on-surface-variant mb-xs">
                    Work Email *
                  </label>
                  <input
                    {...register("email")}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-xs font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="jane@acmecorp.com"
                    type="email"
                  />
                  {errors.email && <span className="text-error text-xs mt-1 block">{errors.email.message}</span>}
                </div>
              </div>
            </div>

            {/* Section 2: Project Overview */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg">
              <div className="flex items-center gap-xs mb-md border-b border-outline-variant pb-sm">
                <FileText className="text-primary" size={24} />
                <h2 className="font-h3 text-[24px] tracking-[-0.01em] font-semibold text-on-surface">
                  Project Overview
                </h2>
              </div>
              <div className="space-y-md">
                <div>
                  <label className="block font-label-caps text-[12px] uppercase font-semibold text-on-surface-variant mb-xs">
                    Project Title *
                  </label>
                  <input
                    {...register("projectTitle")}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-xs font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="e.g., Q3 Marketing Campaign Localization"
                    type="text"
                  />
                  {errors.projectTitle && <span className="text-error text-xs mt-1 block">{errors.projectTitle.message}</span>}
                </div>
                <div>
                  <label className="block font-label-caps text-[12px] uppercase font-semibold text-on-surface-variant mb-xs">
                    Brief Description
                  </label>
                  <textarea
                    {...register("description")}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-xs font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                    placeholder="Describe the core objective and target audience..."
                    rows={3}
                  ></textarea>
                </div>
                <div>
                  <label className="block font-label-caps text-[12px] uppercase font-semibold text-on-surface-variant mb-xs">
                    Estimated Budget (USD)
                  </label>
                  <select
                    {...register("budget")}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-xs font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  >
                    <option disabled value="">
                      Select a range
                    </option>
                    <option value="under_5k">Under $5,000</option>
                    <option value="5k_15k">$5,000 - $15,000</option>
                    <option value="15k_50k">$15,000 - $50,000</option>
                    <option value="over_50k">$50,000+</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 3: Scope & Languages */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg">
              <div className="flex items-center gap-xs mb-md border-b border-outline-variant pb-sm">
                <Globe className="text-primary" size={24} />
                <h2 className="font-h3 text-[24px] tracking-[-0.01em] font-semibold text-on-surface">
                  Scope &amp; Languages
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md mb-md">
                <div>
                  <label className="block font-label-caps text-[12px] uppercase font-semibold text-on-surface-variant mb-xs">
                    Content Type
                  </label>
                  <select
                    {...register("contentType")}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-xs font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  >
                    <option value="web">Web Application</option>
                    <option value="mobile">Mobile App</option>
                    <option value="marketing">Marketing Material</option>
                    <option value="technical">Technical Documentation</option>
                  </select>
                </div>
                <div>
                  <label className="block font-label-caps text-[12px] uppercase font-semibold text-on-surface-variant mb-xs">
                    Estimated Word Count
                  </label>
                  <input
                    {...register("estimatedWords")}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-xs font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="e.g., 10000"
                    type="number"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div>
                  <label className="block font-label-caps text-[12px] uppercase font-semibold text-on-surface-variant mb-xs">
                    Source Language
                  </label>
                  <select
                    {...register("sourceLanguage")}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-xs font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  >
                    <option value="en">English (US)</option>
                    <option value="en-gb">English (UK)</option>
                    <option value="no">Norwegian</option>
                    <option value="sv">Swedish</option>
                  </select>
                </div>
                <div>
                  <label className="block font-label-caps text-[12px] uppercase font-semibold text-on-surface-variant mb-xs">
                    Target Languages
                  </label>
                  <input
                    {...register("targetLanguages")}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-xs font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="e.g., German, French, Japanese"
                    type="text"
                  />
                  <p className="font-body-sm text-[14px] text-on-surface-variant mt-xs">
                    Separate multiple languages with commas.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Services & Timeline */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg">
              <div className="flex items-center gap-xs mb-md border-b border-outline-variant pb-sm">
                <Sliders className="text-primary" size={24} />
                <h2 className="font-h3 text-[24px] tracking-[-0.01em] font-semibold text-on-surface">
                  Services &amp; Timeline
                </h2>
              </div>
              <div className="mb-lg">
                <label className="block font-label-caps text-[12px] uppercase font-semibold text-on-surface-variant mb-sm">
                  Required Services
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
                  <label className="flex items-start gap-sm p-sm border border-outline-variant rounded-DEFAULT cursor-pointer hover:bg-surface transition-colors">
                    <input
                      {...register("services")}
                      value="standard"
                      className="mt-1 text-primary focus:ring-primary border-outline-variant rounded-sm bg-transparent"
                      type="checkbox"
                    />
                    <div>
                      <span className="block font-body-md font-medium text-on-surface">
                        Standard Localization
                      </span>
                      <span className="block font-body-sm text-[14px] text-on-surface-variant">
                        Direct translation with context.
                      </span>
                    </div>
                  </label>
                  <label className="flex items-start gap-sm p-sm border border-outline-variant rounded-DEFAULT cursor-pointer hover:bg-surface transition-colors">
                    <input
                      {...register("services")}
                      value="transcreation"
                      className="mt-1 text-primary focus:ring-primary border-outline-variant rounded-sm bg-transparent"
                      type="checkbox"
                    />
                    <div>
                      <span className="block font-body-md font-medium text-on-surface">
                        Transcreation
                      </span>
                      <span className="block font-body-sm text-[14px] text-on-surface-variant">
                        Creative adaptation for target markets.
                      </span>
                    </div>
                  </label>
                  <label className="flex items-start gap-sm p-sm border border-outline-variant rounded-DEFAULT cursor-pointer hover:bg-surface transition-colors">
                    <input
                      {...register("services")}
                      value="seo"
                      className="mt-1 text-primary focus:ring-primary border-outline-variant rounded-sm bg-transparent"
                      type="checkbox"
                    />
                    <div>
                      <span className="block font-body-md font-medium text-on-surface">
                        SEO Optimization
                      </span>
                      <span className="block font-body-sm text-[14px] text-on-surface-variant">
                        Keyword research for target regions.
                      </span>
                    </div>
                  </label>
                  <label className="flex items-start gap-sm p-sm border border-outline-variant rounded-DEFAULT cursor-pointer hover:bg-surface transition-colors">
                    <input
                      {...register("services")}
                      value="cultural"
                      className="mt-1 text-primary focus:ring-primary border-outline-variant rounded-sm bg-transparent"
                      type="checkbox"
                    />
                    <div>
                      <span className="block font-body-md font-medium text-on-surface">
                        Cultural Consultation
                      </span>
                      <span className="block font-body-sm text-[14px] text-on-surface-variant">
                        Deep dive into local nuance.
                      </span>
                    </div>
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div>
                  <label className="block font-label-caps text-[12px] uppercase font-semibold text-on-surface-variant mb-xs">
                    Preferred Start Date
                  </label>
                  <input
                    {...register("preferredStartDate")}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-xs font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    type="date"
                  />
                </div>
                <div>
                  <label className="block font-label-caps text-[12px] uppercase font-semibold text-on-surface-variant mb-xs">
                    Delivery Deadline
                  </label>
                  <input
                    {...register("deliveryDeadline")}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-xs font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    type="date"
                  />
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div className="flex justify-end pt-sm border-t border-outline-variant">
              <button
                className="bg-primary text-on-primary font-button text-[14px] font-medium px-xl py-xs rounded-DEFAULT hover:bg-primary/90 transition-colors shadow-sm h-10 flex items-center justify-center min-w-[150px]"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : (
                  "Submit Request"
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Sticky Info Sidebar */}
        <div className="lg:col-span-4 hidden lg:block">
          <div className="sticky top-32 bg-surface-container-low border border-outline-variant rounded-lg p-lg">
            <h3 className="font-h3 text-[24px] font-semibold text-on-surface mb-md">
              Our Process
            </h3>
            <div className="space-y-md">
              <div className="flex gap-sm">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-label-caps text-[12px] font-semibold">
                  1
                </div>
                <div>
                  <h4 className="font-body-md font-medium text-on-surface">
                    Submission Review
                  </h4>
                  <p className="font-body-sm text-[14px] text-on-surface-variant">
                    Our team analyzes your requirements and source files within 24
                    hours.
                  </p>
                </div>
              </div>
              <div className="flex gap-sm">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-label-caps text-[12px] font-semibold">
                  2
                </div>
                <div>
                  <h4 className="font-body-md font-medium text-on-surface">
                    Custom Proposal
                  </h4>
                  <p className="font-body-sm text-[14px] text-on-surface-variant">
                    You receive a detailed quote, timeline, and matched linguist
                    profiles.
                  </p>
                </div>
              </div>
              <div className="flex gap-sm">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant font-label-caps text-[12px] font-semibold">
                  3
                </div>
                <div>
                  <h4 className="font-body-md font-medium text-on-surface">
                    Project Kickoff
                  </h4>
                  <p className="font-body-sm text-[14px] text-on-surface-variant">
                    Upon approval, integration begins seamlessly.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-lg pt-md border-t border-outline-variant">
              <p className="font-body-sm text-[14px] text-on-surface-variant mb-sm">
                Need immediate assistance?
              </p>
              <a
                href="mailto:support@linguistai.com"
                className="font-body-md text-primary font-medium hover:underline flex items-center gap-xs"
              >
                <Mail size={16} /> support@linguistai.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
