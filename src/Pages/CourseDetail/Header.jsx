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
      <div className="w-full font-poppins text-white">
        <div className="mt-10">
          <div className="w-2/3 flex-col justify-center m-auto pt-32">
            <div className="text-5xl font-bold text-center">Graphic Design</div>
            <div className="w-2/3 text-center text-lg py-5 pb-7 m-auto">
              Design begins after I begin to think about how to present an
              experience most successfully, whether a button I put in can solve
              a problem. The only point in design is not ui design.
            </div>
            <div className="flex justify-center gap-6 pb-8">
              <div>
                <button className="bg-[#2F327D] text-xl rounded-xl py-2 px-6">
                  Admission
                </button>
              </div>
              <div>
                <button className="bg-black bg-opacity-70 text-xl rounded-xl py-2 px-6">
                  Brochure
                </button>
              </div>
            </div>
            <div className="ratio ratio-16x9">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/q_xhptjhVo8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="m-auto w-full"
              ></iframe>
            </div>
            <div className="flex justify-center gap-6 pt-14 pb-24">
              <div className="flex-col text-center">
                <div className="w-38 h-29 border-2 rounded-lg p-3">
                  <span className="text-5xl font-bold">
                    <CountUp duration={2.75} end={6} />
                  </span>
                  <br />
                  Months
                </div>
                <div className="pt-5">Course Duration</div>
              </div>
              <div className="flex-col text-center">
                <div className="w-38 h-29 border-2 rounded-lg p-4">
                  <span className="text-5xl font-bold">
                    <CountUp duration={2.75} end={48} />
                  </span>
                </div>
                <div className="pt-5">Lectures</div>
              </div>
              <div className="flex-col text-center">
                <div className="w-38 h-29 border-2 rounded-lg p-4">
                  <span className="text-5xl font-bold">
                    <CountUp duration={2.75} end={30} suffix="+" />
                  </span>
                </div>
                <div className="pt-5">Projects</div>
              </div>
            </div>
            <div className="m-auto">
              <div className="text-center text-4xl pb-5">Course Overview</div>
              <div className="text-center pb-18">
                To be a successful graphic designer you need to have training in
                quality curriculum as well as project based work experience and
                a good idea about the marketplace. So none of these have been
                included together in our course module. From the graphic design
                course you will learn to design any ad, banner, t-shirt design,
                product using Adobe Photoshop and Adobe Illustrator. In
                addition, you get the opportunity to use modern labs for
                project-based work. By completing the course in this way, you
                will have real work experience, which will help you achieve
                quick success in the marketplace.
              </div>
            </div>
            <CourseMaterial/>
            <div className="">
              <div className="text-center text-4xl pb-13">Special services</div>
              <div className="flex text-center bg-home-color gap-6 pb-6">
                <div className="flex-col bg-[#2F327D20] rounded-lg p-7">
                  <div className="">
                    <Icons.Support />
                  </div>
                  <div className="text-xl py-2">Marketplace support</div>
                  <div className="text-base">
                    Our new seminar in wordpress 26 Our new seminar in wordpress
                    26 June Our new wordpress 26 JuneJune Our new wordpress 26
                    June Our new seminar in wordpress 26 June Our new wordpress
                    26 June
                  </div>
                </div>
                <div className="flex-col bg-[#2F327D40] rounded-lg p-7">
                  <div>
                    <Icons.Guidance />
                  </div>
                  <div className="text-xl py-2">Marketplace support</div>
                  <div className="text-base">
                    Our new seminar in wordpress 26 Our new seminar in wordpress
                    26 June Our new wordpress 26 JuneJune Our new wordpress 26
                    June Our new seminar in wordpress 26 June Our new wordpress
                    26 June
                  </div>
                </div>
              </div>
              <div className="flex text-center bg-home-color gap-6">
                <div className="flex-col bg-[#2F327D60] rounded-lg p-7">
                  <div className="">
                    <Icons.Certificate />
                  </div>
                  <div className="text-xl py-2">Marketplace support</div>
                  <div className="text-base">
                    Our new seminar in wordpress 26 Our new seminar in wordpress
                    26 June Our new wordpress 26 JuneJune Our new wordpress 26
                    June Our new seminar in wordpress 26 June Our new wordpress
                    26 June
                  </div>
                </div>
                <div className="flex-col bg-[#2F327D80] rounded-lg p-7">
                  <div>
                    <Icons.Briefcase />
                  </div>
                  <div className="text-xl py-2">Marketplace support</div>
                  <div className="text-base">
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
