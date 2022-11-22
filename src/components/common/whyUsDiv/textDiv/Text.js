import React from "react";
import ThinLine from "../../lines/ThinLine";
import Rectangular from "../../buttons/Rectangular";

function Text({ heading, desc, id }) {
  return (
    <div className="w-full flex justify-center text-center bg-neutral p-4 lg:p-0">
      <div className="flex flex-col gap-4 justify-center items-center px-8 ">
        <div className="flex flex-col items-center justify-center  gap-2">
          <p className="text-white text-2xl font-semibold">{id}</p>
          <p className="uppercase font-Playfair text-xl font-semibold text-yellow">
            {heading}
          </p>
        </div>

        <ThinLine />
        <p className="text-base-content">{desc}</p>
        <Rectangular text={"Read more"} />
      </div>
    </div>
  );
}

export default Text;
