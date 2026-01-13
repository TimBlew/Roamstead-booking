"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SenatorPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNotify = () => {
    if (email) {
      console.log("Notify signup:", email);
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="hero" style={{ minHeight: "80vh" }}>
        <div
          className="heroBg"
          style={{ backgroundImage: "url(/listings/senator/heber-valley-view.jpg)" }}
          aria-hidden="true"
        />
        <div className="heroOverlay" aria-hidden="true" />

        <div className="container heroContent">
          <div
            style={{
              display: "inline-block",
              padding: "6px 12px",
              background: "rgba(255,255,255,0.10)",
              borderRadius: "8px",
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Opening Spring 2026
          </div>

          <h1 className="headline">The Senator</h1>
          <p className="subhead" style={{ maxWidth: "720px" }}>
            A historic 1902 Heber Valley landmark transformed into Roamstead&apos;s flagship
            Collective space—blending boutique hospitality with co-working, cafe culture, and
            community programming.
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
      <section
        style={{
          padding: "52px 0",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          background: "linear-gradient(to bottom, rgba(10,10,10,0.92), rgba(10,10,10,0.98))",
        }}
      >
        <div className="container">
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "18px",
              padding: "20px",
              textAlign: "center",
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            <div style={{ fontSize: "32px", marginBottom: "8px" }}>🏆</div>
            <p style={{ fontSize: "16px", fontWeight: "600", marginBottom: "6px" }}>
              Best of State B&amp;B Winner
            </p>
            <p style={{ color: "var(--muted)", fontSize: "14px" }}>2024 &amp; 2025</p>
          </div>
        </div>
      </section>

      {/* Property Overview with Image */}
      <section className="mk-wrap">
        <div className="mk-section">
          <div className="mk-grid2">
            <div>
              <h2 className="mk-h2">A historic property, reimagined</h2>
              <p className="mk-p">
                Built in 1902 as a residential mansion, The Senator has been a beloved Heber
                Valley landmark for over a century. We&apos;re transforming this award-winning
                B&amp;B into a modern Collective space that honors its history while serving
                today&apos;s travelers and local community.
              </p>
              <p className="mk-p">
                The property features established boutique hotel licensing with 24+ months of
                operations, making it a turnkey opportunity for Roamstead&apos;s integrated
                hospitality model.
              </p>
            </div>

            <div className="mk-cardImg">
              <Image
                src="/listings/senator/exterior-01.jpg"
                alt="The Senator historic building exterior"
                width={1200}
                height={800}
                className="mk-img"
              />
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "14px",
              marginTop: "32px",
            }}
          >
            {[
              { stat: "10", label: "Hotel-style rooms with ensuite baths" },
              { stat: "8,364", label: "Square feet across 3 floors" },
              { stat: "0.33", label: "Acre corner lot in new commercial zone" },
              { stat: "24mo+", label: "Established hospitality operations" },
            ].map((item) => (
              <div key={item.label} className="card" style={{ padding: "18px", textAlign: "center" }}>
                <div style={{ fontSize: "36px", fontWeight: "600", marginBottom: "6px" }}>
                  {item.stat}
                </div>
                <p style={{ color: "var(--muted)", fontSize: "13.5px", lineHeight: "1.5" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included - with subtle blue gradient */}
      <section
        style={{
          width: "100%",
          padding: "40px 0",
          background:
            "radial-gradient(ellipse at center top, rgba(59, 130, 246, 0.05) 0%, rgba(10,10,10,0.95) 70%)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ maxWidth: "var(--max)", margin: "0 auto", padding: "0 24px" }}>
          <h2 className="mk-h2Center">What to expect at The Senator</h2>
          <p
            style={{
              textAlign: "center",
              color: "var(--muted)",
              maxWidth: "680px",
              margin: "0 auto 28px",
              lineHeight: "1.6",
            }}
          >
            More than just a place to stay—an integrated experience for modern travelers and locals
            alike.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "16px",
            }}
          >
            <div className="card" style={{ padding: "20px" }}>
              <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>Boutique Accommodations</h3>
              <p style={{ color: "var(--muted)", lineHeight: "1.6", fontSize: "14px" }}>
                10 thoughtfully designed rooms with ensuite bathrooms, fast WiFi, ergonomic workspaces,
                and mountain-modern aesthetics.
              </p>
            </div>

            <div className="card" style={{ padding: "20px" }}>
              <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>Co-Working Lounge</h3>
              <p style={{ color: "var(--muted)", lineHeight: "1.6", fontSize: "14px" }}>
                Shared workspace for guests and members with high-speed internet, meeting areas, and
                inspiring mountain views.
              </p>
            </div>

            <div className="card" style={{ padding: "20px" }}>
              <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>Onsite Cafe</h3>
              <p style={{ color: "var(--muted)", lineHeight: "1.6", fontSize: "14px" }}>
                Coffee bar and light continental breakfast from local vendors. A comfortable third space
                for guests and locals.
              </p>
            </div>

            <div className="card" style={{ padding: "20px" }}>
              <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>Wellness Amenities</h3>
              <p style={{ color: "var(--muted)", lineHeight: "1.6", fontSize: "14px" }}>
                Health-forward recovery options to reset after mountain adventures—because adventure and
                wellness go hand-in-hand.
              </p>
            </div>

            <div className="card" style={{ padding: "20px" }}>
              <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>Community Events</h3>
              <p style={{ color: "var(--muted)", lineHeight: "1.6", fontSize: "14px" }}>
                Regular programming: group rides, skill workshops, volunteer days, and social gatherings
                that build authentic connections.
              </p>
            </div>

            <div className="card" style={{ padding: "20px" }}>
              <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>Membership Options</h3>
              <p style={{ color: "var(--muted)", lineHeight: "1.6", fontSize: "14px" }}>
                Local memberships with access to co-working, cafe perks, event participation, and community
                benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location with Map */}
      <section className="mk-wrap">
        <div className="mk-section">
          <div className="mk-grid2">
            <div>
              <h2 className="mk-h2">Prime location in downtown Heber</h2>
              <p className="mk-p">
                The Senator sits at the center of Heber&apos;s new Transition Corridor commercial
                district—steps from town square, county parks, the historic railroad, and the new event
                complex. A $17M renovation project is transforming the surrounding area into a vibrant
                community hub.
              </p>
              <p className="mk-p">
                Heber Valley is Utah&apos;s fastest-growing mountain destination, positioned between Salt
                Lake City and Park City with multiple 2034 Winter Olympic venues nearby.
              </p>
              <ul className="mk-list">
                <li>Less than 1 hour from SLC and Provo airports</li>
                <li>15 minutes to world-class skiing</li>
                <li>Walking distance to downtown amenities</li>
                <li>4-season outdoor recreation access</li>
              </ul>
            </div>

            <div className="mk-cardImg">
              <Image
                src="/listings/senator/location-map.png"
                alt="Senator location in downtown Heber showing proximity to key community centers"
                width={1200}
                height={900}
                className="mk-img"
              />
              <p className="mk-cap">Central location connecting key community centers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Heber Valley with Scenic Image - subtle gradient */}
      <section
        style={{
          width: "100%",
          padding: "40px 0",
          background: "linear-gradient(180deg, rgba(11,12,13,1) 0%, rgba(16,18,22,1) 50%, rgba(11,12,13,1) 100%)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ maxWidth: "var(--max)", margin: "0 auto", padding: "0 24px" }}>
          <h2 className="mk-h2Center">Why Heber Valley?</h2>
          <p
            style={{
              textAlign: "center",
              color: "var(--muted)",
              maxWidth: "680px",
              margin: "0 auto 20px",
              lineHeight: "1.6",
            }}
          >
            Utah&apos;s fastest-growing mountain destination with explosive economic tailwinds and unmatched
            4-season recreational access.
          </p>

          <div className="mk-cardImg" style={{ marginBottom: "28px" }}>
            <Image
              src="/listings/senator/heber-valley-view.jpg"
              alt="Panoramic view of Heber Valley"
              width={1400}
              height={600}
              className="mk-img"
              style={{ aspectRatio: "7/3", objectFit: "cover" }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "14px",
            }}
          >
            <div className="card" style={{ padding: "18px" }}>
              <div style={{ fontSize: "32px", fontWeight: "600", marginBottom: "6px" }}>+104%</div>
              <p style={{ color: "var(--muted)", lineHeight: "1.55", fontSize: "14px" }}>
                Projected population growth by 2055—fastest in Utah
              </p>
            </div>
            <div className="card" style={{ padding: "18px" }}>
              <div style={{ fontSize: "32px", fontWeight: "600", marginBottom: "6px" }}>2034 Olympics</div>
              <p style={{ color: "var(--muted)", lineHeight: "1.55", fontSize: "14px" }}>
                Multiple Winter Olympic venues within 30 minutes
              </p>
            </div>
            <div className="card" style={{ padding: "18px" }}>
              <div style={{ fontSize: "32px", fontWeight: "600", marginBottom: "6px" }}>$17M+</div>
              <p style={{ color: "var(--muted)", lineHeight: "1.55", fontSize: "14px" }}>
                Downtown infrastructure investment ongoing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Year-Round Activities */}
      <section className="mk-wrap">
        <div className="mk-section">
          <h2 className="mk-h2Center">Year-round adventure access</h2>
          <p
            style={{
              textAlign: "center",
              color: "var(--muted)",
              maxWidth: "680px",
              margin: "0 auto 28px",
              lineHeight: "1.6",
            }}
          >
            Heber Valley offers premier outdoor recreation for every season, from world-class skiing in
            winter to mountain biking and water sports in summer.
          </p>

          {/* FIX: Equal-width grid so both images render the same height */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "22px",
              alignItems: "start",
            }}
          >
            <div className="mk-cardImg">
              <Image
                src="/roamstead/winter-skiing.png"
                alt="Premier winter skiing near Heber Valley"
                width={1200}
                height={675}
                className="mk-img"
              />
              <p className="mk-cap">Winter: Premier skiing at nearby resorts</p>
            </div>

            <div className="mk-cardImg">
              <Image
                src="/roamstead/summer-fall-activities.png"
                alt="Summer and fall mountain activities"
                width={1200}
                height={675}
                className="mk-img"
              />
              <p className="mk-cap">Summer/Fall: Mountain biking, hiking, and water sports</p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "16px",
              marginTop: "28px",
            }}
          >
            <div className="card" style={{ padding: "18px" }}>
              <h3 style={{ fontSize: "16px", marginBottom: "8px", fontWeight: "600" }}>Winter Activities</h3>
              <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: "1.6" }}>
                Premier skiing at nearby resorts, backcountry touring, and Nordic skiing
              </p>
            </div>
            <div className="card" style={{ padding: "18px" }}>
              <h3 style={{ fontSize: "16px", marginBottom: "8px", fontWeight: "600" }}>Summer Adventures</h3>
              <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: "1.6" }}>
                Mountain biking, hiking, paddleboarding, and scenic trail riding
              </p>
            </div>
            <div className="card" style={{ padding: "18px" }}>
              <h3 style={{ fontSize: "16px", marginBottom: "8px", fontWeight: "600" }}>Local Events</h3>
              <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: "1.6" }}>
                Rodeos, farmers markets, the historic railroad, and community festivals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline - with subtle green gradient */}
      <section
        style={{
          width: "100%",
          padding: "40px 0",
          background:
            "radial-gradient(ellipse at center, rgba(34, 197, 94, 0.04) 0%, rgba(10,10,10,0.95) 70%)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ maxWidth: "var(--max)", margin: "0 auto", padding: "0 24px" }}>
          <h2 className="mk-h2Center">Opening timeline</h2>
          <p
            style={{
              textAlign: "center",
              color: "var(--muted)",
              maxWidth: "680px",
              margin: "0 auto 28px",
              lineHeight: "1.6",
            }}
          >
            We&apos;re currently in the transition phase—light renovations to modernize offerings while
            preserving the property&apos;s historic character.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "18px",
              maxWidth: "960px",
              margin: "0 auto",
            }}
          >
            {[
              { phase: "Q4 2025", status: "Property acquisition & transition", complete: true },
              { phase: "Q1 2026", status: "Light renovations & modernization", complete: false },
              { phase: "Spring 2026", status: "Grand Re-Opening", complete: false },
              { phase: "Ongoing", status: "Community programming & events", complete: false },
            ].map((item) => (
              <div key={item.phase} className="card" style={{ padding: "20px", textAlign: "center" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: item.complete ? "rgba(34, 197, 94, 0.20)" : "rgba(255,255,255,0.08)",
                    border: `2px solid ${
                      item.complete ? "rgba(34, 197, 94, 0.60)" : "rgba(255,255,255,0.20)"
                    }`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 12px",
                    fontSize: "16px",
                  }}
                >
                  {item.complete ? "✓" : ""}
                </div>
                <h3 style={{ fontSize: "15px", marginBottom: "6px", fontWeight: "600" }}>{item.phase}</h3>
                <p style={{ color: "var(--muted)", fontSize: "13.5px", lineHeight: "1.5" }}>
                  {item.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section
        style={{
          padding: "52px 0",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          background: "linear-gradient(to bottom, rgba(10,10,10,0.92), rgba(10,10,10,0.98))",
        }}
        id="notify"
      >
        <div className="container" style={{ maxWidth: "640px" }}>
          <h2 className="sectionTitle" style={{ textAlign: "center" }}>
            Be the first to know
          </h2>
          <p className="sectionCopy" style={{ textAlign: "center", margin: "0 auto 24px" }}>
            Get notified when The Senator opens for bookings in Spring 2026.
          </p>

          <div className="card" style={{ padding: "28px" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "20px" }}>
                <div style={{ fontSize: "48px", marginBottom: "12px" }}>✓</div>
                <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.90)" }}>
                  Thanks! We&apos;ll notify you when we open.
                </p>
              </div>
            ) : (
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  style={{
                    flex: "1 1 280px",
                    padding: "14px 16px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.20)",
                    borderRadius: "12px",
                    color: "var(--text)",
                    fontSize: "14px",
                    outline: "none",
                  }}
                  onKeyDown={(e) => e.key === "Enter" && handleNotify()}
                />
                <button onClick={handleNotify} className="button" style={{ padding: "14px 24px", fontSize: "14px" }}>
                  Notify me
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mk-wrap">
        <div className="mk-section">
          <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto" }}>
            <h2 className="mk-h2Center">Can&apos;t wait to visit?</h2>
            <p className="mk-p" style={{ textAlign: "center" }}>
              Book a stay at one of our other Wasatch region properties while we prepare The Senator.
            </p>
            <div style={{ marginTop: "20px" }}>
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
