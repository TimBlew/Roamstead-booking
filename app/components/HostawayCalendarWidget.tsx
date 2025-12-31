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

const SCRIPT_SRC = "https://d2q3n06xhbi0am.cloudfront.net/calendar.js";
const HOSTAWAY_BASE_URL = "https://roamstead_ventures.holidayfuture.com/";
const CONTAINER_ID = "hostaway-calendar-widget";

export default function HostawayCalendarWidget({ listingId }: HostawayCalendarWidgetProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1) Clear the container
    const container = document.getElementById(CONTAINER_ID);
    if (container) container.innerHTML = "";

    // 2) Remove any existing Hostaway scripts so we get a clean re-init
    const oldScripts = Array.from(document.querySelectorAll('script[src^="https://d2q3n06xhbi0am.cloudfront.net/calendar.js"]'));
    oldScripts.forEach((s) => s.parentNode?.removeChild(s));

    // 3) Remove global function to avoid cached internal state
    try {
      delete (window as any).hostawayCalendarWidget;
    } catch {
      (window as any).hostawayCalendarWidget = undefined;
    }

    // 4) Load script fresh (cache-busted), then init
    const script = document.createElement("script");
    script.src = `${SCRIPT_SRC}?v=${listingId}-${Date.now()}`;
    script.async = true;

    script.onload = () => {
      if (typeof window.hostawayCalendarWidget !== "function") return;

      window.hostawayCalendarWidget({
        baseUrl: HOSTAWAY_BASE_URL,
        listingId,
        numberOfMonths: 2,
        openInNewTab: true,
        rounded: true,
        button: { action: "checkout", text: "Book now" },
        clearButtonText: "Clear dates",
      });
    };

    document.body.appendChild(script);

    // Cleanup when switching listings / unmount
    return () => {
      const c = document.getElementById(CONTAINER_ID);
      if (c) c.innerHTML = "";
    };
  }, [listingId]);

  return <div id={CONTAINER_ID} />;
}
