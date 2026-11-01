import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WelcomeSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* IMAGE COLLAGE */}
          <div className="group relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border-2 border-[#168BE8]/30 transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1" />

            <div className="relative aspect-[1.15/1] overflow-hidden rounded-xl bg-[#F5F7FA] shadow-xl">
              <Image
                src="/images/welcome-collage.png"
                alt="Modern Investments ceiling installations, renovations and interior workmanship"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-xl border-b-4 border-r-4 border-[#F58200]" />
          </div>

          {/* CONTENT */}
          <div className="relative">
            <span className="inline-flex items-center gap-3 text-sm font-extrabold tracking-[0.18em] text-[#F58200]">
              <span className="h-[2px] w-8 bg-[#F58200]" />
              WHO WE ARE
            </span>

            <h2 className="mt-5 text-3xl font-black leading-[1.1] tracking-tight text-[#101B78] sm:text-4xl lg:text-5xl">
              Welcome to Modern
              <span className="block text-[#F58200]">Investments</span>
            </h2>

            <div className="mt-6 h-1 w-20 rounded-full bg-[#168BE8]" />

            <p className="mt-7 text-base leading-8 text-gray-600">
              Our company provides professional painting, carpentry, and
              renovation services delivered by highly skilled experts dedicated
              to quality workmanship and customer satisfaction. We specialize in
              custom woodwork solutions, including kitchen and wardrobe
              installations, ceiling installation services with a variety of
              architectural ceiling designs and finishes, as well as reliable
              air-conditioning installation and servicing by experienced
              technicians who ensure comfort, efficiency, and long-lasting
              performance.
            </p>

            {/* READ MORE */}
            <Link
              href="/about"
              className="group/btn mt-9 inline-flex items-center gap-4 rounded-md bg-[#F58200] px-7 py-4 text-sm font-extrabold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#101B78] hover:shadow-blue-900/20"
            >
              Read More
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover/btn:translate-x-1">
                <ArrowRight size={17} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
