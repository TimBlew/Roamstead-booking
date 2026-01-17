"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BookingSection from "./components/BookingSection";

/* ----------------------------- WAITLIST MODAL ----------------------------- */

function WaitlistModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="wlOverlay" role="dialog" aria-modal="true">
      <button className="wlBackdrop" onClick={onClose} aria-label="Close" />

      <div className="wlModal">
        <div className="wlHeader">
          <h3 className="wlTitle">Coming soon to Heber Valley</h3>
          <button className="wlClose" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <ul className="wlList">
          <li><em>Secret</em> Co-Working Space in the Valley</li>
          <li>Ride shares to Cottonwood Resorts from Heber</li>
          <li>Member-only room rates</li>
          <li>Community events</li>
        </ul>

        <p className="wlCopy">Sign up to get priority updates</p>

        <form
          action="https://formspree.io/f/xykkkzvj"
          method="POST"
          className="wlForm"
        >
          <input type="hidden" name="source" value="homepage_waitlist_modal" />

          <input
            type="email"
            name="email"
            required
            placeholder="Email address"
            className="wlInput"
          />

          <button type="submit" className="wlSubmit">
            Submit
          </button>
        </form>
      </div>

      <style jsx>{`
        .wlOverlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: grid;
          place-items: center;
          padding: 18px;
        }

        .wlBackdrop {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          border: 0;
          cursor: pointer;
        }

        .wlModal {
          position: relative;
          width: min(520px, 92vw);
          border-radius: 18px;
          padding: 18px;
          background: rgba(15, 16, 18, 0.92);
          border: 1px solid rgba(255, 255, 255, 0.14);
          box-shadow: 0 22px 70px rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(14px);
        }

        .wlHeader {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .wlTitle {
          margin: 0;
          font-size: 18px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.92);
        }

        .wlClose {
          width: 36px;
          height: 36px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.06);
          color: rgba(255, 255, 255, 0.85);
          cursor: pointer;
        }

        .wlList {
          margin: 0 0 14px;
          padding-left: 18px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          line-height: 1.5;
        }

        .wlCopy {
          margin: 0 0 12px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
        }

        .wlForm {
          display: grid;
          gap: 10px;
        }

        .wlInput {
          height: 44px;
          padding: 0 12px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          background: rgba(0, 0, 0, 0.35);
          color: rgba(255, 255, 255, 0.92);
        }

        .wlSubmit {
          height: 44px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.92);
          color: rgba(0, 0, 0, 0.9);
          font-weight: 700;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

/* ---------------------------- WAITLIST SECTION ---------------------------- */

function WaitlistSection({ onJoin }: { onJoin: () => void }) {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: "center" }}>
        <h2 className="sectionTitle">Join the Member Waitlist</h2>

        <button type="button" className="button" onClick={onJoin}>
          Join the Member Waitlist
        </button>
      </div>
    </section>
  );
}

/* ------------------------------- PAGE ------------------------------------ */

export default function Page() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <main>
      {/* existing sections unchanged */}
      <WaitlistSection onJoin={() => setWaitlistOpen(true)} />
      <WaitlistModal
        open={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />
    </main>
  );
}
