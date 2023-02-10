import React, { useRef, useState, useLayoutEffect, forwardRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { spinAnimation, spinReverseAnimation } from "../lib/helpers";
import wp_api from "../hooks/useApi";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { NavHashLink } from "react-router-hash-link";

export const Header = () => {
  const navData = wp_api("primary-nav");
  const headerRef = useRef();
  const brandingRef = useRef();
  const logoRef = useRef();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  if (!navData) return;

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

  useLayoutEffect(() => {
    if (location.pathname !== "/") {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    setTimeout(() => {
      if (headerRef.current) {
        const height = headerRef.current.clientHeight;

        //Add --header-height css var
        document.documentElement.style.setProperty(
          "--header-height",
          height + "px"
        );
      }
    }, [300]);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const Branding = forwardRef(({}, ref) => {
    return (
      <div className="header--branding" ref={ref}>
        <div className="logo">
          <a
            data-animation={false}
            ref={logoRef}
            href="/"
            onMouseOver={(e) => {
              spinAnimation(e.currentTarget);
            }}
            onMouseLeave={(e) => {
              spinReverseAnimation(e.currentTarget);
            }}
          >
            <Logo />
          </a>
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
                        <NavHashLink to={link.url} smooth>
                          {link.title}
                        </NavHashLink>
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
                      <NavLink
                        to={link.url}
                        strict
                        exact
                        end
                        onClick={() => {
                          if (
                            link.url === "/" &&
                            location.pathname === "/" &&
                            window.scrollY > 0
                          ) {
                            window.scrollTo({
                              top: 0,
                              behavior: "smooth",
                            });
                          }
                        }}
                      >
                        {link.title}
                      </NavLink>
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
