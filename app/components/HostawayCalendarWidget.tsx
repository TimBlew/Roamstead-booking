"use client";

import { useEffect, useRef, useState } from "react";

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

// tweak this if needed. 2-month usually needs ~700px+
const TWO_MONTH_MIN_WIDTH = 720;

export default function HostawayCalendarWidget({ listingId }: HostawayCalendarWidgetProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [months, setMonths] = useState(1);

  // 1) Decide months based on container width (ResizeObserver)
  useEffect(() => {
    if (!wrapperRef.current) return;

    const el = wrapperRef.current;

    const update = () => {
      const w = el.clientWidth || 0;
      const next = w >= TWO_MONTH_MIN_WIDTH ? 2 : 1;
      setMonths((prev) => (prev === next ? prev : next));
    };

    update();

    const ro = new ResizeObserver(() => update());
    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  // 2) Load + init widget whenever listingId OR months changes
  useEffect(() => {
    if (typeof window === "undefined") return;

    const container = document.getElementById(CONTAINER_ID);
    if (container) container.innerHTML = "";

    // Remove any existing Hostaway scripts so we get a clean re-init
    const oldScripts = Array.from(
      document.querySelectorAll(`script[src^="${SCRIPT_SRC}"]`)
    );
    oldScripts.forEach((s) => s.parentNode?.removeChild(s));

    // Remove global function to avoid cached internal state
    try {
      delete (window as any).hostawayCalendarWidget;
    } catch {
      (window as any).hostawayCalendarWidget = undefined;
    }

    const script = document.createElement("script");
    script.src = `${SCRIPT_SRC}?v=${listingId}-${months}-${Date.now()}`;
    script.async = true;

    script.onload = () => {
      if (typeof window.hostawayCalendarWidget !== "function") return;

      window.hostawayCalendarWidget({
        baseUrl: HOSTAWAY_BASE_URL,
        listingId,
        numberOfMonths: months,
        openInNewTab: true,
        rounded: true,
        button: { action: "checkout", text: "Book now" },
        clearButtonText: "Clear dates",
      });
    };

    document.body.appendChild(script);

    return () => {
      const c = document.getElementById(CONTAINER_ID);
      if (c) c.innerHTML = "";
    };
  }, [listingId, months]);

  // Wrapper gives us a reliable width for ResizeObserver
  return (
    <div ref={wrapperRef} style={{ width: "100%" }}>
      <div id={CONTAINER_ID} />
    </div>
  );
}
