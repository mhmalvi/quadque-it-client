import React, { useEffect, useState } from "react";
import Graphics from "../../../Asset/Image/graphics.png";
import Motion from "../../../Asset/Image/motion.png";
import Uiux from "../../../Asset/Image/uiux.png";
import Banner from "../../../Asset/Image/banner.png";
import Reading from "../../../Asset/Image/reading.png";
import Course from "./Course.json";
import { useNavigate } from "react-router-dom";
import { Select } from "antd";

import useCategory from "../../../Components/Shared/Hooks/useCategory";

export default function CourseGallery() {
  const [Category] = useCategory();
  const navigate = useNavigate();
  const [toogleTab, setToogleTab] = useState("Graphics & Design");
  const [toogleMediumTab, setToogleMediumTab] = useState("both");
  const [categoryData, setCategoryData] = useState();
  const [categoryItems, setCategoryItems] = useState([]);
  const [courseData, setCourseData] = useState();

  const ToogleCategory = (index) => {
    setToogleTab(index);
    console.log("toogleTab", toogleTab);
  };

  const ToogleMedium = (index) => {
    setToogleMediumTab(index);
    console.log("medium", toogleMediumTab);
  };

  const navigateToCourseDetails = () => {
    navigate("./course-detail");
  };

  useEffect(() => {
    let CourseDetail;
    if (toogleTab !== "") {
      if (toogleMediumTab !== "both") {
        CourseDetail = Course.filter(
          (cor) => cor.category == toogleTab && cor.platform == toogleMediumTab
        );
      } else {
        CourseDetail = Course.filter((cor) => cor.category == toogleTab);
      }
      setCourseData(CourseDetail);
    }
  }, [Course, toogleTab, toogleMediumTab]);

  useEffect(() => {
    const items = [];

    (async () => {
      Category.forEach((category) => {
        items.push({
          id: `${category?.id}`,
          value: `${category?.name}`,
        });
      });
      setCategoryItems(items);
      console.log("category data", categoryData);
    })();
  }, [Category]);
  console.log("items,", categoryItems);

  return (
    <div className="w-full bg-[#040422] h-screen text-white">
      <div className="flex lg:mt-10 pt-44 lg:pb-20">
        <div className="w-full ">
          <div className="flex m-auto justify-center">
            <div className="hidden lg:block">
              <img
                src={Banner}
                className="absolute top-[44%] left-[10%]"
                alt=""
              />
            </div>
            <div className="w-2/3 sm:w-1/2 lg:w-1/3 text-white text-center">
              <div className="text-4xl pb-2 text-shadow-white">Courses</div>
              <div className="m-auto pb-8">
                Browse through our extensive collection of courses to choose one
                that fits your experience level and goals.
              </div>
              <div className="flex justify-center">
                <div
                  onClick={() => ToogleMedium("offline")}
                  className={`px-4 rounded-2xl m-2 cursor-pointer ${
                    toogleMediumTab === "offline"
                      ? "bg-white text-black duration-500"
                      : "bg-black text-white duration-500"
                  }`}
                >
                  Offline
                </div>
                <div
                  onClick={() => ToogleMedium("online")}
                  className={`px-4 rounded-2xl m-2 cursor-pointer ${
                    toogleMediumTab === "online"
                      ? "bg-white text-black duration-500"
                      : "bg-black text-white duration-500"
                  }`}
                >
                  Online
                </div>
                <div
                  onClick={() => ToogleMedium("both")}
                  className={`px-4 rounded-2xl m-2 cursor-pointer ${
                    toogleMediumTab === "both"
                      ? "bg-white text-black duration-500"
                      : "bg-black text-white duration-500"
                  }`}
                >
                  Both
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src={Reading}
                className="absolute right-[6%] top-[31%]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-home-color lg:py-13 px-5 py-10 lg:px-30 lg:relative">
        <div className="lg:flex">
          <div className="w-1/3 hidden lg:block">
            <div className="text-xl">Course Category</div>
            <ul className="flex-col py-5 text-sm font-thin leading-10">
              {Category?.map((category) => (
                <li
                  key={category.id}
                  onClick={() => ToogleCategory(category.name)}
                >
                  <div
                    className={
                      toogleTab === category.name
                        ? "text-[#23BDEE] scale-105 duration-200 cursor-pointer"
                        : "cursor-pointer"
                    }
                  >
                    {category.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:hidden flex justify-center">
            <Select
              style={{
                width: "60%",
              }}
              placeholder="select Category"
              onChange={ToogleCategory}
              options={categoryItems}
            />
          </div>

          <div className="w-full bg-[#040422]">
            {/* COURSE Gallery */}
            <div className="grid grid-col-1 lg:grid-cols-2 text-white gap-6 lg:mx-18 my-6">
              {/* cards */}
              {courseData?.map((details) =>
                details ? (
                  <div
                    onClick={navigateToCourseDetails}
                    className="flex-col group bg-home-color border border-white border-opacity-30 rounded-3xl hover:border-2 hover:bg-[#050042] hover:border-[#23BDEE] ease-in duration-300"
                  >
                    <div className="flex-wrap overflow-hidden rounded-3xl m-2">
                      <img
                        src={Motion}
                        alt=""
                        className="w-full rounded-3xl scale-100 group-hover:scale-125 ease-in duration-700"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex-col">
                        <div className="flex justify-between">
                          <div className="bg-[#1483a4] text-[#23BDEE] bg-opacity-50 rounded-full py-2 px-4">
                            {details.date}
                          </div>
                          <div className="py-2">{details.price} tk</div>
                        </div>
                      </div>
                      <div className="text-xl pt-2 left-0">{details.title}</div>
                      <div className="py-2">{details.para}</div>
                    </div>
                  </div>
                ) : (
                  "No Course found!"
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
