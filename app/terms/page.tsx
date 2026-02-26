import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "ProposalIQ Terms of Service — the rules and conditions for using our platform.",
  alternates: {
    canonical: "https://www.getproposaliq.com/terms",
  },
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-brand-navy">Terms of Service</h1>
        <p className="mt-4 text-brand-muted">Last updated: February 2026</p>
        <div className="prose mt-8 text-brand-muted">
          <p>
            By accessing or using ProposalIQ, you agree to be bound by these
            terms. Please read them carefully.
          </p>
          <p className="mt-4">
            For questions about these terms, contact us at{" "}
            <a
              href="mailto:support@getproposaliq.com"
              className="text-brand-blue hover:underline"
            >
              support@getproposaliq.com
            </a>
            .
          </p>
          <p className="mt-4 text-sm italic text-brand-muted">
            Full terms of service will be published before public launch.
          </p>
        </div>
      </div>
    </section>
  );
}
