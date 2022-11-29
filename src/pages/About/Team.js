import React from "react";
import Images from "../../assets/img";
import TeamCard from "../../components/common/cards/TeamCard";
import Hero from "../../components/common/Hero";
import ThickLine from "../../components/common/lines/ThickLine";
import SubTitle from "../../components/common/SubTitle";


function Team() {
  return (
    <div className="bg-neutral-focus">
      <Hero
        homeImage={Images.inclusionHome}
        image={Images.teamHero}
        title={"Team"}
        subTitle={"Our Team"}
        description1={
          "Axar Construction was founded with the idea that nothing delivers superior quality and craftsmanship better then a solid TEAM effort. Our exceptional TEAM is comprised of some of the most experienced professionals in the industry. Learn more about our TEAM below!"
        }
        description2={
          "Our company has employed sufficient personnel to take up small scale to large scale projects and the duties and supervision of the projects is carried out efficiently and effectively. Most of our employees have been with us for several years and have gained sound knowledge and skills to be able to perform project management. We have been recognized and awarded as a top 100 mid-size companies in Kenya in the GSR. Our company comprises of 12 qualified and experienced construction supervisors backed by over 200 employees belonging to various departments within the company."
        }
      />

      <div className="">
        <div className="px-4 py-14 lg:px-28 lg:py-14 ">
          <div className="flex flex-col gap-6">
            <SubTitle text={"Our Team"} />
            <ThickLine />
            <div className="flex justify-center items-center py-4">
              <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
