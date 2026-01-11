"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SenatorPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNotify = () => {
    if (email) {
      console.log('Notify signup:', email);
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="hero" style={{ minHeight: '80vh' }}>
        <div
          className="heroBg"
          style={{ backgroundImage: "url(/assets/roamstead_mountain_bg.png)" }}
          aria-hidden="true"
        />
        <div className="heroOverlay" aria-hidden="true" />

        <div className="container heroContent">
          <div style={{
            display: 'inline-block',
            padding: '6px 12px',
            background: 'rgba(255,255,255,0.10)',
            borderRadius: '8px',
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            Opening Spring 2026
          </div>
          
          <h1 className="headline">The Senator</h1>
          <p className="subhead" style={{ maxWidth: '720px' }}>
            A historic 1902 Heber Valley landmark transformed into Roamstead's
            flagship Collective space—blending boutique hospitality with co-working,
            cafe culture, and community programming.
          </p>

          <div className="ctaRow">
            <a className="button" href="#notify">
              Get notified when we open
            </a>
            <Link href="/the-collective" className="button linkButton">
              Learn about The Collective →
            </Link>
          </div>
        </div>
      </section>

      {/* Award Recognition */}
      <section className="section">
        <div className="container">
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '18px',
            padding: '20px',
            textAlign: 'center',
            maxWidth: '560px',
            margin: '0 auto'
          }}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>🏆</div>
            <p style={{ fontSize: '16px', fontWeight: '600', marginBottom: '6px' }}>
              Best of State B&B Winner
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '14px' }}>
              2024 & 2025
            </p>
          </div>
        </div>
      </section>

      {/* Property Overview */}
      <section className="mk-wrap">
        <div className="mk-section">
          <h2 className="mk-h2">A historic property, reimagined</h2>
          <p className="mk-p">
            Built in 1902 as a residential mansion, The Senator has been a beloved
            Heber Valley landmark for over a century. We're transforming this
            award-winning B&B into a modern Collective space that honors its history
            while serving today's travelers and local community.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '14px',
            marginTop: '24px'
          }}>
            {[
              { stat: '10', label: 'Hotel-style rooms with ensuite baths' },
              { stat: '8,364', label: 'Square feet across 3 floors' },
              { stat: '0.33', label: 'Acre corner lot in new commercial zone' },
              { stat: '24mo+', label: 'Established hospitality operations' }
            ].map((item) => (
              <div key={item.label} className="card" style={{ padding: '18px', textAlign: 'center' }}>
                <div style={{ fontSize: '36px', fontWeight: '600', marginBottom: '6px' }}>
                  {item.stat}
                </div>
                <p style={{ color: 'var(--muted)', fontSize: '13.5px', lineHeight: '1.5' }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">What to expect at The Senator</h2>
          <p className="sectionCopy">
            More than just a place to stay—an integrated experience for modern
            travelers and locals alike.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            marginTop: '24px'
          }}>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>
                Boutique Accommodations
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6', fontSize: '14px' }}>
                10 thoughtfully designed rooms with ensuite bathrooms, fast WiFi,
                ergonomic workspaces, and mountain-modern aesthetics.
              </p>
            </div>

            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>
                Co-Working Lounge
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6', fontSize: '14px' }}>
                Shared workspace for guests and members with high-speed internet,
                meeting areas, and inspiring mountain views.
              </p>
            </div>

            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>
                Onsite Cafe
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6', fontSize: '14px' }}>
                Coffee bar and light continental breakfast from local vendors.
                A comfortable third space for guests and locals.
              </p>
            </div>

            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>
                Wellness Amenities
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6', fontSize: '14px' }}>
                Health-forward recovery options to reset after mountain adventures—
                because adventure and wellness go hand-in-hand.
              </p>
            </div>

            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>
                Community Events
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6', fontSize: '14px' }}>
                Regular programming: group rides, skill workshops, volunteer days,
                and social gatherings that build authentic connections.
              </p>
            </div>

            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>
                Membership Options
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6', fontSize: '14px' }}>
                Local memberships with access to co-working, cafe perks, event
                participation, and community benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="mk-wrap">
        <div className="mk-section mk-sectionAlt">
          <div className="mk-grid2">
            <div>
              <h2 className="mk-h2">Prime location in downtown Heber</h2>
              <p className="mk-p">
                The Senator sits at the center of Heber's new commercial district—
                steps from town square, county parks, the historic railroad, and the
                new event complex. A $17M renovation project is transforming the
                surrounding area into a vibrant community hub.
              </p>
              <p className="mk-p">
                Heber Valley is Utah's fastest-growing mountain destination, positioned
                between Salt Lake City and Park City with multiple 2034 Winter Olympic
                venues nearby.
              </p>
              <ul className="mk-list">
                <li>Less than 1 hour from SLC and Provo airports</li>
                <li>15 minutes to world-class skiing</li>
                <li>Walking distance to downtown amenities</li>
                <li>4-season outdoor recreation access</li>
              </ul>
            </div>

            <div className="mk-cardImg">
              <div style={{
                width: '100%',
                aspectRatio: '16/10',
                background: 'rgba(255,255,255,0.06)',
                borderRadius: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--muted2)',
                fontSize: '14px'
              }}>
                [Location map placeholder]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Heber Valley */}
      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Why Heber Valley?</h2>
          <p className="sectionCopy">
            Utah's fastest-growing mountain destination with explosive economic
            tailwinds and unmatched 4-season recreational access.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '14px',
            marginTop: '24px'
          }}>
            <div className="card" style={{ padding: '18px' }}>
              <div style={{ fontSize: '32px', fontWeight: '600', marginBottom: '6px' }}>+82%</div>
              <p style={{ color: 'var(--muted)', lineHeight: '1.55', fontSize: '14px' }}>
                Projected population growth by 2055—fastest in Utah
              </p>
            </div>
            <div className="card" style={{ padding: '18px' }}>
              <div style={{ fontSize: '32px', fontWeight: '600', marginBottom: '6px' }}>2034</div>
              <p style={{ color: 'var(--muted)', lineHeight: '1.55', fontSize: '14px' }}>
                Multiple Winter Olympic venues within 30 minutes
              </p>
            </div>
            <div className="card" style={{ padding: '18px' }}>
              <div style={{ fontSize: '32px', fontWeight: '600', marginBottom: '6px' }}>$17M+</div>
              <p style={{ color: 'var(--muted)', lineHeight: '1.55', fontSize: '14px' }}>
                Downtown infrastructure investment ongoing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mk-wrap">
        <div className="mk-section">
          <h2 className="mk-h2">Opening timeline</h2>
          <p className="mk-p">
            We're currently in the transition phase—light renovations to modernize
            offerings while preserving the property's historic character.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '18px',
            marginTop: '28px'
          }}>
            {[
              { phase: 'Q4 2025', status: 'Property acquisition & transition', complete: true },
              { phase: 'Q1 2026', status: 'Light renovations & modernization', complete: false },
              { phase: 'Spring 2026', status: 'Grand Re-Opening', complete: false },
              { phase: 'Ongoing', status: 'Community programming & events', complete: false }
            ].map((item) => (
              <div key={item.phase}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: item.complete ? 'rgba(34, 197, 94, 0.20)' : 'rgba(255,255,255,0.08)',
                  border: `2px solid ${item.complete ? 'rgba(34, 197, 94, 0.60)' : 'rgba(255,255,255,0.20)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px',
                  fontSize: '16px'
                }}>
                  {item.complete ? '✓' : ''}
                </div>
                <h3 style={{ fontSize: '15px', marginBottom: '4px', fontWeight: '600' }}>
                  {item.phase}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '13.5px', lineHeight: '1.5' }}>
                  {item.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="section" id="notify">
        <div className="container" style={{ maxWidth: '640px' }}>
          <h2 className="sectionTitle" style={{ textAlign: 'center' }}>
            Be the first to know
          </h2>
          <p className="sectionCopy" style={{ textAlign: 'center', margin: '0 auto 24px' }}>
            Get notified when The Senator opens for bookings in Spring 2026.
          </p>

          <div className="card" style={{ padding: '28px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '48px', marginBottom: '12px' }}>✓</div>
                <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.90)' }}>
                  Thanks! We'll notify you when we open.
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  style={{
                    flex: '1 1 280px',
                    padding: '14px 16px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.20)',
                    borderRadius: '12px',
                    color: 'var(--text)',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && handleNotify()}
                />
                <button
                  onClick={handleNotify}
                  className="button"
                  style={{ padding: '14px 24px', fontSize: '14px' }}
                >
                  Notify me
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mk-wrap">
        <div className="mk-section mk-sectionAlt">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <h2 className="mk-h2Center">Can't wait to visit?</h2>
            <p className="mk-p" style={{ textAlign: 'center' }}>
              Book a stay at one of our other Wasatch region properties while we
              prepare The Senator.
            </p>
            <div style={{ marginTop: '20px' }}>
              <Link href="/#properties" className="button">
                View available properties
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}