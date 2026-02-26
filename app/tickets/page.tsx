"use client";

import { useState } from "react";
import Image from "next/image";

export default function TicketsPage() {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 overflow-hidden hero-landscape">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white drop-shadow-lg">
            Join Us
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mt-4 max-w-2xl mx-auto">
            RSVP free for 404 Day 2026 in Piedmont Park
          </p>
        </div>
      </section>

      {/* Mock Eventbrite Widget */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#9ec367] min-h-[60vh]">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            {/* Event header with image */}
            <div className="relative h-48 bg-gradient-to-br from-[#e87851] to-[#fac355]">
              <Image
                src="/404day-fest-peaches-hero.png?v=2"
                alt="404 Day 2026"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-2xl font-bold text-white drop-shadow">
                  404 Day 2026 in Piedmont Park
                </h2>
                <p className="text-white/90 text-sm mt-1">April 4, 2026 · Atlanta, GA</p>
              </div>
            </div>

            {/* Ticket selection */}
            <div className="p-6 sm:flex sm:gap-8">
              <div className="flex-1">
                <button className="text-[#1a73e8] text-sm hover:underline mb-4">
                  Enter promo code
                </button>

                <div className="flex items-start justify-between gap-4 py-4 border-b border-gray-200">
                  <div>
                    <h3 className="font-bold text-[#2d2d2d]">General Admission</h3>
                    <p className="text-[#5a5a5a] text-sm">Free</p>
                    <p className="text-[#8a8a8a] text-xs mt-1">Sales end on Apr 4, 2026</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="px-3 py-2 border border-gray-300 rounded-md text-sm bg-gray-50 text-[#2d2d2d]"
                    >
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-5 text-[#8a8a8a] text-xs">
                  <span>Powered by eventbrite</span>
                  <select className="border-0 bg-transparent text-[#8a8a8a] text-xs">
                    <option>English (US)</option>
                  </select>
                </div>

                <a
                  href="https://www.eventbrite.com/e/404-day-2026-in-piedmont-park-tickets-1978977029568?aff=oddtdtcreator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block w-full py-3 text-center font-bold text-white rounded-md bg-[#e87851] hover:bg-[#d96a43] transition-colors"
                >
                  Register
                </a>
              </div>

              {/* Order summary */}
              <div className="mt-6 sm:mt-0 sm:w-48 shrink-0">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-bold text-[#2d2d2d] text-sm mb-3">Order summary</h4>
                  <div className="flex justify-between text-sm text-[#5a5a5a]">
                    <span>{quantity} x General Admission</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between font-bold text-[#2d2d2d] mt-3 pt-3 border-t border-gray-200">
                    <span>Total</span>
                    <span>$0.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-[#2d2d2d]/80 text-sm mt-6">
            This is a mockup. Click Register to go to the real Eventbrite page.
          </p>
        </div>
      </section>
    </>
  );
}
