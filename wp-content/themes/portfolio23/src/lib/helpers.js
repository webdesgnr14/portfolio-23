import gsap from 'gsap';
import * as React from "react";

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

export const isTouchDevice =
  "ontouchstart" in window
  || navigator.MaxTouchPoints > 0
  || navigator.msMaxTouchPoints > 0;

const checkSize = (size, func) => {
  setTimeout(() => {
    func(window.matchMedia(`(max-width: ${size}px)`).matches);
  }, 300);
};

export const isTablet = () => {
  const [tablet, setTablet] = React.useState(window.matchMedia("(max-width: 768px)").matches);

  React.useEffect(() => {
    window.addEventListener("resize", () => checkSize(768, setTablet));

    return () => window.removeEventListener("resize", () => checkSize);
  }, []);

  return tablet;
}

export const isMobile = () => {
  const [mobile, setMobile] = React.useState(window.matchMedia("(max-width: 525px)").matches);

  React.useEffect(() => {
    window.addEventListener("resize", () => checkSize(525, setMobile));

    return () => window.removeEventListener("resize", () => checkSize);
  }, []);

  return mobile;
}