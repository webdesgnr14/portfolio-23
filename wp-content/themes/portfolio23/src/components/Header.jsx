import * as React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { spinAnimation, spinReverseAnimation } from "../lib/helpers";
import wp_api from "../hooks/useApi";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { NavHashLink } from "react-router-hash-link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { HoverElement } from "./HoverElement";
import { CursorContext } from "../context/CursorContextProvider";
gsap.registerPlugin(ScrollTrigger);

export const Header = () => {
  const navData = wp_api("primary-nav");
  const headerRef = React.useRef();
  const brandingRef = React.useRef();
  const location = useLocation();
  const [isVisible, setIsVisible] = React.useState(false);
  const [, setCursor] = React.useContext(CursorContext);

  if (!navData) return null;

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    //Add Sticky Class
    if (headerRef.current) {
      if (scrollTop > 1) {
        headerRef.current.classList.add("sticky");
      } else {
        headerRef.current.classList.remove("sticky");
      }
    }
  };

  const toggleCursor = (isHovering) => {
    setCursor(() => {
      return {
        active: isHovering,
      };
    });
  };

  React.useLayoutEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.clientHeight;

      //Add --header-height css var
      document.documentElement.style.setProperty(
        "--header-height",
        height + "px"
      );

      gsap.fromTo(
        headerRef.current,
        {
          transform:
            location.pathname === "/"
              ? "translateY(100%)"
              : "translateY(-100%)",
        },
        {
          opacity: 1,
          transform: "translateY(0)",
          delay: 1,
          duration: 0.5,
          scrollTrigger: headerRef.current,
          ease: "none",
        }
      );
    }
  }, [headerRef.current]);

  React.useEffect(() => {
    if (location.pathname !== "/") {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const Branding = React.forwardRef(({}, ref) => {
    return (
      <div className="header--branding">
        <div className="logo">
          <HoverElement
            ref={ref}
            href="/"
            onMouseEnter={(isHovering, hoverRef) => {
              if (isHovering) {
                spinAnimation(hoverRef);
              }
            }}
            onMouseLeave={(isHovering, hoverRef) => {
              if (!isHovering) {
                spinReverseAnimation(hoverRef);
              }
            }}
            onClick={(e, isHovering) => toggleCursor(e, isHovering)}
          >
            <Logo />
          </HoverElement>
        </div>
      </div>
    );
  });

  if (navData.length > 0) {
    return (
      <header className="header" ref={headerRef}>
        <div className="header--container">
          {isVisible && <Branding ref={brandingRef} />}
          <div className="header--navigation">
            <nav className="navigation">
              <ul className="navigation--menu">
                {navData.map((link) => {
                  let match = location.pathname === link.url && !location.hash;

                  if (link.url.includes("#")) {
                    match = location.pathname + location.hash === link.url;

                    return (
                      <li
                        key={link.ID}
                        className={
                          "navigation--menu-item" + (match ? " active" : "")
                        }
                      >
                        <HoverElement
                          as="div"
                          onMouseEnter={(isHovering) =>
                            toggleCursor(isHovering)
                          }
                          onMouseLeave={(isHovering) =>
                            toggleCursor(isHovering)
                          }
                          onMouseClick={(e, isHovering) =>
                            toggleCursor(e, isHovering)
                          }
                        >
                          <NavHashLink to={link.url} smooth>
                            {link.title}
                          </NavHashLink>
                        </HoverElement>
                      </li>
                    );
                  }

                  return (
                    <li
                      key={link.ID}
                      className={
                        "navigation--menu-item" + (match ? " active" : "")
                      }
                    >
                      <HoverElement
                        as="div"
                        onMouseEnter={(isHovering) => toggleCursor(isHovering)}
                        onMouseLeave={(isHovering) => toggleCursor(isHovering)}
                        onMouseClick={(e, isHovering) =>
                          toggleCursor(e, isHovering)
                        }
                      >
                        <NavLink
                          to={link.url}
                          strict
                          exact
                          end
                          onClick={() => {
                            if (window.scrollY > 0) {
                              window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                              });
                            }
                          }}
                        >
                          {link.title}
                        </NavLink>
                      </HoverElement>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }

  return null;
};
