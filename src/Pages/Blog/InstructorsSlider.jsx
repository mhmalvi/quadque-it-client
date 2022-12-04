import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hallway from "../../Asset/Image/hallway.png";
import RightArrow from "../../Asset/Image/arrow-right.png";
import LeftArrow from "../../Asset/Image/arrow-left.png";

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        display: "block",
        display: "flex",
        flex: "end",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <div>
        <img src={RightArrow} alt="" />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        display: "block",
        display: "flex",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <div>
        <img src={LeftArrow} alt="" />
      </div>
    </div>
  );
}

const InstructorsSlider = () => {
  const settings = {
    focusOnSelect: true,
    dots: true,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
          dots: true,
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
    <>
      <Slider {...settings}>
        {/*     {Course?.map((course) => ( */}
        <div>
          <div className="flex-col lg:max-w-xs bg-transparent lg:rounded-2xl">
            <div className="bg-black">
              <img src={hallway} className="w-full" alt="" />
            </div>
            <div className="flex-col lg:justify-start m-auto px-6 py-7">
              <div className="text-2xl lg:text-4xl font-semibold">
                Pranto Islam
              </div>
              <div className="text-sm font-semibold">UX UI Designer</div>
              <div className="text-xl text-[#23BDEE] font-semibold pb-5">
                Quadque
              </div>
              <div className="font-thin pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, Lorem ipsum dolor sit amet, consectetur.
              </div>
              <div className="font-bold">Read More</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex-col lg:max-w-xs bg-transparent lg:rounded-2xl">
            <div className="bg-black">
              <img src={hallway} className="w-full" alt="" />
            </div>
            <div className="flex-col lg:justify-start m-auto px-6 py-7">
              <div className="text-2xl lg:text-4xl font-semibold">
                Pranto Islam
              </div>
              <div className="text-sm font-semibold">UX UI Designer</div>
              <div className="text-xl text-[#23BDEE] font-semibold pb-5">
                Quadque
              </div>
              <div className="font-thin pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, Lorem ipsum dolor sit amet, consectetur.
              </div>
              <div className="font-bold">Read More</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex-col lg:max-w-xs bg-transparent lg:rounded-2xl">
            <div className="bg-black">
              <img src={hallway} className="w-full" alt="" />
            </div>
            <div className="flex-col lg:justify-start m-auto px-6 py-7">
              <div className="text-2xl lg:text-4xl font-semibold">
                Pranto Islam
              </div>
              <div className="text-sm font-semibold">UX UI Designer</div>
              <div className="text-xl text-[#23BDEE] font-semibold pb-5">
                Quadque
              </div>
              <div className="font-thin pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, Lorem ipsum dolor sit amet, consectetur.
              </div>
              <div className="font-bold">Read More</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex-col lg:max-w-xs bg-transparent lg:rounded-2xl">
            <div className="bg-black">
              <img src={hallway} className="w-full" alt="" />
            </div>
            <div className="flex-col lg:justify-start m-auto px-6 py-7">
              <div className="text-2xl lg:text-4xl font-semibold">
                Pranto Islam
              </div>
              <div className="text-sm font-semibold">UX UI Designer</div>
              <div className="text-xl text-[#23BDEE] font-semibold pb-5">
                Quadque
              </div>
              <div className="font-thin pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, Lorem ipsum dolor sit amet, consectetur.
              </div>
              <div className="font-bold">Read More</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex-col lg:max-w-xs bg-transparent lg:rounded-2xl">
            <div className="bg-black">
              <img src={hallway} className="w-full" alt="" />
            </div>
            <div className="flex-col lg:justify-start m-auto px-6 py-7">
              <div className="text-2xl lg:text-4xl font-semibold">
                Pranto Islam
              </div>
              <div className="text-sm font-semibold">UX UI Designer</div>
              <div className="text-xl text-[#23BDEE] font-semibold pb-5">
                Quadque
              </div>
              <div className="font-thin pb-2">
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
    </>
  );
};

export default InstructorsSlider;
