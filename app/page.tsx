import Link from "next/link";
import Image from "next/image";

const upcomingEvents = [
  {
    id: 1,
    date: "APR 4",
    year: "2026",
    title: "404day Main Stage",
    location: "Centennial Olympic Park, Atlanta GA",
    tags: ["Music", "Art", "Tech"],
    color: "#e87851",
  },
  {
    id: 2,
    date: "APR 4",
    year: "2026",
    title: "Dev Talks & Workshops",
    location: "Georgia World Congress Center",
    tags: ["Talks", "Workshops"],
    color: "#fac355",
  },
  {
    id: 3,
    date: "APR 4",
    year: "2026",
    title: "Creator Showcase",
    location: "Underground Atlanta",
    tags: ["Gallery", "Networking"],
    color: "#9ec367",
  },
];

const features = [
  {
    icon: "🎵",
    title: "Live Music",
    description: "World-class artists performing across multiple stages in the heart of Atlanta.",
  },
  {
    icon: "💻",
    title: "Tech Talks",
    description: "Industry-leading speakers sharing insights on the future of technology and creativity.",
  },
  {
    icon: "🎨",
    title: "Digital Art",
    description: "Immersive art installations and exhibitions pushing the boundaries of digital expression.",
  },
  {
    icon: "🌐",
    title: "Networking",
    description: "Connect with thousands of creators, developers, and innovators from around the world.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(232,120,81,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(250,195,85,0.1) 0%, transparent 50%), #1c1c1e",
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250,195,85,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(250,195,85,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          {/* Logo mark */}
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.svg"
              alt="404day Festival"
              width={140}
              height={140}
              className="drop-shadow-2xl"
              priority
            />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e87851]/20 border border-[#e87851]/40 text-[#f3a65f] text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[#9ec367] animate-pulse" />
            April 4th, 2026 · Atlanta, Georgia
          </div>
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-black mb-6 leading-none tracking-tight">
            <span className="gradient-text">404</span>
            <span className="text-white">day</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-[#f4b59e] mb-4 tracking-wide">
            Page Not Found. Festival Found.
          </p>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            An annual festival where technology, music, and art collide. Join thousands of creators, builders, and
            dreamers for an unforgettable experience in Atlanta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events" className="btn-primary text-base px-8 py-4 text-center">
              Get Your Tickets
            </Link>
            <Link href="/about" className="btn-secondary text-base px-8 py-4 text-center">
              Learn More
            </Link>
          </div>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "10K+", label: "Attendees" },
              { value: "50+", label: "Speakers" },
              { value: "20+", label: "Artists" },
              { value: "1", label: "Epic Day" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-black gradient-text">{stat.value}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs">
          <span>Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#fac355]/50 to-transparent" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">What Awaits You</h2>
          <p className="section-subtitle mx-auto">One day of discovery. One unforgettable experience.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="card text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-[#111113]">
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
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#fac355] transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{event.location}</p>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-[#fac355]/10 text-[#fac355]">
                      {tag}
                    </span>
                  ))}
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
            <h2 className="section-title">Born from the 404 Spirit</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              When the internet returns a 404, it means the page you were looking for doesn&apos;t exist — yet.
              That&apos;s exactly what 404day is about: building something new from the blank canvas of the web.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Started in Atlanta by a group of developers, musicians, and artists who believed technology and culture
              were inseparable, 404day has grown into one of the Southeast&apos;s most anticipated annual events.
            </p>
            <Link href="/about" className="btn-primary">
              Our Full Story →
            </Link>
          </div>
          <div className="relative">
            <div
              className="aspect-square rounded-2xl flex items-center justify-center relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(232,120,81,0.2) 0%, rgba(250,195,85,0.1) 50%, rgba(158,195,103,0.15) 100%)",
                border: "1px solid rgba(250,195,85,0.2)",
              }}
            >
              <div className="text-center p-8">
                <div className="text-8xl sm:text-9xl font-black gradient-text opacity-40 select-none">404</div>
                <p className="text-[#f4b59e] font-medium text-lg mt-4">Est. 2019 · Atlanta, GA</p>
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  {["Code", "Music", "Art", "Culture", "Community"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs border border-[#fac355]/30 text-[#fac355]/70">
                      {tag}
                    </span>
                  ))}
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
          style={{ background: "linear-gradient(135deg, #e87851 0%, #f3a65f 50%, #fac355 100%)" }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Ready for 404day 2026?</h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              Early bird tickets are available now. Don&apos;t miss out on the biggest digital culture festival in the Southeast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/events" className="bg-[#1c1c1e] text-[#fac355] px-8 py-4 rounded-lg font-bold hover:bg-[#2c2c2e] transition-colors text-center">
                Buy Tickets Now
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
