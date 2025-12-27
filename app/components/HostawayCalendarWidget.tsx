"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    hostawayCalendarWidget?: (config: any) => void;
  }
}

type HostawayCalendarWidgetProps = {
  listingId: number;
};

export default function HostawayCalendarWidget({ listingId }: HostawayCalendarWidgetProps) {
  useEffect(() => {
    const SCRIPT_SRC = "https://d2q3n06xhbi0am.cloudfront.net/calendar.js";

    function init(attempt = 0) {
      if (typeof window === "undefined") return;

      // If the function isn't ready yet, retry a few times (covers edge cases)
      if (typeof window.hostawayCalendarWidget !== "function") {
        if (attempt < 10) {
          window.setTimeout(() => init(attempt + 1), 100);
        }
        return;
      }

      window.hostawayCalendarWidget({
        baseUrl: `${window.location.origin}/`,
        listingId,
        numberOfMonths: 2,
        openInNewTab: true, // ✅ per your decision
        rounded: true,
        button: {
          action: "checkout",
          text: "Book now",
        },
        clearButtonText: "Clear dates",
        // ✅ Hostaway default styling: no "color" overrides
      });
    }

    const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`) as HTMLScriptElement | null;

    if (existing) {
      init();
      return;
    }

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => init();
    document.body.appendChild(script);
  }, [listingId]);

  return <div id="hostaway-calendar-widget" />;
}
