import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://moderninvest.co.za"),

  title: "Modern Investments | Quality Craftsmanship & Professional Services",

  description:
    "Modern Investments offers professional painting, carpentry, renovations, ceiling installations, custom kitchens and wardrobes, and air-conditioning services.",

  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <Suspense fallback={null}>
          <SiteHeader />
        </Suspense>

        <main>{children}</main>

        <SiteFooter />

        <WhatsAppButton />
      </body>
    </html>
  );
}
