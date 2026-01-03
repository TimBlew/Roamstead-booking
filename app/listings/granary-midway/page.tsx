import Image from "next/image";
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
  "Wi-Fi",
  "Air conditioning",
  "Heating",
  "Gas fireplace",
  "In-unit washer & dryer",
  "Fully stocked kitchen",
  "Dishwasher",
  "Keurig + pods",
  "Smart TV",
  "Laptop-friendly workspace",
  "Free covered parking (1 spot)",
  "Family friendly",
  "Tub / shower",
  "Hair dryer",
  "Smoke detector",
  "Carbon monoxide detector",
  "Fire extinguisher",
  "First aid kit",
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
          <div className="listingHeroCard card">
            <div className="listingHeroTop">
              <div>
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

        {/* Two-column: details + booking */}
        <div className="listingColumns">
          <div className="listingLeft">
            <div className="listingSection card">
              <h2 className="listingH2">About this stay</h2>
              <p className="listingP">
                This charming 1BD/1BA ground-floor condo sleeps up to 4 and blends
                old-world character with modern comfort. Enjoy mountain views from
                the spacious open floor plan with a full kitchen and gas fireplace.
                Newly renovated with ample closet space, a pull-out sofa for extra
                sleeping space, and in-unit washer/dryer. Just a 15-minute walk to
                Midway’s best restaurants and shops, and a short drive to Utah’s
                finest outdoor adventures.
              </p>
            </div>

            <div className="listingSection card">
              <h2 className="listingH2">Sleeping arrangements</h2>
              <p className="listingP">
                <strong>Bedroom:</strong> 1 king-sized bed with bedside tables,
                dresser, large closet, and window blinds.
                <br />
                <strong>Living Room:</strong> 2-person pull-out couch + 2 seating
                chairs around a warm fireplace &amp; smart TV. Extra linens
                provided.
              </p>
            </div>

            <div className="listingSection card">
              <h2 className="listingH2">Kitchen &amp; dining</h2>
              <p className="listingP">
                Fully-stocked kitchen with granite countertops, Keurig (with pods),
                blender, dishwasher, and cooking basics. Dining table for four plus
                a small workstation.
              </p>
            </div>

            <div className="listingSection card">
              <h2 className="listingH2">Parking</h2>
              <p className="listingP">
                1 covered parking spot included. This unit is one of 16 residential
                condo units in the Granary Building. Additional parking may be
                available upon request and approval.
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
            </div>
          </div>

          <aside className="listingRight">
            <div className="listingSticky">
              <BookingSection defaultListingId={455631} />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

