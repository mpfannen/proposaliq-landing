import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center bg-white py-32">
      <div className="mx-auto max-w-md px-4 text-center">
        <p className="text-6xl font-bold text-brand-border">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-brand-navy">
          Page not found
        </h1>
        <p className="mt-3 text-brand-muted">
          Sorry, we couldn&apos;t find the page you were looking for.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </div>
    </section>
  );
}
