import * as React from "react";
import { CursorContext } from "../context/CursorContextProvider";
import { HoverElement } from "./HoverElement";

const CareerTab = ({ tab, i, length }) => {
  const careerTabRef = React.useRef();

  return (
    <li
      ref={careerTabRef}
      id={"about--tab-content--" + i}
      className={"about--tab-content about--tab--" + tab.tab_type}
      key={i}
    >
      <ul
        className="about--tab about--tab-timeline"
        style={{ ["--total"]: length }}
      >
        {tab.career_timeline.map((item, i) => {
          return (
            <li className="about--tab-timeline--item" key={i}>
              <h3 className="timeline-text">{item?.career_item}</h3>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

const ExperienceTab = ({ tab, i, length }) => {
  const experienceTabRef = React.useRef();
  return (
    <li
      ref={experienceTabRef}
      id={"about--tab-content--" + i}
      className={"about--tab-content about--tab--" + tab.tab_type}
      key={i}
    >
      <ul
        className="about--tab about--tab--experience"
        style={{ ["--total"]: length }}
      >
        {tab.experience.map((item, i) => {
          return (
            <li className="about--tab-experience-item" key={i}>
              <ul className="experience-list">
                {item.experience_item.map((experience, i) => {
                  return (
                    <li className="experience-list--progress" key={i}>
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
};

const Tab = ({ tab, i }) => {
  if (tab.tab?.tab_type === "career") {
    const tabsLength = tab.tab.career_timeline.length;
    return <CareerTab tab={tab.tab} i={i} length={tabsLength} />;
  } else {
    const tabsLength = tab.tab.experience.length;
    return <ExperienceTab tab={tab.tab} i={i} length={tabsLength} />;
  }
};

export const Tabs = ({ data }) => {
  const [currTab, setCurrTab] = React.useState(0);
  const [, setCursor] = React.useContext(CursorContext);

  if (!data) return null;

  function handleTabs(e, index) {
    e.preventDefault();

    setCurrTab(index);
  }

  const toggleCursorDefault = React.useCallback((isHovering) => {
    setCursor(() => ({
      active: isHovering,
    }));
  });

  const toggleCursorText = React.useCallback((isHovering) => {
    setCursor(() => ({
      active: isHovering,
      text: isHovering ? "Scroll >" : "",
    }));
  });

  return (
    <div className="about--right">
      <ul className="about--tabs">
        {data.map((tab, i) => {
          return (
            <li className="about--tab" key={i}>
              <HoverElement
                className={"btn btn--tab" + (currTab === i ? " active" : "")}
                href={"#about--tab-content--" + i}
                onClick={(e) => {
                  handleTabs(e, i);
                }}
                onMouseEnter={(isHovering) => toggleCursorDefault(isHovering)}
                onMouseLeave={(isHovering) => toggleCursorDefault(isHovering)}
              >
                {tab.tab_header}
              </HoverElement>
            </li>
          );
        })}
      </ul>
      <HoverElement
        as="ul"
        className="about--tabs-content"
        onMouseEnter={(isHovering) => toggleCursorText(isHovering)}
        onMouseLeave={(isHovering) => toggleCursorText(isHovering)}
      >
        {data
          .filter((tab, i) => i === currTab)
          .map((tab, i) => {
            return <Tab tab={tab} i={i} key={i} />;
          })}
      </HoverElement>
    </div>
  );
};
