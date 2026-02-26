const sponsorshipTiers = [
  {
    name: "Peach Seed",
    price: "$2,500",
    color: "#9ec367",
    tagline: "Plant your roots in the community",
    benefits: [
      "Logo on website & app (small)",
      "2 General Admission tickets",
      "Social media mention",
      "Certificate of support",
    ],
    popular: false,
  },
  {
    name: "Peach Blossom",
    price: "$7,500",
    color: "#fac355",
    tagline: "Bloom in front of 10,000+ people",
    benefits: [
      "Everything in Peach Seed",
      "Logo on stage banners",
      "Dedicated booth in vendor village",
      "10 Creator Pass tickets",
      "Email newsletter feature",
      "Social campaign inclusion",
      "Sponsor spotlight post",
    ],
    popular: false,
  },
  {
    name: "Georgia Peach",
    price: "$20,000",
    color: "#f3a65f",
    tagline: "The gold standard of festival presence",
    benefits: [
      "Everything in Peach Blossom",
      "Named stage or activation area",
      "30 VIP tickets",
      "Speaking slot (15 min)",
      "Full-page program ad",
      "Branded charging station",
      "Logo on all print materials",
      "Dedicated brand integration",
    ],
    popular: true,
  },
  {
    name: "Title Sponsor",
    price: "Custom",
    color: "#e87851",
    tagline: "Own the 404day experience",
    benefits: [
      "Everything in Georgia Peach",
      "Title naming rights",
      "Custom activation space",
      "Keynote speaking opportunity",
      "Co-branding on all assets",
      "Dedicated sponsor page",
      "Year-round partnership",
      "First right of renewal",
    ],
    popular: false,
  },
];

const whySponsor = [
  {
    icon: "👥",
    stat: "10,000+",
    label: "Annual Attendees",
    description: "Reach a highly engaged tech and creative audience",
  },
  {
    icon: "🌐",
    stat: "85%",
    label: "Tech Industry",
    description: "Decision-makers, developers, and founders",
  },
  {
    icon: "📱",
    stat: "25K+",
    label: "Social Followers",
    description: "Combined reach across all platforms",
  },
  {
    icon: "🎯",
    stat: "78%",
    label: "Return Attendees",
    description: "Loyal community that comes back every year",
  },
];

export default function SponsorshipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 60% 40%, rgba(250,195,85,0.12) 0%, transparent 60%), #1c1c1e",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-[#fac355]/20 text-[#fac355] text-xs font-semibold uppercase tracking-wider mb-6">
            Sponsorship
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
            <span className="text-white">Grow With</span>
            <br />
            <span className="gradient-text">404day</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10">
            Partner with Atlanta&apos;s premier tech and culture festival. Put your brand in front of 10,000+ engaged
            creators, developers, and innovators.
          </p>
          <a href="mailto:sponsors@404day.com" className="btn-primary text-base px-8 py-4">
            Request Sponsorship Info
          </a>
        </div>
      </section>

      {/* Why Sponsor Stats */}
      <section className="py-20 bg-[#111113]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Sponsor 404day?</h2>
            <p className="section-subtitle mx-auto">
              Real numbers from an audience that acts on brand recommendations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whySponsor.map((item) => (
              <div key={item.label} className="card text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-4xl font-black gradient-text mb-1">{item.stat}</div>
                <div className="text-white font-semibold text-sm mb-2">{item.label}</div>
                <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Sponsorship Tiers</h2>
          <p className="section-subtitle mx-auto">
            Find the partnership level that works for your brand and budget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sponsorshipTiers.map((tier) => (
            <div
              key={tier.name}
              className="card flex flex-col relative"
              style={tier.popular ? { borderColor: tier.color, boxShadow: `0 0 40px ${tier.color}20` } : {}}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className="text-[#1c1c1e] text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider"
                    style={{ background: tier.color }}
                  >
                    Most Popular
                  </span>
                </div>
              )}
              <div
                className="text-xs font-bold uppercase tracking-widest mb-1"
                style={{ color: tier.color }}
              >
                {tier.name}
              </div>
              <div className="text-3xl font-black text-white mb-1">{tier.price}</div>
              <p className="text-gray-500 text-xs mb-5">{tier.tagline}</p>
              <ul className="space-y-2.5 flex-1 mb-6">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm text-gray-400">
                    <span style={{ color: tier.color }} className="mt-0.5 shrink-0">
                      ✓
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:sponsors@404day.com"
                className="block w-full py-3 rounded-lg font-bold text-sm text-center transition-all"
                style={
                  tier.popular
                    ? { background: tier.color, color: "#1c1c1e" }
                    : {
                        background: "rgba(255,255,255,0.05)",
                        color: "white",
                        border: "1px solid rgba(255,255,255,0.15)",
                      }
                }
              >
                {tier.price === "Custom" ? "Let's Talk" : `Get Started`}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* What You Get in Detail */}
      <section className="py-20 bg-[#111113]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Activation Opportunities</h2>
            <p className="section-subtitle mx-auto">Custom ways to connect with our community.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🎪",
                title: "Branded Activation Space",
                desc: "Create an immersive brand experience within the festival footprint.",
              },
              {
                icon: "🎤",
                title: "Speaking Opportunity",
                desc: "Share your brand's story on stage with our engaged audience.",
              },
              {
                icon: "📦",
                title: "Swag Bag Inclusion",
                desc: "Get your product or promotional material into every attendee's hands.",
              },
              {
                icon: "📸",
                title: "Photo & Video Content",
                desc: "Co-branded content creation with our official festival photographers.",
              },
              {
                icon: "🍑",
                title: "VIP Lounge Hosting",
                desc: "Host a private networking session in our exclusive VIP lounge.",
              },
              {
                icon: "💌",
                title: "Email + Social Campaigns",
                desc: "Reach our community directly through dedicated digital campaigns.",
              },
            ].map((item) => (
              <div key={item.title} className="card flex items-start gap-4">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="text-white font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-3xl mx-auto rounded-3xl p-12 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(250,195,85,0.15) 0%, rgba(232,120,81,0.1) 100%)",
            border: "1px solid rgba(250,195,85,0.25)",
          }}
        >
          <h2 className="text-3xl font-black text-white mb-4">Let&apos;s Build Something Together</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Our team is ready to create a custom partnership that aligns with your goals. Reach out and we&apos;ll get
            back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:sponsors@404day.com" className="btn-primary text-center">
              Email Our Sponsorship Team
            </a>
          </div>
          <p className="text-gray-500 text-xs mt-6">sponsors@404day.com · Response within 24 hours</p>
        </div>
      </section>
    </>
  );
}
