import Image from "next/image";
import Link from "next/link";
import BookingSection from "@/app/components/BookingSection";

const IMAGES = [
  { src: "/listings/granary/exterior-01.jpg", alt: "Granary exterior" },
  { src: "/listings/granary/living-01.jpg", alt: "Living room with fireplace" },
  { src: "/listings/granary/living-02.jpg", alt: "Open living space" },
  { src: "/listings/granary/living-03.jpg", alt: "Fireplace seating area" },
  { src: "/listings/granary/living-04.jpg", alt: "Living area alternate view" },
  { src: "/listings/granary/kitchen-01.jpg", alt: "Kitchen with island" },
  { src: "/listings/granary/dining-01.jpg", alt: "Dining area and workspace" },
  { src: "/listings/granary/bedroom-01.jpg", alt: "Bedroom with king bed" },
  { src: "/listings/granary/bath-01.jpg", alt: "Bathroom with tub and vanity" },
];

const AMENITIES = [
  "Mountain views",
  "Gas fireplace",
  "Fully equipped kitchen",
  "Keurig coffee station",
  "Dining table for four",
  "In-unit washer + dryer",
  "Smart TV",
  "Fast Wi-Fi",
  "Dedicated workspace",
  "Covered parking (1 spot)",
  "Walkable to Midway dining + shops",
  "Family-friendly",
];

export default function GranaryPage() {
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

                <h1 className="listingTitle">Granary</h1>
                <p className="listingLocation">Midway, UT</p>

                <div className="listingStatsRow">
                  <span className="statPill">Sleeps 4</span>
                  <span className="statPill">1 Bedroom</span>
                  <span className="statPill">1 Bath</span>
                  <span className="statPill">2 Beds</span>
                  <span className="statPill">Covered parking</span>
                </div>
              </div>

              <a className="button" href="#book">
                Check availability
              </a>
            </div>

            <p className="listingLead">
              Charming 1BD/1BA ground-floor condo with mountain views, full
              kitchen, gas fireplace, and in-unit washer/dryer — walk to Midway’s
              restaurants + shops and drive to Utah’s best outdoor adventures.
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
                This charming 1BD/1BA ground-floor condo sleeps up to 4 and blends
                old-world character with modern comfort. Enjoy mountain views from
                the spacious open floor plan with a full kitchen and gas fireplace.
                Newly renovated with ample closet space, a pull-out sofa for extra
                sleeping space, and in-unit washer/dryer.
              </p>
            </div>

            <div className="listingSection card">
              <h2 className="listingH2">Sleeping arrangements</h2>
              <p className="listingP">
                <strong>Bedroom:</strong> 1 king-sized bed
                <br />
                <strong>Living Room:</strong> Pull-out couch + fireplace seating
              </p>
            </div>

            <div className="listingSection card">
              <h2 className="listingH2">Kitchen &amp; dining</h2>
              <p className="listingP">
                Fully-stocked kitchen with Keurig, dishwasher, and dining table
                for four.
              </p>
            </div>

            <div className="listingSection card">
              <h2 className="listingH2">Parking</h2>
              <p className="listingP">
                1 covered parking spot included. Additional parking available
                upon request.
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
              <BookingSection defaultListingId={455631} />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

