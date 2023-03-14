import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ProjectList } from "./DesignProjectList";
gsap.registerPlugin(ScrollTrigger);

export function DesignProjects({ data }) {
  if (!data) return null;
  const containerRef = React.useRef();
  const headingRef = React.useRef();
  const contentRef = React.useRef();

  React.useLayoutEffect(() => {
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
