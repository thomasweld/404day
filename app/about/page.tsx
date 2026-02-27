import Link from "next/link";
import Image from "next/image";
import { basePath } from "../lib/constants";

const team = [
  { name: "Ricky Raw", role: "Co-Founder", bio: "Bringing Atlanta culture to the park year after year.", color: "#e87851" },
  { name: "BabeyDrew", role: "Co-Founder", bio: "Creative force behind 404Day's vibrant community spirit.", color: "#fac355" },
  { name: "Vitillaz", role: "Co-Founder", bio: "Keeping the music and vibes flowing every April 4th.", color: "#9ec367" },
  { name: "Katy", role: "Co-Founder", bio: "Helping 404Day remain a highlight of Atlanta's cultural calendar.", color: "#f4b59e" },
];

const values = [
  {
    icon: "🎵",
    title: "Music & Culture",
    description: "We celebrate Atlanta's music, food, and the vibrant community spirit that makes our city special.",
  },
  {
    icon: "🆓",
    title: "Free for Everyone",
    description: "Thanks to our sponsors, 404Day stays free in the park so everyone can join the celebration.",
  },
  {
    icon: "🌱",
    title: "Community First",
    description: "We exist to bring our city together — neighbors, artists, vendors, and friends.",
  },
  {
    icon: "🍑",
    title: "Peach State Pride",
    description: "A highlight of our city's cultural calendar. We're grateful for the amazing community that shows up.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden hero-landscape">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-white/60 backdrop-blur border border-[#9ec367]/50 text-[#5a4a3a] text-xs font-semibold uppercase tracking-wider mb-6">
            About Us
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
            <span className="gradient-text">We Are</span>
            <br />
            <span className="text-[#2d2d2d]">404Day</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#5a4a3a] leading-relaxed max-w-2xl mx-auto">
            A celebration of Atlanta culture — our music, our food, and the community spirit that makes our city special.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="section-title">Our Story</h2>
            <div className="space-y-4 text-[#5a5a5a] leading-relaxed">
              <p>
                404Day is a celebration of Atlanta culture — a nod to our city&apos;s 404 area code and a day to
                come together. Every April 4th, we gather in Piedmont Park for music, food, and the vibrant community
                spirit that makes our city special.
              </p>
              <p>
                From the music to the food to the energy in the park, 404Day has become a highlight of our city&apos;s
                cultural calendar. We&apos;re grateful for the amazing community that shows up year after year.
              </p>
              <p>
                A special thank you to all of our sponsors — especially our headlining sponsor, Patron — for their
                generous support in keeping this event in the park free each year. Without them, 404Day would not
                be possible.
              </p>
              <p className="text-[#e87851] font-medium">
                We can&apos;t wait to party with you all again.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden aspect-[4/5]">
              <Image
                src={`${basePath}/gallery/404day-music-festival-sponsors-patron.JPG`}
                alt="Patron, our headlining sponsor"
                width={500}
                height={375}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
            {[
              { year: "2019", stat: "500", label: "Attendees" },
              { year: "2020", stat: "2K", label: "Attendees" },
              { year: "2022", stat: "5K", label: "Attendees" },
              { year: "2025", stat: "10K+", label: "Attendees" },
            ].map((item) => (
              <div
                key={item.year}
                className="card text-center"
                style={{ borderColor: "rgba(250,195,85,0.2)" }}
              >
                <div className="text-[#fac355] text-xs font-bold uppercase tracking-widest mb-2">{item.year}</div>
                <div className="text-4xl font-black gradient-text">{item.stat}</div>
                <div className="text-[#5a5a5a] text-sm mt-1">{item.label}</div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#e8f0e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">What We Stand For</h2>
            <p className="section-subtitle mx-auto">The values that guide every decision we make.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-[#2d2d2d] font-bold mb-2">{value.title}</h3>
                <p className="text-[#5a5a5a] text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Meet the Team</h2>
          <p className="section-subtitle mx-auto">The people who make the magic happen.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="card">
              {/* Avatar placeholder */}
              <div
                className="w-16 h-16 rounded-full mb-4 flex items-center justify-center text-2xl font-black text-white"
                style={{ background: `linear-gradient(135deg, ${member.color}40, ${member.color}20)`, border: `2px solid ${member.color}40` }}
              >
                {member.name.charAt(0)}
              </div>
              <h3 className="text-[#2d2d2d] font-bold">{member.name}</h3>
              <p className="text-xs font-semibold mb-3" style={{ color: member.color }}>
                {member.role}
              </p>
              <p className="text-[#5a5a5a] text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto rounded-3xl p-12 text-center bg-white/80 border border-[#f4b59e]/50">
          <h2 className="text-3xl font-black text-[#2d2d2d] mb-4">Join Us April 4th</h2>
          <p className="text-[#5a5a5a] mb-8">
            Whether you&apos;re coming to enjoy the music and food, or you&apos;re a vendor, performer, or sponsor — there&apos;s a place for you at 404Day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tickets" className="btn-primary text-center">
              RSVP FREE
            </Link>
            <Link href="/contact" className="btn-secondary text-center">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
