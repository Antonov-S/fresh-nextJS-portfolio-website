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
import petSoft from "@/public/petSoft.png";
import pokebase from "@/public/pokebase.jpg";
import sprout from "@/public/sprout&scribble.png";
import strings from "@/public/strings.png";
import newtube from "@/public/newTube.png";

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
    date: "2024"
  },
  {
    title: "DevelopedbyEd",
    location: "developedbyed.com",
    description: "Ultimate Next.js Course 2024 Edition",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - at present"
  },
  {
    title: "SoftUni",
    location: "Sofia, Bulgaria",
    description: "HTML & CSS",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - at present"
  },
  {
    title: "zing7",
    location: "Sofia, Bulgaria",
    description: "Full Stack Web Development - summer academy",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - at present"
  }
] as const;

export const projectsData = [
  {
    title: "New Tube",
    description:
      "YouTube clone with custom video player, AI-generated metadata, comment threads, and playlist support.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Drizzle ORM", "TRPC"],
    imageUrl: newtube,
    url: "https://new-tube-mu.vercel.app",
    githubUrl: "https://github.com/Antonov-S/youtube-clone-next15"
  },
  {
    title: "LinkedIn Prototype",
    description:
      "A prototype focusing on LinkedIn’s essential features: feed, profiles, and connections — built with server components and tRPC.",
    tags: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Drizzle ORM",
      "Mantine UI"
    ],
    imageUrl: strings,
    url: "https://linked-in-prototype.vercel.app",
    githubUrl: "https://github.com/Antonov-S/network-app-next14"
  },
  {
    title: "Sprout and Scribble",
    description:
      "Full-stack e-commerce platform built with Stripe, Drizzle ORM, and modern Next.js features.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Drizzle ORM", "Zustand"],
    imageUrl: sprout,
    url: "https://www.sproutnext.store",
    githubUrl: "https://github.com/Antonov-S/e-commerce-next14-app"
  },
  {
    title: "Pokebase",
    description:
      "Pokémon browser app using PokéAPI. Built during Zing7’s summer training program.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS"],
    imageUrl: pokebase,
    url: "https://pokebase-task-3-zing7.vercel.app/",
    githubUrl: "https://github.com/Antonov-S/pokebase-task-3-zing7"
  },
  {
    title: "PetSoft",
    description:
      "Full-featured app with CRUD operations, payments, authentication and optimistic UI using Next.js 13.",
    tags: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "NextAuth"
    ],
    imageUrl: petSoft,
    url: "https://petsoft-app-eta.vercel.app/",
    githubUrl: "https://github.com/Antonov-S/petsoft-app"
  },
  {
    title: "Evento",
    description:
      "Event discovery dashboard with create/share capabilities. Built with Next.js, Prisma, and Tailwind.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    imageUrl: eventoImg,
    url: "https://evento-app-ten.vercel.app/",
    githubUrl: "https://github.com/Antonov-S/evento-app"
  },
  {
    title: "Learning Management Platform",
    description:
      "Udemy-style LMS built with Next.js 13, Stripe payments, course upload, and user dashboard.",
    tags: ["Tailwind CSS", "React.js", "Next.js", "Prisma", "MySQL"],
    imageUrl: lmsImg,
    url: "https://learning-management-app-f6kp.vercel.app",
    githubUrl: "https://github.com/Antonov-S/learning-management-app"
  },
  {
    title: "rmtDev",
    description:
      "Remote developer job board with filtering, bookmarks, pagination, and persistent local storage.",
    tags: ["React", "TypeScript", "Next.js", "React-Query", "CSS", "HTML"],
    imageUrl: rmtdevImg,
    url: "https://velvety-sunflower-91c517.netlify.app",
    githubUrl: "https://github.com/Antonov-S/rmtDev-app"
  },
  {
    title: "CorpComment",
    description:
      "Public feedback app where users can leave company reviews and ratings.",
    tags: ["React", "Vite", "Zustand", "Radix Icons", "CSS", "HTML"],
    imageUrl: corpcommentImg,
    url: "https://joyful-biscuit-9a382f.netlify.app",
    githubUrl: "https://github.com/Antonov-S/corp-comment-app"
  },
  {
    title: "Ignite - Games Library",
    description:
      "Search and explore upcoming games using free API data. Built with Redux and framer-motion.",
    tags: ["styled-components", "React", "Redux", "framer-motion"],
    imageUrl: igniteImg,
    url: "https://capable-chebakia-5d3b72.netlify.app",
    githubUrl: "https://github.com/Antonov-S/ignite-games-library-app"
  },
  {
    title: "Capture Portfolio",
    description:
      "Interactive portfolio demo with dynamic animations and intersection observers.",
    tags: ["react-intersection-observer", "React", "styled-components"],
    imageUrl: captureImg,
    url: "https://meek-kitten-2638d2.netlify.app",
    githubUrl: "https://github.com/Antonov-S/capture-portofolio-app"
  },
  {
    title: "Waves Music",
    description:
      "Minimal music player using audio from Chillhop. Features include play, pause, skip, and library.",
    tags: ["React", "Vite", "uuid", "Font Awesome", "CSS", "HTML"],
    imageUrl: wavesImg,
    url: "https://earnest-souffle-0e7c4a.netlify.app/",
    githubUrl: "https://github.com/Antonov-S/music-app-react"
  },
  {
    title: "Word Analytics",
    description:
      "Text analysis tool that shows word and character count. Inspired by wordcounter.net.",
    tags: ["React", "Vite", "CSS", "HTML"],
    imageUrl: wordanalyticsImg,
    url: "https://main--glittering-capybara-b697a7.netlify.app",
    githubUrl: "https://github.com/Antonov-S/word-analytics-app"
  }
];

export const skillsData = [
  "JavaScript (ES6+)",
  "React.js",
  "Next.js",
  "Typescript",
  "Prisma",
  "Tailwind CSS",
  "shadcn/ui",
  "Zustand",
  "Redux",
  "styled components",
  "Framer Motion",
  "SCSS",
  "Axios",
  "Git"
] as const;
