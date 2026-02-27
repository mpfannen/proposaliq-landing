import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.getproposaliq.com"),
  title: {
    default: "ProposalIQ — Win More RFPs with AI-Powered Proposals",
    template: "%s | ProposalIQ",
  },
  description:
    "ProposalIQ uses AI to help architecture and design firms win more RFPs. Generate tailored, firm-specific proposal drafts in minutes, not days.",
  keywords: [
    "RFP proposal software",
    "AI proposal generator",
    "architecture firm proposals",
    "design firm RFP",
    "proposal automation",
  ],
  authors: [{ name: "ProposalIQ" }],
  creator: "ProposalIQ",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ProposalIQ",
  },
  twitter: {
    card: "summary_large_image",
    site: "@getproposaliq",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <link rel="alternate" type="text/plain" title="LLMs.txt" href="/llms.txt" />
      </head>
      <body className="flex min-h-screen flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-3XXEP6NBM7" />
      </body>
    </html>
  );
}
