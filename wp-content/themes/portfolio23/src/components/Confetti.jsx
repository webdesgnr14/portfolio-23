import * as React from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { MagicWordContext } from "../context/MagicWordContextProvider";

export function Confetti({ action = false, height }) {
  const [, setCycleComplete] = React.useContext(MagicWordContext);

  const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: height || "100%",
    top: 0,
    left: 0,
  };

  const refAnimationInstance = React.useRef(null);

  const getInstance = React.useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = React.useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const fire = React.useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });

    setCycleComplete(() => {
      return { isComplete: false }
    });

  }, [makeShot]);

  React.useEffect(() => {
    if (action) {
      fire();
    }
  }, [action]);

  return <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />;
}
