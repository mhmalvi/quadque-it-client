import React from "react";
import CaseStudy from "../../../Asset/Image/file-case.png";
import Banner from "../../../Asset/Image/home-banner.png";
import Soln from "../../../Asset/Image/idea.png";
import LiveChat from "../../../Asset/Image/live-chat.png";
import OnlineCourse from "../../../Asset/Image/online-learning.png";
import "./style.css";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import { useState } from "react";
import { useEffect } from "react";


const Header = ({theme}) => {
  const [bannerClass, setBannerClass] = useState("hero-banner");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBannerClass(BannerClasses[index]);
      setIndex((prevIndex) => (prevIndex + 1) % BannerClasses.length);
    }, 5000); // set the interval to 1 second (1000 milliseconds)

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className={`${theme === "dark" && "bg-home-color"} duration-700 w-full lg:mt-10 pb-14 lg:pb-20 overflow-x-hidden`}>
      <div className={`${bannerClass} duration-1000 bg-home-color text-center lg:text-start m-auto lg:mx-10 lg:rounded-3xl pt-32 pb-8 px-10 lg:px-20 lg:mt-5`}>
        <div className="flex flex-col-reverse lg:flex lg:flex-row justify-evenly m-auto">
          <div className="flex justify-center items-center text-white pt-13 lg:pt-0">
            <div className="lg:w-10/12">
              <Bounce top>
                <div className="z-0 text-2xl lg:text-5xl font-bold pb-5">
                  Welcome to
                  <span className="text-[#23BDEE] z-0">&nbsp;QIT</span>
                </div>
              </Bounce>
              <Bounce top>
                <div className="md:text-base pb-13">
                  Take your resume to the next level by developing the most
                  useful digital marketing and IT skills with the help of our
                  courses.
                </div>
              </Bounce>
              <div className="flex justify-center lg:justify-start h-16 gap-14 text-white text-sm lg:text-xl mb-6">
                <Zoom>
                  <Link href="/course">
                    <button className="inline-block bg-brand-color hover:bg-indigo-800 duration-700 spirit-bomb h-full rounded-full text-white px-4 lg:px-8">
                      Browse Courses
                    </button>
                  </Link>
                </Zoom>
                <div className="py-4"> Video Content</div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            {/* <img src={World} width={433} className="m-auto" alt="QIT logo" /> */}
            {/* <Lottie
              className="lg:w-1/2 mx-auto"
              animationData={Learning}
              loop={true}
            /> */}
            <Zoom>
              <img src={Banner} alt="home-banner" />
            </Zoom>
          </div>
        </div>
        {/* <div className="flex justify-center lg:justify-start">
          <Icons.Calender className="md:shrink-0" />
          <span className="text-white text-base px-2">
            Our new seminar in wordpress 26 June
          </span>
        </div> */}
      </div>

      <div className="lg:flex lg:justify-evenly lg:visible hidden text-black text-lg pt-30 m-auto">
        <Fade right duration={1500} delay={0}>
          <div className="bg-white w-[15rem] flex flex-col justify-center items-center shadow-md border rounded-lg px-4 py-4 hover:shadow-lg spirit-bomb duration-700">
            {/* <Icons.ProblemSol /> */}
            <img src={Soln} alt="" className="w-[4rem]" />
            <span className="px-2 pt-2 text-center">
              Digital Marketing & IT Solutions
            </span>
          </div>
        </Fade>
        <Fade right duration={1500} delay={500}>
          <div className="bg-white w-[15rem] flex flex-col justify-center items-center shadow-md border rounded-lg px-4 py-4 hover:shadow-lg spirit-bomb duration-700">
            {/* <Icons.Chat /> */}
            <img src={LiveChat} alt="" className="w-[4rem]" />
            <span className="px-2 pt-2 text-center">Live Chat </span>
          </div>
        </Fade>
        <Fade right duration={1500} delay={1000}>
          <div className="bg-white w-[15rem] flex flex-col justify-center items-center shadow-md border rounded-lg px-4 py-4 hover:shadow-lg spirit-bomb duration-700">
            {/* <Icons.People /> */}
            <img src={CaseStudy} alt="" className="w-[4rem]" />
            <span className="px-2 pt-2 text-center">Case Studies</span>
          </div>
        </Fade>
        <Fade right duration={1500} delay={1500}>
          <div className="bg-white w-[15rem] flex flex-col justify-center items-center shadow-md border rounded-lg px-4 py-4 hover:shadow-lg spirit-bomb duration-700">
            {/* <Icons.Courses /> */}
            <img src={OnlineCourse} alt="" className="w-[4rem]" />
            <span className="px-2 pt-2 text-center">Online Courses</span>
          </div>
        </Fade>
      </div>
    </div>
  );
};
export default Header;

const BannerClasses = [
  "hero-banner",
  "hero-banner2",
  "hero-banner3",
]