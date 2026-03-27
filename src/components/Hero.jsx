import * as React from "react";
import gsap from "gsap";
import wp_api from "../hooks/useApi";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  spinAnimation,
  spinReverseAnimation,
  getImageIDs,
} from "../lib/helpers";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { ReactComponent as Arrow } from "../assets/icons/arrow.svg";
import { ImageGrid } from "./GridImages";
import { HoverElement } from "./HoverElement";
gsap.registerPlugin(ScrollTrigger);

export function Hero({ data }) {
  const imageIDs = getImageIDs(data?.images);
  const imagesData = wp_api("media?include=" + imageIDs);
  const heroRef = React.useRef();
  const headingRef = React.useRef();
  const logoRef = React.useRef();
  const arrowRef = React.useRef();

  React.useLayoutEffect(() => {
    if (logoRef.current && heroRef.current) {
      gsap.fromTo(
        logoRef.current,
        {
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: heroRef.current,
          },
          opacity: 1,
          delay: 0.2,
          duration: 0.5,
          ease: "easeIn",
        },
      );
    }
  }, []);

  React.useLayoutEffect(() => {
    if (headingRef.current && heroRef.current) {
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          transform: "translateY(180px)",
        },
        {
          opacity: 1,
          transform: "translateY(0)",
          delay: 0.2,
          duration: 0.5,
          scrollTrigger: {
            trigger: heroRef.current,
          },
          ease: "easeIn",
        },
      );
    }
  }, []);

  React.useLayoutEffect(() => {
    if (arrowRef.current && heroRef.current) {
      gsap.fromTo(
        arrowRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 0.6,
          duration: 0.5,
          scrollTrigger: {
            trigger: heroRef.current,
          },
          ease: "easeIn",
        },
      );
    }
  }, []);

  if (Object.keys(data).length > 0) {
    return (
      <div ref={heroRef} className="hero section">
        <div className="hero--container">
          {data?.heading && (
            <div className="hero--content">
              <HoverElement
                className="hero--logo"
                href="/"
                ref={logoRef}
                id="hero-logo"
                onMouseEnter={(isHovering, logoRef) => {
                  if (isHovering) {
                    spinAnimation(logoRef);
                  }
                }}
                onMouseLeave={(isHovering, logoRef) => {
                  if (!isHovering) {
                    spinReverseAnimation(logoRef);
                  }
                }}
                aria-label="Navigate Home"
                reloadDocument
              >
                <Logo />
              </HoverElement>
              <h1 ref={headingRef}>{data.heading}</h1>
            </div>
          )}
          {imagesData?.length > 0 && <ImageGrid data={imagesData} />}
          <div className="arrow-svg" ref={arrowRef}>
            <Arrow />
          </div>
        </div>
      </div>
    );
  }

  return null;
}
