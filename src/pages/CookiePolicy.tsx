import { useEffect } from "react";

export default function CookiePolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-grow max-w-4xl mx-auto px-6 py-xl pt-[120px] w-full">
      <div className="mb-12">
        <h1 className="font-h1 text-[40px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-semibold text-on-surface mb-4">
          Cookie Policy
        </h1>
        <p className="font-body-md text-on-surface-variant">
          Effective Date: April 23, 2026
        </p>
      </div>

      <div className="prose prose-invert max-w-none text-on-surface-variant space-y-8">
        <section>
          <h2 className="font-h2 text-[24px] text-on-surface mb-4 font-semibold">1. What Are Cookies?</h2>
          <p className="font-body-md leading-relaxed">
            In compliance with the ePrivacy Directive and GDPR, we inform you that our website uses cookies. A cookie is a small text file that a website saves on your computer or mobile device when you visit the site. It enables the website to remember your actions and preferences over a period, so you don't have to keep re-entering them whenever you come back to the site.
          </p>
        </section>

        <section>
          <h2 className="font-h2 text-[24px] text-on-surface mb-4 font-semibold">2. How We Use Cookies</h2>
          <p className="font-body-md leading-relaxed mb-4">
            We use cookies strictly to improve the operational capabilities of the website and to understand B2B traffic patterns. We categorize our cookies as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2 font-body-md">
            <li><strong>Strictly Necessary Cookies:</strong> These are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas or use shopping carts.</li>
            <li><strong>Analytical/Performance Cookies:</strong> They allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it.</li>
            <li><strong>Functionality Cookies:</strong> Used to recognize you when you return to our website.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-h2 text-[24px] text-on-surface mb-4 font-semibold">3. Third-Party Cookies</h2>
          <p className="font-body-md leading-relaxed">
            Please note that third parties (including, for example, providers of external services like web traffic analysis services) may also use cookies, over which we have no control. These cookies are likely to be analytical/performance cookies or targeting cookies.
          </p>
        </section>

        <section>
          <h2 className="font-h2 text-[24px] text-on-surface mb-4 font-semibold">4. Managing Your Cookies</h2>
          <p className="font-body-md leading-relaxed">
            You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
          </p>
        </section>
      </div>
    </main>
  );
}
