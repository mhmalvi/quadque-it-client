import React, { useState, useEffect } from "react";
import Icons from "../../Components/Shared/Icons";
import Materials from './materials.json'
import Tools from '../../Asset/Image/group555.png'

const CourseMaterial = () => {
  const [toogleTab, setToogleTab] = useState(1);
  const [courseData, setCourseData] = useState();

  const ToogleTab = (index) => {
    setToogleTab(index);
  };
  useEffect(() => {
    let CourseDetail;
      CourseDetail = Materials.filter((cor) => cor.category == toogleTab);
    setCourseData(CourseDetail);
  }, [Materials, toogleTab]);
  
  return (
    <div>
      {/* tools section */}
      <div className="w-full lg:bg-gradient-to-l from-transparent to-[#ffffff10] rounded-3xl font-poppins text-white lg:py-12 lg:px-12 mb-18">
        <div className="lg:flex justify-evenly  gap-10">
          <div className="w-full lg:w-2/3 flex-col justify-evenly">
            <div className="flex justify-around text-lg lg:text-xl">
              <div
                onClick={() => ToogleTab(1)}
                className={
                  toogleTab === 1
                    ? "text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer scale-110 duration-150"
                    : "cursor-pointer"
                }
              >
                Tools
              </div>
              <div
                onClick={() => ToogleTab(2)}
                className={
                  toogleTab === 2
                    ? "text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer scale-110 duration-150"
                    : "cursor-pointer"
                }
              >
                Plugins
              </div>
              <div
                onClick={() => ToogleTab(3)}
                className={
                  toogleTab === 3
                    ? "text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer scale-110 duration-150"
                    : "cursor-pointer"
                }
              >
                Pre-requisite
              </div>
              <div
                onClick={() => ToogleTab(4)}
                className={
                  toogleTab === 4
                    ? "text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer scale-110 duration-150"
                    : "cursor-pointer"
                }
              >
                Course Module
              </div>
            </div>
            <div className="flex flex-wrap justify-center my-10 gap-24 ">
                {courseData?.map((data)=>(
                <div className="py-2"><img src={data.image} width={40} alt="" />{data.title}</div>
                ))}
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/3 text-center lg:text-start px-6 lg:px-0">
            <img src={Tools} alt="" />
          </div>
        </div>
      </div>

      {/* job opportunity section */}
      <div className="w-full lg:bg-gradient-to-r from-transparent to-[#ffffff10] rounded-3xl font-poppins text-white lg:py-12 lg:px-12 mb-24">
        <div className="lg:flex justify-evenly">
          <div className="w-2/3 lg:w-1/2 flex flex-wrap justify-center gap-16 m-auto pb-16">
            <div className="">
              <div>
                <Icons.Bank className="w-19 lg:w-full m-auto" />
              </div>
            </div>
            <div className="">
              <div>
                <Icons.Supershop className="w-19 lg:w-full m-auto" />
              </div>
            </div>
            <div className="">
              <div>
                <Icons.Tourcompanies className="w-19 lg:w-full m-auto" />
              </div>
            </div>
            <div className="">
              <div>
                <Icons.Fashionindustry className="w-19 lg:w-full m-auto" />
              </div>
            </div>
            <div className="">
              <div>
                <Icons.Itcompanies className="w-19 lg:w-full m-auto" />
              </div>
            </div>
            <div className="">
              <div>
                <Icons.Mediaindustries className="w-19 lg:w-full m-auto" />
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 text-center lg:text-start m-auto px-6 lg:px-0">
            <div className="text-2xl lg:text-4xl pb-9">Job Opportunities</div>
            <div className="lg:text-xl pb-18">
              To be a successful graphic designer you need to have training in
              quality curriculum as well as project based work experience and a
              good idea about the marketplace. So none of these have been
              included together in our course module.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseMaterial;
