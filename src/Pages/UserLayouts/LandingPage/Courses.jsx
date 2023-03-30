import React, { useState } from "react";
import Course from "../../../Asset/Image/image9.png";
//import useCategory from "../../../Components/Shared/Hooks/useCategory";
import Categories from "./JsonData/categories.json"
import ProgImg from "../../../Asset/Image/programming2.png"
import GraphicImg from "../../../Asset/Image/graphic-design2.png"
import MktImg from "../../../Asset/Image/digital-marketing2.png"
import ContentImg from "../../../Asset/Image/content-writing2.png"

const Courses = () => {
  //const [Category] = useCategory();
  return (
    <div className="w-full pb-18 lg:pb-24">
      <div className="lg:bg-[#5c5bfd10] lg:text-5xl text-center m-auto lg:mx-10 rounded-3xl py-4 lg:py-24 px-4 lg:px-20">
        <div className="text-black text-2xl md:text-4xl font-bold pb-5 text-shadow">
          Effective courses to develop in-demand skills
        </div>
        <div className="text-black text-sm md:text-base font-thin pb-5">
          Check out the different categories of courses that we are offering
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 3lg:grid-cols-4 text-black md:text-white text-xs md:text-2xl lg:pt-13 gap-6">
          {Categories?.map((category) => (
            <div className="w-full shadow-lg flex-col bg-white md:bg-home-color hover:lg:bg-brand-color duration-500 p-4 rounded-2xl">
              <div className="flex justify-center items-center my-5">
                <img src={catagoryImg?.find(f=>f.catid===category.category).image} alt="" className="w-[200px] h-[200px] flex justify-center items-center m-auto" />
              </div>
              <div className="">{category?.name} </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default  Courses
const catagoryImg = [
  { catid: 1, image: ProgImg },
  { catid: 2, image: MktImg },
  { catid: 3, image: GraphicImg },
  { catid: 4, image: ContentImg },
];