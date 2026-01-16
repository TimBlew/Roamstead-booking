"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BookingSection from "./components/BookingSection";

const PROPERTIES = [
  {
    slug: "house-midway",
    title: "Hygge House",
    location: "Midway, UT",
    meta: "Sleeps 10 • 4 Bedrooms • 3 Baths",
    image: "/listings/house-midway/exterior-02.jpg",
    available: true,
  },
  {
    slug: "granary-midway",
    title: "Granary",
    location: "Midway, UT",
    meta: "Sleeps 4 • 1 Bedroom • 1 Bath",
    image: "/listings/granary/living-01.jpg",
    available: true,
  },
  {
    slug: "daystar-deer-valley",
    title: "Daystar",
    location: "Deer Valley, Park City, UT",
    meta: "Sleeps 12 • 6 Bedrooms • 6 Baths",
    image: "/listings/daystar/exterior-02.jpg",
    available: true,
  },
  {
    slug: "lowell-302",
    title: "The Lowell",
    location: "Park City, UT",
    meta: "Sleeps 8 • 2 Bedrooms • 2 Baths",
    image: "/listings/lowell-302/living-01.jpg",
    available: true,
  },
  {
    slug: "powder-room",
    title: "Powder Room",
    location: "Park City, UT",
    meta: "Sleeps 4 • 1 Bedroom • 1 Bath",
    image: "/listings/powder-room/bedroom-01.jpg",
    available: true,
  },
];

function HeroSection() {
  return (
    <section className="hero">
      <div
        className="heroBg"
        style={{ backgroundImage: "url(/assets/roamstead_mountain_bg.png)" }}
        aria-hidden="true"
      />
      <div className="heroOverlay" aria-hidden="true" />

      <div className="container heroContent">
        <Image
          src="/assets/roamstead_logo_wordmark_transparent.png"
          alt="Roamstead"
          width={900}
          height={260}
          className="wordmark"
          priority
        />

        <h1 className="headline">Providing more space to roam</h1>

        <p className="subhead">
          <span className="subheadLine1">
            Modern mountain hospitality for travelers who value{" "}
          </span>
          <span className="subheadLine2">
            community, adventure, and authentic experiences.
          </span>
        </p>

        <div className="ctaRow">
          <a className="button" href="#book">
            Book your stay
          </a>
          <a className="button linkButton" href="#experiences">
            Explore Heber Valley
          </a>
        </div>
      </div>
    </section>
  );
}

function PropertiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const rowRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const snapTypeRef = useRef<string>("x proximity");
  const restoreSnapTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  const getNearestIndex = () => {
    const row = rowRef.current;
    const cards = cardsRef.current;
    if (!row || !cards.length) return 0;

    const rowStyle = window.getComputedStyle(row);
    const padLeft = parseFloat(rowStyle.paddingLeft || "0") || 0;

    const target = row.scrollLeft + padLeft;

    let bestIdx = 0;
    let bestDist = Number.POSITIVE_INFINITY;

    for (let i = 0; i < cards.length; i++) {
      const c = cards[i];
      if (!c) continue;
      const dist = Math.abs(c.offsetLeft - target);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = i;
      }
    }

    return bestIdx;
  };

  const scrollToIndex = (index: number) => {
    const row = rowRef.current;
    const card = cardsRef.current[index];
    if (!row || !card) return;

    const rowStyle = window.getComputedStyle(row);
    const padLeft = parseFloat(rowStyle.paddingLeft || "0") || 0;

    const desiredLeft = card.offsetLeft - padLeft;
    const maxLeft = row.scrollWidth - row.clientWidth;
    const nextLeft = Math.max(0, Math.min(desiredLeft, maxLeft));

    const prevSnap = row.style.scrollSnapType || "";
    row.style.scrollSnapType = "none";

    if (restoreSnapTimerRef.current) {
      window.clearTimeout(restoreSnapTimerRef.current);
      restoreSnapTimerRef.current = null;
    }

    row.scrollTo({ left: nextLeft, behavior: "smooth" });

    restoreSnapTimerRef.current = window.setTimeout(() => {
      row.style.scrollSnapType = prevSnap || snapTypeRef.current;
      restoreSnapTimerRef.current = null;
    }, 380);
  };

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    snapTypeRef.current =
      window.getComputedStyle(row).scrollSnapType || "x proximity";

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setActiveIndex(getNearestIndex());
      });
    };

    row.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      cancelAnimationFrame(raf);
      row.removeEventListener("scroll", onScroll);
      if (restoreSnapTimerRef.current) {
        window.clearTimeout(restoreSnapTimerRef.current);
        restoreSnapTimerRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dotsWrapStyle = useMemo<React.CSSProperties>(
    () => ({
      display: "flex",
      justifyContent: "center",
      gap: 10,
      marginTop: 12,
      paddingBottom: 6,
    }),
    []
  );

  const dotStyle = useMemo<React.CSSProperties>(
    () => ({
      width: 9,
      height: 9,
      borderRadius: 999,
      border: "1px solid rgba(255,255,255,0.28)",
      background: "rgba(255,255,255,0.22)",
      padding: 0,
      cursor: "pointer",
      transition:
        "transform 160ms ease, opacity 160ms ease, background 160ms ease",
      opacity: 0.75,
    }),
    []
  );

  const dotActiveStyle = useMemo<React.CSSProperties>(
    () => ({
      background: "rgba(255,255,255,0.92)",
      border: "1px solid rgba(255,255,255,0.40)",
      transform: "scale(1.25)",
      opacity: 1,
    }),
    []
  );

  return (
    <section className="section" id="properties">
      <div className="container">
        <h2 className="sectionTitle">Homes for Those Who Roam</h2>
        <p className="sectionCopy">Book directly to get the best prices!</p>

        <div className="propertyCarousel">
          {!isMobile && (
            <button
              className="carouselArrow left"
              aria-label="Scroll left"
              onClick={() => {
                const idx = getNearestIndex();
                scrollToIndex(Math.max(idx - 1, 0));
              }}
            >
              ‹
            </button>
          )}

          <div className="propertyRow" id="propertyRow" ref={rowRef}>
            {PROPERTIES.map((p, i) => (
              <Link
                key={p.slug}
                href={`/listings/${p.slug}`}
                className="propertyCard"
                data-index={i}
                ref={(el) => {
                  if (el) cardsRef.current[i] = el;
                }}
              >
                <div className="propertyImage">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="propertyImg"
                    sizes="(max-width: 900px) 82vw, 420px"
                  />
                </div>

                <div className="propertyBody">
                  <h3 className="propertyTitle">{p.title}</h3>
                  <p className="propertyLocation">{p.location}</p>
                  <p className="propertyMeta">{p.meta}</p>
                  <span className="propertyCta">
                    {p.available ? "View details →" : "Learn more →"}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {!isMobile && (
            <button
              className="carouselArrow right"
              aria-label="Scroll right"
              onClick={() => {
                const idx = getNearestIndex();
                scrollToIndex(Math.min(idx + 1, PROPERTIES.length - 1));
              }}
            >
              ›
            </button>
          )}
        </div>

        {isMobile && (
          <div style={dotsWrapStyle} aria-label="Property carousel pagination">
            {PROPERTIES.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to property ${i + 1} of ${PROPERTIES.length}`}
                aria-current={i === activeIndex ? "true" : undefined}
                onClick={() => scrollToIndex(i)}
                style={{
                  ...dotStyle,
                  ...(i === activeIndex ? dotActiveStyle : null),
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function IntegratedOfferingSection() {
  const ICONS = {
    thirdSpaces: "/assets/third-spaces-icon.png",
    shortMed: "/assets/short-med-term-icon.png",
    experience: "/assets/experience-driven-icon.png",
  };

  const CARDS = [
    {
      icon: ICONS.thirdSpaces,
      title: "Third Spaces for Local Members and Guests",
      lines: ["Cafe & Coffee Bar", "Co-Work + Gathering Rooms", "Health & Wellness Amenities"],
    },
    {
      icon: ICONS.shortMed,
      title: "Short & Medium Term Rentals",
      lines: ["Lifestyle forward stays", "Built for the Modern Traveler"],
    },
    {
      icon: ICONS.experience,
      title: "Experience-Driven Community Events",
      lines: ["Group Rides & Volunteer Days", "Mountain Advancement Series", "Equipment Maintenance 101"],
    },
  ];

  return (
    <section className="mk-wrap">
      <div className="mk-section mk-sectionAlt">
        <h2 className="mk-h2Center">Uniting Mountain Living with Modern Hospitality</h2>

        <div className="ioGrid">
          {CARDS.map((c) => (
            <div key={c.title} className="mk-card ioCard">
              <div className="ioIcon" aria-hidden="true">
                <Image
                  src={c.icon}
                  alt=""
                  fill
                  sizes="64px"
                  className="ioIconImg"
                />
              </div>

              <h3 className="ioTitle">{c.title}</h3>

              <div className="ioBody">
                {c.lines.map((line) => (
                  <div key={line} className="ioLine">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          .ioGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
            margin-top: 6px;
          }

          .ioCard {
            padding: 22px 18px 20px;
            text-align: center;
            background: rgba(0, 0, 0, 0.26);
            border: 1px solid rgba(255, 255, 255, 0.10);
            box-shadow: var(--shadow);
          }

          /* Icon "tile" */
          .ioIcon {
            width: 64px;
            height: 64px;
            margin: 0 auto 14px;
            position: relative;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.14);
            box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
            overflow: hidden; /* clips the image corners */
          }

          /* IMPORTANT: round the image itself too (helps when PNG has its own white square) */
          :global(.ioIconImg) {
            object-fit: cover; /* makes the icon fill the tile better */
            border-radius: 18px; /* rounds the PNG itself */
            transform: scale(1.02); /* tiny scale to remove 1px edge gaps */
            opacity: 0.98;
          }

          /* subtle inner ring so the icon blends cleaner on dark */
          .ioIcon::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 18px;
            box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.25);
            pointer-events: none;
          }

          .ioTitle {
            margin: 0 0 10px;
            color: rgba(255, 255, 255, 0.92);
            font-weight: 700;
            letter-spacing: -0.01em;
            line-height: 1.15;
            font-size: 18px;
          }

          .ioBody {
            display: grid;
            gap: 6px;
          }

          .ioLine {
            color: rgba(255, 255, 255, 0.68);
            font-size: 14px;
            line-height: 1.5;
          }

          @media (max-width: 900px) {
            .ioGrid {
              grid-template-columns: 1fr;
              gap: 12px;
            }
            .ioCard {
              padding: 20px 16px 18px;
            }
          }
        `}</style>
      </div>
    </section>
  );
}


function AdventureSection() {
  return (
    <section className="mk-wrap">
      <div className="mk-section" id="experiences">
        <h2 className="mk-h2Center">Four seasons of adventure</h2>

        <div className="mk-grid2">
          <div className="mk-cardImg">
            <Image
              src="/roamstead/winter-skiing.png"
              alt="Premier winter skiing"
              width={1200}
              height={675}
              className="mk-img"
            />
            <p className="mk-cap">Winter: Premier skiing nearby.</p>
          </div>

          <div className="mk-cardImg">
            <Image
              src="/roamstead/summer-fall-activities.png"
              alt="Summer and fall activities"
              width={1200}
              height={675}
              className="mk-img"
            />
            <p className="mk-cap">
              Summer/Fall: Trails, water, and wide-open mountain days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <PropertiesSection />
      <IntegratedOfferingSection />
      <AdventureSection />

      <section className="section" id="book">
        <div className="container">
          <h2 className="sectionTitle">Book your stay</h2>
          <p className="sectionCopy">
            Choose a property, select your dates, and book directly.
          </p>
          <BookingSection />
        </div>
      </section>
    </main>
  );
}
