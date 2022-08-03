import technote from "./assets/technote.webp";
import sarisari from "./assets/sarisari.webp";
import findchanics from "./assets/findchanics.webp";
export const projectList = [
  {
    title: "Technote",
    link: "https://technote-dev.netlify.app/",
    description: "A simple online daily task manager for developer.",
    technology: ["ReactJS", "Node/ExpressJS", "Tailwindcss", "MongoDB"],
    image: technote,
  },
  {
    title: "Sarisari",
    link: "https://sarisari-tracker.netlify.app/",
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
  },
  {
    title: "Findchanics",
    link: "https://findchanics.netlify.app/",
    description:
      "A landing page for an Android application known as Findchanics.",
    technology: ["ReactJS", "Tailwindcss", "ViteJS"],
    image: findchanics,
  },
];
