import React from "react";
import ThinLine from "../../lines/ThinLine";
import Rectangular from "../../buttons/Rectangular";

function Text({ heading, desc }) {
  return (
    <div className="w-full flex justify-center text-center bg-neutral">
      <div className="flex flex-col gap-4 justify-center items-center px-8 ">
        <p className="uppercase font-Playfair text-xl font-semibold">
          {heading}
        </p>
        <ThinLine />
        <p className="text-base-content">{desc}</p>
        <Rectangular text={"Read more"} />
      </div>
    </div>
  );
}

export default Text;
