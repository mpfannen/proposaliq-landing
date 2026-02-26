import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ProposalIQ Privacy Policy — how we collect, use, and protect your data.",
  alternates: {
    canonical: "https://www.getproposaliq.com/privacy",
  },
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-brand-navy">Privacy Policy</h1>
        <p className="mt-4 text-brand-muted">Last updated: February 2026</p>
        <div className="prose mt-8 text-brand-muted">
          <p>
            ProposalIQ (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your
            privacy. This policy describes how we collect, use, and safeguard
            the information you provide when using our service.
          </p>
          <p className="mt-4">
            For questions about this policy, contact us at{" "}
            <a
              href="mailto:support@getproposaliq.com"
              className="text-brand-blue hover:underline"
            >
              support@getproposaliq.com
            </a>
            .
          </p>
          <p className="mt-4 text-sm italic text-brand-muted">
            A full privacy policy will be published before public launch.
          </p>
        </div>
      </div>
    </section>
  );
}
