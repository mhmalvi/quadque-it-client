import React, {useRef, useState, useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Course from "../../../Components/Shared/JsonData/Course.json"
import { useNavigate } from "react-router-dom";
import RightArrow from "../../../Asset/Image/right-arrow-black.png";
import LeftArrow from "../../../Asset/Image/left-arrow-black.png";
import WhiteLeftArrow from "../../../Asset/Image/arrow-left.png";
import WhiteRightArrow from "../../../Asset/Image/arrow-right.png";
import Fade from "react-reveal/Fade";

import Digit from "../../../Asset/Image/home-banner-bg.jpg";
import Digital from "../../../Asset/Image/courses/digi-rs-course.jpg";
import Grammar from "../../../Asset/Image/courses/digi-2-course.jpg";
import Mkt101 from "../../../Asset/Image/courses/mkt-101-course.jpg";

const DigitalMarketing = ({theme}) => {
  const [courses, setCourses] = useState()
  const [slideSetting, setSlideSetting] = useState();
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    let grapGcourse;
    grapGcourse = Course?.filter((wtf) => wtf.category === "Digital Marketing");
    setCourses(grapGcourse);
  }, [])  

  useEffect(() => {
    // console.log(window.screen.width);
    if (window.screen.width > 520) {
      setSlideSetting({ ...settings });
    } else {
      setSlideSetting({ ...mobSettings });
    }
  }, []);

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
      },
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

  const navigateToCourseDetails = (id) => {
    navigate(`./course/course-detail/${id}`);
  };
  return (
    <div className={`${theme==="dark" && "bg-home-color"} duration-700 w-full pb-18 lg:pb-36 overflow-x-hidden`}>
      <div className="text-center rounded-3xl lg:px-20">
        <div className={`${theme==="dark" ? "text-white":"text-black"} duration-700 text-2xl md:text-4xl font-bold pb-5 text-shadow`}>
          Digital Marketing course
        </div>
        <div className="text-white lg:pt-13 gap-6">
          <Fade right>
            <Slider ref={sliderRef} {...slideSetting}>
              {courses?.map((course, i) => (
                <div key={i}>
                  <div
                    onClick={() => {
                      navigateToCourseDetails(course?.id);
                    }}
                    className="bg-white flex-col group shadow-lg rounded-3xl text-black hover:border-2 hover:bg-black hover:text-white hover:border-[#23BDEE] hover:shadow-sky-200 transition-ease-out duration-300 cursor-pointer mx-3 my-4"
                  >
                    <div className="">
                      <img
                        src={
                          CourseImage?.find(
                            (wtf) => wtf.title === course?.title
                          )
                            ? CourseImage?.find(
                                (wtf) => wtf.title === course?.title
                              ).image
                            : Digit
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
          {theme==="dark"?       
            <div className="flex justify-center gap-5 py-3">
              <img
                src={WhiteLeftArrow}
                alt=""
                onClick={() => sliderRef.current.slickPrev()}
                className="cursor-pointer"
              />
              <img
                src={WhiteRightArrow}
                alt=""
                onClick={() => sliderRef.current.slickNext()}
                className="cursor-pointer"
              />
            </div>
            :
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
          }
        </div>
      </div>
    </div>
  );
}
export default  DigitalMarketing;

const CourseImage = [
  { title: "Digital Marketing Research Strategy", image: Digital },
  { title: "Content Creation", image: Grammar },
  { title: "Digital Marketing 101", image: Mkt101 },
];