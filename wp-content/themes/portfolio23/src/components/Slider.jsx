import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import OwlCarousel from "react-owl-carousel";
import { Image } from "../components/Image";
gsap.registerPlugin(ScrollTrigger);

export const Slider = ({ design_samples }) => {
  const btnRef = React.useRef();
  const containerRef = React.useRef();

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  React.useLayoutEffect(() => {
    gsap.to(btnRef.current, {
      opacity: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "center center",
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <div className="project--slider" ref={containerRef}>
      <a
        href="#"
        className="back-to-controls"
        ref={btnRef}
        onClick={(e) => handleScroll(e, "project--samples")}
      >
        <span className="back-to-controls--text">Back to Controls</span>
      </a>
      <OwlCarousel
        className="project--samples--slider owl-theme"
        items={1.5}
        slideBy={1}
        margin={60}
        lazyLoad={true}
        autoWidth={true}
        dotsContainer={"#project--samples--slider--nav"}
      >
        {design_samples.map((image, i) => {
          return (
            <div className="project--samples--img" key={i}>
              <Image id={image.image} />
            </div>
          );
        })}
      </OwlCarousel>
    </div>
  );
};
