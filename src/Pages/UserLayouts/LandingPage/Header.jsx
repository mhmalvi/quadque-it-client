import React from "react";
import World from "../../../Asset/Image/world.png";
import Icons from "../../../Components/Shared/Icons";
import AnimatedText from "react-animated-text-content";
import Lottie from "lottie-react";
import Learning from "../../../Asset/Lottie/learning.json";
import Banner from "../../../Asset/Image/home-banner.png";
import './style.css';

const Header = () => {
  return (
    <div className="w-full lg:mt-10 pb-14 lg:pb-20">
      <div className="bg-home-color text-center lg:text-start m-auto lg:mx-10 lg:rounded-3xl pt-44 pb-8 px-10 lg:px-20">
        <div className="flex flex-col-reverse lg:flex lg:flex-row justify-evenly m-auto">
          <div className="lg:w-1/2 text-white pt-13 lg:pt-0">
            <div className="z-0 text-2xl lg:text-5xl font-bold pb-5">
              Welcome to
              <span className="text-[#23BDEE] z-0">&nbsp;QIT</span>
            </div>
            <div className="md:text-base pb-13">
              Take your resume to the next level by developing the most useful
              digital marketing and IT skills with the help of our courses.
            </div>
            <div className="flex justify-center lg:justify-start h-16 gap-14 text-white text-sm lg:text-xl mb-6">
              <a href="/course">
                <button className="bg-brand-color h-full rounded-full text-white leading-snug px-8">
                  Browse Courses
                </button>
              </a>
              <div className="py-4"> Video Content</div>
            </div>
          </div>
          <div className="lg:w-1/2">
            {/* <img src={World} width={433} className="m-auto" alt="QIT logo" /> */}
            {/* <Lottie
              className="lg:w-1/2 mx-auto"
              animationData={Learning}
              loop={true}
            /> */}
            <img src={Banner} alt="home-banner" />
          </div>
        </div>
        {/* <div className="flex justify-center lg:justify-start">
          <Icons.Calender className="md:shrink-0" />
          <span className="text-white text-base px-2">
            Our new seminar in wordpress 26 June
          </span>
        </div> */}
      </div>

      {/* <div className="lg:flex lg:justify-evenly lg:visible hidden text-black text-lg pt-30 m-auto">
        <div className="flex bg-[#5C5BFD1A] px-4 py-2">
          <Icons.ProblemSol />
          <span className="px-2 py-2">Digital Marketing & IT Solutions</span>
        </div>
        <div className="flex bg-[#5C5BFD1A] px-4 py-2">
          <Icons.Chat />
          <span className="px-2 py-2">Live Chat </span>
        </div>
        <div className="flex bg-[#5C5BFD1A] px-4 py-2">
          <Icons.People />
          <span className="px-2 py-2">Case Studies</span>
        </div>
        <div className="flex bg-[#5C5BFD1A] px-4 py-2">
          <Icons.Courses />
          <span className="px-2 py-2">Online Courses</span>
        </div>
      </div> */}

      <div className="lg:flex lg:justify-evenly lg:visible hidden text-black text-lg pt-30 m-auto">
        <div className="w-[15rem] flex flex-col justify-center items-center shadow-md border rounded-lg px-4 py-2">
          <Icons.ProblemSol />
          <span className="px-2 pt-2 text-center">
            Digital Marketing & IT Solutions
          </span>
        </div>
        <div className="w-[15rem] flex flex-col justify-center items-center shadow-md border rounded-lg px-4 py-2">
          <Icons.Chat />
          <span className="px-2 pt-2 text-center">Live Chat </span>
        </div>
        <div className="w-[15rem] flex flex-col justify-center items-center shadow-md border rounded-lg px-4 py-2">
          <Icons.People />
          <span className="px-2 pt-2 text-center">Case Studies</span>
        </div>
        <div className="w-[15rem] flex flex-col justify-center items-center shadow-md border rounded-lg px-4 py-2">
          <Icons.Courses />
          <span className="px-2 pt-2 text-center">Online Courses</span>
        </div>
      </div>
    </div>
  );
}
export default Header