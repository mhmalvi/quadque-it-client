import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Instructor from "../../../Components/Shared/JsonData/student.json";
import RightArrow from "../../../Asset/Image/arrow-right.png";
import LeftArrow from "../../../Asset/Image/arrow-left.png";
import Stu1 from "../../../Asset/Image/stu1.png";
import Stu2 from "../../../Asset/Image/stu2.png";
import Stu3 from "../../../Asset/Image/stu3.png";
import Stu4 from "../../../Asset/Image/stu4.png";
import Stu5 from "../../../Asset/Image/stu5.png";
import Stu6 from "../../../Asset/Image/stu6.png";
import Stu7 from "../../../Asset/Image/stu7.png";
import Stu8 from "../../../Asset/Image/stu8.png";
import Fade from "react-reveal/Fade";

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
          What our students have to say
        </div>
        <div className="hidden lg:block">
          <div className="flex justify-center gap-5 mr-12">
            <img
              src={LeftArrow}
              alt=""
              className="w-10 h-10 cursor-pointer"
              onClick={() => sliderRef.current.slickPrev()}
            />
            <img
              src={RightArrow}
              alt=""
              className="w-10 h-10 cursor-pointer"
              onClick={() => sliderRef.current.slickNext()}
            />
          </div>
        </div>
      </div>
      <div className="">
        <div className="text-start rounded-3xl lg:px-9">
          <div className="text-white lg:px-10 gap-8">
            <Fade bottom duration={2000}>
              <Slider ref={sliderRef} {...settings}>
                {Instructor?.map((person, i) => (
                  <div key={i}>
                    <div className="w-[350px] 2xl:w-[420px] flex-wrap group my-5 m-auto">
                      <img
                        src={
                          StudentImg?.find((wtf) => wtf.id === person?.id)
                            ?.stuimage
                        }
                        className="lg:w-[300px] group-hover:opacity-0 group-hover:scale-0 group-hover:-translate-y-32 duration-700 m-auto"
                        alt=""
                      />
                      <div className="w-[350px] 2xl:w-[420px] opacity-0 absolute -top-4 group-hover:opacity-100 group-hover:visible duration-1000 group-hover:top-0 text-center pt-9 pb-12 m-auto">
                        <div className="pb-4">
                          <img
                            src={
                              StudentImg?.find((wtf) => wtf.id === person?.id)
                                ?.stuimage
                            }
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
            </Fade>
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

const StudentImg = [
  {id:1, stuimage:Stu4},
  {id:2, stuimage:Stu2},
  {id:3, stuimage:Stu7},
  {id:4, stuimage:Stu3},
  {id:5, stuimage:Stu6},
  {id:6, stuimage:Stu1},
  {id:7, stuimage:Stu5},
  {id:8, stuimage:Stu8},
]
