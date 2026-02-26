import Link from "next/link";

const ticketTiers = [
  {
    name: "General Admission",
    price: "$89",
    earlyBird: "$65",
    color: "#9ec367",
    features: [
      "All outdoor stages",
      "Festival grounds access",
      "Food & vendor village",
      "Digital badge & lanyard",
      "Access to free workshops",
    ],
    popular: false,
  },
  {
    name: "Creator Pass",
    price: "$189",
    earlyBird: "$139",
    color: "#fac355",
    features: [
      "Everything in General Admission",
      "All indoor conference sessions",
      "Priority speaker Q&A seating",
      "Creator Lounge access",
      "Exclusive networking mixer",
      "Swag bag",
    ],
    popular: true,
  },
  {
    name: "VIP Experience",
    price: "$449",
    earlyBird: "$349",
    color: "#e87851",
    features: [
      "Everything in Creator Pass",
      "Backstage access",
      "VIP lounge & bar",
      "Meet & greet opportunities",
      "Reserved seating — main stage",
      "Complimentary parking",
      "Exclusive after-party",
    ],
    popular: false,
  },
];

const schedule = [
  {
    time: "9:00 AM",
    title: "Gates Open",
    stage: "All Areas",
    type: "general",
  },
  {
    time: "10:00 AM",
    title: "Opening Keynote: The Future is Already Broken",
    stage: "Main Stage",
    type: "talk",
  },
  {
    time: "11:30 AM",
    title: "Workshop: Building with AI APIs",
    stage: "Workshop Hall A",
    type: "workshop",
  },
  {
    time: "12:00 PM",
    title: "Creator Showcase Opens",
    stage: "Underground Space",
    type: "art",
  },
  {
    time: "1:00 PM",
    title: "Panel: Women in Tech — Atlanta & Beyond",
    stage: "Conference Hall",
    type: "talk",
  },
  {
    time: "3:00 PM",
    title: "Workshop: Mobile-First Design in 2026",
    stage: "Workshop Hall B",
    type: "workshop",
  },
  {
    time: "5:00 PM",
    title: "Live Music: Local Artists Showcase",
    stage: "Main Stage",
    type: "music",
  },
  {
    time: "7:00 PM",
    title: "Headliner Performance",
    stage: "Main Stage",
    type: "music",
  },
  {
    time: "10:00 PM",
    title: "Official After-Party (VIP + Creator)",
    stage: "VIP Lounge",
    type: "general",
  },
];

const typeColors: Record<string, string> = {
  general: "#9ec367",
  talk: "#fac355",
  workshop: "#f3a65f",
  art: "#f4b59e",
  music: "#e87851",
};

const typeLabels: Record<string, string> = {
  general: "General",
  talk: "Talk",
  workshop: "Workshop",
  art: "Art",
  music: "Music",
};

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(232,120,81,0.15) 0%, transparent 60%), #1c1c1e",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-[#e87851]/20 text-[#e87851] text-xs font-semibold uppercase tracking-wider mb-6">
            Events & Tickets
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
            <span className="text-white">404day</span>
            <br />
            <span className="gradient-text">April 4, 2026</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            One day. Thousands of stories. Centennial Olympic Park and venues throughout downtown Atlanta.
          </p>
        </div>
      </section>

      {/* Ticket Tiers */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Choose Your Experience</h2>
          <p className="section-subtitle mx-auto">Every ticket includes a day you won&apos;t forget.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ticketTiers.map((tier) => (
            <div
              key={tier.name}
              className="card relative flex flex-col"
              style={
                tier.popular
                  ? { borderColor: "#fac355", boxShadow: "0 0 40px rgba(250,195,85,0.15)" }
                  : {}
              }
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#fac355] text-[#1c1c1e] text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-white font-bold text-xl mb-1">{tier.name}</h3>
                <div className="flex items-baseline gap-2 mt-3">
                  <span className="text-4xl font-black" style={{ color: tier.color }}>
                    {tier.earlyBird}
                  </span>
                  <span className="text-gray-500 text-sm line-through">{tier.price}</span>
                  <span className="text-[#9ec367] text-xs font-semibold">Early Bird</span>
                </div>
              </div>
              <ul className="space-y-3 flex-1 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="mt-0.5" style={{ color: tier.color }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-3 rounded-lg font-bold text-sm transition-all"
                style={
                  tier.popular
                    ? { background: "#fac355", color: "#1c1c1e" }
                    : { background: "rgba(255,255,255,0.05)", color: "white", border: "1px solid rgba(255,255,255,0.15)" }
                }
              >
                Buy Tickets — {tier.earlyBird}
              </button>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mt-6">
          🔒 Secure checkout · All sales final · Transferable
        </p>
      </section>

      {/* Schedule */}
      <section className="py-20 bg-[#111113]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Day Schedule</h2>
            <p className="section-subtitle mx-auto">April 4, 2026 · Full day lineup</p>
          </div>
          <div className="space-y-3">
            {schedule.map((item) => (
              <div
                key={item.time + item.title}
                className="flex items-start gap-4 p-4 rounded-xl bg-[#1c1c1e] border border-[#2c2c2e] hover:border-[#fac355]/30 transition-colors"
              >
                <div className="text-[#fac355] font-mono text-sm font-bold w-20 shrink-0 pt-0.5">{item.time}</div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                  <p className="text-gray-500 text-xs mt-0.5">{item.stage}</p>
                </div>
                <span
                  className="px-2 py-0.5 rounded text-xs font-semibold shrink-0"
                  style={{
                    color: typeColors[item.type],
                    background: `${typeColors[item.type]}20`,
                  }}
                >
                  {typeLabels[item.type]}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-xs mt-8">
            Schedule subject to change. Full lineup announced March 2026.
          </p>
        </div>
      </section>

      {/* Venue Info */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: "📍",
              title: "Main Venue",
              content: "Centennial Olympic Park\n265 Park Ave W NW\nAtlanta, GA 30313",
              color: "#e87851",
            },
            {
              icon: "🚇",
              title: "Getting Here",
              content: "MARTA: Dome/GWCC/CNN Station\nRideshare drop-off available\nParking at GWCC decks",
              color: "#fac355",
            },
            {
              icon: "🏨",
              title: "Hotels",
              content: "Partner rates available at\nOmni Atlanta at CNN Center\nHilton Atlanta\nHyatt Regency Atlanta",
              color: "#9ec367",
            },
            {
              icon: "📱",
              title: "Festival App",
              content: "Download the 404day app\nfor real-time schedules,\ninteractive maps & more",
              color: "#f4b59e",
            },
          ].map((info) => (
            <div key={info.title} className="card flex items-start gap-4">
              <span className="text-3xl">{info.icon}</span>
              <div>
                <h3 className="text-white font-bold mb-2" style={{ color: info.color }}>
                  {info.title}
                </h3>
                {info.content.split("\n").map((line) => (
                  <p key={line} className="text-gray-400 text-sm">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-black text-white mb-4">Have Questions?</h2>
        <p className="text-gray-400 mb-8">We&apos;re here to help you have the best possible experience.</p>
        <Link href="/contact" className="btn-primary">
          Contact Us
        </Link>
      </section>
    </>
  );
}
