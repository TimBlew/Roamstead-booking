import Image from "next/image";
import Link from "next/link";
import BookingSection from "@/app/components/BookingSection";

const LISTING = {
  title: "Powder Room",
  subtitle: "Hotel-style ski-base studio w/ king bed, futon, pool + hot tub",
  location: "Park City Mountain Resort, Park City, UT",
  meta: "Sleeps 4 • Studio/1 Room • 1 Bath • Pool + Hot Tub • Ski Base",
  heroImage: "/listings/powder-room/exterior-01.jpg",
};

const GALLERY = [
  // Room / Bedroom
  { src: "/listings/powder-room/bedroom-01.jpg", alt: "King bed and seating" },

  // Bath
  { src: "/listings/powder-room/bathroom-01.jpg", alt: "Bathroom" },
  { src: "/listings/powder-room/bathroom-02.jpg", alt: "Bathroom" },
  { src: "/listings/powder-room/bathroom-03.jpg", alt: "Bathroom details" },

  // Amenities
  { src: "/listings/powder-room/pool-01.jpg", alt: "Outdoor pool" },
  { src: "/listings/powder-room/pool-02.jpg", alt: "Hot tub" },
  { src: "/listings/powder-room/gym-01.jpg", alt: "Fitness center" },

  // Exterior / Building
  { src: "/listings/powder-room/exterior-02.jpg", alt: "Exterior" },
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

                <a className="button" href="#book">
                  Check availability
                </a>
              </div>

              <p className="listingLead">{LISTING.subtitle}</p>

              <div className="listingStatsRow" aria-label="Key highlights">
                <span className="statPill">Sleeps 4</span>
                <span className="statPill">King bed + futon</span>
                <span className="statPill">1 Bath</span>
                <span className="statPill">Steps to snow</span>
                <span className="statPill">Outdoor pool + hot tub</span>
                <span className="statPill">Fitness center</span>
                <span className="statPill">Underground parking</span>
                <span className="statPill">Elevator</span>
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
                Located at the base of Park City Mountain Resort, this hotel-style
                unit is steps from the snow and built for easy mountain days. After
                exploring the resort or town, unwind in the outdoor pool and hot tub,
                or get a quick workout in the fitness center. The unit features a comfy
                king bed, a queen futon, and a full private bathroom, plus a kitchenette
                with a microwave, mini fridge, and kettle/coffee maker.
              </p>
              <p className="listingP" style={{ marginTop: 10 }}>
                In the winter, guests receive equipment discounts and nightly ski
                storage through Park City Sport (on-site).
              </p>
            </div>

            <div className="card listingSection">
              <h2 className="listingH2">The space</h2>
              <p className="listingP">
                <strong>Sleeping:</strong> 1 California King + 1 full/queen futon (sleeps 2)
                <br />
                <strong>Bathroom:</strong> 1 private full bath
                <br />
                <strong>Kitchenette:</strong> microwave, mini-fridge, coffee maker/kettle, cups/mugs, flatware
                <br />
                <strong>Best fit:</strong> 2 adults + 2 small children, or 3 adults
              </p>
            </div>

            <div className="card listingSection">
              <h2 className="listingH2">Building amenities</h2>
              <div className="amenityPills" aria-label="Amenities">
                <span className="amenityPill">Outdoor pool</span>
                <span className="amenityPill">Outdoor hot tub</span>
                <span className="amenityPill">Fitness center</span>
                <span className="amenityPill">Underground parking</span>
                <span className="amenityPill">Elevator</span>
                <span className="amenityPill">On-site ski rental/tuning</span>
                <span className="amenityPill">Ski gear storage</span>
                <span className="amenityPill">BBQ grill (outdoor)</span>
                <span className="amenityPill">Fast Wi-Fi</span>
                <span className="amenityPill">Air conditioning</span>
                <span className="amenityPill">Heating</span>
              </div>

              <p
                className="listingP"
                style={{
                  marginTop: 10,
                  color: "rgba(255,255,255,0.62)",
                  fontSize: "13px",
                }}
              >
                Safety: smoke detector • carbon monoxide detector
              </p>
            </div>

            <div className="card listingSection">
              <h2 className="listingH2">Getting around</h2>
              <p className="listingP">
                <strong>Resort access:</strong> You’re at the base area—quick access to
                lifts and mountain services.
                <br />
                <strong>Bus to Main Street:</strong> The free bus stop nearby runs about
                every 5 minutes and typically reaches Historic Main Street in ~3–5 minutes.
                <br />
                <strong>Easy town access:</strong> The base is a hub for many routes, making it
                simple to get around Park City without a car.
              </p>
            </div>

            <div className="card listingSection">
              <h2 className="listingH2">Good to know</h2>
              <p className="listingP">
                Optional daily maid and concierge services may be available for an additional cost
                (subject to availability). I’m reachable by call/text 24/7 and happy to share local
                recommendations for restaurants, activities, and mountain logistics.
              </p>
            </div>
          </div>

          {/* RIGHT / BOOKING */}
          <aside className="listingRight" id="book">
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
                  {/* ✅ Force the calendar to "Lowell 302A (Park City)" */}
                  <BookingSection defaultListingId={455633} />
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
