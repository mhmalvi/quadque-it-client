import React from "react";
import Graphics from "../../Asset/Image/image4.png";
import Motion from "../../Asset/Image/image5.png";

export default function TwoWayCourse() {
  return (
    <div className="w-full pb-13 lg:pb-40">
      <div className="bg-home-color text-white text-center font-poppins lg:mx-10 rounded-3xl pb-16 px-4 lg:px-20">
        <div className="text-4xl font-semibold pt-8 pb-5">
          Available Study Options{" "}
        </div>
        <div className="lg:w-1/2 text-base lg:text-2xl m-auto">
          We have both online and offline classes for our courses. Therefore,
          you have the option to attend the classes from the comfort of your
          home or in person.
        </div>
        <div className="flex-col lg:flex lg:flex-row justify-center text-white pt-13 gap-6">
          <div className="flex-col bg-home-color rounded-3xl">
            <div className="flex">
              <img src={Graphics} alt="" className="w-full md:shrink-0" />
            </div>
            <div className="p-5">
              <div className="text-base lg:text-2xl left-0">
                Attend your classes online from any location
              </div>
              <div className="w-1/2 border border-white rounded-full mx-auto text-base lg:text-2xl py-2 lg:py-4 my-4">
                Online courses
              </div>
            </div>
          </div>
          <div className="flex-col bg-home-color rounded-3xl">
            <div className="flex">
              <img src={Motion} alt="" className="w-full" />
            </div>
            <div className="p-5">
              <div className="text-base lg:text-2xl left-0">
                Attend your classes physically for a personal experience
              </div>
              <div className="w-1/2 border border-white rounded-full mx-auto text-base lg:text-2xl py-2 lg:py-4 my-4">
                Offline courses
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
