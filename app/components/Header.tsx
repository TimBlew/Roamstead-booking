"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <Link href="/" className="logoLink">
          <Image
            src="/assets/roamstead_logo_wordmark_transparent.png"
            alt="Roamstead"
            width={180}
            height={52}
            className="headerLogo"
            priority
          />
        </Link>

        <nav className="desktopNav">
          <Link href="/properties" className="navLink">
            Our Properties
          </Link>
          {/* <Link href="/the-collective" className="navLink">The Collective</Link> */}
          {/* <Link href="/about" className="navLink">About</Link> */}

          {/*
          <Link href="/property-management" className="navLink">
            Property Owners
          </Link>
          */}
        </nav>

        <div className="headerActions">
          <Link
            href="/#book"
            className="button"
            style={{ fontSize: "13px", padding: "10px 16px" }}
          >
            Book Now
          </Link>

          <button
            className="mobileMenuButton"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobileMenu">
          <div className="mobileMenuInner">
            <Link
              href="/#properties"
              className="mobileNavLink"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Properties
            </Link>

            {/*
            <Link
              href="/property-management"
              className="mobileNavLink"
              onClick={() => setMobileMenuOpen(false)}
            >
              Property Owners
            </Link>
            */}

            <Link
              href="/#book"
              className="mobileNavLink mobileNavCta"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
