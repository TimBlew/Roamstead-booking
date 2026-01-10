"use client";

import { useState } from 'react';

export default function PropertyManagementPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyAddress: '',
    propertyType: '',
    bedrooms: '',
    message: ''
  });

  const handleSubmit = () => {
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll be in touch within 24 hours.');
  };

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '85vh' }}>
        <div
          className="heroBg"
          style={{ backgroundImage: "url(/assets/roamstead_mountain_bg.png)" }}
          aria-hidden="true"
        />
        <div className="heroOverlay" aria-hidden="true" />

        <div className="container heroContent">
          <h1 className="headline">Partner with Roamstead</h1>
          <p className="subhead" style={{ maxWidth: '680px' }}>
            Professional property management designed for the modern mountain economy. 
            We bring hospitality expertise, dynamic pricing, and multi-channel marketing 
            to maximize your property's revenue potential.
          </p>

          <div className="ctaRow">
            <a className="button" href="#contact">
              Get started
            </a>
            <a className="button linkButton" href="/">
              ← Back to home
            </a>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">The opportunity in mountain hospitality</h2>
          <p className="sectionCopy">
            Utah's mountain destinations are experiencing unprecedented growth, with new 
            traveler segments seeking authentic, experience-driven stays. Traditional 
            hospitality offerings haven't kept pace.
          </p>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
            gap: '14px',
            marginTop: '24px'
          }}>
            <div className="card" style={{ padding: '18px' }}>
              <div style={{ fontSize: '32px', fontWeight: '600', marginBottom: '6px' }}>
                35M
              </div>
              <p style={{ color: 'var(--muted)', lineHeight: '1.55', fontSize: '14px' }}>
                Americans work remotely today (up 87% since 2019)
              </p>
            </div>

            <div className="card" style={{ padding: '18px' }}>
              <div style={{ fontSize: '32px', fontWeight: '600', marginBottom: '6px' }}>
                25yr+
              </div>
              <p style={{ color: 'var(--muted)', lineHeight: '1.55', fontSize: '14px' }}>
                Demographic values experience over luxury
              </p>
            </div>

            <div className="card" style={{ padding: '18px' }}>
              <div style={{ fontSize: '32px', fontWeight: '600', marginBottom: '6px' }}>
                4-Season
              </div>
              <p style={{ color: 'var(--muted)', lineHeight: '1.55', fontSize: '14px' }}>
                Year-round adventure access drives consistent demand
              </p>
            </div>

            <div className="card" style={{ padding: '18px' }}>
              <div style={{ fontSize: '32px', fontWeight: '600', marginBottom: '6px' }}>
                2034
              </div>
              <p style={{ color: 'var(--muted)', lineHeight: '1.55', fontSize: '14px' }}>
                Winter Olympics coming to Park City & Heber Valley
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Roamstead */}
      <section className="mk-wrap">
        <div className="mk-section mk-sectionAlt">
          <h2 className="mk-h2Center">Why partner with Roamstead?</h2>
          <p style={{ 
            textAlign: 'center', 
            color: 'var(--muted)', 
            maxWidth: '640px', 
            margin: '0 auto 28px',
            lineHeight: '1.6'
          }}>
            We're building hospitality infrastructure for the modern mountain economy—
            connecting travelers who value community, adventure, and authentic experiences 
            with properties designed to deliver them.
          </p>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '16px',
            marginTop: '24px'
          }}>
            <div className="mk-card">
              <h3 className="mk-h3">Maximum Revenue</h3>
              <p className="mk-pSm">
                AI-driven dynamic pricing, multi-channel distribution, and strategic 
                marketing targeting high-value traveler segments (workations, sports 
                tourism, coolcations).
              </p>
            </div>

            <div className="mk-card">
              <h3 className="mk-h3">Modern Marketing</h3>
              <p className="mk-pSm">
                We target the 25+ demographic hungry for experience over luxury—remote 
                workers, adventure seekers, and families looking for authentic mountain 
                experiences.
              </p>
            </div>

            <div className="mk-card">
              <h3 className="mk-h3">Guest Experience</h3>
              <p className="mk-pSm">
                24/7 support, seamless automated check-in/out, curated local partnerships, 
                and community-centered amenities that earn 5-star reviews.
              </p>
            </div>

            <div className="mk-card">
              <h3 className="mk-h3">Property Care</h3>
              <p className="mk-pSm">
                Professional cleaning, maintenance coordination, regular inspections, 
                and strategic upgrades to protect and enhance your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Traveler Trends */}
      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">What travelers are looking for today</h2>
          <p className="sectionCopy">
            Top travel trends for 2025 align perfectly with mountain destinations. 
            We position your property to capture these high-growth segments.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
            marginTop: '24px'
          }}>
            {[
              { 
                title: 'Workations & Business Leisure', 
                desc: 'Blending productivity with adventure—remote workers seeking mountain inspiration'
              },
              { 
                title: 'Sports Tourism', 
                desc: 'Year-round adventure access from skiing to mountain biking to trail running'
              },
              { 
                title: 'Coolcations', 
                desc: 'Escaping city heat for high-altitude summers in idyllic mountain settings'
              },
              { 
                title: 'Hyper-local Experiences', 
                desc: 'Authentic connection to place with community integration and local partnerships'
              }
            ].map((trend) => (
              <div key={trend.title} style={{
                padding: '16px 18px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.10)',
                borderRadius: '14px'
              }}>
                <h3 style={{ fontSize: '16px', marginBottom: '8px', fontWeight: '600' }}>
                  {trend.title}
                </h3>
                <p style={{ color: 'var(--muted)', lineHeight: '1.6', fontSize: '13.5px' }}>
                  {trend.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mk-wrap">
        <div className="mk-section mk-sectionAlt">
          <h2 className="mk-h2Center">Full-service management</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '14px',
            marginTop: '24px'
          }}>
            {[
              { 
                title: 'Revenue Optimization', 
                items: [
                  'AI-driven dynamic pricing',
                  'Multi-channel distribution',
                  'Strategic calendar management',
                  'Revenue analytics & reporting'
                ] 
              },
              { 
                title: 'Marketing & Listings', 
                items: [
                  'Professional photography',
                  'SEO-optimized listings',
                  'Targeted digital marketing',
                  'Brand storytelling'
                ] 
              },
              { 
                title: 'Guest Experience', 
                items: [
                  'Automated keyless check-in',
                  '24/7 guest support',
                  'Local experience curation',
                  'Review management'
                ] 
              },
              { 
                title: 'Property Operations', 
                items: [
                  'Professional cleaning coordination',
                  'Maintenance & vendor management',
                  'Regular inspections',
                  'Strategic property upgrades'
                ] 
              }
            ].map((service) => (
              <div key={service.title} className="mk-card">
                <h3 className="mk-h3">{service.title}</h3>
                <ul style={{ 
                  marginTop: '10px', 
                  paddingLeft: '18px',
                  color: 'var(--muted)',
                  fontSize: '13.5px',
                  lineHeight: '1.7'
                }}>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas with Growth Data */}
      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Growing with Utah's mountain economy</h2>
          <p className="sectionCopy">
            We focus on Utah's fastest-growing mountain destinations—areas with proven 
            infrastructure, strong recreational offerings, and massive growth potential.
          </p>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '14px',
            marginTop: '24px'
          }}>
            {[
              { 
                area: 'Heber Valley', 
                highlight: 'Fastest Growing',
                desc: 'Emerging mountain destination poised for explosive growth. Multiple 2034 Olympic venues nearby.'
              },
              { 
                area: 'Park City / Deer Valley', 
                highlight: 'Premier Skiing',
                desc: 'Established luxury ski destination with year-round appeal and strong tourism infrastructure.'
              },
              { 
                area: 'Midway', 
                highlight: '4-Season Recreation',
                desc: 'Idyllic valley town with authentic small-town charm and immediate access to outdoor adventure.'
              },
              { 
                area: 'Wasatch Back', 
                highlight: 'Growing Market',
                desc: 'Bordering mountain ranges, world-class resorts, and proximity to two international airports.'
              }
            ].map((location) => (
              <div 
                key={location.area}
                className="card"
                style={{ padding: '18px' }}
              >
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
                  {location.highlight}
                </div>
                <h3 style={{ fontSize: '18px', marginBottom: '8px', fontWeight: '600' }}>
                  {location.area}
                </h3>
                <p style={{ color: 'var(--muted)', lineHeight: '1.6', fontSize: '14px' }}>
                  {location.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mk-wrap">
        <div className="mk-section">
          <h2 className="mk-h2">How it works</h2>
          <p className="mk-p">
            Simple onboarding. Professional management. Full transparency. 
            You maintain ownership while we handle everything.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            marginTop: '32px'
          }}>
            {[
              { 
                num: '1', 
                title: 'Initial Consultation', 
                desc: 'We tour your property, discuss your goals, and provide a detailed revenue projection based on current market data.'
              },
              { 
                num: '2', 
                title: 'Professional Onboarding', 
                desc: 'Professional photography, SEO-optimized listings, and integration with our booking platform and multi-channel distribution.'
              },
              { 
                num: '3', 
                title: 'Go Live', 
                desc: 'Your property goes live across all channels with dynamic pricing and targeted marketing to high-value traveler segments.'
              },
              { 
                num: '4', 
                title: 'Ongoing Management', 
                desc: 'Monthly revenue reports, direct deposits, automated guest operations, and strategic property optimization.'
              }
            ].map((step) => (
              <div key={step.num}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '12px'
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '17px', marginBottom: '6px' }}>
                  {step.title}
                </h3>
                <p style={{ color: 'var(--muted)', lineHeight: '1.6', fontSize: '14px' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Transparent revenue model</h2>
          <p className="sectionCopy">
            We succeed when you succeed. Our management fee structure is designed 
            to align our incentives with maximizing your property's performance.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            marginTop: '24px'
          }}>
            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>
                Multiple Revenue Streams
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6', fontSize: '14px', marginBottom: '12px' }}>
                Short-term rentals, medium-term stays, community events, and potential 
                membership programs to maximize your property's earning potential.
              </p>
            </div>

            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>
                Performance-Based Fees
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6', fontSize: '14px', marginBottom: '12px' }}>
                Our management fee is a percentage of revenue—we're motivated to 
                maximize your bookings, rates, and occupancy year-round.
              </p>
            </div>

            <div className="card" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>
                Full Transparency
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6', fontSize: '14px', marginBottom: '12px' }}>
                Monthly financial reports, real-time booking dashboard access, 
                and detailed breakdowns of all revenue and expenses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section" id="contact">
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 className="sectionTitle">Join the movement</h2>
          <p className="sectionCopy">
            Tell us about your property and we'll schedule a consultation to discuss 
            how Roamstead can help you capitalize on Utah's growing mountain economy.
          </p>

          <div className="card" style={{ marginTop: '24px', padding: '28px' }}>
            <div style={{ display: 'grid', gap: '18px' }}>
              {/* Name */}
              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontSize: '13px',
                  fontWeight: '600'
                }}>
                  Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.14)',
                    borderRadius: '12px',
                    color: 'var(--text)',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Email & Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '8px', 
                    fontSize: '13px',
                    fontWeight: '600'
                  }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.14)',
                      borderRadius: '12px',
                      color: 'var(--text)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '8px', 
                    fontSize: '13px',
                    fontWeight: '600'
                  }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.14)',
                      borderRadius: '12px',
                      color: 'var(--text)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Property Address */}
              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontSize: '13px',
                  fontWeight: '600'
                }}>
                  Property Address *
                </label>
                <input
                  type="text"
                  value={formData.propertyAddress}
                  onChange={(e) => handleChange('propertyAddress', e.target.value)}
                  placeholder="City, UT"
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.14)',
                    borderRadius: '12px',
                    color: 'var(--text)',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Property Type & Bedrooms */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '8px', 
                    fontSize: '13px',
                    fontWeight: '600'
                  }}>
                    Property Type *
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => handleChange('propertyType', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.14)',
                      borderRadius: '12px',
                      color: 'var(--text)',
                      fontSize: '14px',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="">Select type</option>
                    <option value="condo">Condo</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="single-family">Single Family Home</option>
                    <option value="cabin">Cabin</option>
                    <option value="boutique-hotel">Boutique Hotel / B&B</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '8px', 
                    fontSize: '13px',
                    fontWeight: '600'
                  }}>
                    Bedrooms *
                  </label>
                  <select
                    value={formData.bedrooms}
                    onChange={(e) => handleChange('bedrooms', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.14)',
                      borderRadius: '12px',
                      color: 'var(--text)',
                      fontSize: '14px',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6-9">6-9</option>
                    <option value="10+">10+</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontSize: '13px',
                  fontWeight: '600'
                }}>
                  Tell us about your property
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  rows={4}
                  placeholder="Any details about your property, goals, or questions..."
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.14)',
                    borderRadius: '12px',
                    color: 'var(--text)',
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <button
                onClick={handleSubmit}
                className="button"
                style={{
                  width: '100%',
                  padding: '14px',
                  marginTop: '8px',
                  fontSize: '14px',
                  fontWeight: '600'
                }}
              >
                Submit inquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}