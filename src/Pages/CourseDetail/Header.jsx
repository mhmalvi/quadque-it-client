import React from "react";
//import Rectangle from "../../Asset/Image/rectangle.png";
//import RectangleTwo from "../../Asset/Image/rectangle2.png";
import Rectangle from "../../Asset/Image/graphictools.png";
import Icons from "../../Components/Shared/Icons";
import CountUp from "react-countup";
import CourseMaterial from "./CourseMaterial";
/* absolute top-64 left-1/4 */

export default function Header() {
  return (
    <div className="w-full bg-home-color font-poppins text-white">
      {/*       <div className="mt-10">
        <img src={Rectangle} className="w-full" alt="" />
      </div> */}
      <div className="w-full font-poppins text-white lg:pb-32">
        <div className="lg:mt-10">
          <div className="lg:w-3/4 flex-col justify-center m-auto pt-32">
            <div className="text-2xl lg:text-5xl font-bold text-center">
              Motion Graphics
            </div>
            <div className="lg:w-2/3 text-center lg:text-lg py-5 pb-7 m-auto px-5 lg:px-0">
              Learn how to use Adobe After Effects, Illustrator and Photoshop
              effectively to create visually stunning motion graphics.
            </div>
            <div className="flex justify-center gap-6 pb-8">
              <div>
                <button className="bg-[#2F327D] text-xl rounded-xl py-2 px-6">
                  Admission
                </button>
              </div>
              <div>
                <button className="bg-white bg-opacity-20 text-xl rounded-xl py-2 px-6">
                  Brochure
                </button>
              </div>
            </div>
            {/* Video Section */}
            <div className="flex flex-wrap justify-center">
              <div className="w-full ratio-16x9">
                <iframe
                  width="100%"
                  height="429"
                  src="https://www.youtube.com/embed/4TutF9refYo"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            {/* countup section */}
            <div className="flex justify-center gap-6 pt-14 pb-8 lg:pb-24">
              <div className="flex-col flex-wrap text-center">
                <div className="w-22 lg:w-38 h-19 lg:h-29 border-2 rounded-lg p-4 m-auto">
                  <span className="text-2xl lg:text-5xl font-bold">
                    <CountUp duration={2.75} end={6} />
                  </span>
                  <br />
                  Months
                </div>
                <div className="pt-5">Duration</div>
              </div>
              <div className="flex-col flex-wrap text-center">
                <div className="w-22 lg:w-38 h-19 lg:h-29 border-2 rounded-lg p-4">
                  <span className="text-2xl lg:text-5xl font-bold">
                    <CountUp duration={2.75} end={48} />
                  </span>
                </div>
                <div className="pt-5">Lectures</div>
              </div>
              <div className="flex-col flex-wrap text-center">
                <div className="w-22 lg:w-38 h-19 lg:h-29 border-2 rounded-lg p-4">
                  <span className="text-2xl lg:text-5xl font-bold">
                    <CountUp duration={2.75} end={30} suffix="+" />
                  </span>
                </div>
                <div className="pt-5">Projects</div>
              </div>
            </div>
            {/* Overview sectioon */}
            <div className="lg:w-2/3 m-auto px-6">
              <div className="text-center text-2xl lg:text-4xl pb-5">
                Course Overview
              </div>
              <div className="text-center pb-18">
                Become a well-rounded graphic designer by learning about the
                core concepts of motion graphic design. We will teach you how to
                apply the most useful effects and presets using different tools
                from the Adobe Creative Cloud.
              </div>
            </div>
            {/* tools and Career outcomes */}
            <CourseMaterial />
            {/* Special Services */}
            <div className="">
              <div className="text-center text-2xl lg:text-4xl pb-13">
                Special services
              </div>
              <div className="flex-col lg:flex lg:flex-row text-center gap-6 lg:pb-6">
                <div className="lg:w-1/2 flex-col bg-[#2F327D20] lg:rounded-lg p-7">
                  <div className="">
                    <Icons.Support className="m-auto" />
                  </div>
                  <div className="lg:text-xl font-semibold py-2">
                    Marketplace support
                  </div>
                  <div className="text-xs lg:text-base">
                    Our new seminar in wordpress 26 Our new seminar in wordpress
                    26 June Our new wordpress 26 JuneJune Our new wordpress 26
                    June Our new seminar in wordpress 26 June Our new wordpress
                    26 June
                  </div>
                </div>
                <div className="lg:w-1/2 flex-col bg-[#2F327D40] lg:rounded-lg p-7">
                  <div>
                    <Icons.Guidance className="m-auto" />
                  </div>
                  <div className="lg:text-xl font-semibold py-2">
                    Marketplace support
                  </div>
                  <div className="text-xs lg:text-base">
                    Our new seminar in wordpress 26 Our new seminar in wordpress
                    26 June Our new wordpress 26 JuneJune Our new wordpress 26
                    June Our new seminar in wordpress 26 June Our new wordpress
                    26 June
                  </div>
                </div>
              </div>
              <div className="flex-col lg:flex lg:flex-row text-center bg-home-color gap-6">
                <div className="lg:w-1/2 flex-col bg-[#2F327D60] lg:rounded-lg p-7">
                  <div className="">
                    <Icons.Certificate className="m-auto" />
                  </div>
                  <div className="lg:text-xl font-semibold py-2">
                    Marketplace support
                  </div>
                  <div className="text-xs lg:text-base">
                    Our new seminar in wordpress 26 Our new seminar in wordpress
                    26 June Our new wordpress 26 JuneJune Our new wordpress 26
                    June Our new seminar in wordpress 26 June Our new wordpress
                    26 June
                  </div>
                </div>
                <div className="lg:w-1/2 flex-col bg-[#2F327D80] lg:rounded-lg p-7">
                  <div>
                    <Icons.Briefcase className="m-auto" />
                  </div>
                  <div className="lg:text-xl font-semibold py-2">
                    Marketplace support
                  </div>
                  <div className="text-xs lg:text-base">
                    Our new seminar in wordpress 26 Our new seminar in wordpress
                    26 June Our new wordpress 26 JuneJune Our new wordpress 26
                    June Our new seminar in wordpress 26 June Our new wordpress
                    26 June
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
