"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    image: "/hero/woodwork.png",
    firstLine: "Modern Woodwork",
    highlighted: "Crafted to Perfection",
    description:
      "Custom woodwork, kitchens and wardrobes designed to bring elegance and functionality to your space.",
  },
  {
    image: "/hero/ceiling.png",
    firstLine: "Elevate Your Space",
    highlighted: "With Custom Designed Ceilings",
    description:
      "Quality ceiling installations that enhance the style, comfort and appearance of your interior.",
  },
  {
    image: "/hero/air-conditioning.png",
    firstLine: "Comfort and Quality",
    highlighted: "In Every Season",
    description:
      "Professional air-conditioning solutions designed to keep your indoor environment comfortable.",
  },
  {
    image: "/hero/painting.png",
    firstLine: "Transform Your Space",
    highlighted: "With Quality Painting",
    description:
      "Refresh your interiors with professional painting and a clean, beautiful finish.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((previous) => (previous + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrent((previous) => (previous - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="hero-slider relative isolate min-h-[620px] overflow-hidden bg-[#101B78] sm:min-h-[680px] lg:min-h-[760px]">
      {/* Background image */}
      <div key={slide.image} className="absolute inset-0">
        <Image
          src={slide.image}
          alt={`${slide.firstLine} ${slide.highlighted}`}
          fill
          priority
          sizes="100vw"
          className="hero-background-image object-cover"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080D35]/95 via-[#101B78]/75 to-[#101B78]/20" />

      {/* Animated vertical light lines */}
      <div className="hero-light-lines" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, index) => (
          <span
            key={index}
            className={`hero-light-line ${index % 2 === 0 ? "light-down" : "light-up"}`}
            style={{ left: `${10 + index * 10}%` }}
          />
        ))}
      </div>

      {/* Bottom overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080D35]/65 via-transparent to-transparent" />

      {/* Content */}
      <div className="container relative z-10 flex min-h-[620px] items-center py-24 sm:min-h-[680px] lg:min-h-[760px]">
        <div key={current} className="hero-content max-w-5xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[3px] w-12 bg-[#F58200]" />
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-white/90 sm:text-sm">
              Modern Investments
            </span>
          </div>

          <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {slide.firstLine}
            <span className="mt-1 block font-black text-[#F58200]">
              {slide.highlighted}
            </span>
          </h1>

          <p className="mt-7 max-w-2xl font-[var(--font-manrope)] text-base font-medium leading-8 text-white/85 sm:text-lg lg:text-xl">
            {slide.description}
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="hero-quote-button group inline-flex items-center gap-5"
            >
              <span>Request a Quote</span>
              <span className="hero-quote-arrow">
                <ArrowRight size={19} />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <div className="absolute bottom-8 right-5 z-20 flex items-center gap-3 sm:right-10 lg:right-16">
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="flex h-11 w-11 items-center justify-center border border-white/50 text-white transition hover:border-[#F58200] hover:bg-[#F58200]"
        >
          <ArrowLeft size={19} />
        </button>

        <div className="flex items-center gap-2">
          {slides.map((item, index) => (
            <button
              key={item.image}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={current === index ? "true" : undefined}
              className={`h-[4px] transition-all duration-300 ${
                current === index
                  ? "w-9 bg-[#F58200]"
                  : "w-5 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="flex h-11 w-11 items-center justify-center border border-white/50 text-white transition hover:border-[#F58200] hover:bg-[#F58200]"
        >
          <ArrowRight size={19} />
        </button>
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-9 left-5 z-20 font-[var(--font-manrope)] text-sm font-bold tracking-widest text-white/80 sm:left-10 lg:left-16">
        <span className="text-[#F58200]">
          {String(current + 1).padStart(2, "0")}
        </span>
        <span className="mx-2">/</span>
        {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
}
