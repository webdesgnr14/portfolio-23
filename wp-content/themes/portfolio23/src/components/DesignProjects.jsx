import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { Image } from "../lib/helpers";

export function DesignProjects({ data }) {
  if (!data) return;
  const containerRef = useRef();
  const headingRef = useRef();
  const contentRef = useRef();
  const projectCount = data?.projects?.length;

  const ProjectList = ({ projects }) => {
    const cardRef = useRef([]);

    return (
      <div className="design-projects--projects">
        <ul className="design-projects--list">
          {projects.map((project, i) => {
            useLayoutEffect(() => {
              if (projectCount === cardRef.current.length) {
                const ctx = gsap.context(() => {
                  gsap.utils.toArray(cardRef.current).forEach(function (e) {
                    gsap.fromTo(
                      e,
                      { opacity: 0, y: -40 },
                      {
                        opacity: 1,
                        y: 0,
                        scrollTrigger: {
                          trigger: e,
                          start: "center bottom",
                          end: "center center",
                          scrub: 0.5,
                        },
                        ease: "power1.inOut",
                      }
                    );
                  });
                }, cardRef.current);

                return () => ctx.revert();
              }
            }, []);

            return (
              <li
                className="design-projects--item"
                key={i}
                ref={(el) => (cardRef.current[i] = el)}
              >
                {project.image && (
                  <div className="design-projects--item--image">
                    <Image id={project.image} size="design-projects-image" />
                    {project?.title && <h3>{project.title}</h3>}
                    {project?.button?.url && (
                      <a
                        className="abs-link"
                        data-animation
                        data-animation-text="Explore"
                        href={project?.button?.url}
                      ></a>
                    )}
                  </div>
                )}
                {project?.button?.url && (
                  <a
                    className="btn btn--pill"
                    href={project.button.url}
                    target={
                      project?.button?.target ? project.button.target : "_self"
                    }
                  >
                    {project?.button?.title ? project.button.title : "Explore"}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  useLayoutEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "top top",
          scrub: 0.5,
        },
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "top top",
          scrub: 0.5,
        },
        delay: 0.1,
        ease: "power1.inOut",
      }
    );
  }, [containerRef.current, headingRef.current, contentRef.current]);

  return (
    <div className="design-projects section" ref={containerRef}>
      <div className="design-projects--container">
        {(data?.heading || data?.body) && (
          <div className="design-projects--content">
            {data?.heading && <h2 ref={headingRef}>{data?.heading}</h2>}
            {data?.body && (
              <div
                ref={contentRef}
                className="design-projects--body"
                dangerouslySetInnerHTML={{ __html: data?.body }}
              />
            )}
          </div>
        )}
        {data?.projects.length > 0 && <ProjectList projects={data.projects} />}
      </div>
    </div>
  );
}
