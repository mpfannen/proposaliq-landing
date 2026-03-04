declare global {
  interface Window {
    gtag: (
      command: "event" | "config" | "js" | "set",
      target: string,
      params?: Record<string, string | boolean | number>
    ) => void;
  }
}

export function trackCtaClick(label: string): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "cta_click", {
      event_category: "engagement",
      event_label: label,
    });
  }
}
