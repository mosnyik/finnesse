"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PHONE_HREF, PHONE_NUMBER } from "../lib/data";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Events", href: "/events" },
  {
    label: "Resources",
    href: "/resources",
    dropdown: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Videos", href: "/resources/videos" },
      { label: "Educational Resources", href: "/resources/educational" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(e.target as Node)
      ) {
        setIsResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy shadow-[0_2px_20px_rgba(9,23,41,0.4)]"
          : "bg-navy/98"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="relative w-10 h-10 shrink-0">
              <Image
                src="/logos/Finesse%20Plans%20Logo/finesse-3.png"
                alt="Finesse Plans"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-white font-bold text-xl tracking-wide hidden sm:block">
              <span style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Finesse
              </span>{" "}
              <span className="text-brand-light">Plans</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.label}
                  ref={resourcesRef}
                  className="relative"
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer rounded-md ${isActive("/resources") ? "text-brand-light bg-white/10" : "text-white/85 hover:text-white hover:bg-white/5"}`}
                    onClick={() => setIsResourcesOpen((v) => !v)}
                    aria-expanded={isResourcesOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${isResourcesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isResourcesOpen && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl py-2 border border-gray-100">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors duration-150 ${pathname === sub.href ? "bg-blue-pale text-brand font-semibold" : "text-navy hover:bg-blue-pale hover:text-brand"}`}
                          onClick={() => setIsResourcesOpen(false)}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-light shrink-0" />
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${isActive(item.href) ? "text-brand-light bg-white/10" : "text-white/85 hover:text-white hover:bg-white/5"}`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Phone (desktop) */}
          <a
            href={PHONE_HREF}
            className="hidden lg:flex items-center gap-2 text-white text-sm font-medium hover:text-brand-light transition-colors duration-200"
            aria-label={`Call us at ${PHONE_NUMBER}`}
          >
            <svg
              className="w-4 h-4 text-brand-light"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {PHONE_NUMBER}
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center gap-2 text-white cursor-pointer px-3 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200 min-h-11"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <span className="text-sm font-medium">Menu</span>
            <svg
              className="w-5 h-5 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-20 bg-navy-dark z-40 overflow-y-auto"
          role="dialog"
          aria-label="Navigation menu"
        >
          <div className="px-4 py-6 space-y-1 max-w-sm mx-auto">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <button
                    className={`flex items-center justify-between w-full px-4 py-4 font-medium cursor-pointer rounded-xl transition-colors duration-200 text-left min-h-11 ${isActive("/resources") ? "text-brand-light bg-white/10 border-l-2 border-brand" : "text-white/90 hover:text-white hover:bg-white/5"}`}
                    onClick={() =>
                      setIsMobileResourcesOpen((v) => !v)
                    }
                    aria-expanded={isMobileResourcesOpen}
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isMobileResourcesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isMobileResourcesOpen && (
                    <div className="ml-4 mt-1 mb-2 space-y-1 border-l-2 border-brand/30 pl-4">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`px-4 py-3 text-sm rounded-lg transition-colors duration-200 min-h-11 flex items-center ${pathname === sub.href ? "text-white font-medium bg-white/8" : "text-white/70 hover:text-white hover:bg-white/5"}`}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsMobileResourcesOpen(false);
                          }}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-4 font-medium rounded-xl transition-colors duration-200 min-h-11 flex items-center ${isActive(item.href) ? "text-white bg-white/10 border-l-2 border-brand" : "text-white/90 hover:text-white hover:bg-white/5"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}

            <div className="pt-4 mt-4 border-t border-white/10">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-3 px-4 py-4 text-white font-medium hover:bg-white/5 rounded-xl transition-colors duration-200 min-h-11"
              >
                <svg
                  className="w-5 h-5 text-brand"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {PHONE_NUMBER}
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center mt-3 px-6 py-4 bg-brand hover:bg-brand-dark text-white font-semibold rounded-xl transition-colors duration-200 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
