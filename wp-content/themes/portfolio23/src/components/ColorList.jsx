import * as React from "react";
import { HoverElement } from "./HoverElement";
import gsap from "gsap";

export const ColorList = React.forwardRef(({ colors }, ref) => {
  const linkRef = React.useRef([]);
  const waveRef = React.useRef([]);
  const [animate, setAnimate] = React.useState(false);
  const [index, setIndex] = React.useState(null);

  const toggleFill = (isHovering, i) => {
    setAnimate(isHovering ? true : false);
    setIndex(i);
  };

  const removeActiveClass = () => {
    if (linkRef.current[index]?.classList?.contains("active")) {
      linkRef.current[index].classList.remove("active");
    }
  };

  React.useLayoutEffect(() => {
    if (animate && index) {
      linkRef.current[index].classList.add("active");

      gsap.fromTo(
        linkRef.current[index],
        { transform: "translateY(100%)" },
        {
          transform: "translateY(0)",
          clearProps: "scale",
          duration: 4,
          onComplete: removeActiveClass,
        }
      );

      gsap.fromTo(
        waveRef.current[index],
        { transform: "translateX(-100%)" },
        {
          transform: "translateX(0)",
          clearProps: "scale",
          ease: "none",
          duration: 0.5,
          repeat: 8,
        }
      );
    }
  }, [linkRef.current, animate, index]);

  return (
    <ul className="project--color--list" ref={ref}>
      {colors.map((color, i) => {
        const index = i + 1;
        return (
          <HoverElement
            as="li"
            className="project--color"
            onMouseEnter={(isHovering) => toggleFill(isHovering, index)}
            onMouseLeave={(isHovering) => toggleFill(isHovering, index)}
            key={i}
          >
            <a
              className="project--color--link"
              ref={(el) => (linkRef.current[index] = el)}
              style={{ backgroundColor: color.color }}
            >
              <span
                style={{ backgroundColor: color.color }}
                className="project--color--wave"
                ref={(el) => (waveRef.current[index] = el)}
              />
            </a>
          </HoverElement>
        );
      })}
    </ul>
  );
});
