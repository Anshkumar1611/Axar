import React from "react";

function Main({ text }) {
  return (
    <button className="btn btn-active  border-base-content rounded-full px-5 hover:text-black hover:bg-base-content hover:border-base-content ">
      {text}
    </button>
  );
}

export default Main;
