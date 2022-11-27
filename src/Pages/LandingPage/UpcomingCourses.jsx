import React from "react";
import Graphics from "../../Asset/Image/graphics.png";
import Motion from "../../Asset/Image/motion.png";
import Uiux from "../../Asset/Image/uiux.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Course from "./JsonData/courses.json";

export default function UpcomingCourses() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="pb-24">
      <div className="text-center font-poppins rounded-3xl lg:px-20">
        <div className="text-black text-4xl font-bold pb-5">
          Our Upcoming course
        </div>
        <div className="text-lg">
          Skilline is an interesting platform that will teach you in more
          Skilline is an interesting platform that will teach you
        </div>
        <div className="text-white pt-13">
          <Slider {...settings}>
            {Course?.map((course) => (
              <div>
                <div className="flex-col group bg-home-color rounded-3xl hover:border-4 hover:bg-[#050042] hover:border-[#23BDEE] transition-ease-out duration-300 mx-3">
                  <div className="">
                    <img
                      src={Graphics}
                      alt=""
                      className="w-full rounded-3xl scale-90 group-hover:scale-100 ease-in duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex-col">
                      <div className="flex justify-between">
                        <div className="bg-[#1483a4] text-[#23BDEE] bg-opacity-50 rounded-full py-2 px-4">
                          {course.date}
                        </div>
                        <div className="text-xl py-2">{course.price} tk</div>
                      </div>
                    </div>
                    <div className="text-2xl font-semibold pt-2 left-0">
                      {course.title}
                    </div>
                    <div className="py-2">{course.para}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
