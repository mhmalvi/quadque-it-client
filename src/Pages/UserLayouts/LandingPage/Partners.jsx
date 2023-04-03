import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Businesses from "../../../Asset/Image/partners.png";
import Partnerslogo from "../LandingPage/JsonData/partners.json"

const Partners = () => {
  const sliderRef = useRef(null);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 600,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5,
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
    <div className="w-full pb-18 lg:pb-56">
      <div className="text-center rounded-3xl">
        <div className="text-black text-2xl md:text-4xl font-bold pb-5 text-shadow">
          Our Partners
        </div>
        <div className="lg:w-1/3 text-black text-lg m-auto pb-14">
          Take a look at some of our reputed industry partners.
        </div>
        <div className="w-full text-white">
          <Slider ref={sliderRef} {...settings}>
            {Partnerslogo?.map((partner, i) => (
              <div key={i}>
                  <img
                    src={partner?.logo}
                    alt=""
                    className="w-[10rem] mx-auto"
                  />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Partners;
