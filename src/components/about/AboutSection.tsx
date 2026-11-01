"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Handshake,
  Lightbulb,
  Users,
  ShieldCheck,
  Target,
  ArrowRight,
  CheckCircle2,
  Paintbrush,
  Hammer,
  Wind,
  PanelsTopLeft,
} from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality",
    description:
      "We value quality workmanship, careful execution and attention to detail in every project.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description:
      "We believe in honest communication, transparency and professional conduct.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace creative ideas and practical solutions to improve the spaces we work on.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "We place our clients' needs and satisfaction at the centre of our approach.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    description:
      "We aim to provide dependable services and a professional experience throughout every project.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "We continually strive for professional results and quality finishes.",
  },
];

const services = [
  {
    icon: Hammer,
    title: "Carpentry & Woodwork",
    description:
      "Custom woodwork solutions, including kitchen and wardrobe installations.",
  },
  {
    icon: Wind,
    title: "Air Conditioning",
    description:
      "Air-conditioning installation and servicing for indoor comfort.",
  },
  {
    icon: Paintbrush,
    title: "Painting",
    description:
      "Professional painting services to refresh and transform your spaces.",
  },
  {
    icon: PanelsTopLeft,
    title: "Ceiling Installations",
    description:
      "Ceiling installations with a variety of architectural designs and finishes.",
  },
];

const reasons = [
  "Professional painting, carpentry and renovation services",
  "A range of property improvement solutions",
  "Attention to detail and quality finishes",
  "Solutions tailored to individual project requirements",
];

