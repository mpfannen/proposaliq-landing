"use client";

import { trackCtaClick } from "@/lib/analytics";

interface CtaLinkProps {
  href: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}

export default function CtaLink({ href, label, className, children }: CtaLinkProps) {
  return (
    <a href={href} className={className} onClick={() => trackCtaClick(label)}>
      {children}
    </a>
  );
}
