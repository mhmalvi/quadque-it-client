import React from "react";
import Image from "../../../Asset/Image/image44.png";
import Footer from "../../../Asset/Image/footer.png";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const BrowseCourse = ({theme}) => {
  return (
    <div className={`${theme==="dark" && "bg-home-color"} duration-700 w-full pb-18 lg:mb-0 sm:pb-0 lg:pt-28 overflow-x-hidden`}>
      <div className={`${theme==="dark"? "sm:bg-gradient-to-t from-[#000000] via-[#2F327D] to-home-color":"sm:bg-gradient-to-t from-[#000000] to-[#2F327D]"}`}>
        <div className="sm:flex sm:justify-center sm:px-6">
          <div className="w-full flex justify-center items-center shrink-0 sm:w-1/2 sm:relative sm:-top-20 p-4">
            <Fade left big>
              <img src={Image} width={411} alt="" />
            </Fade>
          </div>
          <Fade right big>
            <div className={`w-full lg:w-1/3 ${theme==="dark"? "text-white":"text-black"} sm:text-white text-center sm:text-start sm:py-16`}>
              <div className="text-base sm:text-xl md:text-2xl font-bold pb-5 px-4 text-shadow">
                Choose a Course Suited to Your Career Goals{" "}
              </div>
              <Link to={"./course"}>
                <button className="bg-[#2F327D] hover:bg-[#484cc5] rounded-full text-sm sm:text-base lg:text-xl text-white text-center m-auto leading-tight sm:m-0 px-8 py-3 spirit-bomb duration-700">
                  Browse courses
                </button>
              </Link>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
export default BrowseCourse;