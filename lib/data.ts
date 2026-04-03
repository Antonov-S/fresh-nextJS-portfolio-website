import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

import echo from "@/public/echo.png";
import lmsImg from "@/public/lms.png";
import wavesImg from "@/public/waves.png";
import petSoft from "@/public/petSoft.png";
import strings from "@/public/strings.png";
import newtube from "@/public/newTube.png";
import eventoImg from "@/public/evento.png";
import igniteImg from "@/public/ignite.png";
import rmtdevImg from "@/public/rmtdev.png";
import pokebase from "@/public/pokebase.jpg";
import captureImg from "@/public/capture.png";
import sprout from "@/public/sprout&scribble.png";
import corpcommentImg from "@/public/corpcomment.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "Tech",
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
    title: "Web Development Trainee - Zing7 Ltd",
    location: "Sofia, Bulgaria",
    description:
      "Hands-on training program covering Tailwind CSS, Next.js, UI/UX, APIs, team projects, and real-world application development.",
    icon: React.createElement(LuGraduationCap),
    date: "04/2024 - 09/2024"
  },
  {
    title: "SoftUni JavaScript Track (2021–2023)",
    location: "Sofia, Bulgaria",
    description:
      "Comprehensive JavaScript, front-end and back-end courses covering JS, React, Next.js, and modern web development practices.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2023"
  },
  {
    title: "Intern Manual QA - ePing SPS&TBT Platform",
    location: "Sofia, Bulgaria",
    description:
      "Performed functional and black-box testing, identified UX issues, and created test cases based on Software Requirements Specification.",
    icon: React.createElement(CgWorkAlt),
    date: "11/2019 - 01/2020"
  },
  {
    title: "Expert with Control Functions / Reviser - Gresia 2 Ltd",
    location: "Sofia, Bulgaria",
    description:
      "Conducted periodic inventory revisions, managed a small audit team, analyzed results, and prepared detailed operational reports.",
    icon: React.createElement(CgWorkAlt),
    date: "12/2015 - 12/2018"
  },
  {
    title: "Chief Expert - Sofia Branch of the National Health Insurance Fund",
    location: "Sofia, Bulgaria",
    description:
      "Processed medical, statistical, and financial data, prepared interim and annual reports, and ensured compliance with regulatory standards.",
    icon: React.createElement(CgWorkAlt),
    date: "06/2009 - 10/2011"
  }
] as const;

export const projectsData = [
  {
    title: "Echo",
    description:
      "AI-powered customer support platform with real-time chat, voice support, and smart knowledge base using embeddings and RAG.",
    tags: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Convex",
      "Turborepo",
      "Clerk"
    ],
    imageUrl: echo,
    url: "https://echo-ai-support-web-omega.vercel.app",
    githubUrl: "https://github.com/Antonov-S/echo-ai-support"
  },
  {
    title: "New Tube",
    description:
      "YouTube clone with custom video player, AI-generated metadata, comment threads, and playlist support.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Drizzle", "tRPC", "Mux"],
    imageUrl: newtube,
    url: "https://new-tube-mu.vercel.app",
    githubUrl: "https://github.com/Antonov-S/youtube-clone-next15"
  },
  {
    title: "LinkedIn Prototype",
    description:
      "A prototype focusing on LinkedIn's essential features: feed, profiles, and connections — built with server components and tRPC.",
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
      "Pokémon browser app using PokéAPI. Built during Zing7's summer training program.",
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
    tags: ["React", "TypeScript", "Next.js", "React-Query"],
    imageUrl: rmtdevImg,
    url: "https://velvety-sunflower-91c517.netlify.app",
    githubUrl: "https://github.com/Antonov-S/rmtDev-app"
  },
  {
    title: "CorpComment",
    description:
      "Public feedback app where users can leave company reviews and ratings.",
    tags: ["React", "Vite", "Zustand"],
    imageUrl: corpcommentImg,
    url: "https://joyful-biscuit-9a382f.netlify.app",
    githubUrl: "https://github.com/Antonov-S/corp-comment-app"
  },
  {
    title: "Ignite - Games Library",
    description:
      "Search and explore upcoming games using free API data. Built with Redux and framer-motion.",
    tags: ["React", "styled-components", "Redux", "framer-motion"],
    imageUrl: igniteImg,
    url: "https://capable-chebakia-5d3b72.netlify.app",
    githubUrl: "https://github.com/Antonov-S/ignite-games-library-app"
  },
  {
    title: "Capture Portfolio",
    description:
      "Interactive portfolio demo with dynamic animations and intersection observers.",
    tags: ["React", "styled-components"],
    imageUrl: captureImg,
    url: "https://meek-kitten-2638d2.netlify.app",
    githubUrl: "https://github.com/Antonov-S/capture-portofolio-app"
  },
  {
    title: "Waves Music",
    description:
      "Minimal music player using audio from Chillhop. Features include play, pause, skip, and library.",
    tags: ["React", "Vite"],
    imageUrl: wavesImg,
    url: "https://earnest-souffle-0e7c4a.netlify.app/",
    githubUrl: "https://github.com/Antonov-S/music-app-react"
  },
  {
    title: "Word Analytics",
    description:
      "Text analysis tool that shows word and character count. Inspired by wordcounter.net.",
    tags: ["React", "Vite"],
    imageUrl: wordanalyticsImg,
    url: "https://main--glittering-capybara-b697a7.netlify.app",
    githubUrl: "https://github.com/Antonov-S/word-analytics-app"
  }
];

export const skillsData = [
  "JavaScript (ES6+)",
  "Typescript",
  "React.js",
  "Next.js",
  "Prisma",
  "Drizzle",
  "Convex",
  "Tailwind CSS",
  "shadcn/ui",
  "Zustand",
  "Redux",
  "Jotai",
  "PostgreSQL",
  "Mongo DB",
  "SQLite",
  "Git"
] as const;
