import * as React from "react";

export const ProjectSection = React.forwardRef(
  ({ children, name, func, funcReqs }, ref) => {
    React.useLayoutEffect(() => {
      func();
    }, [funcReqs]);

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
