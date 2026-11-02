import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Hammer,
  Wind,
  Paintbrush,
  PanelsTopLeft,
  Award,
  ShieldCheck,
  Users,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    id: "carpentry",
    number: "01",
    title: "Carpentry & Woodwork",
    shortDescription:
      "Custom woodwork solutions designed to bring functionality, style and character to your space.",
    description:
      "We provide carpentry and woodwork solutions with a focus on practical design, quality finishes and attention to detail. From custom kitchen installations to wardrobes and other woodwork requirements, our aim is to help create spaces that suit your needs.",
    image: "/hero/woodwork1.png",
    imageAlt: "Custom carpentry and woodwork",
    icon: Hammer,
    features: [
      "Custom kitchen installations",
      "Wardrobe installations",
      "Woodwork solutions",
      "Practical designs and finishes",
    ],
  },
  {
    id: "air-conditioning",
    number: "02",
    title: "Air Conditioning",
    shortDescription:
      "Air-conditioning installation and servicing to help create a comfortable indoor environment.",
    description:
      "A comfortable indoor environment makes a difference. Our air-conditioning services cover installation and servicing, with attention to the practical needs of residential and commercial spaces.",
    image: "/hero/air-conditioning1.png",
    imageAlt: "Air conditioning installation",
    icon: Wind,
    features: [
      "Air-conditioning installation",
      "Air-conditioning servicing",
      "Indoor comfort solutions",
      "Residential and commercial spaces",
    ],
  },
  {
    id: "painting",
    number: "03",
    title: "Painting",
    shortDescription:
      "Professional painting services that refresh interiors and transform the appearance of your space.",
    description:
      "Painting is an important part of creating a clean and welcoming environment. We provide professional painting services focused on quality workmanship, careful preparation and neat finishes.",
    image: "/hero/painting1.png",
    imageAlt: "Professional painting work",
    icon: Paintbrush,
    features: [
      "Interior painting",
      "Space refreshment",
      "Professional finishes",
      "Residential and commercial spaces",
    ],
  },
  {
    id: "ceilings",
    number: "04",
    title: "Ceiling Installations",
    shortDescription:
      "Ceiling installations featuring a variety of architectural designs and finishes.",
    description:
      "The right ceiling design can enhance the overall appearance of an interior. We provide ceiling installation services with a variety of architectural ceiling designs and finishes to complement your space.",
    image: "/hero/ceiling-service.png",
    imageAlt: "Modern ceiling installation",
    icon: PanelsTopLeft,
    features: [
      "Ceiling installations",
      "Architectural ceiling designs",
      "Different ceiling finishes",
      "Interior improvements",
    ],
  },
];

const reasons = [
  {
    icon: Award,
    title: "Quality Workmanship",
    description:
      "We place importance on careful execution, attention to detail and quality finishes.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description:
      "We consider your requirements and aim to provide solutions suited to your space.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Service",
    description:
      "We approach our projects with professionalism and a commitment to customer satisfaction.",
  },
  {
    icon: Lightbulb,
    title: "Practical Solutions",
    description:
      "We bring together design and functionality to help improve your environment.",
  },
];

export default function ServicesSection() {
  return (
    <main className="overflow-hidden bg-white">
      {/* DETAILED SERVICE SECTIONS */}
      <section className="bg-[#F5F7FA] py-20">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="section-label">OUR SERVICES</span>

            <h1 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-[#101B78] sm:text-4xl lg:text-5xl">
              Professional Services.
              <span className="text-[#F58200]"> Quality Results.</span>
            </h1>

            <p className="mt-5 text-sm leading-8 text-slate-600">
              Take a closer look at our services and the solutions available for
              your property improvement needs.
            </p>
          </div>

          <div className="space-y-20 lg:space-y-28">
            {services.map((service, index) => {
              const Icon = service.icon;
              const reversed = index % 2 !== 0;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    reversed ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  {/* SERVICE IMAGE */}
                  <div className="relative">
                    <div
                      className={`absolute -top-4 h-24 w-24 border-[#F58200] ${
                        reversed
                          ? "-right-4 rounded-tr-3xl border-r-4 border-t-4"
                          : "-left-4 rounded-tl-3xl border-l-4 border-t-4"
                      }`}
                    />

                    <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-white shadow-xl">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition duration-700 hover:scale-105"
                      />
                    </div>

                    <div
                      className={`absolute -bottom-4 h-24 w-24 border-[#168BE8] ${
                        reversed
                          ? "-left-4 rounded-bl-3xl border-b-4 border-l-4"
                          : "-right-4 rounded-br-3xl border-b-4 border-r-4"
                      }`}
                    />

                    <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-xl bg-white px-5 py-3 shadow-lg">
                      <Icon size={21} className="text-[#F58200]" />
                      <span className="text-xs font-bold text-[#101B78]">
                        {service.title}
                      </span>
                    </div>
                  </div>

                  {/* SERVICE CONTENT */}
                  <div>
                    <span className="text-xs font-extrabold tracking-[0.2em] text-[#F58200]">
                      SERVICE {service.number}
                    </span>

                    <h3 className="mt-4 text-3xl font-extrabold leading-tight text-[#101B78] sm:text-4xl">
                      {service.title}
                    </h3>

                    <div className="mt-5 h-1 w-16 rounded-full bg-[#F58200]" />

                    <p className="mt-7 text-sm leading-8 text-slate-600 sm:text-base">
                      {service.description}
                    </p>

                    <h4 className="mt-7 text-sm font-extrabold text-[#101B78]">
                      What We Offer
                    </h4>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <CheckCircle2
                            size={18}
                            className="mt-0.5 shrink-0 text-[#F58200]"
                          />

                          <span className="text-sm leading-6 text-slate-600">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/services/${service.id}`}
                      className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#F58200] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/15 transition duration-300 hover:-translate-y-1 hover:bg-[#101B78]"
                    >
                      View Service Details
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative overflow-hidden bg-[#101B78] py-20 text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[45px] border-white/[0.03]" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border-[40px] border-[#F58200]/10" />

        <div className="container relative z-10">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F58200]">
              THE MODERN INVESTMENTS DIFFERENCE
            </span>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Why Choose
              <span className="text-[#F58200]"> Modern Investments?</span>
            </h2>

            <p className="mt-5 text-sm leading-8 text-blue-100">
              We bring together professional service, practical solutions and a
              focus on quality to help transform your residential and commercial
              spaces.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="rounded-xl border border-white/10 bg-white/[0.05] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#F58200]/50 hover:bg-white/[0.08]"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F58200]">
                    <Icon size={26} className="text-white" />
                  </div>

                  <h3 className="text-lg font-extrabold">{reason.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-blue-100">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL ENQUIRY */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl bg-[#F5F7FA] px-7 py-14 text-center sm:px-14 sm:py-16">
            <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-[#168BE8]/10" />
            <div className="absolute -bottom-28 -left-10 h-64 w-64 rounded-full bg-[#F58200]/10" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <span className="section-label">HAVE A PROJECT IN MIND?</span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#101B78] sm:text-4xl">
                Let's Bring Your Vision to Life.
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-600">
                Tell us about your project and let Modern Investments help you
                find the right solution for your space.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-md bg-[#F58200] px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#101B78]"
                >
                  Contact Us
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 rounded-md border border-[#101B78] px-7 py-4 text-sm font-bold text-[#101B78] transition duration-300 hover:bg-[#101B78] hover:text-white"
                >
                  About Us
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
