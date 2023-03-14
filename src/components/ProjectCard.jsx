import * as React from "react";
import gsap from "gsap";
import { CursorContext } from "../context/CursorContextProvider";
import { Image } from "../components/Image";
import { HoverElement } from "../components/HoverElement";

export const ProjectCard = ({ project, i }) => {
  const imageRef = React.useRef();
  const detailsRef = React.useRef();
  const cardRef = React.useRef();
  const [, setCursor] = React.useContext(CursorContext);

  const toggleCursor = React.useCallback((isHovering) => {
    setCursor(() => {
      return {
        active: isHovering,
        text: isHovering ? "View Project" : "",
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

  React.useLayoutEffect(() => {
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
            <HoverElement
              className="abs-link"
              href={project?.button?.url}
              target={project?.button?.target || "_self"}
              onMouseEnter={(isHovering) => toggleCursor(isHovering)}
              onMouseLeave={(isHovering) => toggleCursor(isHovering)}
              aria-label={project.button.title}
            ></HoverElement>
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
            <HoverElement
              className="btn btn--underline"
              href={project.button.url}
              target={project?.button?.target || "_self"}
              onMouseEnter={(isHovering) => toggleCursorDefault(isHovering)}
              onMouseLeave={(isHovering) => toggleCursorDefault(isHovering)}
              aria-label={project.button.title}
            >
              View Project
            </HoverElement>
          )}
        </div>
      )}
    </li>
  );
};
