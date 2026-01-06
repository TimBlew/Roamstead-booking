import Image from "next/image";
import Link from "next/link";
import BookingSection from "@/app/components/BookingSection";

const IMAGES = [
  { src: "/listings/daystar/exterior-01.jpg", alt: "Daystar exterior" },
  { src: "/listings/daystar/living-01.jpg", alt: "Living room" },
  { src: "/listings/daystar/living-02.jpg", alt: "Living room seating area" },
  { src: "/listings/daystar/living-03.jpg", alt: "Living room alternate view" },
  { src: "/listings/daystar/living-04.jpg", alt: "Second living space" },
  { src: "/listings/daystar/kitchen-01.jpg", alt: "Kitchen" },
  { src: "/listings/daystar/kitchen-02.jpg", alt: "Kitchen alternate view" },
  { src: "/listings/daystar/kitchen-03.jpg", alt: "Kitchen details" },
  { src: "/listings/daystar/dining-01.jpg", alt: "Dining area" },
  { src: "/listings/daystar/dining-02.jpg", alt: "Dining area alternate view" },
  { src: "/listings/daystar/bedroom-01.jpg", alt: "Bedroom" },
  { src: "/listings/daystar/bedroom-02.jpg", alt: "Bedroom alternate view" },
  { src: "/listings/daystar/bedroom-03.jpg", alt: "Bedroom" },
  { src: "/listings/daystar/bedroom-04.jpg", alt: "Bedroom" },
  { src: "/listings/daystar/bedroom-05.jpg", alt: "Bedroom" },
  { src: "/listings/daystar/bedroom-06.jpg", alt: "Bedroom" },
  { src: "/listings/daystar/bedroom-07.jpg", alt: "Bedroom" },
  { src: "/listings/daystar/bath-01.jpg", alt: "Bathroom" },
  { src: "/listings/daystar/bath-02.jpg", alt: "Bathroom" },
  { src: "/listings/daystar/bath-03.jpg", alt: "Bathroom" },
  { src: "/listings/daystar/bath-04.jpg", alt: "Bathroom" },
  { src: "/listings/daystar/patio-01.jpg", alt: "Patio / outdoor space" },
  { src: "/listings/daystar/patio-02.jpg", alt: "Outdoor hot tub area" },
  { src: "/listings/daystar/recreation-01.jpg", alt: "Recreation / game room" },
  { src: "/listings/daystar/sauna-01.jpg", alt: "Sauna" },
  { src: "/listings/daystar/exterior-02.jpg", alt: "Daystar exterior alternate view" },
  { src: "/listings/daystar/exterior-03.jpg", alt: "Daystar exterior view" },
];

const AMENITIES = [
  // Wellness & recovery
  "Outdoor hot tub",
  "Indoor sauna",

  // Recreation & gathering
  "Indoor sport court",
  "Pool table",
  "Two living rooms",
  "Fireplace",

  // Living & convenience
  "Chef-ready kitchen",
  "Two dining areas",
  "Outdoor grill",
  "Washer + dryer",
  "Fast Wi-Fi",
  "Smart TV",
  "Free parking",
  "Free Deer Valley shuttle (7am–4:30pm)",
];


export default function DaystarDeerValleyPage() {
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

                <h1 className="listingTitle">Daystar</h1>
                <p className="listingLocation">Deer Valley, Park City, UT</p>

                <div className="listingStatsRow">
                  <span className="statPill">Sleeps 12</span>
                  <span className="statPill">6 Bedrooms</span>
                  <span className="statPill">6 Baths</span>
                  <span className="statPill">8 Beds</span>
                  <span className="statPill">Hot tub + sauna</span>
                  <span className="statPill">Free shuttle</span>
                </div>
              </div>

              <a className="button" href="#book">
                Check availability
              </a>
            </div>

            <p className="listingLead">
              Family-friendly Deer Valley retreat in Solamere—just minutes from
              the resort base. After a day on the slopes, unwind in the outdoor
              hot tub, indoor sauna, or one of three soaking tubs. The main level
              features an open floor plan with a pool table, large kitchen, and
              two dining areas. Two living rooms and an indoor sport court provide
              space for everyone to relax and play.
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
                Make unforgettable memories at this spacious Deer Valley home in
                Solamere—just minutes from the resort base. After skiing, relax
                in the outdoor hot tub, indoor sauna, or one of the soaking tubs.
                The main level offers an open layout with a pool table, living room,
                large kitchen, and two dining areas so everyone has a seat to gather.
                Two distinct living rooms create separate hangout spaces, while the
                indoor sport court invites friendly competition. The entire property
                is available for guest access.
              </p>
            </div>

            <div className="listingSection card">
              <h2 className="listingH2">Getting around</h2>
              <p className="listingP">
                <strong>Free shuttle to Deer Valley:</strong> The neighborhood
                offers a free shuttle service with one touch of a button. Shuttles
                run from 7am–4:30pm.
                <br />
                <strong>Park City access:</strong> From the Deer Valley base, access
                the free public bus system to reach all areas of Park City, including
                Main Street with frequent service.
              </p>
            </div>

            <div className="listingSection card">
              <h2 className="listingH2">Sleeping arrangements</h2>
              <p className="listingP">
                <strong>Bedrooms:</strong> 6
                <br />
                <strong>Beds:</strong> 8 (2 King • 2 Queen • Full bunk beds)
                <br />
                <strong>Bathrooms:</strong> 6 private
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
                 <p className="listingP" style={{ marginTop: "10px", color: "rgba(255,255,255,0.62)", fontSize: "13px" }}>
                Safety: smoke detector • carbon monoxide detector • fire extinguisher • first aid kit
                </p>
            </div>
          </div>

          <aside className="listingRight" id="book">
            <div className="listingSticky">
              <BookingSection defaultListingId={455634} />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

