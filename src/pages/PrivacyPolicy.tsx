import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-grow max-w-4xl mx-auto px-6 py-xl pt-[120px] w-full">
      <div className="mb-12">
        <h1 className="font-h1 text-[40px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-semibold text-on-surface mb-4">
          Privacy Policy
        </h1>
        <p className="font-body-md text-on-surface-variant">
          Last Updated: April 23, 2026
        </p>
      </div>

      <div className="prose prose-invert max-w-none text-on-surface-variant space-y-8">
        <section>
          <h2 className="font-h2 text-[24px] text-on-surface mb-4 font-semibold">1. Introduction</h2>
          <p className="font-body-md leading-relaxed mb-4">
            Welcome to multilingual.no. We respect your privacy and are committed to protecting your personal data. This Privacy Policy informs you about how we look after your personal data when you visit our website or use our B2B localization services, and tells you about your privacy rights and how the law protects you.
          </p>
          <p className="font-body-md leading-relaxed">
            This policy aims to give you information on how we collect and process your personal data in strict compliance with the General Data Protection Regulation (GDPR) (EU) 2016/679 and the Norwegian Personal Data Act.
          </p>
        </section>

        <section>
          <h2 className="font-h2 text-[24px] text-on-surface mb-4 font-semibold">2. Data Controller</h2>
          <p className="font-body-md leading-relaxed mb-4">
            multilingual.no is the data controller and is responsible for your personal data (collectively referred to as "we", "us" or "our" in this policy).
          </p>
          <ul className="list-disc pl-6 space-y-2 font-body-md">
            <li><strong>Entity:</strong> multilingual.no</li>
            <li><strong>Contact Email:</strong> privacy@multilingual.no</li>
            <li><strong>Jurisdiction:</strong> Norway</li>
          </ul>
        </section>

        <section>
          <h2 className="font-h2 text-[24px] text-on-surface mb-4 font-semibold">3. The Data We Collect</h2>
          <p className="font-body-md leading-relaxed mb-4">
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2 font-body-md">
            <li><strong>Identity Data:</strong> First name, last name, title, and company name.</li>
            <li><strong>Contact Data:</strong> Business email address, telephone numbers, and billing address.</li>
            <li><strong>Transaction Data:</strong> Details about payments to and from you and other details of services you have purchased from us.</li>
            <li><strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types.</li>
            <li><strong>Content Data:</strong> Files, documents, and text provided to us for the purpose of localization and translation.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-h2 text-[24px] text-on-surface mb-4 font-semibold">4. Use of AI and Third-Party Sub-Processors</h2>
          <p className="font-body-md leading-relaxed mb-4">
            Our hybrid localization engine utilizes enterprise-grade Artificial Intelligence. When processing your content, we ensure that:
          </p>
          <ul className="list-disc pl-6 space-y-2 font-body-md">
            <li>Data processed through our integrated LLMs (Large Language Models) are submitted via Zero-Data-Retention enterprise APIs.</li>
            <li>Your sensitive business data and content are <strong>never</strong> used to train public AI models.</li>
            <li>We enter into standard contractual clauses (SCCs) and Data Processing Agreements (DPAs) with any third-party infrastructure providers to ensure GDPR compliance.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-h2 text-[24px] text-on-surface mb-4 font-semibold">5. Data Retention</h2>
          <p className="font-body-md leading-relaxed">
            We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. Translation memories and project files are retained securely according to our client SLA, after which they are systematically purged.
          </p>
        </section>

        <section>
          <h2 className="font-h2 text-[24px] text-on-surface mb-4 font-semibold">6. Your Legal Rights (GDPR)</h2>
          <p className="font-body-md leading-relaxed mb-4">
            Under the GDPR, you have the following rights concerning your personal data:
          </p>
          <ul className="list-disc pl-6 space-y-2 font-body-md">
            <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate personal data.</li>
            <li><strong>Right to Erasure (Right to be Forgotten):</strong> Request deletion of your data when there is no good reason for us continuing to process it.</li>
            <li><strong>Right to Object:</strong> Object to processing of your personal data where we are relying on a legitimate interest.</li>
            <li><strong>Right to Data Portability:</strong> Request the transfer of your personal data to you or a third party in a structured, machine-readable format.</li>
          </ul>
          <p className="font-body-md leading-relaxed mt-4">
            To exercise any of these rights, please contact us at privacy@multilingual.no.
          </p>
        </section>
      </div>
    </main>
  );
}
