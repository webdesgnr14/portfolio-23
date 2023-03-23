import * as React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { spinAnimation, spinReverseAnimation, isTablet, scrollToTop } from "../lib/helpers";
import wp_api from "../hooks/useApi";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { Divide as Hamburger } from "hamburger-react";
import { NavHashLink } from "react-router-hash-link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { HoverElement } from "./HoverElement";
import { LoadingContext } from "../context/LoadingContextProvider";
import { CursorContext } from "../context/CursorContextProvider";
gsap.registerPlugin(ScrollTrigger);

export const Header = () => {
  const navData = wp_api("primary-nav");
  const headerRef = React.useRef();
  const location = useLocation();
  const [isVisible, setIsVisible] = React.useState(false);
  const [, setCursor] = React.useContext(CursorContext);
  const [, setLoading] = React.useContext(LoadingContext);
  const [isOpen, setIsOpen] = React.useState(false);
  const tablet = isTablet();

  if (!navData || location.pathname === "/404") return null;

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
  }, [location.pathname]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Branding = () => {
    return (
      <div className="header--branding">
        <div className="logo">
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
      </div>
    );
  };

  const loadingAnimation = () => {
    setLoading(() => { 
      return { isLoading: true };
    });

    setTimeout(() => { 
      setLoading(() => {
        return { isLoading: false };
      });
    }, 2600);
  }

  const handleMobileMenu = () => {
    if (tablet) { 
      setIsOpen(false);
      toggleBodyClass(false);
    }
  }

  const toggleBodyClass = (toggled) => { 
    if (toggled) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }
  }

  if (navData.length > 0) {
    return (
      <header className="header" ref={headerRef}>
        <div className="header--container">
          {isVisible && <Branding />}
          <div className="header--navigation">
            <nav className="navigation">
              <div
                className={
                  "navigation--menu--toggle"
                }
              >
                <Hamburger
                  toggled={isOpen}
                  onToggle={(toggled) => {
                    toggleBodyClass(toggled);
                  }}
                  toggle={setIsOpen}
                  easing="ease-in"
                  duration={0.8}
                  size={24}
                  label={"Toggle Menu"}
                />
              </div>
              <ul className="navigation--menu">
                {navData.map((link) => {
                  let match = location.pathname === link.url && !location.hash;

                  if (link.url.includes("#")) {
                    match = location.pathname + location.hash === link.url || location.pathname.includes("project") && link.url.includes("project");

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
                        >
                          <NavHashLink to={link.url} smooth onClick={() => {
                            handleMobileMenu();
                            loadingAnimation();
                          }}>
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
                      >
                        <NavLink
                          to={link.url}
                          reloadDocument
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
