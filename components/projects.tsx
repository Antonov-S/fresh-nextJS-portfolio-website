"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => {
          if (project === undefined) return;
          const { title, description, tags, imageUrl, url } = project;

          return (
            <React.Fragment key={index}>
              <Project
                title={title}
                description={description}
                tags={tags}
                imageUrl={imageUrl}
                url={url}
              />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
