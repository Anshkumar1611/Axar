import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


function Photo({ url, title }) {
  return (
    <div className="w-full h-full ">
      <LazyLoadImage
        alt="div"
        src={url}
        effect="blur"
        title={title}
        className="w-full h-full border-4 border-white"
      />
    </div>
  );
}

export default Photo;
