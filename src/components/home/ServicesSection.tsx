import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Carpentry & Woodwork",
    description:
      "Quality carpentry and custom woodwork designed to bring functionality, style and character to your space.",
    image: "/services/carpentry.png",
  },
  {
    title: "Air Conditioning",
    description:
      "Professional air-conditioning services to help create a comfortable indoor environment.",
    image: "/services/air-conditioning.png",
  },
  {
    title: "Painting",
    description:
      "Refresh and transform your interiors with quality painting and professional finishes.",
    image: "/services/painting.png",
  },
  {
    title: "Ceiling Installations",
    description:
      "Quality ceiling installations that enhance the appearance and finish of your interior spaces.",
    image: "/services/ceilings.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] py-20 sm:py-24">
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-[#168BE8]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#F58200]/5 blur-3xl" />

      <div className="container relative z-10">
        {/* SECTION HEADING */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="section-label">WHAT WE DO</span>

          <h2 className="section-title mt-3">
            Our <span className="text-[#F58200]">Services</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600">
            Discover our range of professional services, delivered with quality
            craftsmanship, attention to detail and a commitment to transforming
            your space.
          </p>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#F58200]" />
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#168BE8]/30 hover:shadow-xl"
            >
              {/* NUMBER */}
              <div className="absolute right-6 top-5 text-sm font-bold text-gray-200 transition-colors duration-300 group-hover:text-[#F58200]/40">
                0{index + 1}
              </div>

              {/* SERVICE ICON */}
              <div className="service-icon mb-7 flex h-24 w-24 items-center justify-center overflow-hidden rounded-xl border border-[#168BE8]/60 bg-[#F5F7FA] p-2 transition-all duration-500 group-hover:scale-105">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={100}
                  height={100}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* SERVICE TITLE */}
              <h3 className="min-h-[52px] text-xl font-extrabold leading-snug text-[#101B78] transition-colors duration-300 group-hover:text-[#F58200]">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                {service.description}
              </p>

              {/* LINK */}
              <Link
                href="/services"
                className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#101B78] transition-all duration-300 hover:gap-3 hover:text-[#F58200]"
              >
                Learn More
                <ArrowRight size={17} />
              </Link>

              {/* BOTTOM ACCENT */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F58200] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* VIEW ALL SERVICES */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 rounded-md border border-[#F58200] bg-[#F58200] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:border-[#101B78] hover:bg-[#101B78] hover:shadow-blue-900/20"
          >
            Explore All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
