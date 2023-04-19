import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
//import Rectangle from "../../Asset/Image/rectangle.png";
//import RectangleTwo from "../../Asset/Image/rectangle2.png";
import Rectangle from "../../../Asset/Image/graphictools.png";
import Icons from "../../../Components/Shared/Icons";
import CountUp from "react-countup";
import CourseMaterial from "./CourseMaterial";
import { Link } from "react-router-dom";
import Hiring from "../../../Asset/pdf/hiring.pdf"
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import Courses from "../../../Components/Shared/JsonData/Course.json"

const Header = () => {
  const {id} = useParams();
  const [course, setCourse] = useState()
  // console.log("url parameter", id);

  useEffect(() => {
    let courseid = id;
    const courseData = Courses?.find(wtf=> wtf.id == courseid);
    setCourse(courseData);
  }, [])
  console.log("detailsss", course);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="w-full min-h-screen bg-home-color text-white lg:mt-10">
      <div className="">
        <img src={Rectangle} className="w-full" alt="" />
      </div>

      <div className="w-full text-white lg:pb-32 -mt-[30vh] lg:-mt-[100vh] xl:-mt-[100vh] 2xl:-mt-[115vh]">
        <div className="lg:mt-10">
          <div className="lg:w-3/4 flex-col justify-center m-auto pt-32">
            <div className="text-2xl lg:text-5xl font-bold text-center">
              {course?.title}
            </div>
            <div className="lg:w-2/3 text-center lg:text-lg py-5 pb-7 m-auto px-5 lg:px-0">
              {course?.para}
            </div>
            <div className="flex justify-center gap-6 pb-14">
              <div>
                <Link to="../admission">
                  <div className="bg-[#2F327D] text-xl rounded-xl py-2 px-6">
                    Admission
                  </div>
                </Link>
              </div>
              <div>
                <a href={Hiring} download>
                  <div className="bg-white bg-opacity-20 text-xl rounded-xl py-2 px-6">
                    Brochure
                  </div>
                </a>
              </div>
            </div>
            {/* Video Section */}
            <div className="flex flex-wrap justify-center pb-14">
              <div className="w-10/12 ratio-16x9 rounded-lg lg:border-4 mx-3 lg:mx-0">
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
            <div className="flex flex-wrap justify-center gap-6 pb-8 lg:pb-24 mx-10 lg:mx-0">
              <Zoom>
              <div className="flex-col flex-wrap text-center">
                <div className="w-22 lg:w-38 h-19 lg:h-29 border-2 rounded-lg p-4 flex justify-center items-center">
                  <span className="text-2xl lg:text-5xl font-bold">
                    <CountUp duration={2.75} end={course?.duration} />
                  </span>
                </div>
                <div className="pt-5">Duration <br /><span className="text-xs">(months)</span></div>
              </div>
              </Zoom>
              <Zoom>
              <div className="flex-col flex-wrap text-center">
                <div className="w-22 lg:w-38 h-19 lg:h-29 border-2 rounded-lg p-4 flex justify-center items-center">
                  <span className="text-2xl lg:text-5xl font-bold">
                    <CountUp duration={2.75} end={course?.lecture} />
                  </span>
                </div>
                <div className="pt-5">Lectures</div>
              </div>
              </Zoom>
              <Zoom>
              <div className="flex-col flex-wrap text-center">
                <div className="w-22 lg:w-38 h-19 lg:h-29 border-2 rounded-lg p-4 flex justify-center items-center">
                  <span className="text-2xl lg:text-5xl font-bold">
                    <CountUp duration={2.75} end={course?.project} suffix="+" />
                  </span>
                </div>
                <div className="pt-5">Projects</div>
              </div>
              </Zoom>
            </div>
            {/* Overview sectioon */}
            <div className="lg:w-2/3 m-auto px-6">
              <div className="text-center text-2xl lg:text-4xl pb-5">
                Course Overview
              </div>
              <div className="text-center pb-18">
              {course?.overview}
              </div>
            </div>
            {/* tools and Career outcomes */}
            <CourseMaterial course={course} />
            {/* Special Services */}
            <div className="">
              <div className="text-center text-2xl lg:text-4xl pb-13">
                Special services
              </div>
              <div className="flex-col lg:flex lg:flex-row text-center gap-6 lg:pb-6">
                <Fade left>
                <div className="lg:w-1/2 flex-col bg-[#2F327D20] lg:rounded-lg p-7">
                  <div className="">
                    <Icons.Support className="m-auto" />
                  </div>
                  <div className="lg:text-xl font-semibold py-2">
                    Recognised Certification
                  </div>
                  <div className="text-xs lg:text-base">
                    You will obtain an Accredited Australian Certificate after
                    completing the course. Career Guidance
                  </div>
                </div>
                </Fade>
                <Fade right>
                <div className="lg:w-1/2 flex-col bg-[#2F327D40] lg:rounded-lg p-7">
                  <div>
                    <Icons.Guidance className="m-auto" />
                  </div>
                  <div className="lg:text-xl font-semibold py-2">
                    Career Guidance
                  </div>
                  <div className="text-xs lg:text-base">
                    We will provide you with exclusive guidance to help you make
                    the best decisions for your career.
                  </div>
                </div>
                </Fade>
              </div>
              <div className="flex-col lg:flex lg:flex-row text-center bg-home-color gap-6">
                <Fade left>
                <div className="lg:w-1/2 flex-col bg-[#2F327D60] lg:rounded-lg p-7">
                  <div className="">
                    <Icons.Certificate className="m-auto" />
                  </div>
                  <div className="lg:text-xl font-semibold py-2">
                    Post Course Support
                  </div>
                  <div className="text-xs lg:text-base">
                    Our team will provide you with the necessary support after
                    you’ve completed the course.
                  </div>
                </div>
                </Fade>
                <Fade right>
                <div className="lg:w-1/2 flex-col bg-[#2F327D80] lg:rounded-lg p-7">
                  <div>
                    <Icons.Briefcase className="m-auto" />
                  </div>
                  <div className="lg:text-xl font-semibold py-2">
                    Recommendation
                  </div>
                  <div className="text-xs lg:text-base">
                    You will have our recommendation once we have assessed you
                    and provided you with your certification.
                  </div>
                </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;