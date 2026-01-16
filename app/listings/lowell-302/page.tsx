import Image from "next/image";
import Link from "next/link";
import BookingSection from "@/app/components/BookingSection";

const IMAGES = [
  { src: "/listings/lowell-302/exterior-01.jpg", alt: "Lowell 302 exterior" },
  { src: "/listings/lowell-302/living-01.jpg", alt: "Living room" },
  { src: "/listings/lowell-302/living-02.jpg", alt: "Living space" },
  { src: "/listings/lowell-302/kitchen-01.jpg", alt: "Kitchen" },
  { src: "/listings/lowell-302/dining-01.jpg", alt: "Dining area" },
  { src: "/listings/lowell-302/bedroom-01.jpg", alt: "Primary bedroom" },
  { src: "/listings/lowell-302/bedroom-02.jpg", alt: "Second bedroom" },
  { src: "/listings/lowell-302/bathroom-01.jpg", alt: "Bathroom" },
  { src: "/listings/lowell-302/bathroom-02.jpg", alt: "Bathroom with steam shower" },
  { src: "/listings/lowell-302/bathroom-03.jpg", alt: "Bathroom details" },
  { src: "/listings/lowell-302/gym-01.jpg", alt: "Fitness center" },
  { src: "/listings/lowell-302/pool-01.jpg", alt: "Heated pool and hot tub" },
  { src: "/listings/lowell-302/exterior-01.jpg", alt: "Lowell 302 exterior" },
];

const AMENITIES = [
  // Mountain access
  "Steps to Park City Mountain Resort",
  "Resort bus stop nearby",
  "Ski storage",
  "On-site ski rental / tuning shop",

  // Wellness
  "Steam shower",
  "Bathtub",
  "Heated outdoor pool",
  "Outdoor hot tub",
  "Fitness center",

  // Living & convenience
  "Full kitchen",
  "Large dining table (seats ~10)",
  "Washer + dryer",
  "Fast Wi-Fi",
  "Flat-screen TVs",
  "Underground parking",
  "Elevator",
  "Keyless self check-in",
  "Air conditioning + heating",
];

export default function Lowell302ParkCityPage() {
  return (
    <main className="listingPage">
      {/* HERO */}
      <section className="listingHeroWrap">
        <div className="listingHeroMedia">
          <Image
            src={IMAGES[0].src}
            alt={IMAGES[0].alt}
            width={1800}
            height={1000}
            priority
            className="listingHeroImg"
          />
        </div>

        <div className="container listingHeroInner">
          <div
            className="listingHeroCard card"
            style={{ position: "relative", zIndex: 3 }}
          >
            <div className="listingHeroTop">
              <div>
                {/* Back to home */}
                <Link
                  href="/"
                  className="button linkButton"
                  style={{ marginBottom: "10px" }}
                >
                  ← Back to home
                </Link>

                <h1 className="listingTitle">The Lowell</h1>
                <p className="listingLocation">Park City Mountain Resort, Park City, UT</p>

                <div className="listingStatsRow">
                  <span className="statPill">Sleeps 8</span>
                  <span className="statPill">2 Bedrooms</span>
                  <span className="statPill">2 Baths</span>
                  <span className="statPill">Walk to snow</span>
                  <span className="statPill">Steam shower</span>
                  <span className="statPill">Heated pool + hot tub</span>
                </div>
              </div>

              <a className="button" href="#book">
                Check availability
              </a>
            </div>

            <p className="listingLead">
              Brand-new condo at the base of Park City Mountain Resort—walk about
              30 steps and you’re on the snow. Enjoy a steam shower and bathtub,
              a piano and chess table, and a full kitchen. Building amenities include
              a fitness center, hot tub, heated pool, underground parking, and ski storage
              (plus an on-site rental/tuning shop). Easy access to Main Street via the
              resort bus hub.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container listingMain">
        {/* Gallery */}
        <div className="listingGalleryGrid">
          {IMAGES.slice(1).map((img) => (
            <div className="listingGalleryItem" key={img.src}>
              <Image src={img.src} alt={img.alt} width={1200} height={900} />
            </div>
          ))}
        </div>

        {/* Two-column layout */}
        <div className="listingColumns">
          <div className="listingLeft">
            <div className="listingSection card">
              <h2 className="listingH2">About this stay</h2>
              <p className="listingP">
                This spacious, modern condo is located steps from the base of Park City
                Mountain Resort with unbeatable walkability to the lifts and snow.
                Inside you’ll find a full kitchen, in-unit washer/dryer, large dining table,
                piano, chess table, complimentary Wi-Fi, and flat-screen TVs in both bedrooms.
                After a day outside, unwind with a steam shower and soak in the bathtub.
                Guests also have access to the building’s heated outdoor pool, hot tub,
                fitness center, elevator, underground parking, and ski storage.
              </p>
              <p className="listingP" style={{ marginTop: "10px" }}>
                Keyless entry is available for self check-in. I’m reachable by call/text 24/7
                and can share local recommendations (guides, drivers, restaurants, and activities).
              </p>
            </div>

            <div className="listingSection card">
              <h2 className="listingH2">Getting around</h2>
              <p className="listingP">
                <strong>Resort access:</strong> The condo is at the base area—walk out and you’re
                right by the mountain.
                <br />
                <strong>Bus to Main Street:</strong> The nearby resort bus stop runs frequently and
                can get you to Historic Main Street in about 3–5 minutes.
                <br />
                <strong>Walkable option:</strong> Main Street is also walkable (about 15 minutes).
              </p>
            </div>

            <div className="listingSection card">
              <h2 className="listingH2">Sleeping arrangements</h2>
              <p className="listingP">
                <strong>Bedrooms:</strong> 2
                <br />
                <strong>Bedroom 1:</strong> King bed + twin daybed
                <br />
                <strong>Bedroom 2:</strong> 2 Queen beds + futon (full-size)
                <br />
                <strong>Bathrooms:</strong> 2 private
              </p>
            </div>

            <div className="listingSection card">
              <h2 className="listingH2">Amenities</h2>
              <div className="amenityPills">
                {AMENITIES.map((a) => (
                  <span className="amenityPill" key={a}>
                    {a}
                  </span>
                ))}
              </div>

              <p
                className="listingP"
                style={{
                  marginTop: "10px",
                  color: "rgba(255,255,255,0.62)",
                  fontSize: "13px",
                }}
              >
                Safety: smoke detector • carbon monoxide detector • fire extinguisher • first aid kit
              </p>
            </div>
          </div>

          <aside className="listingRight" id="book">
            <div className="listingSticky">
              <BookingSection defaultListingId={455632} />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
