const galleryItems = [
  {
    id: 1,
    category: "Music",
    year: "2025",
    title: "Main Stage Headliner",
    color: "#e87851",
    size: "large",
  },
  {
    id: 2,
    category: "Tech",
    year: "2025",
    title: "Keynote Address",
    color: "#fac355",
    size: "small",
  },
  {
    id: 3,
    category: "Art",
    year: "2025",
    title: "Digital Installation",
    color: "#9ec367",
    size: "small",
  },
  {
    id: 4,
    category: "Community",
    year: "2025",
    title: "Networking Mixer",
    color: "#f4b59e",
    size: "medium",
  },
  {
    id: 5,
    category: "Music",
    year: "2024",
    title: "Night Stage",
    color: "#f3a65f",
    size: "medium",
  },
  {
    id: 6,
    category: "Tech",
    year: "2024",
    title: "Workshop Hall",
    color: "#fac355",
    size: "small",
  },
  {
    id: 7,
    category: "Art",
    year: "2024",
    title: "Creator Showcase",
    color: "#e87851",
    size: "small",
  },
  {
    id: 8,
    category: "Community",
    year: "2024",
    title: "Opening Ceremony",
    color: "#9ec367",
    size: "large",
  },
  {
    id: 9,
    category: "Music",
    year: "2023",
    title: "Sunset Set",
    color: "#f4b59e",
    size: "small",
  },
  {
    id: 10,
    category: "Tech",
    year: "2023",
    title: "Hackathon Night",
    color: "#fac355",
    size: "small",
  },
  {
    id: 11,
    category: "Art",
    year: "2023",
    title: "AR Experience",
    color: "#9ec367",
    size: "medium",
  },
  {
    id: 12,
    category: "Community",
    year: "2023",
    title: "Crowd Moments",
    color: "#e87851",
    size: "medium",
  },
];

const categories = ["All", "Music", "Tech", "Art", "Community"];

const emojiMap: Record<string, string> = {
  Music: "🎵",
  Tech: "💻",
  Art: "🎨",
  Community: "🤝",
};

const sizeMap = {
  small: "aspect-square",
  medium: "aspect-[4/3]",
  large: "aspect-[16/9]",
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 40% 60%, rgba(244,181,158,0.12) 0%, transparent 60%), #1c1c1e",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-[#f4b59e]/20 text-[#f4b59e] text-xs font-semibold uppercase tracking-wider mb-6">
            Gallery
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
            <span className="text-white">Moments</span>
            <br />
            <span className="gradient-text">Worth Keeping</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Three years of memories, connections, and unforgettable experiences. This is what 404day looks like.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters (static for SSG) */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <div
              key={cat}
              className="px-4 py-2 rounded-full text-sm font-medium border border-[#fac355]/30 text-[#fac355]/70 cursor-default"
            >
              {cat !== "All" && <span className="mr-1">{emojiMap[cat]}</span>}
              {cat}
            </div>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`${sizeMap[item.size as keyof typeof sizeMap]} break-inside-avoid rounded-2xl overflow-hidden relative group cursor-pointer`}
              style={{
                background: `linear-gradient(135deg, ${item.color}25 0%, ${item.color}10 100%)`,
                border: `1px solid ${item.color}30`,
              }}
            >
              {/* Placeholder visual */}
              <div className="w-full h-full min-h-48 flex flex-col items-center justify-center p-6 relative">
                <div className="text-5xl mb-3 opacity-60">{emojiMap[item.category]}</div>
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-2"
                  style={{ color: item.color }}
                >
                  {item.category} · {item.year}
                </div>
                <div className="text-white font-semibold text-center text-sm">{item.title}</div>

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl"
                  style={{ background: `${item.color}20` }}
                >
                  <div className="text-white text-xs font-semibold bg-black/40 px-3 py-1.5 rounded-full">
                    View Photo
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-12">
          Showing highlights from 2023–2025. Full photo galleries available after each event.
        </p>
      </section>

      {/* Year sections */}
      <section className="py-12 bg-[#111113]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">By the Numbers</h2>
            <p className="section-subtitle mx-auto">Three years of 404day captured in photos and memories.</p>
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
                    <span className="text-gray-400 text-sm">Attendees</span>
                    <span className="text-white font-bold">{yr.attendees}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Photos Taken</span>
                    <span className="text-white font-bold">{yr.photos}</span>
                  </div>
                  <div className="pt-3 border-t border-[#3c3c3e]">
                    <p className="text-xs text-gray-500">Highlight</p>
                    <p className="text-sm text-[#f4b59e] mt-1">{yr.highlight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Photos CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="max-w-3xl mx-auto rounded-3xl p-12"
          style={{
            background: "linear-gradient(135deg, rgba(244,181,158,0.12) 0%, rgba(232,120,81,0.08) 100%)",
            border: "1px solid rgba(244,181,158,0.2)",
          }}
        >
          <div className="text-4xl mb-4">📸</div>
          <h2 className="text-3xl font-black text-white mb-4">Were You There?</h2>
          <p className="text-gray-400 mb-8">
            We&apos;d love to feature your photos from past 404day events. Submit your best shots and you might
            end up in the official gallery!
          </p>
          <a href="mailto:hello@404day.com?subject=Gallery Submission" className="btn-primary">
            Submit Your Photos
          </a>
        </div>
      </section>
    </>
  );
}
