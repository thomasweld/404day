import Image from "next/image";
import { basePath } from "../lib/constants";

const galleryImages = [
  "404day-music-festival-crowd-dj-stage-backstage.JPG",
  "404day-music-festival-atlanta-falcons.jpg",
  "404day-music-festival-dj-booth.jpg",
  "404day-music-festival-crowd-dj-dance-floor.jpg",
  "404day-music-festival-sponsors-xfinity-360-3d-pictures.jpg",
  "404day-music-festival-break-dancer-3.jpg",
  "404day-music-festival-vendors-sponsors-bang-energy-drink.jpg",
  "404day-music-festival-break-dancer-2.jpg",
  "404day-music-festival-dj-atlanta-braves.jpg",
  "404day-music-festival-crowd-tents.JPG",
  "404day-music-festival-crowd-dance-party-1.JPG",
  "404day-music-festival-sponsors-patron.JPG",
  "404day-music-festival-sponsors-sprite.jpg",
  "404day-music-festival-sponsors-xfinity.jpg",
  "404day-music-festival-crowd-wide-piedmont-park-atlanta-ga.JPG",
  "404day-music-festival-vitamin-water-vendor.jpg",
  "404day-music-festival-break-dancer.jpg",
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden hero-landscape">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-white/60 backdrop-blur border border-[#f4b59e]/50 text-[#5a4a3a] text-xs font-semibold uppercase tracking-wider mb-6">
            Gallery
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
            <span className="text-[#2d2d2d]">Moments</span>
            <br />
            <span className="gradient-text">Worth Keeping</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#5a4a3a] leading-relaxed max-w-2xl mx-auto">
            Music, food, and the vibrant community spirit. This is what 404Day looks like.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((filename) => (
            <div
              key={filename}
              className="break-inside-avoid rounded-2xl overflow-hidden relative group"
            >
              <Image
                src={`${basePath}/gallery/${filename}`}
                alt={filename.replace(/\.[^.]+$/, "").replace(/-/g, " ")}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-[#5a5a5a] text-sm mt-12">
          Moments from 404Day in Piedmont Park.
        </p>
      </section>

      {/* Year sections */}
      <section className="py-12 bg-[#e8f0e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">By the Numbers</h2>
            <p className="section-subtitle mx-auto">Years of 404Day captured in photos and memories.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                year: "2023",
                attendees: "5,000",
                photos: "1,200+",
                highlight: "First outdoor main stage",
                color: "#9ec367",
              },
              {
                year: "2024",
                attendees: "7,500",
                photos: "2,400+",
                highlight: "Added workshop tracks & hackathon",
                color: "#fac355",
              },
              {
                year: "2025",
                attendees: "10,000",
                photos: "4,800+",
                highlight: "Moved to Centennial Olympic Park",
                color: "#e87851",
              },
            ].map((yr) => (
              <div key={yr.year} className="card">
                <div
                  className="text-2xl font-black mb-4"
                  style={{ color: yr.color }}
                >
                  {yr.year}
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[#5a5a5a] text-sm">Attendees</span>
                    <span className="text-[#2d2d2d] font-bold">{yr.attendees}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#5a5a5a] text-sm">Photos Taken</span>
                    <span className="text-[#2d2d2d] font-bold">{yr.photos}</span>
                  </div>
                  <div className="pt-3 border-t border-[#f4b59e]/40">
                    <p className="text-xs text-[#5a5a5a]">Highlight</p>
                    <p className="text-sm text-[#e87851] mt-1">{yr.highlight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Photos CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto rounded-3xl p-12 bg-white/80 border border-[#f4b59e]/50">
          <div className="text-4xl mb-4">📸</div>
          <h2 className="text-3xl font-black text-[#2d2d2d] mb-4">Were You There?</h2>
          <p className="text-[#5a5a5a] mb-8">
            We&apos;d love to feature your photos from past 404Day events. Submit your best shots and you might
            end up in the official gallery!
          </p>
          <a href="mailto:info@404day.com?subject=Gallery Submission" className="btn-primary">
            Submit Your Photos
          </a>
        </div>
      </section>
    </>
  );
}
