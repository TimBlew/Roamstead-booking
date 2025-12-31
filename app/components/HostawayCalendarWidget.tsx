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
    const HOSTAWAY_BASE_URL = "https://roamstead_ventures.holidayfuture.com/";
    const CONTAINER_ID = "hostaway-calendar-widget";

    function init(attempt = 0) {
      if (typeof window === "undefined") return;

      if (typeof window.hostawayCalendarWidget !== "function") {
        if (attempt < 30) window.setTimeout(() => init(attempt + 1), 100);
        return;
      }

      const container = document.getElementById(CONTAINER_ID);
      if (!container) return;

      // ✅ Hard reset the widget contents (do NOT remove/recreate the node)
      container.innerHTML = "";

      // ✅ Small delay lets the DOM settle before Hostaway injects again
      window.setTimeout(() => {
        window.hostawayCalendarWidget?.({
          baseUrl: HOSTAWAY_BASE_URL,
          listingId,
          numberOfMonths: 2,
          openInNewTab: true,
          rounded: true,
          button: { action: "checkout", text: "Book now" },
          clearButtonText: "Clear dates",
        });
      }, 50);
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

    return () => {
      // cleanup (optional)
      const container = document.getElementById(CONTAINER_ID);
      if (container) container.innerHTML = "";
    };
  }, [listingId]);

  return <div id="hostaway-calendar-widget" />;
}
