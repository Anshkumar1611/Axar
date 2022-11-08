import React from "react";
import Images from "../../../assets/img";
import ThinLine from "../lines/ThinLine";
function TeamCard() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl rounded-none">
      <figure className="h-64">
        <img src={Images.home} alt="Shoes" />
      </figure>
      <div className="card-body bg-primary items-center">
        <h2 className="card-title">Name</h2>
        <div className="flex ">
          <ThinLine />
        </div>
        <p>Position</p>
      </div>
    </div>
  );
}

export default TeamCard;
