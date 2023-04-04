import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Student from "../../../Components/Shared/JsonData/student.json";
import RightArrow from "../../../Asset/Image/purple-right-arrow.png";
import LeftArrow from "../../../Asset/Image/purple-left-arrow.png";
import Stu1 from "../../../Asset/Image/stu1.png";
import Stu2 from "../../../Asset/Image/stu2.png";
import Stu3 from "../../../Asset/Image/stu3.png";
import Stu4 from "../../../Asset/Image/stu4.png";
import Stu5 from "../../../Asset/Image/stu5.png";
import Stu6 from "../../../Asset/Image/stu6.png";
import Stu7 from "../../../Asset/Image/stu7.png";
import Stu8 from "../../../Asset/Image/stu8.png";

const OurStudents = ()=> {
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
        <div className="text-center lg:text-start rounded-3xl mx-9">
          <div className="w-full text-black text-3xl lg:text-5xl font-bold lg:mx-12 pb-18 text-shadow">
            What our <span className="text-brand-color">Students</span> say{" "}
            <br />
            about us
          </div>
          <div className="flex justify-center gap-5 m-auto">
            <img
              src={LeftArrow}
              alt=""
              className="cursor-pointer"
              onClick={() => sliderRef.current.slickPrev()}
            />
            <img
              src={RightArrow}
              alt=""
              className="cursor-pointer"
              onClick={() => sliderRef.current.slickNext()}
            />
          </div>
        </div>
        <div className="w-full lg:w-2/3 text-start">
          <div className="text-black lg:px-10 gap-8">
            <Slider ref={sliderRef} {...settings}>
              {Student?.map((person, i) => (
                <div key={i}>
                  <div className="bg-white max-w-[480px] shadow-md text-center rounded-md pt-9 px-12 pb-12 mx-3 my-3">
                    <div className="pb-4">
                      <img
                        src={
                          StudentImg?.find((wtf) => wtf.id === person?.id)
                            ?.stuimage
                        }
                        alt=""
                        className="w-[10rem] h-[10rem] m-auto"
                      />
                    </div>
                    <div className="text-xl font-semibold pb-1">
                      {person?.name}
                    </div>
                    <div className="text-brand-color text-base font-semibold pb-9">
                      {person?.job}
                    </div>

                    <div className="text-base text-start">
                      “{person?.comment}”
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
export default OurStudents
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