import * as React from "react";
import gsap from "gsap";
import { scrollToTop } from "../lib/helpers";
import { Image } from "../components/Image";
import { HoverElement } from "./HoverElement";
import { CursorContext } from "../context/CursorContextProvider";
import { LoadingContext } from "../context/LoadingContextProvider";

export const ProjectList = ({ projects }) => {
  if (projects.length === 0) return null;

  const cardRef = React.useRef([]);
  const projectCount = projects.length;
  const [, setCursor] = React.useContext(CursorContext);
  const [, setLoading] = React.useContext(LoadingContext);

  const loadingAnimation = () => {
    setLoading(() => { 
      return { isLoading: true };
    });

    setTimeout(() => { 
      setLoading(() => {
        return { isLoading: false };
      });
    }, 2600);
  }

  const toggleCursor = React.useCallback((isHovering) => {
    setCursor(() => {
      return {
        active: isHovering,
        text: isHovering ? "Explore" : "",
      };
    });
  });

  const toggleCursorDefault = React.useCallback((isHovering) => {
    setCursor(() => {
      return {
        active: isHovering,
      };
    });
  });

  return (
    <div className="design-projects--projects">
      <ul className="design-projects--list">
        {projects.map((project, i) => {
          React.useLayoutEffect(() => {
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
                    <HoverElement
                      className="abs-link"
                      href={project?.button?.url}
                      onMouseEnter={(isHovering) => toggleCursor(isHovering)}
                      onMouseLeave={(isHovering) => toggleCursor(isHovering)}
                      onClick={() => {
                        loadingAnimation();
                        scrollToTop();
                      }}
                      aria-label={project.title}
                    ></HoverElement>
                  )}
                </div>
              )}
              {project?.button?.url && (
                <HoverElement
                  className="btn btn--pill"
                  href={project.button.url}
                  target={
                    project?.button?.target ? project.button.target : "_self"
                  }
                  onMouseEnter={(isHovering) => toggleCursorDefault(isHovering)}
                  onMouseLeave={(isHovering) => toggleCursorDefault(isHovering)}
                  onClick={() => {
                    loadingAnimation();
                    scrollToTop();
                  }}
                  aria-label={project.title}
                >
                  {project?.button?.title ? project.button.title : "Explore"}
                </HoverElement>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
