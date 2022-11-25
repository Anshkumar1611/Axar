import React from "react";
import Images from "../../../assets/img";
import Photo from "../../../components/common/whyUsDiv/photoDiv/Photo";

const projects = [
  { photo: Images.houseImage1, title: "Title 1" },
  { photo: Images.houseImage2, title: "Title 2" },
  { photo: Images.houseImage3, title: "Title 3" },
  { photo: Images.houseImage4, title: "Title 4" },
  { photo: Images.houseImage5, title: "Title 5" },
  { photo: Images.houseImage6, title: "Title 6" },
  { photo: Images.houseImage7, title: "Title 7" },
];

function HouseImages() {
  return (
    <>
      {projects.map((item, index) => {
        return (
          <div key={index} className="w-full h-full">
            <Photo url={item.photo} title={item.title} className="w-full h-full" />
          </div>
        );
      })}
    </>
  );
}

export default HouseImages;
