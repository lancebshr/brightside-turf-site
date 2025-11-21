import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brightside Turf | Lawn Fertilization & Aeration in Omaha",
  description:
    "Brightside Turf delivers fertilization, aeration, overseeding, sprinkler winterization, and holiday lighting with a friendly Omaha crew.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
