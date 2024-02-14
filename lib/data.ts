import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import wavesImg from "@/public/waves.png";
import igniteImg from "@/public/ignite.png";
import captureImg from "@/public/capture.png";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019"
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021"
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present"
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
    title: "Capture Portofolio",
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
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Prisma"
] as const;
