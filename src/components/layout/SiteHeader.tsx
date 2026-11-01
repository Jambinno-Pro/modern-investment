"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="modern-header sticky top-0 z-50 w-full">
      {/* TOP CONTACT BAR */}
      <div className="hidden bg-[#101B78] text-white md:block">
        <div className="container flex min-h-10 items-center justify-between">
          <div className="flex items-center gap-6 text-xs">
            <a
              href="tel:+27659404421"
              className="flex items-center gap-2 transition hover:text-[#F58200]"
            >
              <Phone size={13} className="text-[#F58200]" />
              +27 65 940 4421
            </a>

            <a
              href="mailto:info@moderninvest.co.za"
              className="flex items-center gap-2 transition hover:text-[#F58200]"
            >
              <Mail size={14} className="text-[#F58200]" />
              info@moderninvest.co.za
            </a>
          </div>

          <div className="flex items-center gap-2 text-xs text-white/80">
            <MapPin size={14} className="text-[#F58200]" />
            Goodwood, Western Cape
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <div className="border-b border-gray-100 bg-white/95 backdrop-blur-xl">
        <div className="container flex h-[82px] items-center justify-between lg:h-[92px]">
          {/* LOGO */}
          <Link
            href="/"
            aria-label="Modern Investments Home"
            className="relative flex h-[78px] w-[195px] shrink-0 sm:h-[86px] sm:w-[215px]"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/logo/modern-investments.png"
              alt="Modern Investments"
              fill
              priority
              sizes="(max-width: 640px) 195px, 215px"
              className="object-contain object-left"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-7 lg:flex xl:gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`modern-nav-link group relative flex h-[92px] items-center text-[13px] font-bold tracking-wide transition-colors duration-300 xl:text-sm ${
                  isActive(item.href)
                    ? "text-[#F58200]"
                    : "text-[#17234F] hover:text-[#F58200]"
                }`}
              >
                {item.name}

                <span
                  className={`absolute bottom-[25px] left-0 h-[2px] rounded-full bg-[#F58200] transition-all duration-300 ${
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}

            {/* CTA */}
            <Link
              href="/contact"
              className="modern-header-cta group inline-flex items-center gap-3 rounded-md bg-[#F58200] px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e87500] hover:shadow-lg"
            >
              Get a Quote
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={17} />
              </span>
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-md border border-gray-200 bg-[#F5F7FA] text-[#101B78] transition hover:border-[#F58200] hover:text-[#F58200] lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        id="mobile-navigation"
        className={`modern-mobile-menu overflow-hidden bg-white shadow-xl transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "max-h-[420px] border-b border-gray-100 opacity-100"
            : "max-h-0 border-b-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="container flex flex-col py-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              tabIndex={menuOpen ? 0 : -1}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center justify-between border-b border-gray-100 py-4 text-sm font-bold transition-all duration-200 ${
                isActive(item.href)
                  ? "pl-2 text-[#F58200]"
                  : "text-[#17234F] hover:pl-2 hover:text-[#F58200]"
              }`}
            >
              {item.name}
              <ArrowUpRight size={16} className="text-[#F58200]" />
            </Link>
          ))}

          <Link
            href="/contact"
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center justify-center gap-3 rounded-md bg-[#F58200] px-5 py-4 text-sm font-bold text-white shadow-md transition hover:bg-[#e87500]"
          >
            Get a Quote
            <ArrowUpRight size={17} />
          </Link>

          <div className="mt-5 flex flex-col gap-3 pb-3 text-xs text-[#17234F] sm:flex-row sm:justify-between">
            <a href="tel:+27659404421" className="flex items-center gap-2">
              <Phone size={14} className="text-[#F58200]" />
              +27 65 940 4421
            </a>

            <a
              href="mailto:info@moderninvest.co.za"
              className="flex items-center gap-2"
            >
              <Mail size={14} className="text-[#F58200]" />
              Email Us
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
