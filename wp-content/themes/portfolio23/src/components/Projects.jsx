import React, { useLayoutEffect, useRef, forwardRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Image } from "../lib/helpers";
import { ScrollingText } from "./ScrollingText";
gsap.registerPlugin(ScrollTrigger);

export function Projects({ data }) {
  if (!data) return;

  const ProjectCard = ({ project, i }) => {
    const imageRef = useRef();
    const detailsRef = useRef();
    const cardRef = useRef();

    useLayoutEffect(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: -40 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "center bottom",
            end: "+=200",
            scrub: 0.5,
          },
          ease: "power1.inOut",
        }
      );

      gsap.fromTo(
        detailsRef.current,
        { opacity: 0, y: -40 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "center bottom",
            end: "+=200",
            scrub: 0.5,
          },
          ease: "power1.inOut",
        }
      );
    }, [imageRef.current, detailsRef.current, cardRef.current]);

    return (
      <li
        key={i}
        className="projects--list--item featured--project"
        ref={cardRef}
      >
        {project.image && (
          <div className="featured--project--image" ref={imageRef}>
            <Image id={project.image} />
            {project?.button?.url && (
              <a
                className="abs-link"
                data-animation
                data-animation-text="View Project"
                href={project?.button?.url}
              ></a>
            )}
          </div>
        )}
        {project?.details && (
          <div className="featured--project--details" ref={detailsRef}>
            <div
              className="featured--project--details--content"
              dangerouslySetInnerHTML={{ __html: project.details }}
            />
            {project?.button?.url && (
              <a
                className="btn btn--underline"
                href={project.button.url}
                target={
                  project?.button?.target ? project.button.target : "_self"
                }
              >
                {project.button.title}
              </a>
            )}
          </div>
        )}
      </li>
    );
  };

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
              return <ProjectCard project={project} i={i} />;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
