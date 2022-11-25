import React from "react";
import { TiTick } from "react-icons/ti";
import SecondaryTitle from "../text/SecondaryTitle";

function TextSection({ title, description }) {
  return (
    <>
      <SecondaryTitle title={title}/>
      <p className="italic text-white">" {description}"</p>
      <div className="flex flex-row items-center gap-4 ">
        <TiTick />
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

export default TextSection;
