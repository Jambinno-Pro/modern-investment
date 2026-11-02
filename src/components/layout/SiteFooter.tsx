"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight, Clock3 } from "lucide-react";

const galleryImages = [
  {
    src: "hero/air-conditioning1.png",
    alt: "Modern Investments project",
  },
  {
    src: "hero/ceiling.png",
    alt: "Modern Investments project",
  },
  {
    src: "hero/ceiling-service.png",
    alt: "Modern Investments project",
  },
  {
    src: "hero/painting.png",
    alt: "Modern Investments project",
  },
  {
    src: "hero/woodwork.png",
    alt: "Modern Investments project",
  },
  {
    src: "hero/painting1.png",
    alt: "Modern Investments project",
  },
];

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

export default function SiteFooter() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#101B78] text-white">
      {/* MAIN FOOTER */}
      <div className="container grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[0.95fr_1.5fr_1.15fr_1.1fr] lg:gap-10">
        {/* BRAND COLUMN */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <Link
            href="/"
            aria-label="Modern Investments Home"
            className="inline-block"
          >
            <Image
              src="/images/logowhite.png"
              alt="Modern Investments"
              width={140}
              height={140}
              className="h-auto w-28 object-contain"
            />
          </Link>

          <h3 className="mt-6 text-base font-extrabold uppercase tracking-wide text-white">
            Modern Investments
          </h3>

          <div className="mt-3 h-1 w-12 rounded-full bg-[#F58200]" />

          <p className="mt-4 max-w-[240px] text-sm leading-7 text-blue-100">
            Quality craftsmanship, thoughtful designs and professional service
            for spaces that inspire.
          </p>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#F58200]">
            Quality • Design • Excellence
          </p>
        </div>

        {/* COMPANY INFORMATION */}
        <div>
          <h3 className="mb-5 text-sm font-extrabold uppercase tracking-wider text-[#F58200]">
            Welcome to Modern Investments
          </h3>

          <p className="text-sm leading-7 text-blue-100">
            Welcome to Modern Investments, where quality craftsmanship,
            innovative designs, and professional service come together to
            transform your space. Whether you require painting, carpentry,
            renovations, ceiling installations, custom kitchens and wardrobes,
            or air-conditioning services, our experienced team is ready to
            assist you.
          </p>

          <div className="mt-6">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">
              Explore Our Website
            </h4>

            <div className="grid grid-cols-2 gap-x-5 gap-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-blue-100 transition duration-300 hover:translate-x-1 hover:text-[#F58200]"
                >
                  <ArrowUpRight
                    size={13}
                    className="text-[#F58200] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* PROJECT GALLERY */}
        <div>
          <h3 className="mb-2 text-sm font-extrabold uppercase tracking-wider text-[#F58200]">
            Our Projects
          </h3>

          <p className="mb-5 text-sm leading-6 text-blue-100">
            A glimpse of our work, craftsmanship and completed projects.
          </p>

          <div className="grid grid-cols-3 gap-2.5">
            {galleryImages.map((image, index) => (
              <a
                key={index}
                href={image.src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${image.alt} ${index + 1}`}
                className="group relative aspect-square overflow-hidden rounded-lg border border-white/10 bg-white/10"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110 group-hover:opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#101B78]/0 opacity-0 transition duration-300 group-hover:bg-[#101B78]/30 group-hover:opacity-100">
                  <ArrowUpRight size={20} className="text-white" />
                </div>
              </a>
            ))}
          </div>

          <p className="mt-4 text-xs leading-6 text-blue-200">
            Every project reflects our commitment to quality and attention to
            detail.
          </p>
        </div>

        {/* CONTACT INFORMATION */}
        <div>
          <h3 className="mb-5 text-sm font-extrabold uppercase tracking-wider text-[#F58200]">
            Contact Us
          </h3>

          <p className="mb-6 text-sm leading-6 text-blue-100">
            Have a project in mind or need professional assistance? Get in touch
            with our team. We will be happy to hear from you.
          </p>

          <div className="space-y-6">
            {/* PHONE */}
            <a
              href="tel:+27659404421"
              className="group flex items-start gap-3 text-sm text-blue-100 transition hover:text-[#F58200]"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#F58200]/30 bg-[#F58200]/10 transition group-hover:bg-[#F58200]">
                <Phone
                  size={16}
                  className="text-[#F58200] transition group-hover:text-white"
                />
              </div>

              <span className="min-w-0 pt-0.5">
                <strong className="mb-1 block text-white">Phone</strong>
                +27 65 940 4421
              </span>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:info@moderninvest.co.za"
              className="group flex items-start gap-3 text-sm text-blue-100 transition hover:text-[#F58200]"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#F58200]/30 bg-[#F58200]/10 transition group-hover:bg-[#F58200]">
                <Mail
                  size={16}
                  className="text-[#F58200] transition group-hover:text-white"
                />
              </div>

              <span className="min-w-0 pt-0.5">
                <strong className="mb-1 block text-white">Email</strong>
                <span className="break-all">info@moderninvest.co.za</span>
              </span>
            </a>

            {/* ADDRESS */}
            <div className="flex items-start gap-3 text-sm text-blue-100">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#F58200]/30 bg-[#F58200]/10">
                <MapPin size={16} className="text-[#F58200]" />
              </div>

              <span className="pt-0.5">
                <strong className="mb-1 block text-white">Address</strong>
                Goodwood, Western Cape
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/15 bg-[#0B155F]">
        <div className="container flex flex-col items-center justify-between gap-3 py-5 text-center text-xs text-blue-100 sm:flex-row sm:text-left">
          <p>© {year ?? 2026} Modern Investments. All Rights Reserved.</p>

          <p>
            Crafted with{" "}
            <span className="font-semibold text-[#F58200]">Excellence</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
