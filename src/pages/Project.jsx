import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useAPI from "../hooks/useApi";
import { LoadingContext } from "../context/LoadingContextProvider";
import { Image } from "../components/Image";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ProjectSection } from "../components/ProjectSection";
import { ColorList } from "../components/ColorList";
import { TypeList } from "../components/TypeList";
import { Slider } from "../components/Slider";

gsap.registerPlugin(ScrollTrigger);

export const Project = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("project_id");
  const data = useAPI("project/" + id);
  const [loading] = React.useContext(LoadingContext);
  const navigate = useNavigate();

  if (!id) { 
    return navigate("/404");
  }

  //Intro Refs
  const sectionRef = React.useRef();
  const headingRef = React.useRef();
  const contentRef = React.useRef();
  const logoRef = React.useRef();

  //Type Refs
  const typeSectionRef = React.useRef();
  const typeHeadingRef = React.useRef();
  const typeListRef = React.useRef();
  const paletteHeadingRef = React.useRef();
  const paletteListRef = React.useRef();

  if (!data.acf || loading.isLoading) return null;

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
          <div className="project--section--inner">
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
