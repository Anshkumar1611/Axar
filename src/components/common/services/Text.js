import React from "react";
import { TiTick } from "react-icons/ti";

function Text({ title, description }) {
  return (
    <>
      <p className="text-bluish font font-Playfair font-semibold text-2xl">
        {title}
      </p>
      <p className="italic text-white">" {description}"</p>
      <div className="flex flex-row items-center gap-4 ">
        <TiTick className="" />
        <p className="">
          Ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="flex flex-row items-center gap-4 ">
        <TiTick />
        <p> Duis aute irure dolor in reprehenderit in voluptate velit.</p>
      </div>
    </>
  );
}

export default Text;
