import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

import carpentry from "../data/carpentry";
import airConditioning from "../data/air-conditioning";
import painting from "../data/painting";
import ceilings from "../data/ceilings";

const services = {
  carpentry,
  "air-conditioning": airConditioning,
  painting,
  ceilings,
};

const excludedKeys = [
  "id",
  "title",
  "subtitle",
  "image",
  "hero",
  "quotation",
  "closing",
  "introduction",
];

function formatLabel(value) {
  return value
    .replace(/([A-Z])/g, " $1")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/* =========================================================
   GENERIC CONTENT RENDERER
   Used by Carpentry, Painting and Ceilings
========================================================= */

function ContentRenderer({ data, depth = 0 }) {
  if (data === null || data === undefined || data === "") {
    return null;
  }

  if (typeof data === "string" || typeof data === "number") {
    return <p className="text-[15px] leading-8 text-gray-600">{data}</p>;
  }

  if (Array.isArray(data)) {
    if (!data.length) return null;

    const hasObjects = data.some(isObject);

    if (!hasObjects) {
      return (
        <ul className="space-y-3">
          {data.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-[15px] leading-7 text-gray-600"
            >
              <CheckCircle2
                size={18}
                className="mt-1 shrink-0 text-[#F58200]"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <div className="grid gap-6 sm:grid-cols-2">
        {data.map((item, index) => (
          <div
            key={item.id || index}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <ContentRenderer data={item} depth={depth + 1} />
          </div>
        ))}
      </div>
    );
  }

  if (isObject(data)) {
    // Special layout for painting stages:
    // Show the number by itself, without NUMBER or STAGE labels.
    if (data.number && data.title && Array.isArray(data.instructions)) {
      return (
        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-extrabold leading-none text-[#F58200]">
              {data.number}
            </span>

            <h3 className="text-xl font-extrabold leading-snug text-[#101B78]">
              {data.title}
            </h3>
          </div>

          <ContentRenderer data={data.instructions} depth={depth + 1} />
        </div>
      );
    }

    const entries = Object.entries(data).filter(
      ([key, value]) =>
        value !== null &&
        value !== undefined &&
        value !== "" &&
        key !== "image",
    );

    const heading = data.heading || data.title || data.label || data.name;
    const description = data.description;

    const remainingEntries = entries.filter(
      ([key]) =>
        !["heading", "title", "label", "name", "description"].includes(key),
    );

    return (
      <div className={depth > 0 ? "space-y-5" : "space-y-8"}>
        {heading && (
          <h3 className="text-xl font-extrabold leading-snug text-[#101B78]">
            {heading}
          </h3>
        )}

        {description && (
          <p className="text-[15px] leading-8 text-gray-600">{description}</p>
        )}

        {remainingEntries.map(([key, value]) => {
          const nestedContent = Array.isArray(value) || isObject(value);

          return (
            <div key={key} className="space-y-4">
              {nestedContent ? (
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#F58200]">
                  {formatLabel(key)}
                </h4>
              ) : (
                <div>
                  <h4 className="mb-2 text-sm font-extrabold text-[#101B78]">
                    {formatLabel(key)}
                  </h4>
                  <ContentRenderer data={value} depth={depth + 1} />
                </div>
              )}

              {nestedContent && (
                <ContentRenderer data={value} depth={depth + 1} />
              )}
            </div>
          );
        })}
      </div>
    );
  }

  return null;
}

/* =========================================================
   AIR CONDITIONING - SIMPLE TEXT CONTENT
========================================================= */

function AirconText({ content }) {
  if (!content) return null;

  const paragraphs = Array.isArray(content) ? content : [content];

  return (
    <div className="space-y-3">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-[15px] leading-8 text-gray-600">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

/* =========================================================
   AIR CONDITIONING - NUMBERED TEXT ITEMS
========================================================= */

function AirconItems({ items }) {
  if (!items?.length) return null;

  return (
    <div className="divide-y divide-gray-200">
      {items.map((item, index) => (
        <div key={item.number || index} className="py-4 first:pt-0 last:pb-0">
          <p className="text-[15px] leading-8 text-gray-600">
            <span className="font-extrabold text-[#101B78]">{item.title}</span>{" "}
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   AIR CONDITIONING - SIZING TABLE
========================================================= */

function AirconSizingTable({ table }) {
  if (!table?.rows?.length) return null;

  return (
    <div className="mt-8">
      {table.heading && (
        <h3 className="mb-5 text-lg font-extrabold text-[#101B78]">
          {table.heading}
        </h3>
      )}

      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left">
          <thead>
            <tr className="border-b-2 border-[#101B78]">
              {table.columns?.map((column, index) => (
                <th
                  key={index}
                  className="px-4 py-4 text-sm font-extrabold text-[#101B78] first:pl-0"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {table.rows.map((row, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 transition hover:bg-[#F5F7FA]"
              >
                <td className="px-4 py-4 pl-0 text-sm font-semibold text-gray-700">
                  {row.room}
                </td>

                <td className="px-4 py-4 text-sm text-gray-600">{row.btu}</td>

                <td className="px-4 py-4 text-sm text-gray-600">{row.ton}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {table.note && (
        <p className="mt-4 text-sm leading-7 text-gray-500">{table.note}</p>
      )}
    </div>
  );
}

/* =========================================================
   AIR CONDITIONING - PAGE CONTENT
========================================================= */

function AirConditioningPage({ service }) {
  const hero = service.hero || {};
  const introduction = service.introduction || {};
  const closing = service.closing || {};

  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate flex min-h-[480px] items-center overflow-hidden bg-[#101B78] sm:min-h-[560px]">
        {hero.image && (
          <>
            <img
              src={hero.image}
              alt="Air conditioning installation"
              className="absolute inset-0 -z-20 h-full w-full object-cover"
            />

            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101B78]/95 via-[#101B78]/80 to-[#101B78]/30" />
          </>
        )}

        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
          <Link
            href="/services"
            className="mb-12 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-[#F58200]"
          >
            <ArrowLeft size={17} />
            Back to Our Services
          </Link>

          <div className="max-w-3xl">
            {hero.label && (
              <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.2em] text-[#F58200]">
                {hero.label}
              </p>
            )}

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              {hero.heading || service.title}

              {hero.highlightedHeading && (
                <>
                  {" "}
                  <span className="text-[#F58200]">
                    {hero.highlightedHeading}
                  </span>
                </>
              )}
            </h1>

            {hero.description && (
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                {hero.description}
              </p>
            )}

            <Link
              href={service.quotation?.link || "/contact"}
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#F58200] px-8 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#101B78]"
            >
              {service.quotation?.label || "GET A QUOTATION"}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUCTION - ONLY IF PROVIDED */}
      {(introduction.heading || introduction.description) && (
        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            {introduction.heading && (
              <h2 className="mb-5 text-2xl font-extrabold leading-tight text-[#101B78] sm:text-3xl">
                {introduction.heading}
              </h2>
            )}

            <AirconText content={introduction.description} />
          </div>
        </section>
      )}

      {/* 1. COMMON AIR-CONDITIONING TYPES */}
      {service.airconTypes && (
        <section className="py-12 sm:py-14">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2 className="mb-5 text-2xl font-extrabold text-[#101B78] sm:text-3xl">
              {service.airconTypes.heading}
            </h2>

            {service.airconTypes.description && (
              <p className="mb-6 text-[15px] leading-8 text-gray-600">
                {service.airconTypes.description}
              </p>
            )}

            <AirconItems items={service.airconTypes.items} />
          </div>
        </section>
      )}

      {/* 2. SIZING YOUR AC */}
      {service.sizing && (
        <section className="bg-[#F5F7FA] py-12 sm:py-14">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2 className="mb-5 text-2xl font-extrabold text-[#101B78] sm:text-3xl">
              {service.sizing.heading}
              {service.sizing.highlightedHeading && (
                <span className="ml-2 text-[#F58200]">
                  {service.sizing.highlightedHeading}
                </span>
              )}
            </h2>

            <AirconText content={service.sizing.description} />

            <AirconSizingTable table={service.sizing.table} />

            {service.sizing.references && (
              <p className="mt-6 text-sm leading-7 text-gray-500">
                {service.sizing.references}
              </p>
            )}
          </div>
        </section>
      )}

      {/* 3. INSTALLATION FACTORS */}
      {service.installationFactors && (
        <section className="py-12 sm:py-14">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2 className="mb-5 text-2xl font-extrabold text-[#101B78] sm:text-3xl">
              {service.installationFactors.heading}
            </h2>

            {service.installationFactors.description && (
              <p className="mb-6 text-[15px] leading-8 text-gray-600">
                {service.installationFactors.description}
              </p>
            )}

            <AirconItems items={service.installationFactors.items} />
          </div>
        </section>
      )}

      {/* AIRCON EXPERTS */}
      {(closing.heading || closing.description || closing.image) && (
        <section className="py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
            {closing.image && (
              <div className="relative min-h-[320px] overflow-hidden rounded-2xl bg-[#F5F7FA] sm:min-h-[440px]">
                <img
                  src={closing.image}
                  alt="Modern Investments air conditioning experts"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            )}

            <div>
              {closing.heading && (
                <h2 className="mb-6 text-3xl font-extrabold leading-tight text-[#101B78] sm:text-4xl">
                  {closing.heading}
                  {closing.highlightedHeading && (
                    <span className="text-[#F58200]">
                      {" "}
                      {closing.highlightedHeading}
                    </span>
                  )}
                </h2>
              )}

              <AirconText content={closing.description} />

              <Link
                href={closing.quotationLink || "/contact"}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#F58200] px-8 py-4 text-sm font-extrabold text-white transition hover:bg-[#101B78]"
              >
                {closing.quotationLabel || "CONTACT US"}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* EXPLORE OTHER SERVICES */}
      <section className="bg-[#101B78] py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 sm:px-8">
          <p className="text-lg font-bold text-white">
            Explore more services from Modern Investments.
          </p>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3 text-sm font-bold text-white transition hover:border-[#F58200] hover:text-[#F58200]"
          >
            OUR SERVICES
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   GENERIC SERVICE SECTION
========================================================= */

function ServiceSection({ section }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {section.label && (
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-[#F58200]">
            {section.label}
          </p>
        )}

        {section.heading && (
          <h2 className="mb-5 text-3xl font-extrabold leading-tight text-[#101B78] sm:text-4xl">
            {section.heading}
          </h2>
        )}

        {section.description && (
          <p className="mb-9 max-w-3xl text-[15px] leading-8 text-gray-600">
            {section.description}
          </p>
        )}

        <ContentRenderer data={section.content} />
      </div>
    </section>
  );
}

function ServiceNotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-white px-5">
      <div className="text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-[#101B78]">
          Service Not Found
        </h1>

        <p className="mb-7 text-gray-600">
          The service you are looking for could not be found.
        </p>

        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-full bg-[#F58200] px-7 py-3 font-bold text-white transition hover:bg-[#101B78]"
        >
          <ArrowLeft size={18} />
          Back to Services
        </Link>
      </div>
    </main>
  );
}

function ServicePageFallback() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-white">
      <p className="text-sm font-semibold text-[#101B78]">Loading service...</p>
    </main>
  );
}

/* =========================================================
   ROUTE CONTENT
========================================================= */

async function ServicePageContent({ params }) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    return <ServiceNotFound />;
  }

  // Air Conditioning has its own clean, text-focused layout.
  if (slug === "air-conditioning") {
    return <AirConditioningPage service={service} />;
  }

  // All other services retain the existing generic layout.
  const hero = service.hero || {};
  const introduction = service.introduction || {};
  const closing = service.closing || {};

  const heroImage = hero.image || service.image;

  const contentSections = Object.entries(service).filter(
    ([key, value]) =>
      !excludedKeys.includes(key) &&
      value !== null &&
      value !== undefined &&
      value !== "",
  );

  return (
    <main className="overflow-hidden bg-white">
      {/* HERO SECTION */}
      <section className="relative isolate flex min-h-[480px] items-center overflow-hidden bg-[#101B78] sm:min-h-[560px]">
        {heroImage ? (
          <>
            <img
              src={heroImage}
              alt={service.title || service.subtitle || "Service"}
              className="absolute inset-0 -z-20 h-full w-full object-cover"
            />

            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101B78]/95 via-[#101B78]/80 to-[#101B78]/30" />
          </>
        ) : (
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#101B78] to-[#172c9a]" />
        )}

        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
          <Link
            href="/services"
            className="mb-12 inline-flex items-center gap-2 text-sm font-bold !text-white transition duration-300 hover:!text-[#F58200]"
          >
            <ArrowLeft size={17} />
            Back to Our Services
          </Link>

          <div className="max-w-3xl">
            {(hero.label || service.subtitle) && (
              <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.2em] text-[#F58200]">
                {hero.label || service.subtitle}
              </p>
            )}

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              {hero.heading || service.title}

              {hero.highlightedHeading && (
                <>
                  {" "}
                  <span className="text-[#F58200]">
                    {hero.highlightedHeading}
                  </span>
                </>
              )}

              {!hero.heading && service.subtitle && (
                <>
                  {" "}
                  <span className="text-[#F58200]">{service.subtitle}</span>
                </>
              )}
            </h1>

            {hero.description && (
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                {hero.description}
              </p>
            )}

            <Link
              href={service.quotation?.link || "/contact"}
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#F58200] px-8 py-4 text-sm font-extrabold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#101B78]"
            >
              {service.quotation?.label || "GET A QUOTATION"}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      {(introduction.heading || introduction.description) && (
        <section className="py-16 sm:py-20">
          <div
            className={`mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 ${
              introduction.image ? "lg:grid-cols-2" : ""
            }`}
          >
            {introduction.image && (
              <div className="relative min-h-[350px] flex-1 overflow-hidden rounded-2xl bg-[#F5F7FA] shadow-xl sm:min-h-[460px]">
                <img
                  src={introduction.image}
                  alt={introduction.heading || "Service introduction"}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            )}

            <div>
              {introduction.label && (
                <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.2em] text-[#F58200]">
                  {introduction.label}
                </p>
              )}

              {introduction.heading && (
                <h2 className="mb-6 text-3xl font-extrabold leading-tight text-[#101B78] sm:text-4xl">
                  {introduction.heading}
                </h2>
              )}

              {introduction.description && (
                <ContentRenderer data={introduction.description} />
              )}

              {introduction.features && (
                <div className="mt-7">
                  <ContentRenderer data={introduction.features} />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* DYNAMIC SERVICE CONTENT */}
      {contentSections.map(([key, value]) => (
        <ServiceSection
          key={key}
          section={{
            label: value?.label || formatLabel(key),
            heading: value?.heading,
            description: value?.description,
            content: value,
          }}
        />
      ))}

      {/* CLOSING CTA */}
      <section className="relative overflow-hidden bg-[#101B78] py-20">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[40px] border-white/5" />

        <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full border-[40px] border-white/5" />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.2em] text-[#F58200]">
            {closing.label || "MODERN INVESTMENTS"}
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            {closing.heading || "Ready to Get Started?"}
          </h2>

          {closing.description && (
            <ContentRenderer data={closing.description} />
          )}

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href={
                closing.quotationLink || service.quotation?.link || "/contact"
              }
              className="inline-flex items-center gap-3 rounded-full bg-[#F58200] px-8 py-4 text-sm font-extrabold text-white transition hover:bg-white hover:text-[#101B78]"
            >
              {closing.quotationLabel || "GET A QUOTATION"}
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-3 rounded-full border border-white/40 px-8 py-4 text-sm font-extrabold text-white transition hover:border-[#F58200] hover:text-[#F58200]"
            >
              EXPLORE OTHER SERVICES
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// Next.js 16: keep params access inside Suspense.
export default function ServicePage({ params }) {
  return (
    <Suspense fallback={<ServicePageFallback />}>
      <ServicePageContent params={params} />
    </Suspense>
  );
}
