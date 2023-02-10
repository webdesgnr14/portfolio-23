import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useAPI from "../hooks/useApi";
import { Image } from "../lib/helpers";
import { useSearchParams } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

gsap.registerPlugin(ScrollTrigger);

export const Project = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("project_id");
  const data = useAPI("project/" + id);

  if (!data.acf) return null;

  const Slider = () => {
    const btnRef = useRef();
    const containerRef = useRef();

    const handleScroll = (e, id) => {
      e.preventDefault();
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    useLayoutEffect(() => {
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
          data-animation={false}
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
          {data.acf.design_samples.map((image, i) => {
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

  return (
    <div className="project">
      {(data.acf.heading || data.acf.body || data.acf.logo) && (
        <div className="project--section project--intro">
          <div className="container">
            {(data.acf.heading || data.acf.body) && (
              <div className="project--content">
                {data.acf.heading && <h1>{data.acf.heading}</h1>}
                {data.acf.body && (
                  <div
                    className="project--body"
                    dangerouslySetInnerHTML={{ __html: data.acf.body }}
                  />
                )}
              </div>
            )}
            {data.acf.logo && (
              <div className="project--logo">
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
          </div>
        </div>
      )}
      {(data.acf.typography?.length > 0 ||
        data.acf.color_palette?.length > 0) && (
        <div className="project--section project--typo-palette">
          <div className="container">
            {data.acf.typography?.length > 0 && (
              <div className="project--typography">
                <div class="project--content">
                  <h2>Typography</h2>
                  <ul className="project--typography--list">
                    {data.acf.typography.map((font, i) => {
                      return (
                        <li
                          className="project--typography--item"
                          data-font-name={font.font_name}
                          data-font-type={font.font_type}
                          key={i}
                        >
                          <h3>{font.font_name}</h3>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            )}
            {data.acf.color_palette?.length > 0 && (
              <div className="project--color-palette">
                <div class="project--content">
                  <h2>Color Palette</h2>
                </div>
                <ul className="project--color--list">
                  {data.acf.color_palette.map((color, i) => {
                    return (
                      <li
                        className="project--color"
                        style={{ backgroundColor: color.color }}
                        key={i}
                      />
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
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
          <Slider />
        </div>
      )}
    </div>
  );
};
