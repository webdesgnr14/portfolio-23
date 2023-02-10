import React, { useState, useRef, useLayoutEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CursorContext } from "../context/CursorContextProvider";
gsap.registerPlugin(ScrollTrigger);

export function About({ data }) {
  const [currTab, setCurrTab] = useState(0);
  const [, setCursor] = React.useContext(CursorContext);
  const tabRefs = useRef([]);
  const containerRef = useRef();
  const headingRef = useRef();
  const contentRef = useRef();

  if (!data) return;

  const Tab = ({ tab, i }) => {
    if (tab.tab?.tab_type === "career") {
      return (
        <li
          ref={(el) => (tabRefs.current[i] = el)}
          id={"about--tab-content--" + i}
          className={"about--tab-content about--tab--" + tab.tab?.tab_type}
          key={i}
        >
          <ul
            className="about--tab about--tab-timeline"
            style={{ ["--total"]: tab?.tab?.career_timeline?.length }}
          >
            {tab.tab?.career_timeline.map((item) => {
              return (
                <li className="about--tab-timeline--item">
                  <h3 className="timeline-text">{item?.career_item}</h3>
                </li>
              );
            })}
          </ul>
        </li>
      );
    } else {
      return (
        <li
          ref={(el) => (tabRefs.current[i] = el)}
          id={"about--tab-content--" + i}
          className={"about--tab-content about--tab--" + tab.tab?.tab_type}
          key={i}
        >
          <ul
            className="about--tab about--tab--experience"
            style={{ ["--total"]: tab?.tab?.experience?.length }}
          >
            {tab.tab?.experience.map((item) => {
              return (
                <li className="about--tab-experience-item">
                  <ul className="experience-list">
                    {item.experience_item.map((experience) => {
                      return (
                        <li className="experience-list--progress">
                          <h3 className="experience-list--title">
                            <span className="experience-list--title-text">
                              {experience?.title}
                            </span>
                            <span className="experience-list--percentage">
                              {experience?.percentage + "%"}
                            </span>
                          </h3>
                          <span className="experience-list--progress-bar">
                            <span
                              className="experience-list--progress-bar--fill"
                              style={{ width: experience?.percentage + "%" }}
                            ></span>
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </li>
      );
    }
  };

  function handleTabs(e, index) {
    e.preventDefault();

    setCurrTab(index);
  }

  const toggleCursorDefault = useCallback(() => {
    setCursor(({ active }) => ({
      active: !active,
    }));
  });

  const toggleCursorText = useCallback(() => {
    setCursor(({ active, text }) => ({
      active: !active,
      text: !!text ? "" : "Scroll >",
    }));
  });

  useLayoutEffect(() => {
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
        {data?.tabs?.length > 0 && (
          <div className="about--right">
            <ul className="about--tabs">
              {data.tabs.map((tab, i) => {
                return (
                  <li className="about--tab">
                    <a
                      className={
                        "btn btn--tab" + (currTab === i ? " active" : "")
                      }
                      href={"#about--tab-content--" + i}
                      onClick={(e) => {
                        handleTabs(e, i);
                      }}
                      onMouseEnter={toggleCursorDefault}
                      onMouseLeave={toggleCursorDefault}
                    >
                      {tab.tab_header}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul
              className="about--tabs-content"
              onMouseEnter={toggleCursorText}
              onMouseLeave={toggleCursorText}
            >
              {data.tabs
                .filter((tab, i) => i === currTab)
                .map((tab, i) => {
                  return <Tab tab={tab} i={i} />;
                })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
