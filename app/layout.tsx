import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "404day Festival — Where Creativity Meets Technology",
  description:
    "404day is an annual festival celebrating the culture of the digital age. Music, art, tech talks, and more in Atlanta, Georgia.",
  keywords: ["404day", "festival", "Atlanta", "technology", "music", "art", "Georgia"],
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "404day Festival",
    description: "Where creativity meets technology. Annual festival in Atlanta, GA.",
    type: "website",
    url: "https://404day.com",
    images: [{ url: "/logo.svg", width: 400, height: 400, alt: "404day Festival Logo" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
