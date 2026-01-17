import Image from "next/image";
import Link from "next/link";

type Property = {
  slug: string;
  title: string;
  location: string;
  meta: string;
  image: string;
  available?: boolean;
  externalUrl?: string;
  highlights?: string[];
};

const PROPERTIES: Property[] = [
  {
    slug: "house-midway",
    title: "Hygge House",
    location: "Midway, UT",
    meta: "Sleeps 10 • 4 Bedrooms • 3 Baths",
    image: "/listings/house-midway/exterior-02.jpg",
    available: true,
    highlights: ["Sauna", "Office", "Gym + gear garage", "Fenced yard"],
  },
  {
    slug: "granary-midway",
    title: "Granary",
    location: "Midway, UT",
    meta: "Sleeps 4 • 1 Bedroom • 1 Bath",
    image: "/listings/granary/living-01.jpg",
    available: true,
    highlights: ["Couples retreat", "Walkable Midway", "Mountain views"],
  },
  {
    slug: "daystar-deer-valley",
    title: "Daystar",
    location: "Deer Valley, Park City, UT",
    meta: "Sleeps 12 • 6 Bedrooms • 6 Baths",
    image: "/listings/daystar/exterior-02.jpg",
    available: true,
    highlights: ["Deer Valley access", "Luxury finish", "Great for groups"],
  },
  {
    slug: "lowell-302",
    title: "The Lowell",
    location: "Park City, UT",
    meta: "Sleeps 8 • 2 Bedrooms • 2 Baths",
    image: "/listings/lowell-302/living-01.jpg",
    available: true,
    highlights: ["Walk to lifts", "Pool + hot tub", "Underground parking"],
  },
  {
    slug: "powder-room",
    title: "Powder Room",
    location: "Park City, UT",
    meta: "Sleeps 4 • 1 Bedroom • 1 Bath",
    image: "/listings/powder-room/bedroom-01.jpg",
    available: true,
    highlights: ["Steps to snow", "Pool + hot tub", "Fitness center"],
  },
  {
    slug: "senator",
    title: "Heber Senator B&B",
    location: "Heber City, UT",
    meta: "Historic stay • Boutique B&B • Walkable downtown",
    image: "/listings/senator/exterior-01.jpg",
    available: true,
    externalUrl: "https://hebersenatorbedandbreakfast.com/",
    highlights: ["Historic charm", "Downtown walkability", "Boutique experience"],
  },
];

function PropertyCard({ p }: { p: Property }) {
  const CardInner = (
    <>
      <div className="propertyImage">
        <Image
          src={p.image}
          alt={p.title}
          fill
          className="propertyImg"
          sizes="(max-width: 900px) 92vw, 420px"
        />
      </div>

      <div className="propertyBody">
        <h3 className="propertyTitle">{p.title}</h3>
        <p className="propertyLocation">{p.location}</p>
        <p className="propertyMeta">{p.meta}</p>

        {p.highlights?.length ? (
          <ul
            className="mk-list"
            style={{ marginTop: 10, paddingLeft: 18, color: "rgba(255,255,255,0.72)" }}
          >
            {p.highlights.slice(0, 4).map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        ) : null}

        <span className="propertyCta" style={{ marginTop: 12 }}>
          {p.externalUrl ? "Visit site →" : "View details →"}
        </span>
      </div>
    </>
  );

  // External link (Senator)
  if (p.externalUrl) {
    return (
      <a
        href={p.externalUrl}
        className="propertyCard"
        target="_blank"
        rel="noopener noreferrer"
      >
        {CardInner}
      </a>
    );
  }

  // Internal listing pages
  return (
    <Link href={`/listings/${p.slug}`} className="propertyCard">
      {CardInner}
    </Link>
  );
}

export default function Page() {
  return (
    <main>
      <section className="section" id="properties">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <Link href="/" className="button linkButton">
              ← Back to home
            </Link>
          </div>

          <h1 className="sectionTitle">Homes for Those Who Roam</h1>
          <p className="sectionCopy">
            Book directly to get the best prices!
          </p>

          <div
            className="propertyGrid"
            style={{
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              marginTop: 14,
            }}
          >
            {PROPERTIES.map((p) => (
              <PropertyCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
