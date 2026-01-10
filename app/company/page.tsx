import Link from "next/link";

export const metadata = {
  title: "Company Information | Roamstead",
  description: "Corporate and investor information for Roamstead Ventures and Roamstead Collective.",
};

export default function CompanyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero" style={{ minHeight: '60vh' }}>
        <div
          className="heroBg"
          style={{ backgroundImage: "url(/assets/roamstead_mountain_bg.png)" }}
          aria-hidden="true"
        />
        <div className="heroOverlay" aria-hidden="true" />

        <div className="container heroContent">
          <h1 className="headline" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)' }}>
            Company Information
          </h1>
          <p className="subhead" style={{ maxWidth: '640px' }}>
            Corporate structure, investment information, and business details
            for Roamstead Ventures and Roamstead Collective.
          </p>
        </div>
      </section>

      {/* Corporate Structure */}
      <section className="section">
        <div className="container" style={{ maxWidth: '920px' }}>
          <h2 className="sectionTitle">Corporate Structure</h2>
          <p className="sectionCopy">
            Roamstead operates through a holding company structure designed to
            support growth and investment in multiple properties.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            marginTop: '24px'
          }}>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>
                Roamstead Ventures
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6', fontSize: '14px', marginBottom: '12px' }}>
                Fund manager and development company. Manages investment funds,
                property acquisitions, and strategic development initiatives.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px' }}>
                Parent Company
              </p>
            </div>

            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>
                Roamstead Collective
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6', fontSize: '14px', marginBottom: '12px' }}>
                Property management and hospitality operations company. Manages
                day-to-day operations, guest experience, and brand development.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px' }}>
                Operating Company
              </p>
            </div>

            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>
                Individual Property LLCs
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6', fontSize: '14px', marginBottom: '12px' }}>
                Each property operates through its own legal entity, providing
                liability protection and flexible ownership structures.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px' }}>
                Asset Entities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="mk-wrap">
        <div className="mk-section mk-sectionAlt">
          <h2 className="mk-h2">Leadership</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '120px 1fr',
            gap: '20px',
            alignItems: 'start',
            marginTop: '24px',
            maxWidth: '820px'
          }}>
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.14)'
            }} />
            
            <div>
              <h3 style={{ fontSize: '20px', marginBottom: '4px' }}>Chris Blewitt</h3>
              <p style={{ color: 'var(--muted)', fontSize: '14px', marginBottom: '14px' }}>
                Founder & CEO
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: '1.7', fontSize: '14px' }}>
                10+ years of finance experience. Founded Roamstead in 2023 to build
                hospitality infrastructure for the modern mountain economy. Passionate
                mountain enthusiast with 1M+ miles on Strava.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Current Portfolio</h2>
          <p className="sectionCopy">
            Properties under management across Utah's Wasatch region.
          </p>

          <div style={{
            display: 'grid',
            gap: '12px',
            marginTop: '24px',
            maxWidth: '720px'
          }}>
            {[
              { name: 'Granary', location: 'Midway, UT', rooms: '1 Bedroom', status: 'Operating' },
              { name: 'Daystar', location: 'Deer Valley, UT', rooms: '6 Bedrooms', status: 'Operating' },
              { name: 'Lowell 302', location: 'Park City, UT', rooms: '2 Bedrooms', status: 'Operating' },
              { name: 'Lowell 302A', location: 'Park City, UT', rooms: '2 Bedrooms', status: 'Operating' },
              { name: 'Midway House', location: 'Midway, UT', rooms: 'TBD', status: 'Operating' },
              { name: 'The Senator Collective', location: 'Heber Valley, UT', rooms: '10 Rooms', status: 'Opening Spring 2026' }
            ].map((property) => (
              <div 
                key={property.name}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto auto',
                  gap: '16px',
                  alignItems: 'center',
                  padding: '16px 18px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  borderRadius: '12px'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '16px', marginBottom: '4px' }}>{property.name}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '13px' }}>
                    {property.location} • {property.rooms}
                  </p>
                </div>
                <div style={{
                  padding: '4px 10px',
                  background: property.status === 'Operating' 
                    ? 'rgba(34, 197, 94, 0.15)' 
                    : 'rgba(59, 130, 246, 0.15)',
                  border: `1px solid ${property.status === 'Operating' 
                    ? 'rgba(34, 197, 94, 0.30)' 
                    : 'rgba(59, 130, 246, 0.30)'}`,
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: property.status === 'Operating'
                    ? 'rgba(34, 197, 94, 0.95)'
                    : 'rgba(59, 130, 246, 0.95)'
                }}>
                  {property.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Position */}
      <section className="mk-wrap">
        <div className="mk-section">
          <h2 className="mk-h2">Market Position</h2>
          <p className="mk-p">
            Roamstead is positioned at the intersection of several high-growth
            trends in the hospitality and real estate sectors.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '14px',
            marginTop: '24px'
          }}>
            {[
              {
                title: 'Remote Work Adoption',
                desc: '35M Americans work remotely (up 87% since 2019), driving demand for workation-friendly accommodations.'
              },
              {
                title: 'Experience Economy',
                desc: '25+ demographic prioritizes experiences over luxury, seeking authentic local connections.'
              },
              {
                title: 'Mountain Migration',
                desc: 'Heber Valley projected to grow 82% by 2055, fastest in Utah, with 2034 Olympics catalyst.'
              },
              {
                title: 'Regulatory Tailwinds',
                desc: 'New zoning reducing Airbnb supply while established boutique hotel licensing provides competitive advantage.'
              }
            ].map((point) => (
              <div key={point.title} className="card" style={{ padding: '18px' }}>
                <h3 style={{ fontSize: '16px', marginBottom: '8px', fontWeight: '600' }}>
                  {point.title}
                </h3>
                <p style={{ color: 'var(--muted)', lineHeight: '1.6', fontSize: '13.5px' }}>
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Revenue Model</h2>
          <p className="sectionCopy">
            Multiple revenue streams create resilience and maximize property
            utilization year-round.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '14px',
            marginTop: '24px'
          }}>
            {[
              { stream: 'Short-term Rentals', desc: 'Nightly accommodations targeting 25+ adventurers' },
              { stream: 'Medium-term Stays', desc: 'Extended stays for remote workers and seasonal visitors' },
              { stream: 'Cafe Sales', desc: 'Onsite coffee bar serving guests and local community' },
              { stream: 'Membership Programs', desc: 'Recurring revenue from local co-working and community access' },
              { stream: 'Event Fees', desc: 'Workshops, group activities, and community programming' },
              { stream: 'Property Management Fees', desc: 'Services for third-party property owners' }
            ].map((item) => (
              <div 
                key={item.stream}
                style={{
                  padding: '16px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  borderRadius: '12px'
                }}
              >
                <h3 style={{ fontSize: '15px', marginBottom: '6px', fontWeight: '600' }}>
                  {item.stream}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: '1.5' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mk-wrap">
        <div className="mk-section mk-sectionAlt">
          <div style={{ maxWidth: '720px' }}>
            <h2 className="mk-h2">Inquiries</h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
              marginTop: '24px'
            }}>
                
              <div>
                <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>
                  Property Management
                </h3>
                <Link 
                  href="/property-management"
                  style={{ color: 'rgba(255,255,255,0.78)', fontSize: '14px' }}
                >
                  Learn more →
                </Link>
              </div>

              <div>
                <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>
                  General Contact
                </h3>
                <a 
                  href="mailto:hello@roamstead-co.com"
                  style={{ color: 'rgba(255,255,255,0.78)', fontSize: '14px' }}
                >
                  hello@roamstead-co.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}