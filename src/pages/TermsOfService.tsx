import { useEffect } from "react";

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-grow max-w-4xl mx-auto px-6 py-xl pt-[120px] w-full">
      <div className="mb-12">
        <h1 className="font-h1 text-[40px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-semibold text-on-surface mb-4">
          Terms of Service
        </h1>
        <p className="font-body-md text-on-surface-variant">
          Effective Date: April 23, 2026
        </p>
      </div>

      <div className="prose prose-invert max-w-none text-on-surface-variant space-y-8">
        <section>
          <h2 className="font-h2 text-[24px] text-on-surface mb-4 font-semibold">1. Agreement to Terms</h2>
          <p className="font-body-md leading-relaxed">
            These Terms of Service ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("Client"), and multilingual.no ("Company", "we", "us", or "our"), concerning your access to and use of our localization, translation, and AI agent orchestration services (the "Services"). By procuring our Services, you agree to be bound by these Terms.
          </p>
        </section>

        <section>
          <h2 className="font-h2 text-[24px] text-on-surface mb-4 font-semibold">2. Provision of Services</h2>
          <p className="font-body-md leading-relaxed mb-4">
            We employ a hybrid methodology leveraging enterprise-grade Artificial Intelligence combined with expert human verification.
          </p>
          <ul className="list-disc pl-6 space-y-2 font-body-md">
            <li>We will provide the localization services with reasonable skill and care, matching industry standards.</li>
            <li>Delivery timelines are estimated logically but are not legally binding unless an explicit SLA is signed.</li>
            <li>We reserve the right to refuse service for content that is illegal, defamatory, or violates international sanctions.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-h2 text-[24px] text-on-surface mb-4 font-semibold">3. Client Obligations</h2>
          <p className="font-body-md leading-relaxed mb-4">
            As a Client, you assert and guarantee that:
          </p>
          <ul className="list-disc pl-6 space-y-2 font-body-md">
            <li>You possess all necessary intellectual property rights, licenses, and permissions for the source content provided to us.</li>
            <li>Providing the content to us for translation does not infringe upon any third-party rights or non-disclosure agreements.</li>
            <li>You will provide timely feedback to facilitate the completion of the project.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-h2 text-[24px] text-on-surface mb-4 font-semibold">4. Intellectual Property</h2>
          <p className="font-body-md leading-relaxed mb-4">
            <strong>Client IP:</strong> All right, title, and interest in the source materials and the final translated deliverables shall remain the sole property of the Client, contingent upon full payment of all assigned fees.
          </p>
          <p className="font-body-md leading-relaxed">
            <strong>Company IP:</strong> multilingual.no retains all rights to its proprietary translation memories, AI workflows, agentic methodologies, software, and generalized glossaries developed during the execution of the services.
          </p>
        </section>

        <section>
          <h2 className="font-h2 text-[24px] text-on-surface mb-4 font-semibold">5. Confidentiality</h2>
          <p className="font-body-md leading-relaxed">
            We adhere to strict corporate confidentiality standards. All materials provided by the Client are considered highly confidential trade secrets. We maintain Non-Disclosure Agreements (NDAs) with all in-house personnel and contracted native linguists. Content is processed securely and is strictly insulated from public LLM training datasets.
          </p>
        </section>

        <section>
          <h2 className="font-h2 text-[24px] text-on-surface mb-4 font-semibold">6. Limitation of Liability</h2>
          <p className="font-body-md leading-relaxed">
            To the maximum extent permitted by applicable law, in no event shall multilingual.no be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data, or other intangible losses. Our total cumulative liability arising out of or related to these Terms will not exceed the total amount paid by the Client to us for the specific project giving rise to the claim.
          </p>
        </section>

        <section>
          <h2 className="font-h2 text-[24px] text-on-surface mb-4 font-semibold">7. Governing Law and Dispute Resolution</h2>
          <p className="font-body-md leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of Norway, without regard to its conflict of law principles. Any dispute arising out of or in connection with these Terms, including disputes relating to its validity, breach, or termination, shall be exclusively resolved by the competent courts of Oslo, Norway.
          </p>
        </section>
      </div>
    </main>
  );
}
