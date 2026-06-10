import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://finesseplans.com"),
  title: "Finesse Plans | Building Complete Financial Protection for Families",
  description:
    "At Finesse Plans, we help families secure their future through personalized strategies focused on income protection, retirement planning, and legacy preservation.",
  keywords:
    "financial planning, income protection, retirement planning, legacy preservation, life insurance, mortgage protection, family financial security",
  openGraph: {
    type: "website",
    siteName: "Finesse Plans",
    title: "Finesse Plans | Building Complete Financial Protection for Families",
    description:
      "At Finesse Plans, we help families secure their future through personalized strategies focused on income protection, retirement planning, and legacy preservation.",
    url: "https://finesseplans.com",
    images: [
      {
        url: "/images/hero-home.jpg",
        width: 1920,
        height: 1080,
        alt: "Finesse Plans — Building Complete Financial Protection for Families",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finesse Plans | Building Complete Financial Protection for Families",
    description:
      "At Finesse Plans, we help families secure their future through personalized strategies focused on income protection, retirement planning, and legacy preservation.",
    images: ["/images/hero-home.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
