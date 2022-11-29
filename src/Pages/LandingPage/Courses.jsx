import React from "react";
import Course from "../../Asset/Image/image9.png";

export default function Courses() {
  return (
    <div className="w-full pb-24">
      <div className="lg:bg-[#5c5bfd10] lg:text-5xl text-center m-auto lg:mx-10 rounded-3xl py-4 lg:py-24 px-4 lg:px-20">
        <div className="text-black text-4xl font-bold pb-5">
          Our Paragraph is a series series sentences
        </div>
        <div className="text-lg">
          Skilline is an interesting platform that will teach you in more
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 text-white text-2xl pt-13 gap-6">
          <div className="w-full flex-col bg-home-color m-auto p-4 rounded-2xl">
            <div className="flex justify-center">
              <img src={Course} alt="" width={200} />
            </div>
            <div className="">Graphics & Design</div>
          </div>
          <div className="w-full flex-col bg-home-color m-auto p-4 rounded-2xl">
            <div className="flex justify-center">
              <img src={Course} alt="" width={200} />
            </div>
            <div className="">Programming</div>
          </div>
          <div className="w-full flex-col bg-home-color m-auto p-4 rounded-2xl">
            <div className="flex justify-center">
              <img src={Course} alt="" width={200} />
            </div>
            <div className="">Digital marketing</div>
          </div>
          <div className="w-full flex-col bg-home-color m-auto p-4 rounded-2xl">
            <div className="flex justify-center">
              <img src={Course} alt="" width={200} />
            </div>
            <div className="">Writing</div>
          </div>
          <div className="w-full flex-col bg-home-color m-auto p-4 rounded-2xl">
            <div className="flex justify-center">
              <img src={Course} alt="" width={200} />
            </div>
            <div className="">Video & Animation</div>
          </div>
          <div className="w-full flex-col bg-home-color m-auto p-4 rounded-2xl">
            <div className="flex justify-center">
              <img src={Course} alt="" width={200} />
            </div>
            <div className="">Others</div>
          </div>
        </div>
      </div>
    </div>
  );
}
