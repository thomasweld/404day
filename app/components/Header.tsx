"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/sponsorship", label: "Sponsorship" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1c1c1e]/90 backdrop-blur-md border-b border-[#fac355]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="404day Festival — Home">
            <Image
              src="/logo.svg"
              alt="404day Festival"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <span className="text-lg font-black text-white hidden sm:block">
              <span className="gradient-text">404</span>day
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "text-[#fac355] bg-[#fac355]/10"
                    : "text-gray-300 hover:text-[#fac355] hover:bg-[#fac355]/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link href="/events" className="hidden sm:block btn-primary text-sm py-2 px-4">
              Get Tickets
            </Link>
            <button
              className="md:hidden text-white p-2 rounded-lg hover:bg-[#fac355]/10"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden border-t border-[#fac355]/20 py-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? "text-[#fac355] bg-[#fac355]/10"
                      : "text-gray-300 hover:text-[#fac355] hover:bg-[#fac355]/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/events"
                onClick={() => setMenuOpen(false)}
                className="btn-primary text-sm text-center mt-2"
              >
                Get Tickets
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
