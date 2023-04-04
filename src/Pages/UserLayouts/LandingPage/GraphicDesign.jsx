import React, {useEffect, useRef, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Course from "../Course/Course.json"
import { useNavigate } from "react-router-dom";
import RightArrow from "../../../Asset/Image/right-arrow-black.png";
import LeftArrow from "../../../Asset/Image/left-arrow-black.png";

import Graphics from "../../../Asset/Image/graphics.png";
import Motion from "../../../Asset/Image/motion.png";
import Ai from "../../../Asset/Image/courses/illustrator-course.jpg";
import APS from "../../../Asset/Image/courses/ps-course.png";

const GraphicDesign = () => {
  const [courses, setCourses] = useState()
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const settings = {
    infinite: false,
    speed: 600,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
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
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    let grapGcourse;
    grapGcourse = Course?.filter((wtf) => wtf.category === "Graphics & Design");
    setCourses(grapGcourse);
  }, [])

  const navigateToCourseDetails = () => {
    navigate("./course/course-detail");
  };
  return (
    <div className="w-full pb-13 lg:pb-24">
      <div className="text-center rounded-3xl lg:px-20">
        <div className="text-black text-2xl md:text-4xl font-bold pb-5 text-shadow">
          Graphic & Design course
        </div>
        <div className=" text-white lg:pt-13">
          <Slider ref={sliderRef} {...settings}>
            {courses?.map((course, i) => (
              <div key={i}>
                <div
                  onClick={navigateToCourseDetails}
                  className="bg-white flex-col group shadow-lg rounded-3xl border-2 text-black hover:border-4 hover:bg-black hover:text-white hover:border-[#23BDEE] transition-ease-out duration-300 mx-3 my-4"
                >
                  <div className="">
                    <img
                      src={
                        CourseImage?.find((wtf) => wtf.title === course?.title)
                          ? CourseImage?.find(
                              (wtf) => wtf.title === course?.title
                            ).image
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
                          {course?.date}
                        </div>
                        <div className="text-sm md:text-xl py-2">
                          {course?.price} tk
                        </div>
                      </div>
                    </div>
                    <div className="text-base md:text-2xl text-start font-semibold pt-2 left-0">
                      {course?.title}
                    </div>
                    <div className="text-xs md:text-base text-start py-2">
                      {course?.para}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="flex justify-center gap-5 py-3">
            <img
              src={LeftArrow}
              alt=""
              onClick={() => sliderRef.current.slickPrev()}
            />
            <img
              src={RightArrow}
              alt=""
              onClick={() => sliderRef.current.slickNext()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default GraphicDesign;

const CourseImage = [
  { title: "Adobe Illustrator", image: Ai },
  { title: "Adobe Photoshop", image: APS },
  { title: "Adobe Animate", image: Motion },
];