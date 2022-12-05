import React from "react";

function Normal({ text, type, scrollBottom, scrollRef }) {
  return (
    <button
      type={type}
      className="btn btn-active border-base-content rounded-full px-5 text-white hover:bg-base-content bg-yellow hover:border-none "
      onClick={() => scrollBottom(scrollRef)}
      >
      {text}
    </button>
  );
}

export default Normal;
