import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "The Collective | Roamstead",
  description: "Uniting mountain living with modern hospitality - a new model for experience-driven travel.",
};

export default function TheCollectivePage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero" style={{ minHeight: '75vh' }}>
        <div
          className="heroBg"
          style={{ backgroundImage: "url(/assets/roamstead_mountain_bg.png)" }}
          aria-hidden="true"
        />
        <div className="heroOverlay" aria-hidden="true" />

        <div className="container heroContent">
          <h1 className="headline">Roamstead Collective</h1>
          <p className="subhead" style={{ maxWidth: '720px' }}>
            We're building hospitality infrastructure for the modern mountain economy—
            uniting traditional values of homesteading with the needs of today's
            adventure-seeking, community-minded travelers.
          </p>
        </div>
      </section>

      {/* What is the Collective */}
      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">What is Roamstead Collective?</h2>
          <p className="sectionCopy" style={{ maxWidth: '820px' }}>
            We're reimagining what mountain hospitality can be. Not luxury resorts.
            Not cookie-cutter vacation rentals. But integrated spaces where travelers
            can work, play, connect, and truly experience mountain living—all while
            contributing to local communities.
          </p>

          <div className="card" style={{ marginTop: '24px', padding: '28px', maxWidth: '920px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr auto 1fr', 
              gap: '20px',
              alignItems: 'center'
            }}>
              <div>
                <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'rgba(255,255,255,0.90)' }}>
                  Traditional Homesteading
                </h3>
                <ul style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: '1.7', paddingLeft: '18px' }}>
                  <li>Deep connection to place</li>
                  <li>Community centered</li>
                  <li>Self-sufficiency & low footprint</li>
                </ul>
              </div>

              <div style={{
                fontSize: '24px',
                color: 'rgba(255,255,255,0.45)',
                fontWeight: '300'
              }}>
                +
              </div>

              <div>
                <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'rgba(255,255,255,0.90)' }}>
                  Modern Nomad
                </h3>
                <ul style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: '1.7', paddingLeft: '18px' }}>
                  <li>Location flexibility</li>
                  <li>Experience first, luxury second</li>
                  <li>'Remote' lifestyle amenities</li>
                </ul>
              </div>
            </div>

            <div style={{
              marginTop: '20px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255,255,255,0.10)',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '15px', fontWeight: '600', color: 'rgba(255,255,255,0.88)' }}>
                = A home for those who roam
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Integrated Offering */}
      <section className="mk-wrap">
        <div className="mk-section mk-sectionAlt">
          <h2 className="mk-h2Center">Our integrated offering</h2>
          <p style={{ 
            textAlign: 'center', 
            color: 'var(--muted)', 
            maxWidth: '680px', 
            margin: '0 auto 28px',
            lineHeight: '1.6'
          }}>
            Unlike traditional hospitality that focuses solely on lodging, Roamstead
            Collective properties integrate multiple revenue streams and community
            touchpoints into a cohesive experience.
          </p>

          <div className="mk-cards">
            <div className="mk-card">
              <h3 className="mk-h3">Short & Medium Term Rentals</h3>
              <p className="mk-pSm">
                Lifestyle-forward stays designed for modern travelers. Work-friendly
                rooms with fast WiFi, ergonomic spaces, and mountain views.
              </p>
            </div>

            <div className="mk-card">
              <h3 className="mk-h3">Co-Work + Gathering Spaces</h3>
              <p className="mk-pSm">
                Shared spaces designed for focus and connection. Host presentations,
                work sessions, or simply meet other travelers and locals.
              </p>
            </div>

            <div className="mk-card">
              <h3 className="mk-h3">Cafe & Coffee Bar</h3>
              <p className="mk-pSm">
                A comfortable third space for locals and guests to fuel up and hang
                out. Community hub that generates revenue year-round.
              </p>
            </div>

            <div className="mk-card">
              <h3 className="mk-h3">Wellness & Recovery</h3>
              <p className="mk-pSm">
                Health-forward amenities to reset after big days in the mountains.
                Saunas, cold plunge, yoga spaces, and recovery tools.
              </p>
            </div>

            <div className="mk-card">
              <h3 className="mk-h3">Community Events</h3>
              <p className="mk-pSm">
                Experience-driven programming: group rides, volunteer days, skill
                workshops, and local partnerships that build authentic connections.
              </p>
            </div>

            <div className="mk-card">
              <h3 className="mk-h3">Membership Programs</h3>
              <p className="mk-pSm">
                For locals and frequent visitors: access to co-working spaces, cafe
                discounts, event participation, and community benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Built for the modern traveler</h2>
          <p className="sectionCopy">
            We're targeting the fastest-growing traveler segments—people seeking
            authentic experiences, community connection, and the flexibility to blend
            work with adventure.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '14px',
            marginTop: '24px'
          }}>
            {[
              {
                title: 'Workations & Business Leisure',
                desc: 'Remote workers blending productivity with adventure—laptop in the morning, trails in the afternoon.'
              },
              {
                title: 'Sports Tourism',
                desc: 'Year-round adventure seekers accessing world-class skiing, mountain biking, trail running, and climbing.'
              },
              {
                title: 'Coolcations',
                desc: 'Escaping city heat for high-altitude summers in idyllic mountain settings with perfect weather.'
              },
              {
                title: 'Community Seekers',
                desc: 'Travelers craving authentic local connection, hyper-local experiences, and meaningful interactions.'
              }
            ].map((segment) => (
              <div 
                key={segment.title}
                className="card"
                style={{ padding: '18px' }}
              >
                <h3 style={{ fontSize: '16px', marginBottom: '8px', fontWeight: '600' }}>
                  {segment.title}
                </h3>
                <p style={{ color: 'var(--muted)', lineHeight: '1.6', fontSize: '13.5px' }}>
                  {segment.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="mk-wrap">
        <div className="mk-section">
          <div className="mk-grid2">
            <div className="mk-cardImg">
              <Image
                src="/roamstead/collective.png"
                alt="Roamstead Collective Model"
                width={1200}
                height={675}
                className="mk-img"
              />
            </div>

            <div>
              <h2 className="mk-h2">Why the Collective model works</h2>
              <p className="mk-p">
                Traditional hospitality leaves money on the table. A property sits empty
                during off-peak times. Common spaces go unused except during check-in.
                Guests don't interact with locals or each other.
              </p>
              <p className="mk-p">
                The Collective model creates multiple revenue streams while building
                community. Cafes serve locals year-round. Events generate income and
                foster authentic experiences. Membership programs provide recurring
                revenue and deepen local connections.
              </p>
              <p className="mk-p">
                The result: higher revenue per property, stronger community integration,
                and guests who return because they found real connection—not just a
                place to sleep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming to Heber Valley */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <h2 className="sectionTitle">Coming to Heber Valley</h2>
          <p className="sectionCopy" style={{ margin: '0 auto 24px' }}>
            Our flagship Collective space—The Senator—is opening in Spring 2026 in
            downtown Heber Valley, Utah's fastest-growing mountain destination.
          </p>

          <div className="card" style={{ padding: '24px', textAlign: 'left' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>The Senator Collective</h3>
            <p style={{ color: 'var(--muted)', lineHeight: '1.7', marginBottom: '16px' }}>
              A historic 1902 property recently awarded Best of State B&B (2024 & 2025),
              reimagined as our flagship Collective space with 10 rooms, co-working
              lounge, onsite cafe, wellness amenities, and community programming.
            </p>
            <Link href="/senator" className="button">
              Learn more about The Senator →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mk-wrap">
        <div className="mk-section mk-sectionAlt">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <h2 className="mk-h2Center">Experience the difference</h2>
            <p className="mk-p" style={{ textAlign: 'center' }}>
              Book a stay at one of our properties and see what modern mountain
              hospitality can be.
            </p>
            <div style={{ marginTop: '20px' }}>
              <Link href="/#book" className="button">
                Book your stay
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}