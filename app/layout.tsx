import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "404 Day — Celebrating Atlanta Culture",
  description:
    "404 Day is an annual celebration of Atlanta culture. Music, food, and community spirit in Piedmont Park — free to attend every April 4th.",
  keywords: ["404day", "404 day", "festival", "Atlanta", "Piedmont Park", "music", "Georgia", "Atlanta culture"],
  icons: {
    icon: "/404day-logo-black.png",
    apple: "/404day-logo-white.png",
  },
  openGraph: {
    title: "404 Day — Celebrating Atlanta Culture",
    description: "Music, food, and community in Piedmont Park. Free to attend every April 4th.",
    type: "website",
    url: "https://404day.com",
    images: [{ url: "/404day-logo-white.png", width: 400, height: 400, alt: "404day Festival Logo" }],
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
