"use client";

import type { FormEvent } from "react";
import { CheckSquare, Handshake, Smile, ArrowRight } from "lucide-react";

const statistics = [
  {
    number: "153",
    label: "Projects Done",
    icon: CheckSquare,
  },
  {
    number: "8",
    label: "Years Of Service",
    icon: Handshake,
  },
  {
    number: "268",
    label: "Happy Clients",
    icon: Smile,
  },
];

export default function EnquirySection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "");
    const message = String(data.get("message") || "");

    const emailSubject = encodeURIComponent(subject || "Website Enquiry");

    const emailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:info@moderninvest.co.za?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#101B78] py-20 sm:py-24">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/enquiry-background.png')",
        }}
      />

      {/* DARK NAVY OVERLAY */}
      <div className="absolute inset-0 -z-10 bg-[#071744]/45" />

      {/* BLUE ATMOSPHERIC OVERLAY */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101B78]/40 via-[#101B78]/25 to-[#168BE8]/10" />

      {/* DECORATIVE LIGHT */}
      <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-[#168BE8]/20 blur-3xl" />

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.6fr_0.9fr] lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="text-white">
            <span className="inline-flex rounded-md border border-[#F58200]/40 bg-[#F58200]/15 px-4 py-2 text-sm font-bold tracking-wide text-[#FFAA42] backdrop-blur-sm">
              Get a Free Online Quotation
            </span>

            <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Enquire <span className="text-[#F58200]">Now!</span>
            </h2>

            <div className="mt-6 h-1 w-20 rounded-full bg-[#F58200]" />

            <p className="mt-7 max-w-3xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
              We are committed to providing professional, reliable, and
              affordable services tailored to meet your needs with excellence
              and attention to detail. Whether you require painting, carpentry,
              renovations, ceiling installations, custom kitchens and wardrobes,
              or air-conditioning services, our experienced team is ready to
              assist you every step of the way – contact us today to enquire
              more and let us help bring your vision to life with quality
              workmanship you can trust.
            </p>

            {/* STATISTICS */}
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {statistics.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="group rounded-xl border border-white/20 bg-[#101B78]/45 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#F58200] hover:bg-[#101B78]/70"
                  >
                    <Icon
                      size={27}
                      className="mb-4 text-[#F58200] transition-transform duration-300 group-hover:scale-110"
                    />

                    <h3 className="text-3xl font-black text-white sm:text-4xl">
                      {stat.number}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-white/85">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT ENQUIRY FORM */}
          <div className="relative rounded-xl border border-white/20 bg-[#101B78]/80 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
            {/* TOP ACCENT */}
            <div className="absolute left-0 top-0 h-1 w-full rounded-t-xl bg-gradient-to-r from-[#F58200] via-[#168BE8] to-[#F58200]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F58200]">
              Let's Talk
            </span>

            <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
              Request Information
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/70">
              Tell us a little about what you need. Our team will be happy to
              assist.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-md border border-white/20 bg-white px-4 py-3.5 text-sm text-[#17234F] outline-none transition placeholder:text-gray-500 focus:border-[#F58200] focus:ring-2 focus:ring-[#F58200]/30"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full rounded-md border border-white/20 bg-white px-4 py-3.5 text-sm text-[#17234F] outline-none transition placeholder:text-gray-500 focus:border-[#F58200] focus:ring-2 focus:ring-[#F58200]/30"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full rounded-md border border-white/20 bg-white px-4 py-3.5 text-sm text-[#17234F] outline-none transition placeholder:text-gray-500 focus:border-[#F58200] focus:ring-2 focus:ring-[#F58200]/30"
              />

              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                required
                className="w-full resize-none rounded-md border border-white/20 bg-white px-4 py-3.5 text-sm text-[#17234F] outline-none transition placeholder:text-gray-500 focus:border-[#F58200] focus:ring-2 focus:ring-[#F58200]/30"
              />

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-md bg-[#F58200] px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#168BE8] hover:shadow-blue-500/20"
              >
                Submit Request
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
