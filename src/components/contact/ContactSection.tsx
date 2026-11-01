"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Clock3,
  Send,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const subject = String(formData.get("subject") || "");
    const message = String(formData.get("message") || "");

    const emailSubject = encodeURIComponent(
      subject || "Website Enquiry - Modern Investments",
    );

    const emailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:info@moderninvest.co.za?subject=${emailSubject}&body=${emailBody}`;

    setSubmitted(true);
  }

  return (
    <main className="overflow-hidden bg-white">
      {/* INTRODUCTION */}
      <section className="pb-12 pt-16 sm:pb-16 sm:pt-20">
        <div className="container text-center">
          <span className="section-label">GET IN TOUCH</span>

          <h1 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-[#101B78] sm:text-4xl lg:text-5xl">
            Let's Talk About Your
            <span className="text-[#F58200]"> Next Project.</span>
          </h1>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#F58200]" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
            Have a project in mind or need professional assistance? We would
            love to hear from you. Get in touch with Modern Investments and
            let's discuss how we can help transform your space.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS AND FORM */}
      <section className="pb-20">
        <div className="container">
          <div className="grid overflow-hidden rounded-2xl shadow-[0_12px_50px_rgba(16,27,120,0.10)] lg:grid-cols-[0.85fr_1.5fr]">
            {/* CONTACT INFORMATION */}
            <div className="relative overflow-hidden bg-[#101B78] p-8 text-white sm:p-10 lg:p-12">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[35px] border-white/[0.04]" />
              <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full border-[35px] border-[#F58200]/10" />

              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F58200]">
                  CONTACT INFORMATION
                </span>

                <h2 className="mt-4 text-3xl font-extrabold leading-tight">
                  We'd Love to
                  <span className="text-[#F58200]"> Hear From You.</span>
                </h2>

                <p className="mt-5 text-sm leading-8 text-blue-100">
                  Whether you have a question about our services, need
                  assistance with a project or would like to request an enquiry,
                  our team is ready to assist.
                </p>

                <div className="mt-10 space-y-7">
                  {/* PHONE */}
                  <a
                    href="tel:+27659404421"
                    className="group flex items-start gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#F58200]/30 bg-[#F58200]/10 transition duration-300 group-hover:bg-[#F58200]">
                      <Phone
                        size={21}
                        className="text-[#F58200] transition group-hover:text-white"
                      />
                    </div>

                    <div className="pt-1">
                      <span className="block text-xs font-bold uppercase tracking-wider text-blue-200">
                        Phone
                      </span>

                      <span className="mt-2 block text-sm font-semibold text-white transition group-hover:text-[#F58200]">
                        +27 65 940 4421
                      </span>
                    </div>
                  </a>

                  {/* EMAIL */}
                  <a
                    href="mailto:info@moderninvest.co.za"
                    className="group flex items-start gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#F58200]/30 bg-[#F58200]/10 transition duration-300 group-hover:bg-[#F58200]">
                      <Mail
                        size={21}
                        className="text-[#F58200] transition group-hover:text-white"
                      />
                    </div>

                    <div className="min-w-0 pt-1">
                      <span className="block text-xs font-bold uppercase tracking-wider text-blue-200">
                        Email Address
                      </span>

                      <span className="mt-2 block break-all text-sm font-semibold text-white transition group-hover:text-[#F58200]">
                        info@moderninvest.co.za
                      </span>
                    </div>
                  </a>

                  {/* LOCATION */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#F58200]/30 bg-[#F58200]/10">
                      <MapPin size={21} className="text-[#F58200]" />
                    </div>

                    <div className="pt-1">
                      <span className="block text-xs font-bold uppercase tracking-wider text-blue-200">
                        Location
                      </span>

                      <span className="mt-2 block text-sm font-semibold text-white">
                        Goodwood, Western Cape
                      </span>

                      <span className="mt-1 block text-xs text-blue-200">
                        South Africa
                      </span>
                    </div>
                  </div>
                </div>

                {/* DIVIDER */}
                <div className="my-9 border-t border-white/15" />

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#168BE8]">
                    <MessageCircle size={19} className="text-white" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white">
                      Let's Start a Conversation
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-blue-200">
                      Tell us what you have in mind. We look forward to hearing
                      about your project.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ENQUIRY FORM */}
            <div className="bg-white p-8 sm:p-10 lg:p-12">
              <div className="mb-8">
                <span className="section-label">SEND US A MESSAGE</span>

                <h2 className="mt-3 text-2xl font-extrabold text-[#101B78] sm:text-3xl">
                  Make an Enquiry
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Complete the form below and tell us a little about what you
                  need.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* NAME AND EMAIL */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-xs font-bold text-[#101B78]"
                    >
                      Full Name <span className="text-[#F58200]">*</span>
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      required
                      className="w-full rounded-lg border border-slate-200 bg-[#F5F7FA] px-4 py-3.5 text-sm text-[#101B78] outline-none transition placeholder:text-slate-400 focus:border-[#168BE8] focus:bg-white focus:ring-2 focus:ring-[#168BE8]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-xs font-bold text-[#101B78]"
                    >
                      Email Address <span className="text-[#F58200]">*</span>
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      required
                      className="w-full rounded-lg border border-slate-200 bg-[#F5F7FA] px-4 py-3.5 text-sm text-[#101B78] outline-none transition placeholder:text-slate-400 focus:border-[#168BE8] focus:bg-white focus:ring-2 focus:ring-[#168BE8]/10"
                    />
                  </div>
                </div>

                {/* PHONE AND SUBJECT */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-2 block text-xs font-bold text-[#101B78]"
                    >
                      Phone Number
                    </label>

                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      className="w-full rounded-lg border border-slate-200 bg-[#F5F7FA] px-4 py-3.5 text-sm text-[#101B78] outline-none transition placeholder:text-slate-400 focus:border-[#168BE8] focus:bg-white focus:ring-2 focus:ring-[#168BE8]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="mb-2 block text-xs font-bold text-[#101B78]"
                    >
                      Subject <span className="text-[#F58200]">*</span>
                    </label>

                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      placeholder="What is your enquiry about?"
                      required
                      className="w-full rounded-lg border border-slate-200 bg-[#F5F7FA] px-4 py-3.5 text-sm text-[#101B78] outline-none transition placeholder:text-slate-400 focus:border-[#168BE8] focus:bg-white focus:ring-2 focus:ring-[#168BE8]/10"
                    />
                  </div>
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-xs font-bold text-[#101B78]"
                  >
                    Your Message <span className="text-[#F58200]">*</span>
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell us about your project or enquiry..."
                    className="w-full resize-y rounded-lg border border-slate-200 bg-[#F5F7FA] px-4 py-3.5 text-sm leading-7 text-[#101B78] outline-none transition placeholder:text-slate-400 focus:border-[#168BE8] focus:bg-white focus:ring-2 focus:ring-[#168BE8]/10"
                  />
                </div>

                {/* SUBMIT */}
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-md bg-[#F58200] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-1 hover:bg-[#101B78] sm:w-auto"
                  >
                    Send Enquiry
                    <Send size={17} />
                  </button>

                  {submitted && (
                    <p
                      role="status"
                      className="mt-4 text-sm leading-6 text-[#101B78]"
                    >
                      Your email application should open with your enquiry
                      details. Please send the email to complete your enquiry.
                    </p>
                  )}
                </div>

                <p className="text-xs leading-6 text-slate-400">
                  Fields marked with * are required. Your email application will
                  be used to send this enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-[#F5F7FA] py-20">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="section-label">FIND US</span>

              <h2 className="mt-4 text-3xl font-extrabold text-[#101B78] sm:text-4xl">
                Based in
                <span className="text-[#F58200]"> Goodwood.</span>
              </h2>

              <div className="mt-5 h-1 w-16 rounded-full bg-[#F58200]" />

              <p className="mt-6 text-sm leading-8 text-slate-600">
                Modern Investments is based in Goodwood, Western Cape, South
                Africa. Contact our team to discuss your project and service
                requirements.
              </p>

              <div className="mt-7 flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#101B78]">
                  <MapPin size={23} className="text-[#F58200]" />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#101B78]">
                    Our Location
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Goodwood, Western Cape, South Africa
                  </p>
                </div>
              </div>
            </div>

            {/* MAP PANEL */}
            <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-lg sm:min-h-[360px]">
              <div className="absolute inset-0 opacity-40">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#168BE8_1px,transparent_1px),linear-gradient(to_bottom,#168BE8_1px,transparent_1px)] bg-[size:35px_35px]" />
              </div>

              <div className="relative z-10 max-w-sm text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-8 border-[#F58200]/15 bg-[#101B78] shadow-xl">
                  <MapPin size={34} className="text-[#F58200]" />
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-[#101B78]">
                  Modern Investments
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Goodwood, Western Cape
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Goodwood%2C+Cape+Town%2C+South+Africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#F58200] px-6 py-3 text-xs font-bold uppercase text-white transition hover:bg-[#101B78]"
                >
                  View on Google Maps
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CONTACT SECTION */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl bg-[#101B78] px-7 py-14 text-center text-white sm:px-14 sm:py-16">
            <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-white/[0.04]" />
            <div className="absolute -bottom-28 -left-10 h-64 w-64 rounded-full bg-[#F58200]/10" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F58200]">
                MODERN INVESTMENTS
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
                Your Next Project
                <span className="text-[#F58200]"> Starts Here.</span>
              </h2>

              <p className="mt-5 text-sm leading-8 text-blue-100">
                We look forward to hearing from you and discussing how we can
                help bring your ideas to life.
              </p>

              <a
                href="tel:+27659404421"
                className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#F58200] px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#168BE8]"
              >
                <Phone size={17} />
                Call Us Today
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
