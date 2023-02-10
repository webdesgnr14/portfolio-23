import gsap from 'gsap';
import wp_api from '../hooks/useApi';
import * as React from "react";
import { useHoverIntent } from "react-use-hoverintent";
import { CursorContext } from "../context/CursorContextProvider";

export const killAnimations = (el) => {
  gsap.killTweensOf(el);
};

export function getImageIDs(data) {
  const ids = [];

  for (let i = 0; i < data.length; i++) {
    ids.push(data[i].image);
  }

  return ids;
}

export const spinAnimation = (element) => {
  let tween = gsap.to(element, {
    rotationY: 360,
    duration: 1.5,
    ease: 'elastic',
  });

  tween.play();
};

export const spinReverseAnimation = (element) => {
  let tween = gsap.to(element, {
    rotationY: 0,
    duration: 1.5,
    ease: 'elastic',
  });

  tween.play();
};

export const Image = ({ id, size = null, classes = [] }) => {
  const imageData = wp_api('media/' + id);

  classes = classes.length > 0 ? classes.join(' ') : '';

  if (!imageData.source_url) return null;

  if (size && imageData?.media_details?.sizes[size]?.source_url) {
    return (
      <img
        src={imageData.media_details.sizes[size].source_url}
        width={imageData.media_details.sizes[size].width}
        height={imageData.media_details.sizes[size].height}
        alt={imageData.media_details?.alt_text}
        className={classes}
      />
    );
  }

  return (
    <img
      src={imageData.source_url}
      width={imageData.media_details?.width}
      height={imageData.media_details?.height}
      alt={imageData.media_details?.alt_text}
      className={classes}
    />
  );
};

const ActiveImage = ({ image, activeSlide, handleImageSlides }) => {
  const activeImageContainerRef = React.useRef();
  const activeImageRef = React.useRef();

  React.useLayoutEffect(() => {
    if (activeImageRef.current) {
      gsap.fromTo(
        activeImageRef.current,
        { opacity: 0, transform: "translateX(-100%)" },
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
      <a
        href="#"
        id={"hero-slide-" + activeSlide}
        onClick={(e) => {
          handleImageSlides(e, null);
        }}
      >
        <img
          ref={activeImageRef}
          src={image?.source_url}
          width={image?.media_details?.width}
          height={image?.media_details?.height}
        />
      </a>
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

  const toggleCursor = React.useCallback((e) => {
    console.log(e);

    setCursor(({ active, text }) => ({
      active: !active,
      text: !!text ? "" : "Click Me",
    }));
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
                <Link
                  href="#"
                  id={"hero-slide-" + i}
                  onClick={(e) => {
                    handleImageSlides(e, i);
                  }}
                  ref={(el) => (linkRefs.current[i] = el)}
                  onMouseEnter={(e) => toggleCursor(e)}
                  onMouseLeave={(e) => toggleCursor(e)}
                >
                  <img
                    ref={(el) => (imageRefs.current[i] = el)}
                    src={image?.source_url}
                    width={image?.media_details?.width}
                    height={image?.media_details?.height}
                  />
                </Link>
              </li>
            );
          })
          : data
            .filter((image, key) => key === activeSlide)
            .map((image) => {
              return <ActiveImage image={image} activeSlide={activeSlide} handleImageSlides={handleImageSlides} />;
            })}
      </ul>
    </div>
  );
};

export const Link = React.forwardRef(({ children, href, target, ...rest }, ref = null) => {
  const [isHovering, intentRef, setIsHovering] = useHoverIntent(ref);

  React.useEffect(() => {
    if (intentRef.current) {
      console.log(intentRef.current);
    }
  }, [intentRef.current]);

  return (
    <a ref={intentRef} className={`${isHovering ? "hover" : ""}`} href={href} target={target} {...rest}>{children}</a>
  )
});

export const isTouchDevice =
  "ontouchstart" in window
  || navigator.MaxTouchPoints > 0
  || navigator.msMaxTouchPoints > 0;