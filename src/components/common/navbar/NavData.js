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
            route: "/virtual-reality",
            subTitle: "Virtual Reality ",
          },
          {
            route: "/augmented-reality",
            subTitle: "Augmented Reality",
          },
          {
            route: "/mixed-reality",
            subTitle: "Mixed Reality ",
          },
          {
            route: "/ai-powered-xr-solutions",
            subTitle: "AI-Powered XR Solutions",
          },
          {
            route: "/360-photography-and-Video-graphic",
            subTitle: "360 Photography & Video graphic ",
          },
          {
            route: "/3d-modeling-and-animation",
            subTitle: "3D Modeling & Animation ",
          },
          {
            route: "/interactive-installations",
            subTitle: "Interactive Installations ",
          },
          {
            route: "/training-and-courses",
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
            route: "/education-and-training",
            subTitle: "Education & Training",
          },
          {
            route: "health-care",
            subTitle: "Healthcare",
          },
          {
            route: "/entertainment",
            subTitle: "Entertainment",
          },
          {
            route: "/cultural-heritage",
            subTitle: "Cultural Heritage",
          },
          {
            route: "/marketing-and-retail",
            subTitle: "Marketing & Retail",
          },
          {
            route: "/real-estate",
            subTitle: "Real Estate",
          },
          {
            route: "/events-and-exhibitions",
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
            route: "/case-studies",
            subTitle: "Case Studies",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    dropdownLink: "About Us",
    videoPoster: "",
    videoSrc: contactUsVideo,
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
       
         
        ],
      },
    ],
  },

 
];
