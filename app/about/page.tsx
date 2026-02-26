import Link from "next/link";

const team = [
  {
    name: "Jordan Rivers",
    role: "Co-Founder & Creative Director",
    bio: "A multi-disciplinary artist and technologist who has spent 15 years at the intersection of code and culture.",
    color: "#e87851",
  },
  {
    name: "Maya Chen",
    role: "Co-Founder & Tech Lead",
    bio: "Former Google engineer turned festival builder. Believes great technology should be invisible and experiences should be unforgettable.",
    color: "#fac355",
  },
  {
    name: "DeShawn Williams",
    role: "Head of Music Programming",
    bio: "Atlanta native and Grammy-nominated producer with a passion for amplifying emerging artists through technology.",
    color: "#9ec367",
  },
  {
    name: "Sofia Martinez",
    role: "Head of Partnerships",
    bio: "Brand strategist and community builder who has helped grow 404day from a 500-person gathering to a 10,000+ event.",
    color: "#f4b59e",
  },
];

const values = [
  {
    icon: "🔓",
    title: "Radical Openness",
    description: "We believe the best ideas come from unexpected places. Everyone belongs at 404day.",
  },
  {
    icon: "⚡",
    title: "Build Fast, Break Things (Nicely)",
    description: "We celebrate experimentation, iteration, and the courage to ship something imperfect.",
  },
  {
    icon: "🌱",
    title: "Community First",
    description: "We exist to serve the Atlanta tech and creative community and grow it together.",
  },
  {
    icon: "🎯",
    title: "Intentional Impact",
    description: "Every decision is made with our attendees, artists, and speakers in mind.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 70% 30%, rgba(250,195,85,0.12) 0%, transparent 60%), #1c1c1e",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-[#9ec367]/20 text-[#9ec367] text-xs font-semibold uppercase tracking-wider mb-6">
            About Us
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
            <span className="gradient-text">We Are</span>
            <br />
            <span className="text-white">404day</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            A festival born from a simple belief: the best things happen when creative people share the same space —
            physical or digital.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="section-title">Our Origin Story</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                In 2019, a small group of Atlanta developers and musicians threw a one-day event in a rented
                warehouse in Cabbagetown. They called it 404day — a nod to Atlanta&apos;s area code and the
                internet&apos;s most famous error message.
              </p>
              <p>
                The idea was simple: what if the people who built the digital world also got to play in it together?
                What if coders could dance next to the musicians who inspired them? What if a gallery could hang
                between a hackathon and a DJ set?
              </p>
              <p>
                500 people showed up. The next year, 2,000. By 2023, they had to move to Centennial Olympic Park.
                Today, 404day is one of the Southeast&apos;s premier tech and culture festivals, drawing 10,000+
                attendees, 50+ speakers, and artists from around the globe.
              </p>
              <p className="text-[#f4b59e]">
                We didn&apos;t find the page we were looking for. So we built it.
              </p>
            </div>
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
                <div className="text-gray-400 text-sm mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#111113]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">What We Stand For</h2>
            <p className="section-subtitle mx-auto">The values that guide every decision we make.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-white font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
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
              <h3 className="text-white font-bold">{member.name}</h3>
              <p className="text-xs font-semibold mb-3" style={{ color: member.color }}>
                {member.role}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-3xl mx-auto rounded-3xl p-12 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(232,120,81,0.15) 0%, rgba(250,195,85,0.08) 100%)",
            border: "1px solid rgba(250,195,85,0.2)",
          }}
        >
          <h2 className="text-3xl font-black text-white mb-4">Join the Community</h2>
          <p className="text-gray-400 mb-8">
            Whether you&apos;re an attendee, artist, speaker, or sponsor — there&apos;s a place for you at 404day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events" className="btn-primary text-center">
              Get Tickets
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
