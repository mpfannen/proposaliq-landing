"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setState("submitting");

    // Simulate async form submission — wire to your API / form backend
    await new Promise((res) => setTimeout(res, 1000));
    setState("success");
  };

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-green-200 bg-green-50 px-8 py-14 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 size={28} className="text-green-600" />
        </div>
        <h3 className="text-lg font-semibold text-brand-navy">Message sent!</h3>
        <p className="max-w-sm text-sm text-brand-muted">
          Thanks for reaching out. We&apos;ll get back to you at{" "}
          <span className="font-medium text-brand-navy">{formData.email}</span>{" "}
          within one business day.
        </p>
        <button
          onClick={() => {
            setState("idle");
            setFormData({ name: "", email: "", company: "", message: "" });
          }}
          className="mt-2 text-sm font-semibold text-brand-blue hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-brand-navy"
          >
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="w-full rounded-lg border border-brand-border bg-white px-3.5 py-2.5 text-sm text-brand-navy placeholder:text-brand-muted/60 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-brand-navy"
          >
            Work email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@yourfirm.com"
            className="w-full rounded-lg border border-brand-border bg-white px-3.5 py-2.5 text-sm text-brand-navy placeholder:text-brand-muted/60 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className="mb-1.5 block text-sm font-medium text-brand-navy"
        >
          Company / Firm name
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          placeholder="Smith Architecture"
          className="w-full rounded-lg border border-brand-border bg-white px-3.5 py-2.5 text-sm text-brand-navy placeholder:text-brand-muted/60 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-brand-navy"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us how we can help..."
          className="w-full resize-none rounded-lg border border-brand-border bg-white px-3.5 py-2.5 text-sm text-brand-navy placeholder:text-brand-muted/60 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
        />
      </div>

      {state === "error" && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Something went wrong. Please email us directly at{" "}
          <a
            href="mailto:support@getproposaliq.com"
            className="font-semibold underline"
          >
            support@getproposaliq.com
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="btn-primary w-full disabled:opacity-60"
      >
        {state === "submitting" ? (
          <>
            <svg
              className="h-4 w-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending…
          </>
        ) : (
          <>
            Send message
            <Send size={15} />
          </>
        )}
      </button>
    </form>
  );
}
