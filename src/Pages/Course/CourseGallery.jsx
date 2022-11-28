import React, { useEffect, useState } from "react";
import Graphics from "../../Asset/Image/graphics.png";
import Motion from "../../Asset/Image/motion.png";
import Uiux from "../../Asset/Image/uiux.png";
import Course from "./Course.json"
import { useNavigate } from "react-router-dom";

export default function CourseGallery() {
  const navigate = useNavigate();
  const [toogleTab, setToogleTab] = useState(1);
  const [courseData, setCourseData] = useState();

  const ToogleTab = (index) => {
    console.log(index);
    setToogleTab(index);
  };

  const Badge = [
    {
      id: 2,
      color: "green",
    }

  ]

  const navigateToCourseDetails = () => {
    navigate("./course-detail");
  }

  useEffect(() => {
    let CourseDetail;
    if (toogleTab !== 1) {
      CourseDetail = Course.filter((cor) => cor.category == toogleTab);
    } else {
      CourseDetail = Course.map((cor) => cor);
    }
    setCourseData(CourseDetail);
  }, [Course, toogleTab]);

  return (
    <div className="w-full font-poppins text-white">
      <div className="bg-home-color py-13 px-30 relative">
        <div className="flex">
          <div className="w-1/3">
            <div className="text-xl">Course Category</div>
            <ul className="py-5 leading-10">
              <li onClick={() => ToogleTab(1)}>
                <div
                  className={
                    toogleTab === 1
                      ? "w-1/2 text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer"
                      : "cursor-pointer"
                  }
                >
                  All
                </div>
              </li>
              <li onClick={() => ToogleTab(2)}>
                <div
                  className={
                    toogleTab === 2
                      ? "w-1/2 text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer"
                      : "cursor-pointer"
                  }
                >
                  Content Writing
                </div>
              </li>
              <li onClick={() => ToogleTab(3)}>
                <div
                  className={
                    toogleTab === 3
                      ? "w-1/2 text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer"
                      : "cursor-pointer"
                  }
                >
                  Advanced Programming
                </div>
              </li>
              <li onClick={() => ToogleTab(4)}>
                <div
                  className={
                    toogleTab === 4
                      ? "w-1/2 text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer"
                      : "cursor-pointer"
                  }
                >
                  Digital Marketing
                </div>
              </li>
              <li onClick={() => ToogleTab(5)}>
                <div
                  className={
                    toogleTab === 5
                      ? "w-1/2 text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer"
                      : "cursor-pointer"
                  }
                >
                  Programming
                </div>
              </li>
              <li onClick={() => ToogleTab(6)}>
                <div
                  className={
                    toogleTab === 6
                      ? "w-1/2 text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer"
                      : "cursor-pointer"
                  }
                >
                  Video & Animation
                </div>
              </li>
              <li onClick={() => ToogleTab(7)}>
                <div
                  className={
                    toogleTab === 7
                      ? "w-1/2 text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer"
                      : "cursor-pointer"
                  }
                >
                  Graphics & Design
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full">
            {/* Gallery */}
            {/* row1 */}
            <div className="grid grid-col-1 lg:grid-cols-2 text-white gap-6 my-6">
              {/* card1 */}
              {courseData?.map((details) => (
                <div onClick={navigateToCourseDetails} className="flex-col group bg-home-color rounded-3xl hover:border-4 hover:bg-[#050042] hover:border-[#23BDEE] transition-ease-out duration-300">
                  <div className="">
                    <img
                      src={Graphics}
                      alt=""
                      className="w-full rounded-3xl scale-90 group-hover:scale-100 ease-in duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex-col">
                      <div className="flex justify-between">
                        <div className="bg-[#1483a4] text-[#23BDEE] bg-opacity-50 rounded-full py-2 px-4">
                          {details.date}
                        </div>
                        <div className="text-xl py-2">{details.price} tk</div>
                      </div>
                    </div>
                    <div className="text-2xl pt-2 left-0">{details.title}</div>
                    <div className="py-2">{details.para}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
