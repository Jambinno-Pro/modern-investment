const airConditioning = {
  id: "air-conditioning",

  title: "Air Conditioning",
  subtitle: "Installation & Servicing",

  hero: {
    image: "http://moderninvest.co.za/wp-content/uploads/2026/05/fst-slide.png",
    label: "",
    heading: "Air Conditioning",
    highlightedHeading: "Installation & Servicing.",
    description:
      "Welcome to Modern Investments, technicians and experts in air-conditioning installations and servicing. Choosing an air-conditioning system involves matching the type to your space and ensuring the size (measured in BTUs or tons) can handle the heat load.",
  },

  quotation: {
    label: "GET A QUOTATION",
    link: "/contact",
  },

  introduction: {
    heading: "",
    description: "",
  },

  airconTypes: {
    heading: "1. Common Air-Conditioning Types",

    description:
      "Systems are generally classified by how they are installed and the area they cover:",

    items: [
      {
        title: "Split Systems (Mid-wall):",
        description:
          "The most common residential choice. It has an indoor unit high on a wall and an outdoor compressor connected by refrigerant lines.",
      },
      {
        title: "Multi-Split Systems:",
        description:
          "Connects several indoor units (wall, ceiling, or floor) to a single outdoor unit, allowing separate temperature control for different rooms.",
      },
      {
        title: "Ducted Systems (Central AC):",
        description:
          "Ideal for whole-home or large office cooling. Cooled air is distributed through hidden ceiling or floor ducts via vents in each room.",
      },
      {
        title: "Window / Wall Units:",
        description:
          "All-in-one units installed in a window or a designated wall slot. They are cost-effective for single small rooms or workshops.",
      },
      {
        title: "Portable ACs:",
        description:
          "Mobile, plug-in units on wheels that exhaust hot air through a flexible hose out a window. Best for temporary cooling where permanent installation isn't possible.",
      },
      {
        title: "Ceiling Cassette Units:",
        description:
          "Installed flush with a suspended ceiling, distributing air evenly in four directions. Popular in shops and open-plan offices for a discreet look.",
      },
    ],
  },

  sizing: {
    heading: "2. Sizing Your AC (BTUs & Tonnage)",

    description:
      "AC capacity is measured in BTUs (British Thermal Units) or Tons (1 ton = 12,000 BTUs). A unit that is too small will run constantly without cooling properly, while an oversized unit will short-cycle, wasting energy and failing to remove humidity.",

    table: {
      heading: "Rough Guide for Room Sizing",

      columns: ["Room Size (Approx.)", "Recommended BTU", "Tonnage"],

      rows: [
        {
          room: "15 – 18 m²",
          btu: "9,000 BTU",
          ton: "0.75 Ton",
        },
        {
          room: "20 – 25 m²",
          btu: "12,000 BTU",
          ton: "1.0 Ton",
        },
        {
          room: "30 – 35 m²",
          btu: "18,000 BTU",
          ton: "1.5 Tons",
        },
        {
          room: "40 – 45 m²",
          btu: "24,000 BTU",
          ton: "2.0 Tons",
        },
        {
          room: "55 – 60 m²",
          btu: "30,000 BTU",
          ton: "2.5 Tons",
        },
      ],
    },

    references:
      "Sources: Curries Airconditioning, LG South Africa, Daikin, Hisense, Samsung, Alliance, Unitherm and TCL, just to mention a few.",
  },

  installationFactors: {
    heading: "3. Installation Factors",

    description:
      "Professional installation is crucial for system longevity and energy efficiency. Key considerations include:",

    items: [
      {
        title: "Heat Load Factors:",
        description:
          "Sizing isn't just about square footage. Factors like direct sunlight, high ceilings (over 3m), number of occupants, and large glass windows can require a higher BTU unit.",
      },
      {
        title: "Inverter vs. Non-Inverter:",
        description:
          "Inverter units use variable-speed motors to maintain a constant temperature efficiently. Non-inverters (fixed speed) cycle on and off completely, which uses more electricity.",
      },
      {
        title: "Commercial vs. Residential:",
        description:
          "Commercial units are often roof-mounted or use VRF (Variable Refrigerant Flow) systems to handle multiple zones and large volumes of air simultaneously.",
      },
    ],
  },

  closing: {
    image: "/images/aircondition-services.png",

    heading: "Aircon Experts",

    description: [
      "If you'd like to get more specific, we can help you:",

      "Calculate the exact BTU needed (if you share room dimensions and window exposure).",

      "Compare specific brands (like Samsung, LG, or Carrier).",

      "Modern Investments technicians are the best installers in the WESTERN CAPE. We are available to guide you to choose the right air-conditioning for your space.",
    ],

    quotationLabel: "CONTACT US",
    quotationLink: "/contact",
  },
};

export default airConditioning;
