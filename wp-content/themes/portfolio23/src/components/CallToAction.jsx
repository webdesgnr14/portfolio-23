import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MagicWord } from "./MagicWord";
import { HoverElement } from "./HoverElement";
import { CursorContext } from "../context/CursorContextProvider";
import { MagicWordContext } from "../context/MagicWordContextProvider";
import { Confetti } from "./Confetti";
gsap.registerPlugin(ScrollTrigger);

export function CallToAction({ data }) {
  if (!data) return null;
  const sectionRef = React.useRef();
  const containerRef = React.useRef();
  const [, setCursor] = React.useContext(CursorContext);
  const [cycleComplete] = React.useContext(MagicWordContext);

  const toggleCursor = React.useCallback((isHovering) => {
    setCursor(() => {
      return {
        active: isHovering,
      };
    });
  });

  React.useLayoutEffect(() => {
    const tl = gsap.timeline({
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "+=400",
        scrub: 0.5,
      },
    });
    tl.fromTo(
      containerRef.current,
      { opacity: 0, y: 200 },
      { opacity: 1, y: 0 }
    );
  }, [sectionRef.current, containerRef.current]);

  return (
    <div className="call-to-action section" ref={sectionRef}>
      <div className="call-to-action--container" ref={containerRef}>
        {data?.heading && (
          <h2 className="call-to-action--heading">
            <MagicWord
              phrase={data.heading}
              placement={3}
              emojis={["🚀", "💥", "🦄", "🔮", "🪄", "✨", "🥳", "🎉", "🎊"]}
            />
          </h2>
        )}
        {data?.button?.url && (
          <HoverElement
            className="btn btn--large"
            href={data.button.url}
            target={data?.button?.target ? data.button.target : "_self"}
            onMouseEnter={(isHovering) => toggleCursor(isHovering)}
            onMouseLeave={(isHovering) => toggleCursor(isHovering)}
          >
            {data.button.title}
          </HoverElement>
        )}
      </div>
      <Confetti action={cycleComplete.isComplete} />
    </div>
  );
}
