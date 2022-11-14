import React from "react";
import ThinLine from "./lines/ThinLine";

function Title({ text }) {
  return (
    <div className="flex flex-row gap-4">
      <p className="uppercase text-title font-poppins tracking-widest font-medium text-sm">{text}</p>
      <div className="flex justify-center items-center"><ThinLine /></div>
    </div>
  );
}

export default Title;
