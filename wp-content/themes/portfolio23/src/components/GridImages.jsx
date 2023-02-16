import * as React from "react";
import { CursorContext } from "../context/CursorContextProvider";
import { HoverElement } from "./HoverElement";
import gsap from "gsap";

const ActiveImage = ({
  image,
  activeSlide,
  handleImageSlides,
  toggleCursor,
}) => {
  const activeImageContainerRef = React.useRef();
  const activeImageRef = React.useRef();

  React.useLayoutEffect(() => {
    if (activeImageRef.current) {
      gsap.fromTo(
        activeImageRef.current,
        { opacity: 0, transform: "translateX(-50%)" },
        {
          opacity: 1,
          transform: "translateX(0)",
          duration: 0.5,
          delay: 0.2,
          objectFit: "contain",
          position: "absolute",
          top: 0,
          left: 0,
          ease: "power1.inOut",
        }
      );
    }
  }, []);

  return (
    <li
      key={image?.id}
      className="hero--images--slide active"
      ref={activeImageContainerRef}
    >
      <HoverElement
        href="#"
        id={"hero-slide-" + activeSlide}
        onClick={(e) => {
          handleImageSlides(e, null);
        }}
        onMouseEnter={(isHovering) => toggleCursor(isHovering)}
        onMouseLeave={(isHovering) => toggleCursor(isHovering)}
      >
        <img
          ref={activeImageRef}
          src={image?.source_url}
          width={image?.media_details?.width}
          height={image?.media_details?.height}
        />
      </HoverElement>
    </li>
  );
};

export const ImageGrid = ({ data }) => {
  const imageCount = data.length;
  const imageRefs = React.useRef([]);
  const [activeSlide, setActiveSlide] = React.useState(null);
  const sectionRef = React.useRef();
  const imageContainerRefs = React.useRef([]);
  const linkRefs = React.useRef([]);
  const [, setCursor] = React.useContext(CursorContext);

  const toggleCursor = React.useCallback((isHovering) => {
    setCursor(() => {
      return {
        active: isHovering,
        text: isHovering ? "Click Me" : "",
      };
    });
  });

  const handleImageSlides = (e, index) => {
    e.preventDefault();
    setActiveSlide(index);
  };

  React.useLayoutEffect(() => {
    if (imageContainerRefs.current.length === imageCount) {
      gsap.fromTo(
        imageContainerRefs.current,
        { opacity: 0, y: -40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.2,
          stagger: 0.5,
          ease: "power1.inOut",
          scrollTrigger: sectionRef.current,
        }
      );
    }
  }, []);

  return (
    <div className="hero--images">
      <ul className="hero--images--slider" ref={sectionRef}>
        {activeSlide === null
          ? data.map((image, i) => {
              return (
                <li
                  key={image?.id}
                  className="hero--images--slide"
                  ref={(el) => (imageContainerRefs.current[i] = el)}
                >
                  <HoverElement
                    href="#"
                    id={"hero-slide-" + i}
                    onClick={(e) => {
                      handleImageSlides(e, i);
                    }}
                    ref={(el) => (linkRefs.current[i] = el)}
                    onMouseEnter={(isHovering) => toggleCursor(isHovering)}
                    onMouseLeave={(isHovering) => toggleCursor(isHovering)}
                  >
                    <img
                      ref={(el) => (imageRefs.current[i] = el)}
                      src={image?.source_url}
                      width={image?.media_details?.width}
                      height={image?.media_details?.height}
                    />
                  </HoverElement>
                </li>
              );
            })
          : data
              .filter((image, key) => key === activeSlide)
              .map((image) => {
                return (
                  <ActiveImage
                    image={image}
                    activeSlide={activeSlide}
                    handleImageSlides={handleImageSlides}
                    toggleCursor={toggleCursor}
                  />
                );
              })}
      </ul>
    </div>
  );
};
