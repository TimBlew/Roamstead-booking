import Link from "next/link";

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="container">
        <div className="footerGrid">
          <div className="footerCol">
            <h4 className="footerHeading">Roamstead Collective</h4>
            <p className="footerText">
              Modern mountain hospitality for travelers who value community,
              adventure, and authentic experiences.
            </p>
          </div>

          <div className="footerCol">
            <h4 className="footerHeading">Properties</h4>
            <Link href="/listings/granary-midway" className="footerLink">
              Granary
            </Link>
            <Link href="/listings/daystar-deer-valley" className="footerLink">
              Daystar
            </Link>
            <Link href="/listings/lowell-302" className="footerLink">
              The Lowell
            </Link>
            <Link href="/listings/house-midway" className="footerLink">
              Hygge House
            </Link>
            <Link href="/listings/powder-room" className="footerLink">
              Powder Room
            </Link>
          </div>

          <div className="footerCol">
            <h4 className="footerHeading">Company</h4>
            {/*
            <Link href="/property-management" className="footerLink">
              Property Management
            </Link>

            <Link href="/company" className="footerLink">
              Company Information
            </Link>
            */}
          </div>

          <div className="footerCol">
            <h4 className="footerHeading">Contact</h4>
            <a
              href="mailto:chris@roamstead-co.com"
              className="footerLink"
            >
              chris@roamstead-co.com
            </a>
            <p
              className="footerText"
              style={{ marginTop: "12px", fontSize: "12px" }}
            >
              (435) 243-5670
            </p>
          </div>
        </div>

        <div className="footerBottom">
          <p className="footerCopy">
            © 2024 Roamstead Collective. All rights reserved.
          </p>

          {/* Legal links hidden until pages are built */}
          {/*
          <div className="footerLegal">
            <Link href="/terms" className="footerLegalLink">
              Terms of Service
            </Link>
            <Link href="/privacy" className="footerLegalLink">
              Privacy Policy
            </Link>
          </div>
          */}
        </div>
      </div>
    </footer>
  );
}
