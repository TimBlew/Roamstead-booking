import Image from "next/image";
import Link from "next/link";
import BookingSection from "@/app/components/BookingSection";

const LISTING = {
  title: "Hygge House",
  subtitle: "Spacious 4BR mountain home w/ sauna, office, gym + gear garage",
  location: "Midway, UT",
  meta: "Sleeps 10 • 4 Bedrooms • 3 Baths • Sauna • Office • Gear Garage/Gym",
  heroImage: "/listings/house-midway/exterior-01.jpg",
};

const GALLERY = [
  // Exteriors
  { src: "/listings/house-midway/exterior-02.jpg", alt: "Exterior" },
  { src: "/listings/house-midway/exterior-04.jpg", alt: "Backyard and patio" },

  // Living
  { src: "/listings/house-midway/living-03.jpg", alt: "Main living room" },
  { src: "/listings/house-midway/living-05.jpg", alt: "Main living room" },
  { src: "/listings/house-midway/living-02.jpg", alt: "Living room seating" },

  // Kitchen
  { src: "/listings/house-midway/kitchen-01.jpg", alt: "Kitchen and island" },

  // Bedrooms
  { src: "/listings/house-midway/bedroom-01.jpg", alt: "Bedroom" },
  { src: "/listings/house-midway/bedroom-03.jpg", alt: "Bedroom" },

  // Sauna / Garage
  { src: "/listings/house-midway/sauna-01.jpg", alt: "Private sauna" },
  { src: "/listings/house-midway/sauna-02.jpg", alt: "Private sauna" },
  { src: "/listings/house-midway/garage-01.jpg", alt: "Garage gym and storage" },
  { src: "/listings/house-midway/garage-03.jpg", alt: "Garage gym and storage" },
];

