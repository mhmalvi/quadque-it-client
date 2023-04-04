import React from "react";
import Online from "../../../Asset/Image/online-course2.png";
import Offline from "../../../Asset/Image/offline-course2.png";
import { Link } from "react-router-dom";

const TwoWayCourse = () => {
  return (
    <div className="w-full pb-13 lg:pb-40">
      <div className="bg-home-color text-white text-center lg:mx-10 lg:rounded-3xl py-12 px-4 lg:px-20">
        <div className="text-4xl font-semibold pb-5 text-shadow-white">
          Available Study Options
        </div>
        <div className="lg:w-1/2 text-base font-thin m-auto">
          We have both online and offline classes for our courses. Therefore,
          you have the option to attend the classes from the comfort of your
          home or in person.
        </div>
        <div className="flex-col lg:flex lg:flex-row justify-center text-white pt-13 gap-6">
          <div className="lg:w-1/2 flex-col bg-home-color rounded-3xl">
            <div className="flex">
              <img src={Online} alt="" className="w-7/12 md:shrink-0 mx-auto" />
            </div>
            <div className="px-10 pt-10">
              <div className="text-base lg:text-2xl">
                Attend your classes online <br /> from any location
              </div>
              <Link to={"./course"}>
                <div className="inline-block px-5 border border-white rounded-full mx-auto text-base lg:text-2xl cursor-pointer py-2 lg:py-4 my-4">
                  Online courses
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex-col bg-home-color rounded-3xl">
            <div className="flex">
              <img
                src={Offline}
                alt=""
                className="w-7/12 md:shrink-0 mx-auto"
              />
            </div>
            <div className="px-10 pt-10">
              <div className="text-base lg:text-2xl">
                Attend your classes physically <br /> for a personal experience
              </div>
              <Link to={"./course"}>
                <div className="inline-block px-5 border border-white rounded-full mx-auto text-base lg:text-2xl cursor-pointer py-2 lg:py-4 my-4">
                  Offline courses
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TwoWayCourse;
