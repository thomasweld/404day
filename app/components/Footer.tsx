import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111113] border-t border-[#fac355]/20 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/logo.svg" alt="404day Festival" width={48} height={48} className="rounded-full" />
              <span className="text-2xl font-black text-white">
                <span className="gradient-text">404</span>day
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Where creativity meets technology. An annual festival celebrating the culture of the digital age.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#fac355] font-semibold mb-4 text-sm uppercase tracking-wider">Navigate</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/events", label: "Events" },
                { href: "/gallery", label: "Gallery" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#f4b59e] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-[#fac355] font-semibold mb-4 text-sm uppercase tracking-wider">Get Involved</h4>
            <ul className="space-y-2">
              {[
                { href: "/sponsorship", label: "Sponsorship" },
                { href: "/contact", label: "Contact Us" },
                { href: "/events", label: "Buy Tickets" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#f4b59e] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#fac355] font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:hello@404day.com" className="hover:text-[#f4b59e] transition-colors">
                  hello@404day.com
                </a>
              </li>
              <li>Atlanta, Georgia</li>
            </ul>
            {/* Social Links */}
            <div className="flex gap-3 mt-5">
              {[
                {
                  label: "Twitter",
                  href: "#",
                  icon: (
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  ),
                },
                {
                  label: "Instagram",
                  href: "#",
                  icon: (
                    <>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "#",
                  icon: (
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#2c2c2e] text-gray-400 hover:text-[#fac355] hover:bg-[#fac355]/10 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#fac355]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} 404day Festival. All rights reserved.</p>
          <p>
            Built with{" "}
            <span className="text-[#e87851]">♥</span>
            {" "}in Atlanta, GA
          </p>
        </div>
      </div>
    </footer>
  );
}
