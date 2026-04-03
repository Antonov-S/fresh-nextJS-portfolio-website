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
        As a developer transitioning from the financial sector, I bring a strong
        analytical mindset and a structured approach to building modern web
        applications. I have hands-on experience developing full-stack projects
        with <span className="font-medium">Next.js, React, and TypeScript</span>
        , focusing on maintainability, performance, and real-world use cases.
      </p>

      <p>
        Recently, I have built production-ready applications including{" "}
        <span className="font-medium">Echo</span> (AI-powered customer support
        platform using embeddings and RAG),{" "}
        <span className="font-medium">New Tube</span> (YouTube-style platform
        with tRPC-based data fetching), and{" "}
        <span className="font-medium">Sprout and Scribble</span> (full-featured
        e-commerce app with Stripe integration).
      </p>
    </motion.section>
  );
}
