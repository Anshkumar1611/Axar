import React from "react";
import Images from "../../../assets/img";
import { BiBuildingHouse } from "react-icons/bi";

const data = [
  {
    name: "Metro",
    location: "Gurgaon",
    cost: "50 cr",
    photo: `${Images.hero1}`,
  },
  {
    name: "High Tower",
    location: "Delhi",
    cost: "120 cr",
    photo: `${Images.hero6}`,
  },
  {
    name: "Radhe-Krishna Dham",
    location: "Mathura",
    cost: "50 lakhs",
    photo: `${Images.hero5}`,
  },
  {
    name: "Govardhan",
    location: "Govardhan",
    cost: "not scalable",
    photo: `${Images.hero4}`,
  },
  {
    name: "Kailash Parvat",
    location: "Mount Kailash",
    cost: "infinity",
    photo: `${Images.hero3}`,
  },
  {
    name: "Colony  of Gokul",
    location: "Gokul",
    cost: "1 cr",
    photo: `${Images.hero2}`,
  },
];

function Projects() {
  return data.map((item) => {
    return (
      <div className="">
        <div className="relative h-80 w-96">
          <div className="opacity-100 h-full w-full">
            <img
              src={item.photo}
              alt="Images"
              className="bg-cover bg-center h-full w-full "
            />
          </div>
          <div className="opacity-100 absolute inset-x-0 bottom-0 hover:opacity-100 backdrop-opacity-30 hover:backdrop-opacity-40 backdrop-invert cursor-pointer">
            <div className="flex justify-between px-5 py-5">
              <p className="font-semibold text-white  flex flex-col">
                <p>{item.name}</p>
                <p>Location : {item.location}</p>
                <p>Cost : {item.cost}</p>
              </p>
              <div className="text-5xl py-5 text-white">
                <BiBuildingHouse />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default Projects;
