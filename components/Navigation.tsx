"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-navy">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M3 2h8l4 4v10H3V2z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
                fill="none"
              />
              <path d="M11 2v4h4" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M6 9h6M6 12h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-lg font-bold text-brand-navy">ProposalIQ</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href.replace("/#", "/"));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-150 ${
                  isActive
                    ? "text-brand-navy"
                    : "text-brand-muted hover:text-brand-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://app.getproposaliq.com/login"
            className="text-sm font-semibold text-brand-navy transition-colors hover:text-brand-blue"
          >
            Sign in
          </a>
          <a href="https://app.getproposaliq.com/register" className="btn-primary">
            Get Started
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="flex items-center justify-center rounded-lg p-2 text-brand-muted transition-colors hover:bg-brand-bg hover:text-brand-navy md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-brand-border bg-white px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-brand-muted transition-colors hover:bg-brand-bg hover:text-brand-navy"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2 border-t border-brand-border pt-4">
            <a
              href="https://app.getproposaliq.com/login"
              className="btn-secondary w-full"
            >
              Sign in
            </a>
            <a
              href="https://app.getproposaliq.com/register"
              className="btn-primary w-full"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
