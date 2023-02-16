import React, { useRef, useEffect, useContext } from "react";
import gsap from "gsap";
import useMousePosition from "../hooks/useMousePosition";
import { CursorContext } from "../context/CursorContextProvider";
import { isTouchDevice } from "../lib/helpers";

export function Cursor() {
  const { clientX, clientY } = useMousePosition();
  const [cursor] = useContext(CursorContext);
  const cursorRef = useRef();
  const cursorTextRef = useRef();
  const cursorDefault = {
    width: 24,
    height: 24,
    backgroundColor: "#339989",
    border: 0,
    duration: 0.2,
    ease: "power1.inOut",
  };
  const cursorHover = {
    width: 48,
    height: 48,
    backgroundColor: "#363946",
    border: "2px solid #fbfbfb",
    duration: 0.2,
    ease: "power1.inOut",
  };
  const cursorAnimation = {
    width: 80,
    height: 80,
    backgroundColor: "transparent",
    duration: 0.2,
    ease: "power1.inOut",
  };
  const cursorText = {
    delay: 0.2,
    duration: 0.2,
    opacity: 1,
    ease: "none",
  };
  const cursorTextNone = {
    duration: 0.2,
    opacity: 0,
    ease: "none",
  };
  const cursorDown = {
    width: 20,
    height: 20,
    backgroundColor: "#708080",
    duration: 0.2,
    ease: "power1.inOut",
  };
  const cursorHidden = { opacity: 0, duration: 0.2, ease: "power1.inOut" };

  if (isTouchDevice) return null;

  const handleHover = () => {
    if (cursor.text) {
      gsap.to(cursorRef.current, cursorAnimation);
      gsap.to(cursorTextRef.current, cursorText);
    } else {
      gsap.to(cursorRef.current, cursorHover);
    }
  };

  const handleOut = () => {
    if (cursor.text !== "") {
      gsap.to(cursorTextRef.current, cursorTextNone);
    }

    gsap.to(cursorRef.current, cursorDefault);
  };

  const animateMousePos = () => {
    gsap.to(cursorRef.current, {
      x: clientX,
      y: clientY,
      opacity: 1,
      duration: 0.1,
      ease: "power1.inOut",
    });
  };

  useEffect(() => {
    const handleMouseEnter = () => {
      gsap.to(cursorRef.current, cursorDefault);
    };

    const handleMouseLeave = () => {
      gsap.to(cursorRef.current, cursorHidden);
    };

    const handleMouseDown = () => {
      gsap.to(cursorRef.current, cursorDown);
    };

    const handleMouseUp = () => {
      gsap.to(cursorRef.current, cursorDefault);
    };

    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    document.addEventListener("mousedown", handleMouseDown, false);
    document.addEventListener("mouseup", handleMouseUp, false);

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);

      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    if (cursor.active) {
      handleHover();
    } else {
      handleOut();
    }
  }, [cursor.active]);

  useEffect(() => {
    animateMousePos();
  }, [clientX, clientY]);

  return (
    <div className="cursor">
      <div className="cursor--icon" ref={cursorRef}>
        {cursor.text !== "" && (
          <span className="cursor--text" ref={cursorTextRef}>
            {cursor.text}
          </span>
        )}
      </div>
    </div>
  );
}