export default function AboutSection() {
  return (
    <main className="overflow-hidden bg-white">
      {/* WHO WE ARE */}
      <section className="section-padding">
        <div className="container grid items-stretch gap-14 lg:grid-cols-2">
          <div className="relative flex h-full min-h-[350px] flex-col sm:min-h-[460px] lg:min-h-0">
            {/* Orange top corner */}
            <div className="absolute -left-5 -top-5 h-32 w-32 rounded-tl-3xl border-l-4 border-t-4 border-[#F58200]" />

            {/* Image */}
            <div className="relative min-h-[350px] flex-1 overflow-hidden rounded-2xl bg-[#F5F7FA] shadow-xl sm:min-h-[460px] lg:min-h-0">
              <Image
                src="/images/welcome-collage1.png"
                alt="Modern Investments interior workmanship"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Blue bottom corner */}
            <div className="absolute -bottom-5 -right-5 h-32 w-32 rounded-br-3xl border-b-4 border-r-4 border-[#168BE8]" />
          </div>

          <div className="relative z-10">
            <span className="section-label">ABOUT MODERN INVESTMENTS</span>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[#101B78] sm:text-4xl lg:text-5xl">
              Creating Better Spaces Through
              <span className="text-[#F58200]"> Quality & Craftsmanship.</span>
            </h1>

            <div className="mt-6 h-1 w-16 rounded-full bg-[#F58200]" />

            <h2 className="mt-8 text-xl font-bold text-[#101B78]">
              Who We Are
            </h2>

            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Modern Investments provides professional painting, carpentry,
              renovation and installation services tailored to meet the needs of
              our clients.
            </p>

            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Our work covers a range of solutions, including custom kitchens
              and wardrobes, ceiling installations, air-conditioning services
              and general improvements. We approach every project with a focus
              on workmanship, quality finishes and customer satisfaction.
            </p>

            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Our goal is to help clients bring their ideas to life through
              practical solutions and carefully executed work for residential
              and commercial spaces.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#F58200] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-1 hover:bg-[#101B78]"
            >
              Talk To Our Team
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="bg-[#F5F7FA] py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="section-label">OUR PURPOSE</span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#101B78] sm:text-4xl">
              What Drives Us
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Our purpose and direction guide the way we approach our work and
              serve our clients.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {/* MISSION */}
            <div className="group rounded-2xl bg-[#101B78] p-8 text-white shadow-xl transition duration-300 hover:-translate-y-2 sm:p-10">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F58200]">
                <Target size={27} className="text-white" />
              </div>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F58200]">
                Our Mission
              </span>

              <h3 className="mt-3 text-2xl font-extrabold">
                Delivering Quality in Every Project
              </h3>

              <p className="mt-5 text-sm leading-8 text-blue-100">
                To deliver professional, reliable and quality-driven solutions
                that improve the functionality and appearance of residential and
                commercial spaces while building lasting relationships with our
                clients.
              </p>
            </div>

            {/* VISION */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 sm:p-10">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-[#168BE8]">
                <Lightbulb size={27} className="text-white" />
              </div>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F58200]">
                Our Vision
              </span>

              <h3 className="mt-3 text-2xl font-extrabold text-[#101B78]">
                Building a Trusted Name
              </h3>

              <p className="mt-5 text-sm leading-8 text-slate-600">
                To become a trusted name in the construction, renovation and
                property improvement industry, recognised for quality
                workmanship, innovative solutions and exceptional customer
                experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="section-label">WHAT WE STAND FOR</span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#101B78] sm:text-4xl">
              Our Core Values
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              The principles that shape our approach, guide our decisions and
              influence the quality of our work.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group rounded-xl border border-slate-100 bg-white p-7 shadow-[0_8px_35px_rgba(16,27,120,0.06)] transition duration-300 hover:-translate-y-2 hover:border-[#168BE8]/50 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-[#168BE8]/30 bg-[#F5F7FA] transition duration-300 group-hover:border-[#168BE8] group-hover:bg-[#168BE8]">
                    <Icon
                      size={26}
                      className="text-[#168BE8] transition group-hover:text-white"
                    />
                  </div>

                  <span className="text-xs font-bold tracking-widest text-[#F58200]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-2 text-lg font-extrabold text-[#101B78]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AREAS OF EXPERTISE */}
      <section className="bg-[#F5F7FA] py-20">
        <div className="container">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="section-label">WHAT WE DO</span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#101B78] sm:text-4xl">
              Our Areas of Expertise
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              We offer a range of services designed to improve, refresh and
              transform residential and commercial spaces.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  href="/services"
                  key={service.title}
                  className="group rounded-xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#101B78] transition duration-300 group-hover:bg-[#F58200]">
                    <Icon size={29} className="text-white" />
                  </div>

                  <h3 className="text-lg font-extrabold text-[#101B78]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#F58200]">
                    Explore Service
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 rounded-md border-2 border-[#101B78] px-7 py-4 text-sm font-bold text-[#101B78] transition duration-300 hover:border-[#F58200] hover:bg-[#F58200] hover:text-white"
            >
              View All Services
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative overflow-hidden bg-[#101B78] py-20 text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[45px] border-white/[0.03]" />
        <div className="absolute -bottom-36 -left-20 h-80 w-80 rounded-full border-[45px] border-[#F58200]/10" />

        <div className="container relative z-10 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F58200]">
              THE MODERN INVESTMENTS DIFFERENCE
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
              Why Choose
              <span className="text-[#F58200]"> Modern Investments?</span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-blue-100">
              Every space has the potential to become something better. We bring
              together our range of services, attention to detail and commitment
              to quality to help turn your ideas into practical, well-finished
              spaces.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#F58200] px-7 py-4 text-sm font-bold text-white transition duration-300 hover:bg-[#168BE8]"
            >
              Start Your Enquiry
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="space-y-5">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.05] p-5 transition duration-300 hover:border-[#F58200]/50 hover:bg-white/[0.08]"
              >
                <CheckCircle2
                  size={22}
                  className="mt-0.5 shrink-0 text-[#F58200]"
                />

                <p className="text-sm font-medium leading-7 text-blue-50">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CONTACT SECTION */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl bg-[#F5F7FA] px-7 py-14 text-center sm:px-14 sm:py-16">
            <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-[#168BE8]/10" />
            <div className="absolute -bottom-28 -left-10 h-64 w-64 rounded-full bg-[#F58200]/10" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <span className="section-label">LET'S WORK TOGETHER</span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#101B78] sm:text-4xl">
                Let's Bring Your Vision to Life.
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-600">
                Whether you are planning a renovation, upgrading your kitchen,
                improving your ceilings or looking for professional painting
                services, Modern Investments is ready to assist.
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
                  href="/services"
                  className="inline-flex items-center gap-3 rounded-md border border-[#101B78] px-7 py-4 text-sm font-bold text-[#101B78] transition duration-300 hover:bg-[#101B78] hover:text-white"
                >
                  Explore Services
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
