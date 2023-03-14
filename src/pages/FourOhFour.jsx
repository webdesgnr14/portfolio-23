import * as React from "react";
import { HoverElement } from "../components/HoverElement";
import { LoadingContext } from "../context/LoadingContextProvider";

export function FourOhFour() {
  const [loading] = React.useContext(LoadingContext);
  if (loading.isLoading) return null;
  return (
    <div className="four-oh-four">
      <div className="four-oh-four--container">
        <div className="four-oh-four--content">
          <h1>Oh No!</h1>
          <p>There's no magic in NOT finding what you're looking for, it seems the page you're trying to find no longer exists.</p>
          <HoverElement className="btn btn--large" href={"/"}>Back To Home</HoverElement>
        </div>
      </div>
    </div>
  );
}