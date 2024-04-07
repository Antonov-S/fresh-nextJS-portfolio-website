import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import wavesImg from "@/public/waves.png";
import igniteImg from "@/public/ignite.png";
import captureImg from "@/public/capture.png";
import eventoImg from "@/public/evento.png";
import lmsImg from "@/public/lms.png";

export const links = [
  {
    name: "Home",
    hash: "#home"
  },
  {
    name: "About",
    hash: "#about"
  },
  {
    name: "Projects",
    hash: "#projects"
  },
  {
    name: "Skills",
    hash: "#skills"
  },
  {
    name: "Experience",
    hash: "#experience"
  },
  {
    name: "Contact",
    hash: "#contact"
  }
] as const;

export const experiencesData = [
  {
    title: "Manual QA Intern",
    location: "Sofia, Bulgaria",
    description:
      "Two months internship program participating in a real-world project for online tool that grant access to trading information and regulations. Is it the first personal contact with IT that sparked my interest towards programming.",
    icon: React.createElement(CgWorkAlt),
    date: "2019"
  },
  {
    title: "SoftUni",
    location: "Sofia, Bulgaria",
    description: "Programming with C#",
    icon: React.createElement(LuGraduationCap),
    date: "2020"
  },
  {
    title: "SoftUni",
    location: "Sofia, Bulgaria",
    description: "JS Advanced – September 2021",
    icon: React.createElement(LuGraduationCap),
    date: "2021"
  },
  {
    title: "SoftUni",
    location: "Sofia, Bulgaria",
    description: "JS Applications - February 2022",
    icon: React.createElement(LuGraduationCap),
    date: "2022"
  },
  {
    title: "SoftUni",
    location: "Sofia, Bulgaria",
    description: "JS Back-End - May 2022",
    icon: React.createElement(LuGraduationCap),
    date: "2022"
  },
  {
    title: "Brad Schiff",
    location: "udemy.com",
    description: "React For The Rest Of Us",
    icon: React.createElement(LuGraduationCap),
    date: "2022"
  },
  {
    title: "SoftUni",
    location: "Sofia, Bulgaria",
    description: "ReactJS - June 2022",
    icon: React.createElement(LuGraduationCap),
    date: "2022"
  },
  {
    title: "ByteGrad by Wesley",
    location: "udemy.com",
    description: "Professional CSS 2023 (Flexbox & Grid & Animations & More)",
    icon: React.createElement(LuGraduationCap),
    date: "2023"
  },
  {
    title: "Brad Traversy",
    location: "udemy.com",
    description: "Modern HTML & CSS From The Beginning (Including Sass)",
    icon: React.createElement(LuGraduationCap),
    date: "2023"
  },
  {
    title: "DevelopedbyEd",
    location: "developedbyed.com",
    description: "The Creative React and Redux Course",
    icon: React.createElement(LuGraduationCap),
    date: "2023"
  },
  {
    title: "ByteGrad",
    location: "bytegrad.com",
    description: "Professional React & Next.js",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - at present"
  },
  {
    title: "SoftUni",
    location: "Sofia, Bulgaria",
    description: "HTML & CSS",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - at present"
  }
] as const;

export const projectsData = [
  {
    title: "Word Analytics",
    description:
      "Copy and paste your text into the online editor - it shows word count, character count and social media post limits. Inspired by wordcounter.net",
    tags: ["React", "Vite", "CSS", "HTML"],
    imageUrl: wordanalyticsImg,
    url: "https://main--glittering-capybara-b697a7.netlify.app"
  },
  {
    title: "Waves Music",
    description:
      "A simple music app (play/stop, next, previous track, library) with some interesting stylings. The app depends on chillhop.com (third party free music source).",
    tags: ["React", "Vite", "uuid", "Font Awesome", "CSS", "HTML"],
    imageUrl: wavesImg,
    url: "https://earnest-souffle-0e7c4a.netlify.app/"
  },
  {
    title: "Capture Portfolio",
    description:
      "Dummy portfolio app with dynamic content and some interesting styles.",
    tags: ["react-intersection-observer", "React", "styled-components"],
    imageUrl: captureImg,
    url: "https://meek-kitten-2638d2.netlify.app"
  },
  {
    title: "Ignite - Games library",
    description:
      "Games library app. It consume free third party API data and provides the user the ability to search from thousands of current and upcoming games.",
    tags: ["styled-components", "React", "Redux", "framer-motion"],
    imageUrl: igniteImg,
    url: "https://capable-chebakia-5d3b72.netlify.app"
  },
  {
    title: "CorpComment",
    description:
      "Public feedback tool, users can give public feedback to companies.",
    tags: ["React", "Vite", "Zustand", "Radix Icons", "CSS", "HTML"],
    imageUrl: corpcommentImg,
    url: "https://joyful-biscuit-9a382f.netlify.app"
  },
  ,
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. It has features like data caching(searches, bookmarks, etc...), persisting data in localStorage, filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "React-Query", "CSS", "HTML"],
    imageUrl: rmtdevImg,
    url: "https://velvety-sunflower-91c517.netlify.app"
  },
  {
    title: "Learning Management Platform",
    description:
      "This is a Learning Management System (Udemy Clone) build with Next 13 with the App Router, Prisma as an ORM, Stripe for payments, etc",
    tags: ["Tailwind CSS", "React.js", "Next.js", "Prisma", "MySQL"],
    imageUrl: lmsImg,
    url: "https://learning-management-app-f6kp.vercel.app"
  },
  {
    title: "Evento",
    description:
      "Evento is a dummy dashboard for events. It is open to everyone who needs to find and shere events.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    imageUrl: eventoImg,
    url: "https://evento-app-ten.vercel.app/"
  }
];

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "RESTful API",
  "Prisma"
] as const;
