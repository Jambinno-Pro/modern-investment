const painting = {
  id: "painting",

  title: "Modern Investments",
  subtitle: "Painting Services",

  hero: {
    image:
      "http://moderninvest.co.za/wp-content/uploads/2026/05/PAINTING-IMG.png",
    label: "Modern Investments Painting Services",
    heading: "Modern Investments",
    highlightedHeading: "Painting Services",
    description:
      "Let us revamp your surfaces and walls. Painting a wall is a multi-stage process where preparation is often more time-consuming than the actual painting.",
  },

  quotation: {
    label: "GET A QUOTATION",
    link: "/contact",
  },

  introduction: {
    heading: "Professional Painting Services",
    description:
      "Let us revamp your surfaces and walls. What you should expect from our painting services is a carefully managed process, from workspace preparation and surface treatment to the final coat and clean-up.",
  },

  process: {
    label: "MULTI-STAGE PROCESS",
    heading: "Our Painting Process",

    stages: [
      {
        number: "01",
        title: "Planning and Workspace Preparation",

        instructions: [
          {
            heading: "Plan the Project:",
            description:
              "Determine the scope, set a timeline, and calculate the amount of paint needed (typically 350–400 square feet per gallon).",
          },
          {
            heading: "Clear the Room:",
            description:
              "Move furniture to the centre or out of the room. Remove wall hangings, curtains, and electrical cover plates.",
          },
          {
            heading: "Protect Surfaces:",
            description:
              "Cover floors and immovable furniture with drop cloths or plastic sheeting. Use painter's tape to protect baseboards and trim.",
          },
        ],
      },

      {
        number: "02",
        title: "Surface Preparation",

        instructions: [
          {
            heading: "Clean the Walls:",
            description:
              "Wipe down surfaces with a damp sponge and mild detergent (or sugar soap) to remove grease and dust, which prevents paint from sticking.",
          },
          {
            heading: "Repair Damage:",
            description:
              "Fill holes, cracks, or dents with spackling compound or filler. Scrape away any loose or peeling paint.",
          },
          {
            heading: "Sand:",
            description:
              "Once repairs are dry, sand the patched areas and the rest of the wall lightly to create a smooth surface for better adhesion.",
          },
        ],
      },

      {
        number: "03",
        title: "Priming",

        instructions: [
          {
            heading: "Apply Primer:",
            description:
              "Use a primer to help paint adhere and ensure a uniform finish. This is especially important for unpainted walls, porous surfaces, or when making a major colour change.",
          },
          {
            heading: "Cutting In:",
            description:
              'Use a brush to "cut in" the edges—painting the corners and borders where a roller cannot reach—before rolling the rest of the wall.',
          },
        ],
      },

      {
        number: "04",
        title: "Painting",

        instructions: [
          {
            heading: "Mix the Paint:",
            description:
              "Stir the paint thoroughly with a wooden stick to ensure uniform colour and consistency.",
          },
          {
            heading: "Apply the First Coat:",
            description:
              'Start from the top and work down. Use a roller in a "W" or "M" motion for even coverage, overlapping strokes to avoid streaks.',
          },
          {
            heading: "Wait to Dry:",
            description:
              "Allow the first coat to dry for at least two hours (depending on humidity) before starting the next.",
          },
          {
            heading: "Apply the Second Coat:",
            description:
              "Most projects require two coats for a rich, professional finish.",
          },
        ],
      },

      {
        number: "05",
        title: "Finishing & Clean-Up",

        instructions: [
          {
            heading: "Remove Tape:",
            description:
              "Peel off painter's tape while the paint is still slightly tacky to prevent peeling the new finish.",
          },
        ],
      },
    ],
  },
};

export default painting;
