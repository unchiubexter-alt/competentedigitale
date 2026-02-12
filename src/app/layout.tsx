import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import ScrollAnimator from "@/components/ScrollAnimator";

export const metadata: Metadata = {
  title: "AutoLens — Car Photography",
  description:
    "Capturing automotive excellence through the lens. Premium car photography showcasing the world's finest automobiles.",
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
