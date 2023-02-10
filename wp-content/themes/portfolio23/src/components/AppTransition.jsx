import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import cx from "classnames";
import gsap from "gsap";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { useLocation } from "react-router-dom";

export function AppTransition() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(false);
  const [transitionStage, setTransitionStage] = useState(false);

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage("fadeOut");
  }, [location, displayLocation]);

  const LogoAnimation = () => {
    const logoRef = useRef();

    useLayoutEffect(() => {
      if (logoRef.current) {
        const tl = gsap.timeline({
          repeat: -1,
          repeatDelay: 0.5,
          yoyo: true,
          ease: "elastic",
        });
        tl.to(logoRef.current, {
          opacity: 1,
          duration: 0.5,
        });
        tl.to(logoRef.current, {
          rotateY: -360,
          duration: 0.5,
        });
        tl.to(logoRef.current, {
          rotateY: 0,
          duration: 0.5,
        });
      }
    }, []);

    return (
      <div className={`app-transition--icon`} ref={logoRef}>
        <Logo />
      </div>
    );
  };

  //console.log(transitionStage);
  //console.log(displayLocation);

  return (
    <div
      className={cx("app-transition", "app-transition--" + transitionStage)}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransitionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <LogoAnimation />
    </div>
  );
}
