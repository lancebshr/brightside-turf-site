import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Brightside Turf | Top-Rated Lawn Care in Omaha, NE",
    template: "%s | Brightside Turf",
  },
  description:
    "Omaha's trusted lawn care company. Fertilization, weed control, aeration, overseeding, mowing, mulch, cleanups, and holiday lighting. 150+ five-star reviews.",
  keywords: [
    "lawn care Omaha",
    "lawn fertilization Omaha",
    "aeration Omaha",
    "weed control Omaha",
    "lawn mowing Omaha",
    "holiday lighting Omaha",
    "mulch installation Omaha",
    "lawn service Omaha NE",
    "Brightside Turf",
  ],
  authors: [{ name: "Brightside Turf" }],
  creator: "Brightside Turf",
  metadataBase: new URL("https://brightsideturf.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brightsideturf.com",
    siteName: "Brightside Turf",
    title: "Brightside Turf | Top-Rated Lawn Care in Omaha, NE",
    description:
      "Omaha's trusted lawn care company. Fertilization, weed control, aeration, mowing, mulch, cleanups, and holiday lighting. 150+ five-star reviews.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brightside Turf - Lawn Care Services in Omaha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brightside Turf | Top-Rated Lawn Care in Omaha, NE",
    description:
      "Omaha's trusted lawn care company. Fertilization, weed control, aeration, mowing, and more. 150+ five-star reviews.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here when you have it
    // google: "your-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Brightside Turf",
  image: "https://brightsideturf.com/og-image.jpg",
  "@id": "https://brightsideturf.com",
  url: "https://brightsideturf.com",
  telephone: "(402) 810-8692",
  email: "hello@brightsideturf.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Omaha",
    addressRegion: "NE",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.2565,
    longitude: -95.9345,
  },
  areaServed: [
    "Omaha",
    "Papillion",
    "Gretna",
    "Elkhorn",
    "Ralston",
    "Bennington",
    "La Vista",
    "Bellevue",
    "Waterloo",
    "Valley",
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "150",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Lawn Care Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lawn Fertilization & Weed Control",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Core Aeration & Overseeding",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lawn Mowing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mulch Installation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Spring & Fall Cleanups",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Holiday Lighting Installation",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`overflow-x-hidden ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