export default function Page() {
  return (
    <main className="listingPage">
      {/* HERO */}
      <section className="listingHeroWrap">
        <div className="listingHeroMedia" aria-hidden="true">
          <Image
            src={LISTING.heroImage}
            alt={LISTING.title}
            fill
            priority
            className="listingHeroImg"
            sizes="100vw"
          />
        </div>

        <div className="listingHeroInner">
          <div className="container">
            <div className="card listingHeroCard">
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

                  <h1 className="listingTitle">{LISTING.title}</h1>
                  <p className="listingLocation">{LISTING.location}</p>
                </div>
              </div>

              <p className="listingLead">{LISTING.subtitle}</p>

              <div className="listingStatsRow" aria-label="Key highlights">
                <span className="statPill">Sleeps 10</span>
                <span className="statPill">4 Bedrooms</span>
                <span className="statPill">3 Baths</span>
                <span className="statPill">Private 4-person sauna</span>
                <span className="statPill">Dedicated office</span>
                <span className="statPill">Gym + gear garage</span>
                <span className="statPill">Fenced yard + fire pit</span>
                <span className="statPill">Pets allowed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="listingMain container">
        {/* GALLERY */}
        <div className="listingGalleryGrid" aria-label="Photo gallery">
          {GALLERY.map((img) => (
            <div key={img.src} className="listingGalleryItem">
              <Image src={img.src} alt={img.alt} width={1600} height={1067} />
            </div>
          ))}
        </div>

        <div className="listingColumns">
          {/* LEFT CONTENT */}
          <div className="listingLeft">
            <div className="card listingSection">
              <h2 className="listingH2">About this stay</h2>
              <p className="listingP">
                The ideal Utah mountain escape — a spacious 4-bedroom home built for
                families, remote workers, and groups who want comfort and convenience
                near Utah’s best adventures. Enjoy two cozy living rooms, a dedicated
                office, desks/monitors in each bedroom, and a 2-car garage set up to
                store bikes, skis/boards, and more. Finish your day with the private
                4-person sauna, then hang outside with the BBQ + fire pit in the
                fenced backyard.
              </p>
            </div>

            <div className="card listingSection">
              <h2 className="listingH2">Layout</h2>

              <h3 className="listingH2" style={{ fontSize: 16, marginBottom: 8 }}>
                Upstairs (main level)
              </h3>
              <p className="listingP">
                Open-concept living + kitchen with a large island (seats 8) and an
                expandable dining table. Step onto the deck for grilling and mountain
                air. Three bedrooms and two bathrooms upstairs (one en-suite).
              </p>

              <ul className="mk-list" style={{ marginTop: 10 }}>
                <li>
                  Bedroom #1 (Queen): closet, en-suite bath, desk + monitor, mountain views
                </li>
                <li>Bedroom #2 (Queen): closet, TV, desk + monitor</li>
                <li>Bedroom #3 (Twin trundle): sleeps 1–2, closet, desk + monitor</li>
              </ul>

              <h3 className="listingH2" style={{ fontSize: 16, margin: "14px 0 8px" }}>
                Downstairs
              </h3>
              <p className="listingP">
                Cozy second living room for movie nights, electric piano, full laundry
                room, and an expandable game table (seats 8).
              </p>

              <ul className="mk-list" style={{ marginTop: 10 }}>
                <li>
                  Primary bedroom (King Tempur-Pedic): walk-in closet, standing desk + monitor
                </li>
                <li>
                  Office: standing desk + monitor, pull-out sofa bed (sleeps 1), backyard views
                </li>
              </ul>
            </div>

            <div className="card listingSection">
              <h2 className="listingH2">Garage, gym + gear storage</h2>
              <p className="listingP">
                The 2-car garage doubles as a private gym (rack, bench, dumbbells,
                yoga mats) and includes storage designed for bike + ski/board gear.
                Driveway fits 4 cars and is large enough for a trailer/boat/RV.
              </p>
            </div>

            <div className="card listingSection">
              <h2 className="listingH2">Backyard + sauna</h2>
              <p className="listingP">
                A true backyard sanctuary: patio dining for 6, lounge chairs, a lush
                lawn, and a five-chair fire pit area. The private 4-person sauna is
                tucked away for easy post-adventure recovery. Fully fenced yard for
                kids and pets.
              </p>
            </div>

            <div className="card listingSection">
              <h2 className="listingH2">Amenities highlights</h2>
              <div className="amenityPills">
                <span className="amenityPill">Fast Wi-Fi</span>
                <span className="amenityPill">Dedicated office</span>
                <span className="amenityPill">Desk + monitor in bedrooms</span>
                <span className="amenityPill">Private sauna</span>
                <span className="amenityPill">Gym equipment</span>
                <span className="amenityPill">BBQ grill</span>
                <span className="amenityPill">Fire pit</span>
                <span className="amenityPill">Fenced yard</span>
                <span className="amenityPill">Washer + dryer</span>
                <span className="amenityPill">Kitchen basics</span>
                <span className="amenityPill">Free parking</span>
                <span className="amenityPill">Pets allowed</span>
              </div>

              <p className="listingP" style={{ marginTop: 12 }}>
                Note: Guests can access all rooms and areas except 2 locked owner
                closets (clearly marked).
              </p>
            </div>
          </div>

          {/* RIGHT / BOOKING */}
          <aside className="listingRight">
            <div className="listingSticky">
              <div className="card">
                <div className="bookingTopBar">
                  <div>
                    <div className="pickerLabel">Book this property</div>
                    <div style={{ color: "rgba(255,255,255,0.78)", fontSize: 13 }}>
                      {LISTING.meta}
                    </div>
                  </div>
                </div>

                <div className="bookingGrid">
                  {/* ✅ Force the calendar to "House (Midway)" */}
                  <BookingSection defaultListingId={455635} key="house-midway-455635" />
                  <div className="bookingHint">
                    Cancellation policies vary by channel (Airbnb/VRBO/Booking/Direct).
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
