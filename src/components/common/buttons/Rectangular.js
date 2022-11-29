import React from "react";
import { Link } from "react-router-dom";

function Rectangular({text,path}) {
  return <Link to={path} className="btn btn-outline">{text}</Link>;
}

export default Rectangular;
