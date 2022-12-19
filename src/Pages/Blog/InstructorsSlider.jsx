import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pranto from "../../Asset/Image/pranto.png";
import RightArrow from "../../Asset/Image/arrow-right.png";
import LeftArrow from "../../Asset/Image/arrow-left.png";

const InstructorsSlider = () => {
  const sliderRef = useRef(null);
  console.log(sliderRef.current);
  const settings = {
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
    <>
      <Slider ref={sliderRef} {...settings} className="">
        {/*     {Course?.map((course) => ( */}
        <div>
          <div className="flex-col bg-transparent rounded-2xl">
            <div className="h-72 flex-wrap overflow-hidden rounded-t-2xl">
              <img src={Pranto} className="w-full" alt="" />
            </div>
            <div className="flex-col justify-start m-auto px-6 py-7">
              <div className="text-2xl lg:text-4xl font-semibold pb-1">
                Pranto Islam1
              </div>
              <div className="text-sm font-semibold pb-3">UX UI Designer</div>
              <div className="text-xl text-[#23BDEE] font-semibold pb-5">
                Quadque
              </div>
              <div className="font-thin pb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, Lorem ipsum dolor sit amet, consectetur.
              </div>
              <div className="font-bold">Read More</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex-col bg-transparent rounded-2xl">
            <div className="h-72 flex-wrap overflow-hidden rounded-t-2xl">
              <img src={Pranto} className="w-full" alt="" />
            </div>
            <div className="flex-col justify-start m-auto px-6 py-7">
              <div className="text-2xl lg:text-4xl font-semibold pb-1">
                Pranto Islam2
              </div>
              <div className="text-sm font-semibold pb-3">UX UI Designer</div>
              <div className="text-xl text-[#23BDEE] font-semibold pb-5">
                Quadque
              </div>
              <div className="font-thin pb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, Lorem ipsum dolor sit amet, consectetur.
              </div>
              <div className="font-bold">Read More</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex-col bg-transparent rounded-2xl">
            <div className="h-72 flex-wrap overflow-hidden rounded-t-2xl">
              <img src={Pranto} className="w-full" alt="" />
            </div>
            <div className="flex-col justify-start m-auto px-6 py-7">
              <div className="text-2xl lg:text-4xl font-semibold pb-1">
                Pranto Islam3
              </div>
              <div className="text-sm font-semibold pb-3">UX UI Designer</div>
              <div className="text-xl text-[#23BDEE] font-semibold pb-5">
                Quadque
              </div>
              <div className="font-thin pb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, Lorem ipsum dolor sit amet, consectetur.
              </div>
              <div className="font-bold">Read More</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex-col bg-transparent rounded-2xl">
            <div className="h-72 flex-wrap overflow-hidden rounded-t-2xl">
              <img src={Pranto} className="w-full" alt="" />
            </div>
            <div className="flex-col justify-start m-auto px-6 py-7">
              <div className="text-2xl lg:text-4xl font-semibold pb-1">
                Pranto Islam4
              </div>
              <div className="text-sm font-semibold pb-3">UX UI Designer</div>
              <div className="text-xl text-[#23BDEE] font-semibold pb-5">
                Quadque
              </div>
              <div className="font-thin pb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, Lorem ipsum dolor sit amet, consectetur.
              </div>
              <div className="font-bold">Read More</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex-col bg-transparent rounded-2xl">
            <div className="h-72 flex-wrap overflow-hidden rounded-t-2xl">
              <img src={Pranto} className="w-full" alt="" />
            </div>
            <div className="flex-col justify-start m-auto px-6 py-7">
              <div className="text-2xl lg:text-4xl font-semibold pb-1">
                Pranto Islam5
              </div>
              <div className="text-sm font-semibold pb-3">UX UI Designer</div>
              <div className="text-xl text-[#23BDEE] font-semibold pb-5">
                Quadque
              </div>
              <div className="font-thin pb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, Lorem ipsum dolor sit amet, consectetur.
              </div>
              <div className="font-bold">Read More</div>
            </div>
          </div>
        </div>

        {/*     ))} */}
      </Slider>
      <div className="flex justify-center gap-5">
        <img
          src={LeftArrow}
          alt=""
          onClick={() => sliderRef.current.slickNext()}
        />
        <img
          src={RightArrow}
          alt=""
          onClick={() => sliderRef.current.slickPrev()}
        />
      </div>
    </>
  );
};

export default InstructorsSlider;
