import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollingText } from "./ScrollingText";
import { ProjectCard } from "./ProjectCard";
gsap.registerPlugin(ScrollTrigger);

export function Projects({ data }) {
  if (!data) return null;

  return (
    <div id="projects" className="projects section">
      <ScrollingText text="Projects" />
      <div className="projects--container">
        {data?.body && (
          <p
            className="projects--content"
            dangerouslySetInnerHTML={{ __html: data.body }}
          />
        )}
        {data?.featured_projects.length > 0 && (
          <ul className="projects--list">
            {data.featured_projects.map((project, i) => {
              return <ProjectCard project={project} i={i} key={i} />;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
