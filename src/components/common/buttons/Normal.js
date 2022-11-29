import React from 'react'

function Normal({text,type}) {
  return (
    <button type={type} className="btn btn-active border-base-content rounded-full px-5 text-white hover:bg-base-content bg-yellow hover:border-none ">
      {text}
    </button>  )
}

export default Normal