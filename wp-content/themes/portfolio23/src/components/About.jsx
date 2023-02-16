import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Tabs } from "./Tabs";
gsap.registerPlugin(ScrollTrigger);

export function About({ data }) {
  const containerRef = React.useRef();
  const headingRef = React.useRef();
  const contentRef = React.useRef();

  if (!data) return null;

  React.useLayoutEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -40 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "center center",
          scrub: 0.5,
        },
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: -40 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "center center",
          scrub: 0.5,
        },
        delay: 0.1,
        ease: "power1.inOut",
      }
    );
  }, [containerRef.current, headingRef.current, contentRef.current]);

  return (
    <div id="about" className="about section" ref={containerRef}>
      <div className="about--container">
        <div className="about--left">
          {(data.heading || data.body) && (
            <div className="about--content">
              {data?.heading && (
                <h2 className="about--heading heading" ref={headingRef}>
                  {data.heading}
                </h2>
              )}
              {data?.body && (
                <div
                  className="about--body"
                  ref={contentRef}
                  dangerouslySetInnerHTML={{ __html: data.body }}
                ></div>
              )}
            </div>
          )}
        </div>
        {data?.tabs?.length > 0 && <Tabs data={data.tabs} />}
      </div>
    </div>
  );
}
