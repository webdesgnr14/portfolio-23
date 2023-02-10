import React, { useRef } from "react";
import gsap from "gsap";
import wp_api from "../hooks/useApi";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  spinAnimation,
  spinReverseAnimation,
  getImageIDs,
  killAnimations,
  ImageGrid,
} from "../lib/helpers";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { ReactComponent as Arrow } from "../assets/icons/arrow.svg";
gsap.registerPlugin(ScrollTrigger);

export function Hero({ data }) {
  const imageIDs = getImageIDs(data?.images);
  const imagesData = wp_api("media?include=" + imageIDs);
  const logoRef = useRef();

  if (Object.keys(data).length > 0) {
    return (
      <div className="hero section">
        <div className="hero--container">
          {data?.heading && (
            <div className="hero--content">
              <a
                className="hero--logo"
                data-animation={false}
                href="/"
                ref={logoRef}
                onMouseOver={(e) => {
                  killAnimations(e.currentTarget);
                  spinAnimation(e.currentTarget);
                }}
                onMouseLeave={(e) => {
                  killAnimations(e.currentTarget);
                  spinReverseAnimation(e.currentTarget);
                }}
              >
                <Logo />
              </a>
              <h1>{data.heading}</h1>
            </div>
          )}
          {imagesData?.length > 0 && <ImageGrid data={imagesData} />}
          <div className="arrow-svg">
            <Arrow />
          </div>
        </div>
      </div>
    );
  }

  return null;
}
