import React from "react";
import { RiHomeSmileLine } from "react-icons/ri";
import { BsFillJournalBookmarkFill, BsAward } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import ReactPlayer from "react-player/youtube";

function About() {
  return (
    <div className="lg:h-screen">
      <div className="bg-base-200 lg:mx-24 rounded-lg">
        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row gap-10 p-10 lg:gap-32">
            <div className="flex flex-row gap-10 justify-between lg:gap-32">
              <div className="flex flex-row gap-2">
                <div>
                  <RiHomeSmileLine className="text-6xl text-bluish" />
                </div>
                <div className="flex flex-col">
                  <p className="text-3xl font-bold text-white">20</p>
                  <p className="font-semibold text-yellow">Happy Clients</p>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <div>
                  <BsFillJournalBookmarkFill className="text-6xl text-bluish" />
                </div>
                <div className="flex flex-col">
                  <p className="text-3xl font-bold text-white">20</p>
                  <p className="font-semibold text-yellow">Projects</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-10 justify-between lg:gap-32">
              <div className="flex flex-row gap-2">
                <div>
                  <MdOutlineWatchLater className="text-6xl text-bluish" />
                </div>
                <div className="flex flex-col">
                  <p className="text-3xl font-bold text-white">20</p>
                  <p className="font-semibold text-yellow">
                    Years of Experience
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <div>
                  <BsAward className="text-6xl text-bluish" />
                </div>
                <div className="flex flex-col">
                  <p className="text-3xl font-bold text-white">20</p>
                  <p className="font-semibold text-yellow">Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-4 lg:flex-row lg:m-4">
          <div className="flex w-full lg:basis-1/2 border-8 border-white">
            <ReactPlayer url="https://youtu.be/PH_fRs1-yZ8" className='w-full' />
          </div>
          <div className="lg:basis-1/2 py-4 text-white lg:p-0 lg:px-4">
            <p className="font-sans italic">
             " Our number one goal is to make your building experience a positive
              one! With our open and easy build process, it is simple to achieve
              your dream! With our extensive experience in designing and
              building custom homes, our team will ensure that your new home
              lives up to all your expectations."<br/><br/>
               So come and experience the AXAR
              Luxury approach to custom home building, and see your dreams come
              true! Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante.<br/><br/>
               Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Vestibulum
              tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
              Donec eu libero sit amet quam egestas semper. Aenean ultricies mi
              vitae est. Mauris placerat eleifend leo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
