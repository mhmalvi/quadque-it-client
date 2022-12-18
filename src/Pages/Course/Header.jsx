import React from "react";
import Banner from "../../Asset/Image/banner.png";
import Reading from "../../Asset/Image/reading.png";
import AnimatedText from "react-animated-text-content";

export default function Header() {
  return (
    <div className="w-full">
      <div className="flex bg-[#040422] lg:mt-10 pt-44 lg:pb-20">
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
              <div className="text-4xl pb-2">
                  Courses
              </div>
              <div className="m-auto pb-8">
                  Browse through our extensive collection of courses to choose
                  one that fits your experience level and goals.
              </div>
              <div className="flex justify-center">
                <div className="bg-white text-black px-4 rounded-2xl m-2">
                  All
                </div>
                <div className="bg-black text-white px-4 rounded-2xl m-2">
                  Offline
                </div>
                <div className="bg-black text-white px-4 rounded-2xl m-2">
                  Online
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
    </div>
  );
}
