import contactUsVideo from "../../../assets/videos/contact us.mp4";
import servicesVideo from "../../../assets/videos/services.mp4";
export const navData = [
  {
    id: 2,
    dropdownLink: "Services",
    videoPoster: "",
    videoSrc: servicesVideo,
    videoDesc: "‘Stepping into the next dimension’ ",
    features: [
      {
        subTitles: [
          {
            route: "/dummy-page",
            subTitle: "Virtual Reality ",
          },
          {
            route: "Healthcare",
            subTitle: "Augmented Reality",
          },
          {
            route: "/dummy-page",
            subTitle: "Mixed Reality ",
          },
          {
            route: "/dummy-page",
            subTitle: "360 Photography & Videography ",
          },
          {
            route: "/dummy-page",
            subTitle: "3D Modeling & Animation ",
          },
          {
            route: "/dummy-page",
            subTitle: "Interactive Installations ",
          },
          {
            route: "/dummy-page",
            subTitle: "Training & Courses ",
          },
        ],
      },
      // {
      //   mainTitle: "AI Agents",
      //   subTitles: [],
      // },
    ],
  },

  {
    id: 3,
    dropdownLink: "Sectors & Industries",
    videoPoster: " ",
    videoSrc: servicesVideo,
    videoDesc: "‘Turning vision into impact, across every domain’",
    features: [
      {
        subTitles: [
          {
            route: "/dummy-page",
            subTitle: "Education & Training",
          },
          {
            route: "Healthcare",
            subTitle: "Healthcare",
          },
          {
            route: "/dummy-page",
            subTitle: "Entertainment",
          },
          {
            route: "/dummy-page",
            subTitle: "Cultural Heritage",
          },
          {
            route: "/dummy-page",
            subTitle: "Marketing & Retail",
          },
          {
            route: "/dummy-page",
            subTitle: "Real Estate",
          },
          {
            route: "/dummy-page",
            subTitle: "Events & Exhibitions",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    dropdownLink: "Portfolio",
    videoPoster: " ",
    videoSrc: servicesVideo,
    videoDesc: "‘Create. Innovate. Immerse.’",
    features: [
      {
        subTitles: [
          {
            route: "/featured-projects",
            subTitle: "Featured Projects",
          },
          {
            route: "/dummy-page",
            subTitle: "Case Studies",
          },
          {
            route: "/dummy-page",
            subTitle: "",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    dropdownLink: "About Us",
    videoPoster: "",
    videoSrc: servicesVideo,
    videoDesc: "‘Where imagination meets innovation’",

    features: [
      {
        subTitles: [
          { route: "our-vision", subTitle: "Our Vision" },
          {
            route: "company-values",
            subTitle: "Company Values",
          },
          {
            route: "why-choose-5dvr",
            subTitle: "Why Choose 5dVR? ",
          },
          {
            route: "meet-the-team",
            subTitle: "Meet the Team",
          },
          {
            route: "client-testimonials",
            subTitle: "Client Testimonials",
          },
        ],
      },
    ],
  },

  {
    id: 5,
    dropdownLink: "Contact",
    videoPoster: "",
    videoSrc: contactUsVideo,
    videoDesc: "  ",
    features: [
      {
        subTitles: [
          {
            route: "/dummy-page",
            subTitle: "Contact Form",
          },
          {
            route: "/dummy-page",
            subTitle: "Office Location",
          },
          {
            route: "/dummy-page",
            subTitle: "Career Opportunities",
          },
        ],
      },
    ],
  },
];
``;
