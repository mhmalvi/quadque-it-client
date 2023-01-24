import React, { useState } from "react";
import video from "../../../Asset/Image/video.png";
import Icons from "../../../Components/Shared/Icons";
import classroom2 from "../../../Asset/Image/classroom2.png";
import library from "../../../Asset/Image/library.png";
import collegeroom from "../../../Asset/Image/collegeroom.png";
import projection from "../../../Asset/Image/projection.png";
import meeting from "../../../Asset/Image/meeting.png";
import hallway from "../../../Asset/Image/hallway.png";
import librarytop from "../../../Asset/Image/librarytop.png";
import confarence from "../../../Asset/Image/confarence.png";

const Gallery = () => {
  const [toogleTab, setToogleTab] = useState(1);

  const ToogleTab = (index) => {
    setToogleTab(index);
  };
  return (
    <>
      <div className="bg-home-color text-white pt-36 lg:mt-10 m-auto">
        <div className="lg:w-3/4 lg:flex lg:justify-center m-auto">
          <div className="w-full flex justify-center m-auto">
            <img
              src={video}
              alt=""
              className="lg:rounded-xl lg:px-4 md:shrink-0 "
            />
          </div>
          <div className="sm:w-2/3 lg:w-full flex-col px-5 lg:justify-start m-auto">
            <div className="text-start text-2xl font-semibold pb-2">
              Our Institute
            </div>
            <div className="mx-2 text-sm font-thin text-start lg:w-2/3 pb-4 lg:px-0">
              We have a diverse team of dedicated individuals with years of
              experience in digital marketing and IT. We want to deliver the
              most effective classes while maintaining the following core
              values:{" "}
            </div>
            <div className="flex flex-wrap lg:flex-col">
              <div className="flex flex-wrap justify-start pr-10">
                <Icons.Tick width={20} />
                Effective Lessons
              </div>
              <div className="flex flex-wrap justify-start pr-10">
                <Icons.Tick width={20} />
                Personalised Training
              </div>
              <div className="flex flex-wrap justify-start pr-10">
                <Icons.Tick width={20} /> High-Quality Courses
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly items-start py-5 leading-10 px-4 lg:px-30">
          <div
            onClick={() => ToogleTab(1)}
            className={
              toogleTab === 1
                ? "text-[#23BDEE] border-[#23BDEE] border-b-2 px-2 cursor-pointer"
                : "cursor-pointer  px-2"
            }
          >
            All
          </div>
          <div
            onClick={() => ToogleTab(2)}
            className={
              toogleTab === 2
                ? "text-[#23BDEE] border-[#23BDEE] border-b-2 px-2 cursor-pointer"
                : "cursor-pointer  px-2"
            }
          >
            UI Design
          </div>
          <div
            onClick={() => ToogleTab(3)}
            className={
              toogleTab === 3
                ? "text-[#23BDEE] border-[#23BDEE] border-b-2 px-2 cursor-pointer"
                : "cursor-pointer  px-2"
            }
          >
            UX Design
          </div>
          <div
            onClick={() => ToogleTab(4)}
            className={
              toogleTab === 4
                ? "text-[#23BDEE] border-[#23BDEE] border-b-2 px-2 cursor-pointer"
                : "cursor-pointer  px-2"
            }
          >
            Product Design
          </div>
          <div
            onClick={() => ToogleTab(5)}
            className={
              toogleTab === 5
                ? "text-[#23BDEE] border-[#23BDEE] border-b-2 px-2 cursor-pointer"
                : "cursor-pointer px-2"
            }
          >
            Articles
          </div>
          <div
            onClick={() => ToogleTab(6)}
            className={
              toogleTab === 6
                ? "text-[#23BDEE] border-[#23BDEE] border-b-2 px-2 cursor-pointer"
                : "cursor-pointer px-2"
            }
          >
            Tutorials
          </div>
          <div
            onClick={() => ToogleTab(7)}
            className={
              toogleTab === 7
                ? "text-[#23BDEE] border-[#23BDEE] border-b-2 px-2 cursor-pointer"
                : "cursor-pointer px-2"
            }
          >
            News
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid lg:grid-cols-12 pt-10 gap-2 lg:gap-6 m-auto">
            <div className="col-span-12 lg:col-span-5">
              <img
                src={classroom2}
                alt=""
                className="w-full lg:h-67 lg:rounded-xl"
              />
            </div>
            <div className="col-span-12 lg:col-span-7">
              <img
                src={library}
                alt=""
                className="w-full lg:h-67 lg:rounded-xl"
              />
            </div>

            <div className="col-span-12 lg:col-span-4">
              <img
                src={collegeroom}
                alt=""
                className="w-full lg:h-67 lg:rounded-xl"
              />
            </div>

            <div className="col-span-12 lg:col-span-4">
              <img
                src={projection}
                alt=""
                className="w-full lg:h-67 lg:rounded-xl"
              />
            </div>

            <div className="col-span-12 lg:col-span-4">
              <img
                src={meeting}
                alt=""
                className="w-full lg:h-67 lg:rounded-xl"
              />
            </div>

            <div className="col-span-12 lg:col-span-3">
              <img
                src={hallway}
                alt=""
                className="w-full lg:h-67 lg:rounded-xl"
              />
            </div>

            <div className="col-span-12 lg:col-span-4">
              <img
                src={librarytop}
                alt=""
                className="w-full lg:h-67 lg:rounded-xl"
              />
            </div>

            <div className="col-span-12 lg:col-span-5">
              <img
                src={confarence}
                alt=""
                className="w-full lg:h-67 lg:rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
