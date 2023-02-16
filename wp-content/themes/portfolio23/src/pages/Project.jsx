import * as React from "react";
import gsap, { SteppedEase } from "gsap";
import { TextPlugin } from "gsap/all";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useAPI from "../hooks/useApi";
import { Image } from "../components/Image";
import { useSearchParams } from "react-router-dom";
import { ProjectSection } from "../components/ProjectSection";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { ColorList } from "../components/ColorList";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const Slider = ({ design_samples }) => {
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

const TypeList = React.forwardRef(({ fonts }, ref) => {
  const length = fonts.length;
  const typeCursorRefs = React.useRef([]);
  const typewriterRefs = React.useRef([]);
  const typeRefs = React.useRef([]);

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

      tl.fromTo(
        typewriterRefs.current,
        { opacity: 0 },
        {
          opacity: 1,
          delay: 0.6,
          stagger: 3.6,
          text: {
            value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
          duration: 3,
          ease: "power1.inOut",
        }
      );
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

export const Project = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("project_id");
  const data = useAPI("project/" + id);
  //Intro Refs
  const sectionRef = React.useRef();
  const headingRef = React.useRef();
  const contentRef = React.useRef();
  const logoRef = React.useRef();
  const logoTextRef = React.useRef();

  //Type Refs
  const typeSectionRef = React.useRef();
  const typeHeadingRef = React.useRef();
  const typeListRef = React.useRef();
  const paletteHeadingRef = React.useRef();
  const paletteListRef = React.useRef();

  if (!data.acf) return null;

  const animateIntro = () => {
    const tl = gsap.timeline({
      duration: 0.6,
      ease: "power1.inOut",
      scrollTrigger: sectionRef.current,
      delay: 1.2,
    });
    tl.fromTo(
      contentRef.current,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 0.2 }
    );
    tl.fromTo(
      logoRef.current,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.2, delay: 0.2 }
    );
  };

  const animateTypeSection = () => {
    const tl = gsap.timeline({
      duration: 0.6,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: typeSectionRef.current,
        start: "top center",
        end: "center center",
      },
    });
    tl.fromTo(
      typeHeadingRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.2 }
    );
    tl.fromTo(
      typeListRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.2, delay: 0.2 }
    );
    tl.fromTo(
      paletteHeadingRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.2, delay: 0.4 }
    );
    tl.fromTo(
      paletteListRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.2, delay: 0.6 }
    );
  };

  return (
    <div className="project">
      {(data.acf.heading || data.acf.body || data.acf.logo) && (
        <ProjectSection
          name="intro"
          ref={sectionRef}
          func={animateIntro}
          funcReqs={[sectionRef.current, contentRef.current, logoRef.current]}
        >
          {(data.acf.heading || data.acf.body) && (
            <div className="project--content" ref={contentRef}>
              {data.acf.heading && <h1 ref={headingRef}>{data.acf.heading}</h1>}
              {data.acf.body && (
                <div
                  className="project--body"
                  dangerouslySetInnerHTML={{ __html: data.acf.body }}
                />
              )}
            </div>
          )}
          {data.acf.logo && (
            <div className="project--logo" ref={logoRef}>
              <div className="project--logo--img">
                <Image id={data.acf.logo} />
              </div>
              {data.acf.logo_description && (
                <div className="project--logo--details">
                  {data.acf.logo_description}
                </div>
              )}
            </div>
          )}
        </ProjectSection>
      )}
      {(data.acf.typography?.length > 0 ||
        data.acf.color_palette?.length > 0) && (
        <ProjectSection
          name="typo-palette"
          func={animateTypeSection}
          funcReqs={[
            typeHeadingRef.current,
            typeSectionRef.current,
            typeListRef.current,
            paletteHeadingRef.current,
            paletteListRef.current,
          ]}
          ref={typeSectionRef}
        >
          {data.acf.typography?.length > 0 && (
            <div className="project--typography">
              <div class="project--content">
                <h2 ref={typeHeadingRef}>Typography</h2>
                <TypeList fonts={data.acf.typography} ref={typeListRef} />
              </div>
            </div>
          )}
          {data.acf.color_palette?.length > 0 && (
            <div className="project--color-palette">
              <div class="project--content">
                <h2 ref={paletteHeadingRef}>Color Palette</h2>
                <ColorList
                  colors={data.acf.color_palette}
                  ref={paletteListRef}
                />
              </div>
            </div>
          )}
        </ProjectSection>
      )}
      {data.acf.design_samples.length > 0 && (
        <div
          className="project--section project--samples"
          id="project--samples"
        >
          <div className="project-section--inner">
            <div className="container">
              <div className="project--content">
                <h2>Design Samples</h2>
              </div>
              <div
                id="project--samples--slider--nav"
                className="project--samples--nav"
              ></div>
            </div>
          </div>
          <Slider design_samples={data.acf.design_samples} />
        </div>
      )}
    </div>
  );
};
