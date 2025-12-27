import Image from "next/image";
import type { ReactNode, SVGProps } from "react";

function getIcon(name: string): ReactNode {
  const baseProps: SVGProps<SVGSVGElement> = {
    width: 22,
    height: 22,
    stroke: "currentColor",
    fill: "none",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (name) {
    case "mountain":
      return (
        <svg {...baseProps} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 20L12 4l9 16" />
          <path d="M9.5 14L12 10l2.5 4" />
        </svg>
      );

    case "wifi":
      return (
        <svg {...baseProps} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12a12 12 0 0 1 14 0" />
          <path d="M8.5 15.5a7 7 0 0 1 7 0" />
          <circle cx="12" cy="19" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );

    case "home":
      return (
        <svg {...baseProps} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 11l9-7 9 7" />
          <path d="M9 22V12h6v10" />
        </svg>
      );

    case "users":
      return (
        <svg {...baseProps} viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="8" r="3" />
          <path d="M2 20c0-3 4-5 7-5" />
          <path d="M22 20c0-3-4-5-7-5" />
        </svg>
      );

    case "coffee":
      return (
        <svg {...baseProps} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 8h13v6a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5z" />
          <path d="M16 10h3a2 2 0 0 1 0 4h-3" />
        </svg>
      );

    case "calendar":
      return (
        <svg {...baseProps} viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      );

    default:
      return null;
  }
}

function Amenity(props: { icon: string; title: string; text: string }) {
  return (
    <div className="amenityCard">
      <div className="amenityIcon" aria-hidden="true">
        {getIcon(props.icon)}
      </div>
      <div>
        <h3 className="amenityTitle">{props.title}</h3>
        <p className="amenityText">{props.text}</p>
      </div>
    </div>
  );
}

export default function Page() {
  const AIRBNB_URL = "https://www.airbnb.com/";
  const BOOKING_WIDGET_EMBED_URL = "";

  // Use your clean background (no embedded logo)
  const heroBg = "/assets/roamstead_mountain_bg.png";
  const wordmark = "/assets/roamstead_logo_wordmark_transparent.png";

  return (
    <main>
      {/* HERO */}
      <section className="hero" aria-label="Roamstead hero">
        <div
          className="heroBg"
          style={{ backgroundImage: `url(${heroBg})` }}
          role="img"
          aria-label="Mountain landscape background"
        />
        <div className="heroOverlay" />

        <div className="container heroContent">
          <Image
            className="wordmark"
            src={wordmark}
            alt="Roamstead"
            width={900}
            height={220}
            priority
          />

          <h1 className="headline">Providing more space to roam</h1>
          <p className="subhead">
            A modern mountain stay designed for travelers who value space, community, and adventure.
          </p>

          <div className="ctaRow">
            <a className="button" href="#book">
              Book your stay
            </a>
            <a
              className="button linkButton"
              href={AIRBNB_URL}
              target="_blank"
              rel="noreferrer"
            >
              View on Airbnb
            </a>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="section" aria-label="Amenities">
        <div className="container">
          <h2 className="sectionTitle">Designed for how people travel today</h2>
          <p className="sectionCopy">
            Built for adventure, community, and flexibility — without the “luxury-only” vibe.
          </p>

          <div className="amenitiesGrid">
            <Amenity
              icon="mountain"
              title="Adventure Access"
              text="Four-season surroundings built for exploring."
            />
            <Amenity
              icon="wifi"
              title="Remote-Work Ready"
              text="Fast Wi-Fi and comfortable work-friendly space."
            />
            <Amenity
              icon="home"
              title="Modern Comfort"
              text="A clean, intentional stay focused on experience."
            />
            <Amenity
              icon="users"
              title="Community Spaces"
              text="Room to gather — and room to unplug."
            />
            <Amenity
              icon="coffee"
              title="Hospitality Touches"
              text="Simple comforts that make it feel effortless."
            />
            <Amenity
              icon="calendar"
              title="Flexible Stays"
              text="Great for quick trips, workations, and longer stays."
            />
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="book" className="section" aria-label="Booking">
        <div className="container">
          <h2 className="sectionTitle">Book your stay</h2>
          <p className="sectionCopy">
            We can embed a booking widget (Lodgify, Hostaway, OwnerRez, etc.). Later we can
            sync availability and link to Airbnb.
          </p>

          <div className="card">
            <div className="bookingGrid">
              <div>
                {BOOKING_WIDGET_EMBED_URL ? (
                  <iframe
                    title="Roamstead booking widget"
                    src={BOOKING_WIDGET_EMBED_URL}
                    style={{ width: "100%", height: 520, border: 0 }}
                    loading="lazy"
                  />
                ) : (
                  <div className="widgetShell">
                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          color: "rgba(255,255,255,0.82)",
                          marginBottom: 8,
                        }}
                      >
                        Booking widget placeholder
                      </div>
                      <div className="small">
                        Paste your provider embed URL into{" "}
                        <code>BOOKING_WIDGET_EMBED_URL</code>.
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <ul className="list">
                  <li className="pill">
                    <strong>Check-in</strong>
                    <span>3:00 PM</span>
                  </li>
                  <li className="pill">
                    <strong>Check-out</strong>
                    <span>11:00 AM</span>
                  </li>
                  <li className="pill">
                    <strong>Location</strong>
                    <span>Mountain town</span>
                  </li>
                  <li className="pill">
                    <strong>Questions?</strong>
                    <span>hello@roamstead.com</span>
                  </li>
                </ul>

                <div style={{ height: 14 }} />

                <a
                  className="button"
                  href={AIRBNB_URL}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: "100%",
                    display: "inline-flex",
                    justifyContent: "center",
                  }}
                >
                  Book via Airbnb
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Roamstead. All rights reserved.
      </footer>
    </main>
  );
}
