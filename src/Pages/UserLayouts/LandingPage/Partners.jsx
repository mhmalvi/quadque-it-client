import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Partnerslogo from "../../../Components/Shared/JsonData/partners.json";
import Fade from "react-reveal/Fade";

const Partners = ({theme}) => {
  const sliderRef = useRef(null);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 600,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
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
    <div className={`${theme === "dark" && "bg-home-color"} w-full pb-18 lg:pb-28`}>
      <div className="text-center rounded-3xl">
        <div className={`${theme==="dark"?"text-white":"text-black"} text-2xl md:text-4xl font-bold pb-5 text-shadow`}>
          Our Partners
        </div>
        <div className={`${theme==="dark"?"text-white":"text-black"} lg:w-1/3 text-lg m-auto pb-14`}>
          Take a look at some of our reputed industry partners.
        </div>
        <Fade bottom>
          <div className="w-full text-white">
            <Slider ref={sliderRef} {...settings}>
              {Partnerslogo?.map((partner, i) => (
                <div key={i} className="outline-none">
                  <img src={partner?.logo} alt="" className="w-[8rem] m-auto" />
                </div>
              ))}
            </Slider>
          </div>
        </Fade>
      </div>
    </div>
  );
};
export default Partners;
