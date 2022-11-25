import React from "react";
import { TiTick } from "react-icons/ti";

function InclusionText({text}) {
  return (
    <div>
      <div className="flex flex-row items-center gap-4 pb-2">
        <TiTick />
        <p className="text-white"> {text}</p>
      </div>
    </div>
  );
}

export default InclusionText;
