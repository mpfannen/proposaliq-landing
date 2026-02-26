import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Heart, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "ProposalIQ was built by a product manager frustrated by how long RFP proposals take at architecture and design firms. Learn our story, mission, and the problem we solve.",
  alternates: {
    canonical: "https://www.getproposaliq.com/about",
  },
  openGraph: {
    title: "About ProposalIQ — Built for Architecture & Design Firms",
    description:
      "Learn how ProposalIQ was born from firsthand frustration with the RFP proposal process at architecture and design firms.",
    url: "https://www.getproposaliq.com/about",
    images: [
      {
        url: "https://www.getproposaliq.com/og-about.png",
        width: 1200,
        height: 630,
        alt: "About ProposalIQ",
      },
    ],
  },
  twitter: {
    title: "About ProposalIQ",
    description:
      "Built by a product manager whose daughter works at a Tampa design firm — frustrated by how long proposals take.",
    images: ["https://www.getproposaliq.com/og-about.png"],
  },
};

const VALUES = [
  {
    icon: Target,
    title: "Built for firms, not generic users",
    description:
      "Every feature decision is made with architecture and design firms in mind. We don't try to be everything to everyone.",
  },
  {
    icon: Heart,
    title: "Respect for craft",
    description:
      "Great proposals reflect genuine expertise. ProposalIQ amplifies your firm's voice — it doesn't replace it.",
  },
  {
    icon: Lightbulb,
    title: "Practical AI",
    description:
      "We apply AI where it saves real time: drafting, formatting, and tailoring content — leaving creative judgment to you.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="section-label">About</p>
          <h1 className="mt-3 text-4xl font-bold text-brand-navy sm:text-5xl">
            Built from firsthand frustration
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-brand-muted">
            ProposalIQ exists because we watched talented design professionals
            spend days on paperwork that should take hours.
          </p>
        </div>
      </section>

      {/* Origin story */}
      <section className="bg-brand-bg py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-brand-border bg-white p-8 shadow-card sm:p-10">
            <p className="section-label mb-4">Our story</p>
            <h2 className="text-2xl font-semibold text-brand-navy sm:text-3xl">
              A problem seen up close
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-brand-muted">
              <p>
                ProposalIQ was founded by a product manager whose daughter works
                at a design firm in Tampa, Florida. Watching her spend entire
                weekends crafting RFP responses — pulling from old proposals,
                rewriting the same boilerplate, formatting documents from
                scratch — made the problem impossible to ignore.
              </p>
              <p>
                The work wasn&apos;t the hard part. The firm had great
                experience, strong references, and a clear point of view. What
                was hard was the time it took to translate all of that into a
                competitive proposal document — every single time.
              </p>
              <p>
                &ldquo;There&apos;s no reason this should take three days,&rdquo; he thought.
                &ldquo;Their expertise is already there. The AI just needs to know
                where to look.&rdquo;
              </p>
              <p>
                That insight became ProposalIQ: a tool that learns your
                firm&apos;s voice, experience, and winning style, then puts that
                knowledge to work the moment a new RFP lands on your desk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem we solve */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">The problem</p>
            <h2 className="mt-3 section-title">
              Why proposals take so long — and what we do about it
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Problem */}
              <div className="rounded-xl border border-red-100 bg-red-50 p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-red-500">
                  Before ProposalIQ
                </p>
                <ul className="space-y-3">
                  {[
                    "3–5 days to write a single proposal from scratch",
                    "Manually hunting through old proposals for relevant content",
                    "Rewriting the same firm overview and capability statements",
                    "Inconsistent tone and formatting across proposals",
                    "Key differentiators buried or missed entirely",
                    "Exhausted teams rushing to meet submission deadlines",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-red-800">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div className="rounded-xl border border-green-100 bg-green-50 p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-green-600">
                  With ProposalIQ
                </p>
                <ul className="space-y-3">
                  {[
                    "Complete tailored draft in minutes, not days",
                    "AI surfaces the most relevant past work automatically",
                    "Firm capabilities pulled from your knowledge base",
                    "Consistent voice and formatting every time",
                    "Your firm's best work front and center",
                    "Team reviews and refines instead of writing from scratch",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-green-800">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-bg py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">What we believe</p>
            <h2 className="mt-3 section-title">Our values</h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="card text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50">
                    <Icon size={22} className="text-brand-blue" />
                  </div>
                  <h3 className="text-base font-semibold text-brand-navy">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="section-label">Team</p>
            <h2 className="mt-3 section-title">Who&apos;s building ProposalIQ</h2>
            <p className="mt-4 section-subtitle">
              A small team focused on making proposal writing less painful for
              the firms doing great work.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="card w-full max-w-sm text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand-border bg-brand-bg text-2xl font-bold text-brand-navy">
                PM
              </div>
              <h3 className="text-base font-semibold text-brand-navy">Founder</h3>
              <p className="mt-1 text-sm text-brand-blue">ProposalIQ</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                Product manager with 15+ years building B2B software. Started
                ProposalIQ after watching his daughter&apos;s Tampa design firm
                spend entire weekends on proposal documents that AI could
                generate in minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">
            Ready to spend less time writing proposals?
          </h2>
          <p className="mt-4 text-lg text-blue-200">
            Try ProposalIQ free for 90 days. No credit card required.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://app.getproposaliq.com/register"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-base font-semibold text-brand-navy transition-all duration-150 hover:bg-blue-50 active:scale-[0.98]"
            >
              Start free trial
              <ArrowRight size={18} />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-blue-400 px-7 py-3.5 text-base font-semibold text-white transition-all duration-150 hover:border-white active:scale-[0.98]"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
