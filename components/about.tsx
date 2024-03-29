"use client";

import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Finance</span>, I decided to pursue my
        passion for programming. I enrolled in a Software University and learned{" "}
        <span className="font-medium">web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          JS, React, Next.js and little bit a Node.js
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">internship or full-time position</span> as
        a junior developer.
      </p>

      {/* <p>
        <span className="italic">When I'm not coding</span>, I enjoy reading,
        watching movies, and playing with my cats. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning <span className="font-medium">CSS and NextJS 14</span>.
      </p> */}
    </motion.section>
  );
}
