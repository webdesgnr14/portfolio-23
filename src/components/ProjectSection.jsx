import * as React from "react";

export const ProjectSection = React.forwardRef(
  ({ children, name, func }, ref) => {
    React.useLayoutEffect(() => {
      func();
      // Runs once on mount only: func is a fresh function reference on
      // every parent render, so depending on it would re-fire the
      // animation on every unrelated render of the parent.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <div
        id={`project--${name}`}
        className={`project--section project--${name}`}
        ref={ref}
      >
        <div className="container">{children}</div>
      </div>
    );
  }
);
ProjectSection.displayName = "ProjectSection";
