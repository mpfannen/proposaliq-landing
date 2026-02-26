import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Zap,
  FileText,
  Star,
  Users,
  Clock,
  CheckCircle2,
  Upload,
  Sparkles,
  Printer,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ProposalIQ — AI Proposal Software for Architecture & Design Firms",
  description:
    "Win more RFPs with AI-powered proposal generation built for architecture and design firms. Generate tailored, firm-specific drafts in minutes, not days. Start your 90-day free trial.",
  alternates: {
    canonical: "https://www.getproposaliq.com",
  },
  openGraph: {
    title: "ProposalIQ — Win more RFPs. Less time writing.",
    description:
      "AI-powered proposal software built for architecture and design firms. Generate tailored drafts in minutes, not days.",
    url: "https://www.getproposaliq.com",
    images: [
      {
        url: "https://www.getproposaliq.com/og-home.png",
        width: 1200,
        height: 630,
        alt: "ProposalIQ — AI Proposal Software",
      },
    ],
  },
  twitter: {
    title: "ProposalIQ — Win more RFPs. Less time writing.",
    description:
      "AI-powered proposal software built for architecture and design firms. Generate tailored drafts in minutes, not days.",
    images: ["https://www.getproposaliq.com/og-home.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ProposalIQ",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "AI-powered RFP proposal software for architecture and design firms. Generate tailored, firm-specific proposal drafts in minutes.",
  url: "https://www.getproposaliq.com",
  offers: [
    {
      "@type": "Offer",
      name: "Solo",
      price: "99",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "99",
        priceCurrency: "USD",
        billingDuration: "P1M",
      },
    },
    {
      "@type": "Offer",
      name: "Studio",
      price: "199",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "Firm",
      price: "399",
      priceCurrency: "USD",
    },
  ],
  publisher: {
    "@type": "Organization",
    name: "ProposalIQ",
    url: "https://www.getproposaliq.com",
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@getproposaliq.com",
      contactType: "customer support",
    },
  },
};

const FEATURES = [
  {
    icon: BookOpen,
    title: "Firm Knowledge Base",
    description:
      "Build a living library of your best proposals, project experience, and firm capabilities. ProposalIQ learns your voice and winning style.",
  },
  {
    icon: Zap,
    title: "Instant AI Generation",
    description:
      "Drop in any RFP document and receive a complete, tailored proposal draft in minutes — not days of manual writing.",
  },
  {
    icon: Star,
    title: "Tailored to Your Firm",
    description:
      "Every output reflects your firm's specialties, tone, and past work — not generic boilerplate that sounds like everyone else.",
  },
  {
    icon: FileText,
    title: "Built-in Editor",
    description:
      "Review, refine, and polish AI-generated drafts with an intuitive editing experience designed for proposal workflows.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Invite teammates to review and contribute. Keep everyone aligned on proposal strategy with shared access.",
  },
  {
    icon: Clock,
    title: "Export & Print Ready",
    description:
      "Export polished proposals to PDF or print directly. Submit with confidence, every time.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    icon: BookOpen,
    title: "Add your Knowledge Base",
    description:
      "Load your best previous proposals to build your knowledge base. Add your firm's capabilities, specialties, and project experience so every proposal reflects your unique expertise. The AI learns your firm's voice and winning style.",
  },
  {
    step: "02",
    icon: Upload,
    title: "Upload the RFP",
    description:
      "Drop in the RFP document and ProposalIQ gets to work immediately.",
  },
  {
    step: "03",
    icon: Sparkles,
    title: "Generate the Proposal using AI",
    description:
      "ProposalIQ instantly generates a tailored, firm-specific proposal draft in minutes, not days.",
  },
  {
    step: "04",
    icon: Printer,
    title: "Refine, Export or Print",
    description:
      "Review and polish the AI draft with built-in editing tools, then export or print a polished proposal ready to submit.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
              <span className="text-xs font-semibold text-brand-blue">
                90-day free trial for beta users
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight text-brand-navy sm:text-6xl lg:text-7xl">
              Win more RFPs.{" "}
              <span className="text-brand-blue">Less time writing.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-xl text-brand-muted">
              ProposalIQ uses AI to help architecture and design firms generate
              tailored, firm-specific proposal drafts in minutes — not days of
              manual writing.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://app.getproposaliq.com/register"
                className="btn-primary-lg"
              >
                Start free trial
                <ArrowRight size={18} />
              </a>
              <Link href="/pricing" className="btn-secondary-lg">
                See pricing
              </Link>
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-brand-muted">
              {["No credit card required", "90-day free trial", "Cancel any time"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-green-500" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Subtle separator */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-border" />
      </section>

      {/* ── Features ── */}
      <section id="features" className="bg-brand-bg py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">Features</p>
            <h2 className="mt-3 section-title">
              Everything you need to win more proposals
            </h2>
            <p className="mt-4 section-subtitle">
              Purpose-built for architecture and design firms who are tired of
              spending days on every RFP.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="card">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-blue-100 bg-blue-50">
                    <Icon size={20} className="text-brand-blue" />
                  </div>
                  <h3 className="text-base font-semibold text-brand-navy">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">How it works</p>
            <h2 className="mt-3 section-title">
              From RFP to polished proposal in four steps
            </h2>
            <p className="mt-4 section-subtitle">
              ProposalIQ handles the heavy lifting so your team can focus on
              winning work.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="relative">
                  {/* Connector line */}
                  {index < HOW_IT_WORKS.length - 1 && (
                    <div className="absolute left-[calc(50%+2rem)] right-[-calc(50%-2rem)] top-6 hidden h-px bg-brand-border lg:block" />
                  )}

                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-brand-blue bg-white">
                        <Icon size={22} className="text-brand-blue" />
                      </div>
                      <span className="text-3xl font-bold text-brand-border">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-brand-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-brand-navy py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to win more RFPs?
            </h2>
            <p className="mt-4 text-lg text-blue-200">
              Join architecture and design firms already using ProposalIQ to
              submit better proposals, faster.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://app.getproposaliq.com/register"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-base font-semibold text-brand-navy transition-all duration-150 hover:bg-blue-50 active:scale-[0.98]"
              >
                Start your free trial
                <ArrowRight size={18} />
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-400 px-7 py-3.5 text-base font-semibold text-white transition-all duration-150 hover:border-white active:scale-[0.98]"
              >
                View pricing
              </Link>
            </div>
            <p className="mt-5 text-sm text-blue-300">
              Beta users get a 90-day free trial. No credit card required.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
