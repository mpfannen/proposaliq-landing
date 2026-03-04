"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Minus } from "lucide-react";
import { trackCtaClick } from "@/lib/analytics";

const PLANS = [
  {
    id: "solo",
    name: "Solo",
    monthlyPrice: 99,
    description: "For individual practitioners submitting a handful of proposals each month.",
    seats: "1 user",
    proposals: "10 proposals / month",
    popular: false,
    features: [
      "1 user seat",
      "10 proposals per month",
      "Firm knowledge base",
      "AI proposal generation",
      "Built-in editor",
      "PDF export",
      "Email support",
    ],
    missing: ["Team collaboration", "Priority support", "Custom templates"],
  },
  {
    id: "studio",
    name: "Studio",
    monthlyPrice: 199,
    description: "For small studios ready to scale their proposal output as a team.",
    seats: "3 users",
    proposals: "30 proposals / month",
    popular: true,
    features: [
      "3 user seats",
      "30 proposals per month",
      "Firm knowledge base",
      "AI proposal generation",
      "Built-in editor",
      "PDF export",
      "Team collaboration",
      "Priority email support",
      "Custom templates",
    ],
    missing: ["Dedicated account manager"],
  },
  {
    id: "firm",
    name: "Firm",
    monthlyPrice: 399,
    description: "For established firms with high proposal volume and a full team.",
    seats: "10 users",
    proposals: "Unlimited proposals",
    popular: false,
    features: [
      "10 user seats",
      "Unlimited proposals",
      "Firm knowledge base",
      "AI proposal generation",
      "Built-in editor",
      "PDF export",
      "Team collaboration",
      "Priority support",
      "Custom templates",
      "Dedicated account manager",
    ],
    missing: [],
  },
];

const FAQ = [
  {
    q: "What is the 90-day free trial for beta users?",
    a: "Beta users who sign up during our launch period receive a full 90-day free trial with access to all features of the Studio plan. No credit card is required to start.",
  },
  {
    q: "Can I switch plans after signing up?",
    a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.",
  },
  {
    q: "What types of RFP documents does ProposalIQ support?",
    a: "ProposalIQ accepts PDF and Word (.docx) RFP documents. Simply upload the file and the AI will parse and process the requirements automatically.",
  },
  {
    q: "How does the knowledge base work?",
    a: "You upload previous winning proposals, project sheets, and firm capability documents. ProposalIQ processes these to understand your firm's voice, specialties, and style — then uses that context to tailor every new proposal.",
  },
  {
    q: "Is my firm's data kept private?",
    a: "Absolutely. Your knowledge base, proposals, and data are private to your account and are never used to train models or shared with other users.",
  },
  {
    q: "Do you offer refunds?",
    a: "If you're not satisfied within the first 30 days of a paid subscription, contact us at support@getproposaliq.com and we'll issue a full refund.",
  },
];

export default function PricingClient() {
  const [annual, setAnnual] = useState(false);

  const getPrice = (monthly: number) => {
    if (!annual) return monthly;
    return Math.round(monthly * 0.8);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="section-label">Pricing</p>
          <h1 className="mt-3 text-4xl font-bold text-brand-navy sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-lg text-brand-muted">
            Choose the plan that fits your firm. Beta users get a 90-day free
            trial — no credit card required.
          </p>

          {/* Annual toggle */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span
              className={`text-sm font-medium ${!annual ? "text-brand-navy" : "text-brand-muted"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue ${
                annual ? "bg-brand-blue" : "bg-brand-border"
              }`}
              role="switch"
              aria-checked={annual}
              aria-label="Toggle annual billing"
            >
              <span
                className={`inline-block h-4 w-4 rounded-full bg-white shadow transition-transform duration-200 ${
                  annual ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium ${annual ? "text-brand-navy" : "text-brand-muted"}`}
            >
              Annual{" "}
              <span className="ml-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                Save 20%
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-brand-bg pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-xl border bg-white p-8 shadow-card transition-shadow duration-150 hover:shadow-card-hover ${
                  plan.popular
                    ? "border-brand-blue ring-2 ring-brand-blue"
                    : "border-brand-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-brand-blue px-3 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-brand-navy">{plan.name}</h2>
                  <p className="mt-1 text-sm text-brand-muted">{plan.description}</p>
                  <div className="mt-5 flex items-end gap-1">
                    <span className="text-4xl font-bold text-brand-navy">
                      ${getPrice(plan.monthlyPrice)}
                    </span>
                    <span className="mb-1 text-sm text-brand-muted">/month</span>
                  </div>
                  {annual && (
                    <p className="mt-1 text-xs text-green-600 font-medium">
                      Billed annually (${getPrice(plan.monthlyPrice) * 12}/yr)
                    </p>
                  )}
                  <div className="mt-2 flex gap-4 text-xs text-brand-muted">
                    <span>{plan.seats}</span>
                    <span>·</span>
                    <span>{plan.proposals}</span>
                  </div>
                </div>

                <a
                  href="https://app.getproposaliq.com/register"
                  className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-150 active:scale-[0.98] ${
                    plan.popular
                      ? "bg-brand-blue text-white hover:bg-blue-700"
                      : "border border-brand-border bg-white text-brand-navy hover:border-brand-navy hover:bg-brand-bg"
                  }`}
                  onClick={() => trackCtaClick(`pricing_${plan.id}_start_free_trial`)}
                >
                  Start free trial
                  <ArrowRight size={15} />
                </a>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-brand-navy">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-green-500"
                      />
                      {f}
                    </li>
                  ))}
                  {plan.missing.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-brand-muted">
                      <Minus size={16} className="mt-0.5 shrink-0 text-brand-border" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-brand-muted">
            Beta users receive a{" "}
            <span className="font-semibold text-brand-navy">90-day free trial</span> — no
            credit card required.{" "}
            <Link href="/contact" className="text-brand-blue hover:underline">
              Contact us
            </Link>{" "}
            for enterprise pricing.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="section-label">FAQ</p>
            <h2 className="mt-3 section-title">Frequently asked questions</h2>
          </div>

          <div className="mt-12 divide-y divide-brand-border">
            {FAQ.map((item) => (
              <details
                key={item.q}
                className="group py-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-brand-navy">
                  {item.q}
                  <svg
                    className="h-5 w-5 shrink-0 text-brand-muted transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">
            Ready to win more RFPs?
          </h2>
          <p className="mt-4 text-lg text-blue-200">
            Start your 90-day free trial today — no credit card required.
          </p>
          <a
            href="https://app.getproposaliq.com/register"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-base font-semibold text-brand-navy transition-all duration-150 hover:bg-blue-50 active:scale-[0.98]"
            onClick={() => trackCtaClick("pricing_cta_get_started_free")}
          >
            Get started for free
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
