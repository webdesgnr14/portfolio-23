import * as React from "react";
import gsap, { SteppedEase } from "gsap";
import { TextPlugin } from "gsap/all";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

export const TypeList = React.forwardRef(({ fonts }, ref) => {
  const length = fonts.length;
  const typeCursorRefs = React.useRef([]);
  const typewriterRefs = React.useRef([]);
  const typeRefs = React.useRef([]);

  const quotes = [
    "To infinity... and beyond!",
    "You're killin' me, Smalls.",
    "You had me at 'hello.'",
    "Whatchu' talkin' bout Willis?",
    "Just keep swimming.",
    "Fairy tales can come true. You gotta make them happen, it all depends on you.",
    "Roads? Where we're going we don't need roads.",
    "There's no crying in baseball!",
    "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
    "May the Force be with you.",
    "Hey, Auntie 🙃.",
    "There is no secret ingredient. It's just you.",
    "This is... SPARTA! *KICK*",
  ];

  const quotesLength = quotes.length;

  const getRandIndex = () => {
    return Math.floor(Math.random() * (quotesLength - 0) + 0);
  };

  React.useLayoutEffect(() => {
    if (
      typeRefs.current.length === length &&
      typewriterRefs.current.length === length &&
      typeCursorRefs.current.length === length
    ) {
      const tl = gsap.timeline({
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: ref.current,
      });

      tl.fromTo(
        typeRefs.current,
        { opacity: 0, y: -40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power1.inOut",
          delay: 0.6,
          stagger: 0.5,
        }
      );

      tl.fromTo(
        typeCursorRefs.current,
        { autoAlpha: 0, x: 2 },
        {
          autoAlpha: 1,
          duration: 0.5,
          repeat: -1,
          ease: SteppedEase.config(1),
          delay: 0.6,
          stagger: 0.5,
        }
      );

      const ctx = gsap.context(() => {
        gsap.utils.toArray(typewriterRefs.current).forEach(function (e) {
          const randIndex = getRandIndex();
          console.log("randIndex: ", randIndex);
          tl.fromTo(
            e,
            { opacity: 0 },
            {
              opacity: 1,
              delay: 0.6,
              stagger: 3.6,
              text: {
                value:
                  quotes[randIndex] ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              duration: 3,
              ease: "power1.inOut",
            }
          );
        });
      }, typewriterRefs.current);

      return () => ctx.revert();
    }
  }, [ref, typeRefs.current, typewriterRefs.current, typeCursorRefs.current]);

  return (
    <ul className="project--typography--list" ref={ref}>
      {fonts.map((font, i) => {
        return (
          <li
            className="project--typography--item"
            data-font-name={font.font_name}
            data-font-type={font.font_type}
            key={i}
            ref={(el) => (typeRefs.current[i] = el)}
          >
            <span className="project--typography--item--label">
              {font.font_type.toUpperCase()}
            </span>
            <span className="project--typography--item--name">
              {font.font_name}
            </span>
            <h3 className="project--typography--item--heading">
              <span
                ref={(el) => (typewriterRefs.current[i] = el)}
                class="typewriter"
              ></span>
              <span
                className="type-cursor"
                ref={(el) => (typeCursorRefs.current[i] = el)}
              >
                {"|"}
              </span>
            </h3>
          </li>
        );
      })}
    </ul>
  );
});
