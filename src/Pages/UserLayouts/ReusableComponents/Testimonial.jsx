import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Instructor from "../LandingPage/JsonData/student.json";
import RightArrow from "../../../Asset/Image/arrow-right.png";
import LeftArrow from "../../../Asset/Image/arrow-left.png";

const Testimonial = () => {
  const sliderRef = useRef(null);
  const settings = {
    className: "center",
    infinite: true,
    speed: 600,
    arrows: false,
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
    <div className="w-full bg-[#040422] py-13 lg:py-24">
      <div className="lg:flex lg:justify-between lg:px-10">
        <div className="text-white text-3xl font-semibold text-center lg:text-start lg:ml-12 pb-16 px-4 lg:px-0 text-shadow">
          Get to know our instructors
        </div>
        <div className="hidden lg:block">
          <div className="flex justify-center gap-5 mr-12">
            <img
              src={LeftArrow}
              alt=""
              className="w-10 h-10"
              onClick={() => sliderRef.current.slickPrev()}
            />
            <img
              src={RightArrow}
              alt=""
              className="w-10 h-10"
              onClick={() => sliderRef.current.slickNext()}
            />
          </div>
        </div>
      </div>
      <div className="">
        <div className="text-start rounded-3xl lg:px-9">
          <div className="text-white lg:px-10 gap-8">
            <Slider ref={sliderRef} {...settings}>
              {Instructor?.map((person, i) => (
                <div key={i}>
                  <div className="w-[350px] 2xl:w-[420px] flex-wrap group my-5 m-auto">
                    <img
                      src={person?.image}
                      className="lg:w-[300px] group-hover:opacity-0 group-hover:scale-80 duration-700 m-auto"
                      alt=""
                    />
                    <div className="w-[350px] 2xl:w-[420px] opacity-0 absolute -top-4 group-hover:opacity-100 group-hover:visible duration-1000 group-hover:top-0 text-center pt-9 pb-12 m-auto">
                      <div className="pb-4">
                        <img
                          src={person?.image}
                          alt=""
                          className="m-auto"
                          width={110}
                        />
                      </div>
                      <div className="text-xl font-semibold pb-1">
                        {person?.name}
                      </div>
                      <div className="text-brand-color text-base font-semibold pb-9">
                        {person?.job}
                      </div>

                      <div className="text-base">“{person?.comment}”</div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="block lg:hidden">
            <div className="flex justify-center gap-5 py-5">
              <img
                src={LeftArrow}
                alt=""
                className="w-10 h-10"
                onClick={() => sliderRef.current.slickNext()}
              />
              <img
                src={RightArrow}
                alt=""
                className="w-10 h-10"
                onClick={() => sliderRef.current.slickPrev()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
