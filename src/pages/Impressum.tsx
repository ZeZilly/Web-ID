import { useEffect } from "react";

export default function Impressum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-grow max-w-4xl mx-auto px-6 py-xl pt-[120px] w-full">
      <div className="mb-12">
        <h1 className="font-h1 text-[40px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-semibold text-on-surface mb-4">
          Impressum / Legal Notice
        </h1>
        <p className="font-body-md text-on-surface-variant">
          Information in accordance to European e-commerce directives.
        </p>
      </div>

      <div className="prose prose-invert max-w-none text-on-surface-variant space-y-8">
        <section>
          <h2 className="font-h2 text-[24px] text-on-surface mb-4 font-semibold">Company Details</h2>
          <p className="font-body-md leading-relaxed mb-1"><strong>multilingual.no</strong></p>
          <p className="font-body-md leading-relaxed mb-1">Precision AI Localization Services</p>
          <p className="font-body-md leading-relaxed mb-1">Oslo, Norway</p>
        </section>

        <section>
          <h2 className="font-h2 text-[24px] text-on-surface mb-4 font-semibold">Representation</h2>
          <p className="font-body-md leading-relaxed">
            <strong>Represented by:</strong><br />
            Mehmet Zeki Oguz<br />
            AI Agent Evaluation Specialist & Lead Linguist
          </p>
        </section>

        <section>
          <h2 className="font-h2 text-[24px] text-on-surface mb-4 font-semibold">Contact</h2>
          <p className="font-body-md leading-relaxed">
            <strong>Email:</strong> contact@multilingual.no
          </p>
        </section>

        <section>
          <h2 className="font-h2 text-[24px] text-on-surface mb-4 font-semibold">Dispute Resolution</h2>
          <p className="font-body-md leading-relaxed">
            The European Commission provides a platform for online dispute resolution (OS): <a href="https://ec.europa.eu/consumers/odr" className="text-primary hover:underline" target="_blank" rel="noreferrer">https://ec.europa.eu/consumers/odr</a>.<br />
            We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board, as our services are primarily strictly Business-to-Business (B2B).
          </p>
        </section>

        <section>
          <h2 className="font-h2 text-[24px] text-on-surface mb-4 font-semibold">Liability for Content</h2>
          <p className="font-body-md leading-relaxed">
            As service providers, we are liable for our own content on these websites. However, we are not obligated to permanently monitor submitted or stored information or to search for evidences that indicate illegal activities.
          </p>
        </section>
      </div>
    </main>
  );
}
