import Link from "next/link";

const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Pricing", href: "/pricing" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2">
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
            <p className="mt-3 max-w-xs text-sm text-brand-muted">
              AI-powered RFP proposal software built for architecture and design firms.
            </p>
            <p className="mt-4 text-sm text-brand-muted">
              <a
                href="mailto:support@getproposaliq.com"
                className="transition-colors hover:text-brand-navy"
              >
                support@getproposaliq.com
              </a>
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-navy">
                {group}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-muted transition-colors hover:text-brand-navy"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-brand-border pt-8 sm:flex-row">
          <p className="text-xs text-brand-muted">
            &copy; {new Date().getFullYear()} ProposalIQ. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://app.getproposaliq.com/login"
              className="text-xs text-brand-muted transition-colors hover:text-brand-navy"
            >
              Sign in
            </a>
            <a
              href="https://app.getproposaliq.com/register"
              className="text-xs font-semibold text-brand-blue transition-colors hover:text-blue-700"
            >
              Start free trial
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
