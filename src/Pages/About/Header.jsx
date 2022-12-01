import React from "react";
//import Rectangle from "../../Asset/Image/rectangle.png";
//import RectangleTwo from "../../Asset/Image/rectangle2.png";
import Classroom from "../../Asset/Image/classroom.png";
import Students from "../../Asset/Image/students.png";
import MobilePic from "../../Asset/Image/mobile-browse.png";
import Box from "../../Asset/Image/box.png";
import Box2 from "../../Asset/Image/box2.png";
import Icons from "../../Components/Shared/Icons";
import AboutMaterial from "./AboutMaterial";

export default function Header() {
  return (
    <div className="w-full bg-home-color font-poppins pb-20">
      <div className="w-full font-poppins">
        <div className="lg:mt-10">
          <div className="lg:w-2/3 flex-col justify-center text-white m-auto pt-32">
            <div className="lg:text-5xl text-2xl font-bold text-center leading-snug">
              Find Content Writing <br /> Services Usa at Shopwebly <br /> the
              Website to
            </div>
            <div className="w-2/3 lg:text-base text-xs text-center py-5 pb-7 m-auto">
              Skyrocket your online store conversion rate and improve the
              customer <br /> journey with smart online visual merchandising.
            </div>
            <div className="flex justify-center gap-2 lg:gap-6 pb-8">
              <div>
                <button className="bg-[#2F327D] text-xs lg:text-sm rounded-lg py-2 px-6">
                  Online Courses
                </button>
              </div>
              <div>
                <button className="bg-black border bg-opacity-70 text-xs lg:text-sm rounded-lg py-2 px-6">
                  Offline Courses
                </button>
              </div>
            </div>
            <div className="">
              <img src={Classroom} className="m-auto px-4 lg:px-0" alt="" />
            </div>
            <div className="flex-col lg:flex lg:flex-row m-auto gap-6 pt-20 pb-20 px-3">
              <div className="lg:w-1/2 m-auto justify-center">
                <div className="lg:text-3xl text-2xl text-center lg:text-start pb-5">
                  Find Content Writing Services Usa at Shopwebly
                </div>
                <div className="pb-4 text-center lg:text-start">
                  Use the Drag and Drop function to sort your products in the
                  most intuitive, quickest way. Use the Drag and Drop function
                  to sort your products in the most intuitive, quickest way.
                </div>
                <div className="text-center lg:text-start pb-10">
                  Set scores for products by adding number, SKUs with higher
                  scores will be displayed on top of the category pages.
                </div>
              </div>

              <div>
                <img src={Students} className="lg:w-full px-4" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white relative">
          <img
            src={Box}
            className="invisible lg:visible absolute top-0 left-[10%] w-20"
            alt=""
          />
          <div className="text-4xl font-bold text-center pt-13 lg:pt-24">Our Value</div>
          <div className="w-2/3 text-center text-lg py-5 pb-7 m-auto">
            Skyrocket your online store conversion rate and improve the customer{" "}
            <br />
            journey with smart online visual merchandising.
          </div>
          <div className="flex-col lg:w-3/4 lg:flex lg:flex-row text-center gap-6 pb-8 lg:pb-30 m-auto">
            <div className="flex-col p-7">
              <div className="">
                <Icons.Instructor className="m-auto" />
              </div>
              <div className="text-xl font-semibold py-2">Best Instructor</div>
              <div className="text-base">
                Increase online store conversion up to 25% with our online
                visual merchandising interface.
              </div>
            </div>
            <div className="flex-col p-7">
              <div>
                <Icons.Bachelor className="m-auto" />
              </div>
              <div className="text-xl font-semibold py-2">Student Success</div>
              <div className="text-base">
                Increase the average order value of your online store up to 15%
                easily.
              </div>
            </div>
            <div className="flex-col p-7">
              <div>
                <Icons.Ribbon className="m-auto" />
              </div>
              <div className="text-xl font-semibold py-2">Best Institute</div>
              <div className="text-base">
                Let your employees spend much less time managing the online
                store catalog.
              </div>
            </div>
          </div>
          <img
            src={Box2}
            className="invisible lg:visible absolute float-right -bottom-0 right-[25%] w-60"
            alt=""
          />
        </div>
        <div className="text-white relative">
          <div className="text-4xl font-bold text-center pt-13 lg:pt-36">Advantage</div>
          <div className="w-2/3 text-center text-lg py-5 m-auto">
            Skyrocket your online store conversion rate and improve the customer{" "}
            <br />
            journey with smart online visual merchandising.
          </div>
          <div className="lg:w-3/4 flex flex-wrap justify-center m-auto lg:gap-6 pb-7">
            <div className="w-[150px] lg:w-[200px] flex-col p-7">
              <div className="lg:flex pb-4">
                <Icons.TickBox className="shrink-0 mx-4" />
                <div className="text-xl text-center font-semibold py-2">Class</div>
              </div>
              <div className="hidden lg:block text-base">
                Increase online store conversion up to 25% with our online
                visual merchandising interface.
              </div>
            </div>
            <div className="w-[150px] lg:w-[200px] flex-col p-7">
              <div className="lg:flex pb-4">
                <Icons.TickBox className="shrink-0 mx-4" />
                <div className="text-xl text-center font-semibold py-2">Class</div>
              </div>
              <div className="hidden lg:block text-base">
                Increase online store conversion up to 25% with our online
                visual merchandising interface.
              </div>
            </div>
            <div className="w-[150px] lg:w-[200px] flex-col p-7">
              <div className="lg:flex pb-4">
                <Icons.TickBox className="shrink-0 mx-4" />
                <div className="text-xl text-center font-semibold py-2">Class</div>
              </div>
              <div className="hidden lg:block text-base">
                Increase online store conversion up to 25% with our online
                visual merchandising interface.
              </div>
            </div>
            <div className="w-[150px] lg:w-[200px] flex-col p-7">
              <div className="lg:flex pb-4">
                <Icons.TickBox className="shrink-0 mx-4" />
                <div className="text-xl text-center font-semibold py-2">Class</div>
              </div>
              <div className="hidden lg:block text-base">
                Increase online store conversion up to 25% with our online
                visual merchandising interface.
              </div>
            </div>
            <div className="w-[150px] lg:w-[200px] flex-col p-7">
              <div className="lg:flex pb-4">
                <Icons.TickBox className="shrink-0 mx-4" />
                <div className="text-xl text-center font-semibold py-2">Class</div>
              </div>
              <div className="hidden lg:block text-base">
                Increase online store conversion up to 25% with our online
                visual merchandising interface.
              </div>
            </div>
            <div className="w-[150px] lg:w-[200px] flex-col p-7">
              <div className="lg:flex pb-4">
                <Icons.TickBox className="shrink-0 mx-4" />
                <div className="text-xl text-center font-semibold py-2">Class</div>
              </div>
              <div className="hidden lg:block text-base">
                Increase online store conversion up to 25% with our online
                visual merchandising interface.
              </div>
            </div>
            <div className="w-[150px] lg:w-[200px] flex-col p-7">
              <div className="lg:flex pb-4">
                <Icons.TickBox className="shrink-0 mx-4" />
                <div className="text-xl text-center font-semibold py-2">Class</div>
              </div>
              <div className="hidden lg:block text-base">
                Increase online store conversion up to 25% with our online
                visual merchandising interface.
              </div>
            </div>
            <div className="w-[150px] lg:w-[200px] flex-col p-7">
              <div className="lg:flex pb-4">
                <Icons.TickBox className="shrink-0 mx-4" />
                <div className="text-xl text-center font-semibold py-2">Class</div>
              </div>
              <div className="hidden lg:block text-base">
                Increase online store conversion up to 25% with our online
                visual merchandising interface.
              </div>
            </div>
          </div>
          <AboutMaterial />
          <div className="w-3/4 bg-white flex flex-col-reverse lg:flex lg:flex-row justify-evenly rounded-3xl p-6 m-auto">
            <div className="lg:w-1/2 text-black m-auto">
              <div className="text-2xl lg:text-5xl text-center lg:text-start font-bold pb-5">
                <span className="text-[#23BDEE]"> Paragraph </span>is a series
                series sentences
              </div>
              <div className="md:text-base pb-13">
                Skilline is an interesting platform that will teach you in more
                an interactive way Skilline is an interesting platform that will
                teach you in more an interactive way
              </div>
              <div className="flex justify-center lg:justify-start h-16 gap-14 text-white text-base lg:text-xl mb-6">
                <div className="bg-brand-color rounded-full text-white text-center px-8 py-4">
                  Browse Courses
                </div>
              </div>
            </div>
            <div className="lg:first-letter:w-1/2">
              <img
                src={MobilePic}
                width={433}
                className="m-auto"
                alt="QIT logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
