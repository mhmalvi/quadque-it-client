import React from "react";
import Classroom from "../../Asset/Image/classroom.png";
import Students from "../../Asset/Image/students.png";
import MobilePic from "../../Asset/Image/mobile-browse.png";
import Box from "../../Asset/Image/box.png";
import Icons from "../../Components/Shared/Icons";

const Blog = () => {
  return (
    <div className="w-full bg-home-color font-poppins pb-20">
      <div className="w-full font-poppins">
        <div className="mt-10">
          <div className="w-2/3 flex-col justify-center text-white m-auto pt-32">
            <div className="text-5xl font-bold text-center leading-snug">
              Blog Posts
            </div>
            <div className="text-5xl font-bold text-center leading-snug">
              I think so, this is it.
            </div>
            <div className="w-2/3 text-center text-lg py-5 pb-7 m-auto">
              Design begins after I begin to think about how to present an{" "}
              <br /> experience most successfully, whether a button I put in can
              solve <br /> a problem. The only point in design is not ui design.
            </div>
            <div className="flex justify-center gap-6 pb-8">
              <div>
                <button className="bg-[#2F327D] text-xl rounded-xl py-2 px-6">
                  Online Courses
                </button>
              </div>
              <div>
                <button className="bg-black bg-opacity-70 text-xl rounded-xl py-2 px-6">
                  Offline Courses
                </button>
              </div>
            </div>
            <div className="">
              <img src={Classroom} className="m-auto" alt="" />
            </div>
            <div className="flex-col lg:flex lg:flex-row m-auto gap-6 pt-36 pb-36">
              <div className="w-1/2 m-auto">
                <div className="text-4xl pb-5">
                  Find Content Writing Services Usa at Shopwebly
                </div>
                <div className="pb-4">
                  Use the Drag and Drop function to sort your products in the
                  most intuitive, quickest way. Use the Drag and Drop function
                  to sort your products in the most intuitive, quickest way.
                </div>
                <div className="">
                  Set scores for products by adding number, SKUs with higher
                  scores will be displayed on top of the category pages.
                </div>
              </div>
              <div>
                <img src={Students} className="w-full" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white relative">
          <img src={Box} className="absolute top-0 left-20" alt="" />
          <div className="text-4xl font-bold text-center pt-24">Our Value</div>
          <div className="w-2/3 text-center text-lg py-5 pb-7 m-auto">
            Skyrocket your online store conversion rate and improve the customer{" "}
            <br />
            journey with smart online visual merchandising.
          </div>
          <div className="w-3/4 flex text-center gap-6 pb-30 m-auto">
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
              <div className="text-xlfont-semibold py-2">Best Institute</div>
              <div className="text-base">
                Let your employees spend much less time managing the online
                store catalog.
              </div>
            </div>
          </div>
        </div>
        <div className="text-white relative">
          <img
            src={Box}
            className="rotate-90 absolute float-right -top-40 left-20"
            alt=""
          />
          <div className="text-4xl font-bold text-center pt-24">Advantage</div>
          <div className="w-2/3 text-center text-lg py-5 pb-7 m-auto">
            Skyrocket your online store conversion rate and improve the customer{" "}
            <br />
            journey with smart online visual merchandising.
          </div>
          <div className="w-3/4 flex gap-6 pb-7 m-auto">
            <div className="flex-col p-7">
              <div className="flex pb-4">
                <Icons.TickBox className="mx-4" />
                <div className="text-xl font-semibold py-2">Class</div>
              </div>
              <div className="text-base">
                Increase online store conversion up to 25% with our online
                visual merchandising interface.
              </div>
            </div>
            <div className="flex-col p-7">
              <div className="flex pb-4">
                <Icons.TickBox className="mx-4" />
                <div className="text-xl font-semibold py-2">Class</div>
              </div>
              <div className="text-base">
                Increase online store conversion up to 25% with our online
                visual merchandising interface.
              </div>
            </div>
            <div className="flex-col p-7">
              <div className="flex pb-4">
                <Icons.TickBox className="mx-4" />
                <div className="text-xl font-semibold py-2">Class</div>
              </div>
              <div className="text-base">
                Increase online store conversion up to 25% with our online
                visual merchandising interface.
              </div>
            </div>
            <div className="flex-col p-7">
              <div className="flex pb-4">
                <Icons.TickBox className="mx-4" />
                <div className="text-xl font-semibold py-2">Class</div>
              </div>
              <div className="text-base">
                Increase online store conversion up to 25% with our online
                visual merchandising interface.
              </div>
            </div>
          </div>
          <div className="w-3/4 flex gap-6 pb-30 m-auto">
            <div className="flex-col p-7">
              <div className="flex pb-4">
                <Icons.TickBox className="mx-4" />
                <div className="text-xl font-semibold py-2">Class</div>
              </div>
              <div className="text-base">
                Increase online store conversion up to 25% with our online
                visual merchandising interface.
              </div>
            </div>
            <div className="flex-col p-7">
              <div className="flex pb-4">
                <Icons.TickBox className="mx-4" />
                <div className="text-xl font-semibold py-2">Class</div>
              </div>
              <div className="text-base">
                Increase online store conversion up to 25% with our online
                visual merchandising interface.
              </div>
            </div>
            <div className="flex-col p-7">
              <div className="flex pb-4">
                <Icons.TickBox className="mx-4" />
                <div className="text-xl font-semibold py-2">Class</div>
              </div>
              <div className="text-base">
                Increase online store conversion up to 25% with our online
                visual merchandising interface.
              </div>
            </div>
            <div className="flex-col p-7">
              <div className="flex pb-4">
                <Icons.TickBox className="mx-4" />
                <div className="text-xl font-semibold py-2">Class</div>
              </div>
              <div className="text-base">
                Increase online store conversion up to 25% with our online
                visual merchandising interface.
              </div>
            </div>
          </div>
          <div className="w-3/4 bg-white flex flex-col-reverse lg:flex lg:flex-row justify-evenly rounded-3xl p-6 m-auto">
            <div className="lg:w-1/2 text-black m-auto">
              <div className="md:text-5xl font-bold pb-5">
                <span className="text-[#23BDEE]"> Paragraph </span>is a series
                series sentences
              </div>
              <div className="md:text-base pb-13">
                Skilline is an interesting platform that will teach you in more
                an interactive way Skilline is an interesting platform that will
                teach you in more an interactive way
              </div>
              <div className="flex h-16 gap-14 text-white text-base lg:text-xl mb-6">
                <div className="bg-brand-color rounded-full text-white px-8 py-4">
                  Browse Courses
                </div>
                <div className="py-4"> Video Content</div>
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
};

export default Blog;
