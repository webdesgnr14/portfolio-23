import gsap from 'gsap';

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