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

    // ✅ Must be your Hostaway booking engine domain
    const HOSTAWAY_BASE_URL = "https://roamstead_ventures.holidayfuture.com/";

    const CONTAINER_ID = "hostaway-calendar-widget";

    function init(attempt = 0) {
      if (typeof window === "undefined") return;

      if (typeof window.hostawayCalendarWidget !== "function") {
        if (attempt < 20) {
          window.setTimeout(() => init(attempt + 1), 100);
        }
        return;
      }

      // 🔥 HARD RESET: remove old widget content
      const oldContainer = document.getElementById(CONTAINER_ID);
      if (oldContainer) {
        oldContainer.innerHTML = "";
      }

      // 🔥 Re-init widget with NEW listingId
      window.hostawayCalendarWidget({
        baseUrl: HOSTAWAY_BASE_URL,
        listingId,
        numberOfMonths: 2,
        openInNewTab: true,
        rounded: true,
        button: {
          action: "checkout",
          text: "Book now",
        },
        clearButtonText: "Clear dates",
      });
    }

    // Load script once
    const existing = document.querySelector(
      `script[src="${SCRIPT_SRC}"]`
    ) as HTMLScriptElement | null;

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
