import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CursorContext } from "../context/CursorContextProvider";
import { HoverElement } from "./HoverElement";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { ReactComponent as GitHub } from "../assets/icons/github.svg";
import { ReactComponent as Behance } from "../assets/icons/behance.svg";
import { ReactComponent as LinkedIn } from "../assets/icons/linkedin.svg";
import { spinAnimation, spinReverseAnimation } from "../lib/helpers";
gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = React.useRef();
  const year = new Date().getFullYear();
  const [, setCursor] = React.useContext(CursorContext);

  const toggleCursor = (isHovering) => {
    setCursor(() => {
      return {
        active: isHovering,
      };
    });
  };

  React.useLayoutEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          delay: 1,
          duration: 0.5,
          scrollTrigger: footerRef.current,
          ease: "power1.inOut",
        }
      );
    }
  }, [footerRef.current]);

  return (
    <footer id="footer" className="footer" ref={footerRef}>
      <div className="footer--container">
        <div className="footer--branding">
          <HoverElement
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
          >
            <Logo />
          </HoverElement>
        </div>
        <div className="footer--social">
          <ul className="social--icons--list">
            <li className="social--icon github">
              <span className="sr-text">Find me on GitHub</span>
              <HoverElement
                target="_blank"
                href="https://www.github.com/webdesgnr14"
                onMouseEnter={(isHovering) => toggleCursor(isHovering)}
                onMouseLeave={(isHovering) => toggleCursor(isHovering)}
              >
                <GitHub aria-hidden={true} />
              </HoverElement>
            </li>
            <li className="social--icon behance">
              <span className="sr-text">Find me on Behance</span>
              <HoverElement
                target="_blank"
                href="https://www.behance.net/webdesgnr14"
                onMouseEnter={(isHovering) => toggleCursor(isHovering)}
                onMouseLeave={(isHovering) => toggleCursor(isHovering)}
              >
                <Behance aria-hidden={true} />
              </HoverElement>
            </li>
            <li className="social--icon linkedin">
              <span className="sr-text">Find me on LinkedIn</span>
              <HoverElement
                target="_blank"
                href="https://www.linkedin.com/in/sheriserogers"
                onMouseEnter={(isHovering) => toggleCursor(isHovering)}
                onMouseLeave={(isHovering) => toggleCursor(isHovering)}
              >
                <LinkedIn aria-hidden={true} />
              </HoverElement>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p
            dangerouslySetInnerHTML={{
              __html:
                "Copyright &copy; " +
                year +
                " Designed + Developed by Sherise Rogers. All Rights Reserved.",
            }}
          />
        </div>
      </div>
    </footer>
  );
}
