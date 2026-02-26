import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for architecture and design firms. Solo at $99/mo, Studio at $199/mo, Firm at $399/mo. Beta users get a 90-day free trial — no credit card required.",
  alternates: {
    canonical: "https://www.getproposaliq.com/pricing",
  },
  openGraph: {
    title: "ProposalIQ Pricing — Plans for Every Firm Size",
    description:
      "Simple pricing for architecture and design firms. Start with a 90-day free trial. No credit card required.",
    url: "https://www.getproposaliq.com/pricing",
    images: [
      {
        url: "https://www.getproposaliq.com/og-pricing.png",
        width: 1200,
        height: 630,
        alt: "ProposalIQ Pricing",
      },
    ],
  },
  twitter: {
    title: "ProposalIQ Pricing — Plans for Every Firm Size",
    description:
      "Simple pricing for architecture and design firms. 90-day free trial, no credit card required.",
    images: ["https://www.getproposaliq.com/og-pricing.png"],
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
