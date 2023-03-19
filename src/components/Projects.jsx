import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollingText } from "./ScrollingText";
import { ProjectCard } from "./ProjectCard";
import { useLocation } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

export function Projects({ data }) {
  const location = useLocation();
  const projectSectionRef = React.useRef();

  if (!data) return null;

  React.useLayoutEffect(() => {
    if (location.hash && projectSectionRef.current) {
      const id = location.hash.replace("#", "");

      if (id === "projects") {
        projectSectionRef.current.scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'start' });
      }
    }
  }, [location, projectSectionRef.current]);

  return (
    <div id="projects" className="projects section" ref={projectSectionRef}>
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
