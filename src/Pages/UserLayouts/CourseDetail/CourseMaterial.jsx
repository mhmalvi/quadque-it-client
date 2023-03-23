import React, { useState, useEffect } from "react";
import Icons from "../../../Components/Shared/Icons";
import Materials from "./materials.json";
import Tools from "../../../Asset/Image/group555.png";

const CourseMaterial = () => {
  const [toogleTab, setToogleTab] = useState(1);
  const [courseData, setCourseData] = useState();

  const ToogleTab = (index) => {
    setToogleTab(index);
  };
  useEffect(() => {
    let CourseDetail;
    CourseDetail = Materials?.filter((cor) => cor.category == toogleTab);
    setCourseData(CourseDetail);
  }, [Materials, toogleTab]);

  return (
    <div>
      {/* tools section */}
      <div className="w-full lg:bg-gradient-to-l from-transparent to-[#ffffff10] rounded-3xl text-white lg:py-12 lg:px-12 mb-18">
        <div className="lg:flex justify-evenly  gap-10">
          <div className="w-full lg:w-2/3 flex-col justify-evenly">
            <div className="flex justify-around text-lg lg:text-xl">
              <div
                onClick={() => ToogleTab(1)}
                className={
                  toogleTab === 1
                    ? "text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer scale-110 duration-200"
                    : "cursor-pointer"
                }
              >
                Tools
              </div>
              <div
                onClick={() => ToogleTab(2)}
                className={
                  toogleTab === 2
                    ? "text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer scale-110 duration-200"
                    : "cursor-pointer"
                }
              >
                Plugins
              </div>
              <div
                onClick={() => ToogleTab(3)}
                className={
                  toogleTab === 3
                    ? "text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer scale-110 duration-200"
                    : "cursor-pointer"
                }
              >
                Pre-requisite
              </div>
              <div
                onClick={() => ToogleTab(4)}
                className={
                  toogleTab === 4
                    ? "text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer scale-110 duration-200"
                    : "cursor-pointer"
                }
              >
                Course Module
              </div>
            </div>
            <div className="flex flex-wrap justify-start my-10 mx-10 gap-5">
              {courseData?.map((data) => (
                <span className="flex py-1">
                  <img src={data?.image} width={40} alt="" className={`${(toogleTab === 4 || toogleTab === 3) && "w-4 h-4"}`}/>
                  <span className="m-auto pl-2">{data?.title}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/3 text-center lg:text-start px-6 lg:px-0">
            <img src={Tools} alt="" />
          </div>
        </div>
      </div>

      {/* job opportunity section */}
      <div className="w-full lg:bg-gradient-to-r from-transparent to-[#ffffff10] rounded-3xl text-white lg:py-12 mb-24">
        <div className="lg:flex justify-evenly">
          <div className="w-2/3 lg:w-1/2 flex flex-wrap justify-center mx-auto gap-12 pb-16 lg:py-8">
            <div className="">
              <div>
                <Icons.Bank className="lg:w-full m-auto pb-2" />
                <span className="w-25 text-[#00F0FF] text-center"> Creative agencies</span>
              </div>
            </div>
            <div className="">
              <div>
                <Icons.Tourcompanies className="lg:w-full m-auto pb-2" />
                <span className="w-25 text-[#F9C1BB]">Media industry</span>
              </div>
            </div>
            <div className="">
              <div>
                <Icons.Itcompanies className="lg:w-full m-auto pb-2" />
                <span className="w-25 text-[#0FA379]">Start-ups</span>
              </div>
            </div>
            <div className="">
              <div>
                <Icons.Supershop className="lg:w-full m-auto pb-2" />
                <span className="w-25 text-[#BA62FF]">Freelancing</span>
              </div>
            </div>
            <div className="">
              <div>
                <Icons.Fashionindustry className="lg:w-full m-auto pb-2" />
                <span className="w-25 text-[#F1511B]">IT companies</span>
              </div>
            </div>
            <div className="">
              <div>
                <Icons.Mediaindustries className="lg:w-full m-auto pb-2" />
                <span className="w-25 text-[#C1A74A]">Large corporations</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 text-center lg:text-start m-auto px-6 lg:px-0">
            <div className="text-2xl lg:text-4xl pb-9">Career Outcomes</div>
            <div className="lg:text-xl">
              With the right motion graphic design skills, you can build an
              amazing career in various sectors.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseMaterial;
