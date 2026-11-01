import { Award, Users, ShieldCheck, Wallet, ArrowUpRight } from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Quality Workmanship",
    description:
      "We focus on quality finishes, attention to detail and craftsmanship that brings lasting value to every project.",
    icon: Award,
  },
  {
    number: "02",
    title: "Skilled Professionals",
    description:
      "Our team is dedicated to delivering professional solutions with care, precision and expertise.",
    icon: Users,
  },
  {
    number: "03",
    title: "Reliable Service",
    description:
      "We value your time and trust, providing dependable service and keeping your project requirements in focus.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Affordable Solutions",
    description:
      "We aim to provide practical, cost-conscious solutions tailored to your space, needs and budget.",
    icon: Wallet,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#168BE8]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#F58200]/5 blur-3xl" />

      <div className="container relative z-10">
        {/* SECTION INTRODUCTION */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-3 text-xs font-extrabold tracking-[0.2em] text-[#F58200]">
            <span className="h-[2px] w-8 bg-[#F58200]" />
            THE MODERN INVESTMENTS DIFFERENCE
            <span className="h-[2px] w-8 bg-[#F58200]" />
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-[#101B78] sm:text-5xl">
            Why Choose <span className="text-[#F58200]">Us?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600">
            Choosing the right team makes all the difference. We are committed
            to delivering quality workmanship, professional service and
            practical solutions for your residential and commercial spaces.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#168BE8]" />
        </div>

        {/* REASONS GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.number}
                className="group relative overflow-hidden rounded-xl border border-gray-100 bg-[#F5F7FA] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#168BE8]/50 hover:bg-white hover:shadow-xl hover:shadow-blue-900/10"
              >
                {/* NUMBER */}
                <span className="absolute right-6 top-5 text-3xl font-black text-[#101B78]/[0.06] transition-colors duration-300 group-hover:text-[#F58200]/20">
                  {reason.number}
                </span>

                {/* ICON */}
                <div className="relative mb-8 flex h-16 w-16 items-center justify-center rounded-xl border border-[#168BE8]/40 bg-white text-[#F58200] shadow-sm transition-all duration-500 group-hover:border-[#F58200] group-hover:bg-[#101B78] group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-900/20">
                  <Icon size={29} strokeWidth={1.8} />
                </div>

                {/* CONTENT */}
                <h3 className="text-xl font-extrabold leading-snug text-[#101B78] transition-colors duration-300 group-hover:text-[#F58200]">
                  {reason.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {reason.description}
                </p>

                {/* BOTTOM ACCENT */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F58200] transition-all duration-500 group-hover:w-full" />

                <ArrowUpRight
                  size={18}
                  className="absolute bottom-6 right-6 text-[#168BE8] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
