import React from "react";
import PersonOne from "../../Asset/Image/person-1.png";
import Apu from "../../Asset/Image/apu.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Instructor from "./JsonData/student.json";

export default function OurInstructors() {
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="w-full pb-24">
      <div className="text-black text-3xl font-semibold lg:px-10 mx-12 pb-16">
        Meet our instructors
      </div>
      <div className="">
        <div className="text-start font-poppins rounded-3xl lg:px-9">
          <div className="text-black lg:px-10 gap-8">
            <Slider {...settings}>
              {Instructor?.map((person) => (
                <div>
                  <div className="flex-wrap group shadow mx-3 p-3">
                    <img src={Apu} width={348} className="group-hover:opacity-0 group-hover:scale-90 duration-700 m-auto" alt="" />
                    <div className="w-[350px] opacity-0 absolute -top-4 group-hover:opacity-100 group-hover:visible duration-1000 group-hover:top-0 text-center pt-9 px-12 pb-12 ">
                      <div className="pb-4">
                        <img
                          src={Apu}
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

                      <div className="text-base">“{person.comment}”</div>
                    </div>
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
