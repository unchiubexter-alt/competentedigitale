import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import ScrollAnimator from "@/components/ScrollAnimator";

export const metadata: Metadata = {
  title: "Cars By Bistrian — Fotografie Auto",
  description:
    "Capturarea excelenței auto prin obiectiv. Fotografie auto premium care evidențiază cele mai impresionante automobile din lume.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Particles />
        <Navbar />
        <ScrollAnimator />
        {children}
        <Footer />
      </body>
    </html>
  );
}
