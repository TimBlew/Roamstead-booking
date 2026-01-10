"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BookingSection from "./components/BookingSection";

const PROPERTIES = [
  {
    slug: "granary-midway",
    title: "Granary",
    location: "Midway, UT",
    meta: "Sleeps 4 • 1 Bedroom • 1 Bath",
    image: "/listings/granary/living-01.jpg",
  },
  {
    slug: "daystar-deer-valley",
    title: "Daystar",
    location: "Deer Valley, Park City, UT",
    meta: "Sleeps 12 • 6 Bedrooms • 6 Baths",
    image: "/listings/daystar/exterior-02.jpg",
  },
  {
    slug: "lowell-302",
    title: "Lowell 302",
    location: "Park City, UT",
    meta: "Sleeps 8 • 2 Bedrooms • 2 Baths",
    image: "/listings/lowell-302/living-01.jpg",
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
          A modern mountain stay designed for travelers who value space,
          community, and adventure.
        </p>

        <div className="ctaRow">
          <a className="button" href="#book">
            Book your stay
          </a>
          <a className="button linkButton" href="#experiences">
            Explore experiences
          </a>
        </div>

        {/* Property Management CTA */}
        <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.10)' }}>
          <p style={{ 
            fontSize: '14px', 
            color: 'var(--muted)', 
            marginBottom: '12px',
            maxWidth: '520px',
            margin: '0 auto 12px'
          }}>
            Own a property in Utah? Let us handle the management.
          </p>
          <Link href="/property-management" className="button linkButton">
            Property owners →
          </Link>
        </div>
      </div>
    </section>
  );
}

function PropertiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Only show dots on mobile (matches your CSS breakpoint)
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  useEffect(() => {
    const row = document.getElementById("propertyRow");
    if (!row) return;

    const cards = Array.from(
      row.querySelectorAll<HTMLElement>("[data-index]")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio || 0) - (a.intersectionRatio || 0)
          )[0];

        if (!visible) return;

        const idx = Number((visible.target as HTMLElement).dataset.index);
        if (!Number.isNaN(idx)) setActiveIndex(idx);
      },
      {
        root: row,
        threshold: [0.55, 0.6, 0.65, 0.7],
      }
    );

    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  const scrollToIndex = (index: number) => {
    const row = document.getElementById("propertyRow");
    if (!row) return;

    const card = row.querySelector<HTMLElement>(`[data-index="${index}"]`);
    if (!card) return;

    card.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

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
      transition: "transform 160ms ease, opacity 160ms ease, background 160ms ease",
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
        <h2 className="sectionTitle">Properties</h2>
        <p className="sectionCopy">Browse our stays and book directly.</p>

        <div className="propertyCarousel">
          <div className="propertyRow" id="propertyRow">
            {PROPERTIES.map((p, i) => (
              <Link
                key={p.slug}
                href={`/listings/${p.slug}`}
                className="propertyCard"
                data-index={i}
              >
                <div className="propertyImage">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="propertyImg"
                    sizes="(max-width: 900px) 82vw, 33vw"
                  />
                </div>

                <div className="propertyBody">
                  <h3 className="propertyTitle">{p.title}</h3>
                  <p className="propertyLocation">{p.location}</p>
                  <p className="propertyMeta">{p.meta}</p>
                  <span className="propertyCta">View details →</span>
                </div>
              </Link>
            ))}
          </div>

          {/* ✅ Dots: render ONLY on mobile, styled inline so they MUST appear */}
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
      </div>
    </section>
  );
}

function MarketingSection() {
  return (
    <section className="mk-wrap" id="about">
      <div className="mk-section">
        <div className="mk-grid2">
          <div>
            <h2 className="mk-h2">A home for those who roam</h2>
            <p className="mk-p">
              Roamstead brings together the best of mountain living and modern
              hospitality — a place to unplug, get outside, and still have
              everything you need to stay connected.
            </p>
            <ul className="mk-list">
              <li>Experience-first stays, luxury-second</li>
              <li>Community-centered spaces</li>
              <li>Remote-friendly amenities for modern travel</li>
            </ul>
          </div>

          <div className="mk-cardImg">
            <Image
              src="/roamstead/collective.png"
              alt="Roamstead Collective"
              width={1200}
              height={675}
              className="mk-img"
            />
          </div>
        </div>
      </div>

      <div className="mk-section mk-sectionAlt">
        <h2 className="mk-h2Center">Built for the modern traveler</h2>
        <div className="mk-cards">
          <div className="mk-card">
            <h3 className="mk-h3">Co-work + gathering</h3>
            <p className="mk-pSm">
              Work-friendly rooms and shared spaces designed for focus and
              connection.
            </p>
          </div>
          <div className="mk-card">
            <h3 className="mk-h3">Cafe + coffee bar</h3>
            <p className="mk-pSm">
              A comfortable third space for locals and guests to fuel up and hang
              out.
            </p>
          </div>
          <div className="mk-card">
            <h3 className="mk-h3">Wellness + recovery</h3>
            <p className="mk-pSm">
              Health-forward amenities to reset after big days in the mountains.
            </p>
          </div>
          <div className="mk-card">
            <h3 className="mk-h3">Community events</h3>
            <p className="mk-pSm">
              Experience-driven meetups, rides, and local partnerships.
            </p>
          </div>
        </div>
      </div>

      <div className="mk-section mk-sectionAlt" id="experiences">
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
      <MarketingSection />

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


