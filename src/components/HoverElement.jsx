import * as React from "react";
import { useHoverIntent } from "react-use-hoverintent";
import { Link } from "react-router-dom";
import cx from "classnames";

export const HoverElement =
  (
    {
      children,
      as = "a",
      href = null,
      target = null,
      onMouseEnter,
      onMouseLeave,
      onClick = null,
      ...rest
    }
  ) => {
    const [isHovering, intentRef, setIsHovering] = useHoverIntent();
    const Element = as;

    React.useEffect(() => {
      if (intentRef.current && onMouseEnter && onMouseLeave) {
        intentRef.current.addEventListener("mouseenter", () => {
          setIsHovering(true);
        });

        intentRef.current.addEventListener("mouseleave", () => {
          setIsHovering(false);
        });

        return () => {
          intentRef.current?.removeEventListener("mouseenter", setIsHovering);
          intentRef.current?.removeEventListener("mouseleave", setIsHovering);
        };
      }
    }, []);

    React.useEffect(() => {
      if (intentRef.current && (onMouseEnter && onMouseLeave)) {
        if (isHovering) {
          onMouseEnter(isHovering, intentRef.current);
        } else {
          onMouseLeave(isHovering, intentRef.current);
        }
      }
    }, [isHovering]);

    if (Element === "a") {
      return (
        <Link
          ref={intentRef}
          className={cx("hover-element", rest.className ? rest.className : "")}
          to={href}
          target={target}
          onClick={(e) => {
            setIsHovering(false);

            if (onClick) {
              onClick(e);
            }
          }}
          {...rest}
        >
          {children}
        </Link>
      )
    }

    return (
      <Element
        ref={intentRef}
        className={cx("hover-element", rest.className ? rest.className : "")}
        href={href}
        target={target}
        onClick={(e) => {
          setIsHovering(false);

          if (onClick) {
            onClick(e);
          }
        }}
        {...rest}
      >
        {children}
      </Element>
    );
  }
;
