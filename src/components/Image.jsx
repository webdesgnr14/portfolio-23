import wp_api from "../hooks/useApi";
import * as React from "react";

export const Image = ({ id, size = null, classes = [] }) => {
  const imageData = wp_api("media/" + id);

  classes = classes.length > 0 ? classes.join(" ") : "";

  if (!imageData.source_url) return null;

  if (size && imageData?.media_details?.sizes[size]?.source_url) {
    return (
      <img
        src={imageData.media_details.sizes[size].source_url}
        width={imageData.media_details.sizes[size].width}
        height={imageData.media_details.sizes[size].height}
        alt={imageData.alt_text}
        className={classes}
      />
    );
  }

  return (
    <img
      src={imageData.source_url}
      width={imageData.media_details?.width}
      height={imageData.media_details?.height}
      alt={imageData.alt_text}
      className={classes}
    />
  );
};
