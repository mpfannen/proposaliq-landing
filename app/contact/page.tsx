import type { Metadata } from "next";
import { Mail, MessageSquare } from "lucide-react";
import CtaLink from "@/components/CtaLink";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the ProposalIQ team. We're here to help architecture and design firms get started with AI-powered proposal writing. Email: support@getproposaliq.com",
  alternates: {
    canonical: "https://www.getproposaliq.com/contact",
  },
  openGraph: {
    title: "Contact ProposalIQ",
    description:
      "Have questions about ProposalIQ? Reach out to our team — we're happy to help.",
    url: "https://www.getproposaliq.com/contact",
    images: [
      {
        url: "https://www.getproposaliq.com/og-contact.png",
        width: 1200,
        height: 630,
        alt: "Contact ProposalIQ",
      },
    ],
  },
  twitter: {
    title: "Contact ProposalIQ",
    description:
      "Have questions? Reach out to our team at support@getproposaliq.com.",
    images: ["https://www.getproposaliq.com/og-contact.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="section-label">Contact</p>
          <h1 className="mt-3 text-4xl font-bold text-brand-navy sm:text-5xl">
            Get in touch
          </h1>
          <p className="mt-4 text-lg text-brand-muted">
            Have questions about ProposalIQ? We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-brand-bg py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Left — info */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-brand-navy">
                We&apos;d love to hear from you
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                Whether you have questions about pricing, want to request a
                demo, or just want to learn more about how ProposalIQ can help
                your firm — send us a message and we&apos;ll get back to you
                within one business day.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand-border bg-white">
                    <Mail size={17} className="text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
                      Email
                    </p>
                    <a
                      href="mailto:support@getproposaliq.com"
                      className="mt-0.5 block text-sm font-medium text-brand-navy transition-colors hover:text-brand-blue"
                    >
                      support@getproposaliq.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand-border bg-white">
                    <MessageSquare size={17} className="text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
                      Response time
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-brand-navy">
                      Within 1 business day
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-sm font-semibold text-brand-navy">
                  Beta users get 90 days free
                </p>
                <p className="mt-1 text-sm text-brand-muted">
                  Sign up now and get a full 90-day trial. No credit card
                  required.
                </p>
                <CtaLink
                  href="https://app.getproposaliq.com/register"
                  label="contact_start_free_trial"
                  className="mt-3 inline-flex items-center text-sm font-semibold text-brand-blue hover:underline"
                >
                  Start free trial &rarr;
                </CtaLink>
              </div>
            </div>

            {/* Right — form */}
            <div className="rounded-xl border border-brand-border bg-white p-8 shadow-card lg:col-span-3">
              <h2 className="mb-6 text-base font-semibold text-brand-navy">
                Send us a message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
