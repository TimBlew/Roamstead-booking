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

// Your breakpoint for 2 months
const TWO_MONTH_MIN_WIDTH = 720;

// Allow layout to settle before first init
const SETTLE_MS = 150;

export default function HostawayCalendarWidget({ listingId }: HostawayCalendarWidgetProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const [months, setMonths] = useState(1);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const el = wrapperRef.current;

    const measure = () => el.getBoundingClientRect().width || 0;

    let settleTimer: number | null = null;

    const update = () => {
      const w = measure();
      const next = w >= TWO_MONTH_MIN_WIDTH ? 2 : 1;
      setMonths((prev) => (prev === next ? prev : next));
    };

    // measure now + next frames (catches injection/layout shift)
    update();
    requestAnimationFrame(() => {
      update();
      requestAnimationFrame(() => {
        update();
        if (settleTimer) window.clearTimeout(settleTimer);
        settleTimer = window.setTimeout(() => setReady(true), SETTLE_MS);
      });
    });

    const ro = new ResizeObserver(() => {
      update();
      if (!ready) {
        if (settleTimer) window.clearTimeout(settleTimer);
        settleTimer = window.setTimeout(() => setReady(true), SETTLE_MS);
      }
    });

    ro.observe(el);

    return () => {
      ro.disconnect();
      if (settleTimer) window.clearTimeout(settleTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!ready) return;

    const container = document.getElementById(CONTAINER_ID);
    if (container) container.innerHTML = "";

    // Remove old scripts for clean re-init
    const oldScripts = Array.from(document.querySelectorAll(`script[src^="${SCRIPT_SRC}"]`));
    oldScripts.forEach((s) => s.parentNode?.removeChild(s));

    // Clear global to avoid cached state
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
  }, [listingId, months, ready]);

  return (
    <div ref={wrapperRef} style={{ width: "100%" }}>
      <div id={CONTAINER_ID} />
    </div>
  );
}
