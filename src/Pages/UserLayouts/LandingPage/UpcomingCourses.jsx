import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Course from "../../../Components/Shared/JsonData/Course.json"
import { useNavigate } from "react-router-dom";
import RightArrow from "../../../Asset/Image/right-arrow-black.png";
import LeftArrow from "../../../Asset/Image/left-arrow-black.png";
import Fade from "react-reveal/Fade";

import Graphics from "../../../Asset/Image/graphics.png";
import Jquery from "../../../Asset/Image/courses/prog-course.jpg";
import Ai from "../../../Asset/Image/courses/illustrator-course.jpg";
import APS from "../../../Asset/Image/courses/ps-course.png";
import Android from "../../../Asset/Image/courses/mobdev-course.png";
import Content from "../../../Asset/Image/courses/content-course.png";
import Python from "../../../Asset/Image/courses/python-course.jpg";
import Blender from "../../../Asset/Image/courses/blender-course.jpg";
import Digital from "../../../Asset/Image/courses/digi-rs-course.jpg";
import Grammar from "../../../Asset/Image/courses/digi-2-course.jpg";
import Writing from "../../../Asset/Image/courses/writing-course.jpg";
import Writing2 from "../../../Asset/Image/courses/writing-2-course.jpg";
import Mkt101 from "../../../Asset/Image/courses/mkt-101-course.jpg";
import DotNet from "../../../Asset/Image/courses/dotnet-course.jpg";

const UpcomingCourses = () => {
  const [courses, setCourses] = useState()
  const [slideSetting, setSlideSetting] = useState()
  const sliderRef = useRef(null);
  const navigate = useNavigate();

    useEffect(() => {
    
    let grapGcourse;
    grapGcourse = Course?.filter((wtf) => wtf.upcoming !== 0);
    setCourses(grapGcourse);
  }, [])
  
  const settings = {
    infinite: true,
    speed: 600,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      }
    ],
  };

  const mobSettings = {
    infinite: true,
    speed: 600,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  useEffect(() => {
    // console.log(window.screen.width);
    if (window.screen.width > 520) {
      setSlideSetting({ ...settings });
    } else {
      setSlideSetting({ ...mobSettings });
    }
  }, []);
  

  const navigateToCourseDetails = (id) => {
    navigate(`./course/course-detail/${id}`);
  };
  return (
    <div className="pb-18 lg:pb-24 overflow-x-hidden">
      <div className="text-center rounded-3xl lg:px-20">
        <div className="text-black text-2xl md:text-4xl font-bold pb-5 text-shadow">
          Our Upcoming Courses
        </div>
        <div className="text-lg px-5 lg:px-0">
          Catch a glimpse of the awesome courses that will soon be available at
          QIT.
        </div>
        <div className="text-white lg:pt-13">
          <Fade right>
            <Slider {...slideSetting} ref={sliderRef}>
              {courses?.map((course, i) => (
                <div key={i}>
                  <div
                    onClick={() => {
                      navigateToCourseDetails(course?.id);
                    }}
                    className="bg-white flex-col group shadow-lg rounded-3xl text-black hover:border-2 hover:bg-black hover:text-white hover:border-[#23BDEE] hover:shadow-sky-200 ease-in duration-300 cursor-pointer mx-3 my-4"
                  >
                    <div className="">
                      <img
                        src={
                          CourseImage?.find(
                            (wtf) => wtf.title === course?.title
                          )
                            ? CourseImage?.find(
                                (wtf) => wtf.title === course?.title
                              )?.image
                            : Graphics
                        }
                        alt=""
                        className="w-full h-[250px] lg:h-[350px] rounded-3xl scale-90 group-hover:scale-100 ease-in duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex-col">
                        <div className="flex justify-between">
                          <div className="bg-[#23BDEE] text-[#23BDEE] text-sm md:text-base bg-opacity-20 rounded-full py-2 px-4">
                            starts:&nbsp;{course?.date}
                          </div>
                          <div className="text-sm md:text-xl py-2">
                            {course?.price} tk
                          </div>
                        </div>
                      </div>
                      <div className="text-base md:text-2xl text-start font-semibold pt-2 left-0">
                        {course?.title}
                      </div>
                      <div className="h-25 overflow-hidden text-xs md:text-base text-start py-2">
                        {course?.para}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Fade>
          <div className="flex justify-center gap-5 py-3">
            <img
              src={LeftArrow}
              alt=""
              onClick={() => sliderRef.current.slickPrev()}
              className="cursor-pointer"
            />
            <img
              src={RightArrow}
              alt=""
              onClick={() => sliderRef.current.slickNext()}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default UpcomingCourses
const CourseImage = [
  { title: "Jquery", image: Jquery },
  { title: "Adobe Illustrator", image: Ai },
  { title: "Adobe Photoshop", image: APS },
  { title: "Sculpting with Blender (Online)", image: Blender },
  { title: "Android Development (Online)", image: Android },
  { title: "Python Programming (Online)", image: Python },
  { title: "Digital Marketing Research Strategy", image: Digital },
  { title: "Advanced .NET (Online)", image: Graphics },
  { title: "Content Creation", image: Grammar },
  { title: "Rhyno (Architecture)", image: Graphics },
  { title: "Writing (Offline)", image: Writing },
  { title: "Writing (Online)", image: Writing2 },
  { title: "Writing Strategy", image: Content },
  { title: ".NET Development", image: DotNet },
  { title: "Digital Marketing 101", image: Mkt101 },
];