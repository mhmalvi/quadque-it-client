import React from "react";
import { Link } from "react-router-dom";
import About4 from "../../../Asset/Image/about-3.png";
import About3 from "../../../Asset/Image/about-7.png";
import Fade from "react-reveal/Fade";


const AboutMaterial = ({theme}) => {
  return (
    <div className={`${theme==="dark" ? "text-white bg-home-color":"text-black bg-[#F3F3F3]"} w-full py-13 lg:py-36 text-white`}>
      <div className="md:w-3/4 m-auto flex-col md:flex lg:flex-row gap-6 pb-13 lg:pb-36">
        <Fade left>
        <div className="flex justify-between m-auto pb-5 lg:pb-0 px-3 lg:px-0">
          <img src={About3} alt="" className="w-10/12 shrink-0 rounded-3xl mx-auto lg:m-0 pb-10 lg:pb-0" />
        </div>
        </Fade>
        <Fade right>
        <div className="lg:w-1/2 text-start my-auto">
          <div className="font-semibold text-2xl lg:text-4xl pb-3 px-10 lg:px-0">
            {" "}
            Exclusive Training Solutions to Boost Your Career
          </div>
          <div className="flex lg:px-0 font-thin px-10 leading-5">
            This is your opportunity to make your mark in the world of digital
            marketing and IT. <br />
            <br />
            Effective training is not only about courses, but it’s also about
            uplifting one another. <br />
            <br />
            We are here to foster your learning and creativity by building a
            supportive community. Let us help you to reach new heights in your
            career and develop the awesome portfolio you’ve always dreamt of
            having.
          </div>
        </div>
        </Fade>
      </div>
      <div className={`w-3/4 ${theme==="dark"? "bg-white text-black":"bg-home-color text-white"} flex flex-col-reverse lg:flex lg:flex-row justify-evenly rounded-3xl p-10 m-auto`}>
        <div className="lg:w-1/2 m-auto">
          <div className="text-2xl lg:text-5xl text-center lg:text-start font-bold pb-7 pt-8">
            Get a Free Trial Today!
          </div>
          <div className="flex justify-center lg:justify-start h-16 gap-14 text-white text-base lg:text-xl mb-6">
            <Link to="../course">
              <div className="bg-[#2F327D] hover:bg-[#3f42a3] rounded-full text-white text-center cursor-pointer px-8 py-4">
                Browse Courses
              </div>
            </Link>
          </div>
          <div className="md:text-base pb-8">
            Check out our diverse courses specialising in graphics design,
            programming, digital marketing, content development and other
            disciplines.
          </div>
        </div>
        <div className="lg:w-1/2">
          <img src={About4} width={433} className="m-auto" alt="QIT logo" />
        </div>
      </div>
    </div>
  );
};
export default AboutMaterial;
