"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BookingSection from "./components/BookingSection";

const PROPERTIES = [
  {
    slug: "senator",
    title: "The Senator",
    location: "Heber Valley, UT",
    meta: "10 Rooms • Cafe • Co-working",
    image: "/listings/senator/exterior-01.jpg",
    available: false,
    comingSoon: "Spring 2026",
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
    title: "Lowell 302",
    location: "Park City, UT",
    meta: "Sleeps 8 • 2 Bedrooms • 2 Baths",
    image: "/listings/lowell-302/living-01.jpg",
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
          Modern mountain hospitality for travelers who value community, 
          adventure, and authentic experiences.
        </p>

        <div className="ctaRow">
          <a className="button" href="#book">
            Book your stay
          </a>
          <Link href="/the-collective" className="button linkButton">
            Explore The Collective
          </Link>
        </div>
      </div>
    </section>
  );
}

function PropertiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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
                    sizes="(max-width: 900px) 82vw, 25vw"
                  />
                  {p.comingSoon && (
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      padding: '6px 12px',
                      background: 'rgba(59, 130, 246, 0.95)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'white',
                      border: '1px solid rgba(255,255,255,0.20)'
                    }}>
                      Coming {p.comingSoon}
                    </div>
                  )}
                </div>

                <div className="propertyBody">
                  <h3 className="propertyTitle">{p.title}</h3>
                  <p className="propertyLocation">{p.location}</p>
                  <p className="propertyMeta">{p.meta}</p>
                  <span className="propertyCta">
                    {p.available ? 'View details →' : 'Learn more →'}
                  </span>
                </div>
              </Link>
            ))}
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
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="mk-wrap">
      <div className="mk-section">
        <div className="mk-grid2">
          <div>
            <h2 className="mk-h2">Building hospitality infrastructure for the modern mountain economy</h2>
            <p className="mk-p">
              Founded in 2023, Roamstead is reimagining what mountain hospitality 
              can be. We're creating integrated spaces where travelers can work, 
              play, connect, and truly experience mountain living—all while 
              contributing to local communities.
            </p>
            <p className="mk-p">
              Our properties blend traditional vacation rentals with co-working 
              spaces, cafes, wellness amenities, and community programming. 
              It's hospitality built for the 35M Americans now working remotely 
              and seeking authentic mountain experiences.
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
              <Link href="/about" className="button linkButton">
                About Roamstead →
              </Link>
              <Link href="/the-collective" className="button linkButton">
                The Collective Model →
              </Link>
            </div>
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
    </section>
  );
}

function CollectiveSection() {
  return (
    <section className="mk-wrap">
      <div className="mk-section mk-sectionAlt">
        <h2 className="mk-h2Center">Built for the modern traveler</h2>
        <p style={{ 
          textAlign: 'center', 
          color: 'var(--muted)', 
          maxWidth: '680px', 
          margin: '0 auto 28px',
          lineHeight: '1.6'
        }}>
          The Roamstead Collective integrates multiple experiences into 
          cohesive mountain hospitality—designed for remote workers, adventure 
          seekers, and community-minded travelers.
        </p>

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

        <div style={{ textAlign: 'center', marginTop: '28px' }}>
          <Link href="/the-collective" className="button linkButton">
            Learn about The Collective model →
          </Link>
        </div>
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

function PropertyOwnersCTA() {
  return (
    <section className="section" style={{ background: 'rgba(255,255,255,0.02)' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
        <h2 className="sectionTitle">Property owners</h2>
        <p className="sectionCopy" style={{ margin: '0 auto 20px' }}>
          Turn your mountain property into a home for those who roam. 
          We bring hospitality expertise, dynamic pricing, and multi-channel 
          marketing to maximize your property's revenue potential.
        </p>
        <Link href="/property-management" className="button">
          Learn about property management →
        </Link>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <PropertiesSection />
      <IntroSection />
      <CollectiveSection />
      <AdventureSection />
      <PropertyOwnersCTA />

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
