import Link from "next/link";
import Image from "next/image";
import { basePath } from "./lib/constants";

const upcomingEvents = [
  {
    id: 1,
    date: "APR 4",
    year: "2026",
    title: "404Day 2026",
    location: "Piedmont Park, Atlanta GA",
    tags: ["Music", "Food", "Community"],
    color: "#e87851",
  },
];

const features = [
  {
    icon: "🎵",
    title: "Live Music",
    description: "Local artists and performers bringing the sounds of Atlanta to the park.",
  },
  {
    icon: "🍑",
    title: "Food & Vendors",
    description: "Tasty bites and local vendors celebrating the flavors of the Peach State.",
  },
  {
    icon: "🤝",
    title: "Community Spirit",
    description: "A highlight of our city's cultural calendar — come celebrate with your neighbors.",
  },
  {
    icon: "🌳",
    title: "In the Park",
    description: "Free to attend. A day of music, food, and good vibes in beautiful Piedmont Park.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section — white logo, white text, blue/green buttons */}
      <section className="relative flex items-center justify-center overflow-hidden hero-peaches py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Large white logo */}
          <div className="flex justify-center mb-8">
            <Image
              src={`${basePath}/404day-logo-white.png`}
              alt="404 Day"
              width={220}
              height={220}
              className="drop-shadow-2xl object-contain"
              priority
            />
          </div>
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-black text-white mb-6 leading-none tracking-tight drop-shadow-lg">
            404Day
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-white/95 mb-2 tracking-wide">
            Where Atlanta&apos;s spirit shines brighter than ever.
          </p>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-10">
            April 4th, 2026 · Piedmont Park · Free to attend
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tickets" className="btn-hero-primary text-base px-8 py-4 text-center">
              RSVP FREE
            </Link>
            <Link href="/about" className="btn-hero-secondary text-base px-8 py-4 text-center">
              Learn More
            </Link>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "Free", label: "To Attend" },
              { value: "Apr 4", label: "Every Year" },
              { value: "Piedmont", label: "Park" },
              { value: "ATL", label: "Culture" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white">{stat.value}</div>
                <div className="text-white/80 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 text-xs">
          <span>Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">What Awaits You</h2>
          <p className="section-subtitle mx-auto">Music, food, and the vibrant community spirit that makes 404Day a highlight of Atlanta&apos;s cultural calendar.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="card text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-[#2d2d2d] mb-2">{feature.title}</h3>
              <p className="text-[#5a5a5a] text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-[#e8f0e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-16 gap-4">
            <div>
              <h2 className="section-title">Upcoming Events</h2>
              <p className="section-subtitle">Mark your calendar. These are the moments that matter.</p>
            </div>
            <Link href="/events" className="btn-secondary text-sm whitespace-nowrap">
              View All Events →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="card group cursor-pointer">
                <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: event.color }}>
                  {event.date} · {event.year}
                </div>
                <h3 className="text-xl font-bold text-[#2d2d2d] mb-2 group-hover:text-[#e87851] transition-colors">
                  {event.title}
                </h3>
                <p className="text-[#5a5a5a] text-sm mb-4">{event.location}</p>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag, i) => {
                    const tagColors = ["#fac355", "#9ec367", "#e87851", "#f4b59e"];
                    const c = tagColors[i % tagColors.length];
                    return (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: `${c}20`, color: c }}>
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-[#9ec367]/20 text-[#9ec367] text-xs font-semibold uppercase tracking-wider mb-6">
              Our Story
            </div>
            <h2 className="section-title">Celebrating Atlanta</h2>
            <p className="text-[#5a5a5a] leading-relaxed mb-6">
              404 Day is a celebration of Atlanta culture — our music, our food, and the community spirit that makes
              our city special. Every April 4th, we come together in Piedmont Park for a free day of good vibes.
            </p>
            <p className="text-[#5a5a5a] leading-relaxed mb-8">
              From the music to the food to the vibrant community spirit, 404 Day has become a highlight of our
              city&apos;s cultural calendar. We&apos;re grateful for the amazing community that shows up year after year.
            </p>
            <Link href="/about" className="btn-primary">
              Our Full Story →
            </Link>
          </div>
          <div className="relative">
            <div
              className="aspect-square rounded-2xl flex items-center justify-center relative overflow-hidden bg-white/80 border border-[#f4b59e]/50"
            >
              <div className="text-center p-8">
                <div className="text-8xl sm:text-9xl font-black gradient-text opacity-50 select-none">404</div>
                <p className="text-[#e87851] font-medium text-lg mt-4">Est. 2012 · Atlanta, GA</p>
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  {["Music", "Food", "Culture", "Community", "Atlanta"].map((tag, i) => {
                    const tagColors = ["#e87851", "#f3a65f", "#9ec367", "#fac355", "#f4b59e"];
                    const c = tagColors[i % tagColors.length];
                    return (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs border" style={{ borderColor: `${c}60`, color: c }}>
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-7xl mx-auto rounded-3xl p-12 sm:p-16 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #e87851 0%, #f3a65f 35%, #fac355 70%, #9ec367 100%)",
          }}
        >
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <Image src={`${basePath}/404day-logo-black.png`} alt="404day" width={80} height={80} className="object-contain" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">RSVP FREE to 404 Day 2026</h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              Join us April 4th in Piedmont Park. Music, food, and community — free to attend. We can&apos;t wait to celebrate with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tickets"
              className="bg-[#1c1c1e] text-[#fac355] px-8 py-4 rounded-lg font-bold hover:bg-[#2c2c2e] hover:text-[#f4b59e] transition-all text-center"
            >
              RSVP FREE
            </Link>
              <Link href="/sponsorship" className="bg-white/20 backdrop-blur text-white border border-white/30 px-8 py-4 rounded-lg font-bold hover:bg-white/30 transition-colors text-center">
                Become a Sponsor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
