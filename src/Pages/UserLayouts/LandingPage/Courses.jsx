import React from "react";
//import useCategory from "../../../Components/Shared/Hooks/useCategory";
import ContentImg from "../../../Asset/Image/content-writing2.png";
import MktImg from "../../../Asset/Image/digital-marketing2.png";
import GraphicImg from "../../../Asset/Image/graphic-design2.png";
import ProgImg from "../../../Asset/Image/programming2.png";
import Categories from "../../../Components/Shared/JsonData/categories.json";
import Zoom from "react-reveal/Zoom";
import "./style.css"

const Courses = () => {
  //const [Category] = useCategory();
  return (
    <div className="w-full pb-14 lg:pb-24 overflow-x-hidden">
      <div className="lg:bg-[#5c5bfd10] lg:text-5xl text-center m-auto lg:mx-10 rounded-3xl lg:shadow-lg py-4 lg:py-24 px-4 lg:px-20">
        <div className="text-black text-2xl md:text-4xl font-bold pb-5 text-shadow">
          Effective courses to develop in-demand skills
        </div>
        <div className="text-black text-sm md:text-base font-thin pb-5">
          Check out the different categories of courses that we are offering
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 3lg:grid-cols-4 text-black md:text-white text-xs md:text-2xl lg:pt-13 gap-6">
          {Categories?.map((category, i) => (
            <Zoom delay={500 * i}>
              <div
                key={i}
                className="w-full shadow-lg flex-col bg-white md:bg-home-color hover:lg:bg-brand-color duration-500 p-4 rounded-2xl spirit-bomb iconShine"
              >
                <div className="flex justify-center items-center my-5">
                  <img
                    src={
                      catagoryImg?.find((f) => f.catid === category.category)
                        .image
                    }
                    alt=""
                    className="lg:w-[200px] lg:h-[200px] flex justify-center items-center m-auto"
                  />
                </div>
                <div className="">{category?.name} </div>
              </div>
            </Zoom>
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