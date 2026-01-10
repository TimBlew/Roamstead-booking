// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Roamstead | Modern Mountain Hospitality",
  description: "Founded in 2023, Roamstead is building hospitality infrastructure for Utah's growing mountain economy.",
};

export default function AboutPage() {
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
          <h1 className="headline">About Roamstead</h1>
          <p className="subhead" style={{ maxWidth: '680px' }}>
            We're reimagining mountain hospitality for a generation that values
            experience over luxury, community over isolation, and authentic connection
            over polished perfection.
          </p>
        </div>
      </section>

      {/* The Problem We're Solving */}
      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Traditional mountain hospitality is stuck</h2>
          <p className="sectionCopy" style={{ maxWidth: '820px' }}>
            A generation hungry for adventure, community, and flexibility is being left
            underserved. Legacy offerings target romantic getaways for couples 50+, while
            new developments center on luxury and exclusivity—neither built for the modern
            traveler seeking authentic experiences and community connection.
          </p>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
            gap: '14px',
            marginTop: '24px'
          }}>
            <div className="card" style={{ padding: '18px' }}>
              <div style={{ fontSize: '32px', fontWeight: '600', marginBottom: '6px' }}>35M</div>
              <p style={{ color: 'var(--muted)', lineHeight: '1.55', fontSize: '14px' }}>
                Americans work remotely today (up 87% since 2019)
              </p>
            </div>
            <div className="card" style={{ padding: '18px' }}>
              <div style={{ fontSize: '32px', fontWeight: '600', marginBottom: '6px' }}>25yr+</div>
              <p style={{ color: 'var(--muted)', lineHeight: '1.55', fontSize: '14px' }}>
                Demographic values experience over luxury
              </p>
            </div>
            <div className="card" style={{ padding: '18px' }}>
              <div style={{ fontSize: '32px', fontWeight: '600', marginBottom: '6px' }}>2034</div>
              <p style={{ color: 'var(--muted)', lineHeight: '1.55', fontSize: '14px' }}>
                Winter Olympics coming to Utah's mountain communities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="mk-wrap">
        <div className="mk-section mk-sectionAlt">
          <div className="mk-grid2">
            <div>
              <h2 className="mk-h2">Our Vision</h2>
              <p className="mk-p">
                Roamstead was founded in 2023 to build hospitality infrastructure for
                the modern mountain economy. We're creating spaces that unite traditional
                values of homesteading—deep connection to place, community, self-sufficiency—
                with the needs of modern nomads seeking location flexibility, experience-first
                travel, and remote lifestyle amenities.
              </p>
              <p className="mk-p">
                As Utah's mountain valleys experience unprecedented growth, we're
                developing properties and programming that serve both visitors and local
                communities through integrated offerings that go beyond traditional lodging.
              </p>
            </div>
            <div className="mk-cardImg">
              <Image
                src="/roamstead/collective.png"
                alt="Roamstead Collective Vision"
                width={1200}
                height={675}
                className="mk-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section">
        <div className="container" style={{ maxWidth: '920px' }}>
          <h2 className="sectionTitle">Leadership</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '140px 1fr',
            gap: '20px',
            alignItems: 'start',
            marginTop: '24px'
          }}>
            <div style={{
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.14)'
            }} />
            
            <div>
              <h3 style={{ fontSize: '22px', marginBottom: '4px' }}>Chris Blewitt</h3>
              <p style={{ color: 'var(--muted)', fontSize: '14px', marginBottom: '14px' }}>
                Founder & CEO
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: '1.7', marginBottom: '12px' }}>
                Chris brings 10+ years of finance experience to building modern hospitality
                infrastructure. A passionate mountain enthusiast with over 1 million miles
                logged on Strava, he understands firsthand what modern travelers seek in
                mountain destinations.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                His vision for Roamstead emerged from recognizing the disconnect between
                traditional mountain hospitality offerings and the evolving needs of
                remote workers, adventure seekers, and community-minded travelers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="mk-wrap">
        <div className="mk-section">
          <h2 className="mk-h2">Our Portfolio</h2>
          <p className="mk-p">
            We currently manage properties across Utah's Wasatch region, providing
            modern travelers with access to world-class outdoor recreation while
            maintaining the connectivity and community that remote work demands.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '14px',
            marginTop: '20px'
          }}>
            {[
              { location: 'Midway, UT', properties: 2, highlight: 'Growing Market' },
              { location: 'Park City, UT', properties: 2, highlight: 'Premier Skiing' },
              { location: 'Deer Valley, UT', properties: 1, highlight: 'Luxury Access' },
              { location: 'Heber Valley, UT', properties: 1, highlight: 'Coming Soon' }
            ].map((area) => (
              <div key={area.location} className="card" style={{ padding: '18px' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '4px 10px',
                  background: 'rgba(255,255,255,0.08)',
                  borderRadius: '6px',
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                  color: 'rgba(255,255,255,0.78)'
                }}>
                  {area.highlight}
                </div>
                <h3 style={{ fontSize: '18px', marginBottom: '6px' }}>{area.location}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '14px' }}>
                  {area.properties} {area.properties === 1 ? 'property' : 'properties'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Context */}
      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Growing with Utah's mountain economy</h2>
          <p className="sectionCopy">
            Heber Valley and the surrounding Wasatch region are experiencing explosive
            growth, driven by urban migration, remote work adoption, and massive
            infrastructure investments including the 2034 Winter Olympics.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            marginTop: '24px'
          }}>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>
                Strategic Location
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6', fontSize: '14px' }}>
                Positioned between Salt Lake City and Park City with two international
                airports less than an hour away. Access to multiple world-class ski
                resorts and year-round outdoor recreation.
              </p>
            </div>

            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>
                Population Growth
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6', fontSize: '14px' }}>
                Heber Valley is projected to grow 82% by 2055, making it Utah's
                fastest-growing mountain destination. Utah County (Provo) expected to
                rival Salt Lake City by 2060.
              </p>
            </div>

            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>
                Infrastructure Investment
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6', fontSize: '14px' }}>
                Multiple 2034 Winter Olympic venues nearby. New commercial zoning and
                $17M+ in downtown renovation projects creating vibrant community centers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mk-wrap">
        <div className="mk-section mk-sectionAlt">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <h2 className="mk-h2Center">Join the movement</h2>
            <p className="mk-p" style={{ textAlign: 'center' }}>
              Whether you're looking to stay with us or partner to list your property,
              we'd love to connect.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '20px', flexWrap: 'wrap' }}>
              <Link href="/#book" className="button">
                Book a stay
              </Link>
              <Link href="/property-management" className="button linkButton">
                List your property →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}