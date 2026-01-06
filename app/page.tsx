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
          A modern mountain stay designed for travelers who value space, community, and adventure.
        </p>

        <div className="ctaRow">
          <a className="button" href="#book">
            Book your stay
          </a>
          <a className="button linkButton" href="#experiences">
            Explore experiences
          </a>
        </div>
      </div>
    </section>
  );
}

function PropertiesSection() {
  return (
    <section className="section" id="properties">
      <div className="container">
        <h2 className="sectionTitle">Properties</h2>
        <p className="sectionCopy">Browse our stays and book directly.</p>

        <div className="propertyGrid">
          {PROPERTIES.map((p) => (
            <Link key={p.slug} href={`/listings/${p.slug}`} className="propertyCard">
              <div className="propertyImage">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="propertyImg"
                  sizes="(max-width: 900px) 100vw, 33vw"
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
              Roamstead brings together the best of mountain living and modern hospitality — a place to unplug, get
              outside, and still have everything you need to stay connected.
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
            <p className="mk-pSm">Work-friendly rooms and shared spaces designed for focus and connection.</p>
          </div>
          <div className="mk-card">
            <h3 className="mk-h3">Cafe + coffee bar</h3>
            <p className="mk-pSm">A comfortable third space for locals and guests to fuel up and hang out.</p>
          </div>
          <div className="mk-card">
            <h3 className="mk-h3">Wellness + recovery</h3>
            <p className="mk-pSm">Health-forward amenities to reset after big days in the mountains.</p>
          </div>
          <div className="mk-card">
            <h3 className="mk-h3">Community events</h3>
            <p className="mk-pSm">Experience-driven meetups, rides, and local partnerships.</p>
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
            <p className="mk-cap">Summer/Fall: Trails, water, and wide-open mountain days.</p>
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
          <p className="sectionCopy">Choose a property, select your dates, and book directly.</p>
          <BookingSection />
        </div>
      </section>
    </main>
  );
}




