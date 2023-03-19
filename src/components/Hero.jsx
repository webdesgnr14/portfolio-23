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

  if (Object.keys(data).length > 0) {
    return (
      <div className="hero section">
        <div className="hero--container">
          {data?.heading && (
            <div className="hero--content">
              <HoverElement
                className="hero--logo"
                href="/"
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
