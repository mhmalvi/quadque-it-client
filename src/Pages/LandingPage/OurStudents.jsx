import React, { useRef } from "react";
import PersonOne from "../../Asset/Image/person-1.png";
import PersonTwo from "../../Asset/Image/person-2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Instructor from "./JsonData/student.json";
import RightArrow from "../../Asset/Image/purple-right-arrow.png";
import LeftArrow from "../../Asset/Image/purple-left-arrow.png";


export default function OurStudents() {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 600,
    arrows: false,
    slidesToShow: 2,
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
  return (
    <div className="w-full pb-13 lg:pb-36 lg:visible">
      <div className="lg:flex">
        <div className="text-center font-poppins rounded-3xl mx-9">
          <div className="w-full text-black text-3xl lg:text-5xl font-bold lg:mx-12 pb-18">
            What our <span className="text-brand-color">Students</span> say <br />
            about us
          </div>
          <div className="flex justify-center gap-5 m-auto">
            <img
              src={LeftArrow}
              alt=""
              className="cursor-pointer"
              onClick={() => sliderRef.current.slickNext()}
            />
            <img
              src={RightArrow}
              alt=""
              className="cursor-pointer"
              onClick={() => sliderRef.current.slickPrev()}
            />
          </div>
        </div>
        <div className="w-full lg:w-2/3 text-start font-poppins">
          <div className="text-black lg:px-10 gap-8">
          <Slider ref={sliderRef} {...settings}>
              {Instructor?.map((person) => (
                <div>
                  <div className="max-w-[480px] shadow text-center pt-9 px-12 pb-12 mx-3 my-3">
                    <div className="pb-4">
                      <img
                        src={PersonOne}
                        alt=""
                        className="m-auto"
                        width={110}
                      />
                    </div>
                    <div className="text-xl font-semibold pb-1">
                      {person.name}
                    </div>
                    <div className="text-brand-color text-base font-semibold pb-9">
                      {person.job}
                    </div>

                    <div className="text-base text-start">“{person.comment}”</div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
