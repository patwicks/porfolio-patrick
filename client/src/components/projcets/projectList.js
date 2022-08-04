import technote from "./assets/technote.webp";
import sarisari from "./assets/sarisari.webp";
import findchanics from "./assets/findchanics.webp";
import lavishop from "./assets/lavishop.webp";
export const projectList = [
  {
    title: "Technote",
    link: "https://technote-dev.netlify.app/",
    source: "https://github.com/patwicks/TechNote",
    description: "A simple online daily task manager for developer.",
    technology: ["ReactJS", "Node/ExpressJS", "Tailwindcss", "MongoDB"],
    image: technote,
    type: "Full-stack",
  },
  {
    title: "Sarisari",
    link: "https://sarisari-tracker.netlify.app/",
    source: "https://github.com/patwicks/sarisari",
    description:
      "Fullstack Web-based daily sales tracker for small sari sari stores.",
    technology: [
      "ReactJS",
      "Node/ExpressJS",
      "Tailwindcss",
      "MongoDB",
      "Zustand",
    ],
    image: sarisari,
    type: "Full-stack",
  },
  {
    title: "Findchanics",
    link: "https://findchanics.netlify.app/",
    source: "https://github.com/patwicks/findchanics-page",
    description:
      "A landing page for an Android application known as Findchanics.",
    technology: ["ReactJS", "Tailwindcss", "ViteJS"],
    image: findchanics,
    type: "Landing page",
  },
  {
    title: "Lav.ishop",
    link: null,
    source: "https://github.com/patwicks/lav.ishop",
    description: "An e-commerce web application built in React JS.",
    technology: ["ReactJS", "MongoDB", "Tailwindcss", "ViteJS", "Zustand"],
    image: lavishop,
    type: "Full-stack",
  },
];
