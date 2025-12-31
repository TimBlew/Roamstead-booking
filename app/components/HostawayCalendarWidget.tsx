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
    const ROOT_ID = "hostaway-widget-root";
    const CONTAINER_ID = "hostaway-calendar-widget";

    function mountFreshContainer() {
      const root = document.getElementById(ROOT_ID);
      if (!root) return;

      // Remove any previous widget container entirely
      root.innerHTML = "";

      // Create a brand-new container with the exact id Hostaway expects
      const container = document.createElement("div");
      container.id = CONTAINER_ID;
      root.appendChild(container);
    }

    function init(attempt = 0) {
      if (typeof window === "undefined") return;

      if (typeof window.hostawayCalendarWidget !== "function") {
        if (attempt < 30) window.setTimeout(() => init(attempt + 1), 100);
        return;
      }

      // Force a fresh container before initializing
      mountFreshContainer();

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

  // Root wrapper so we can fully replace the container on selection changes
  return (
    <div id="hostaway-widget-root">
      <div id="hostaway-calendar-widget" />
    </div>
  );
}
