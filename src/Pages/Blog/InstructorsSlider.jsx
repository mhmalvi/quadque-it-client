import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hallway from "../../Asset/Image/hallway.png";

const InstructorsSlider = () => {
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
          <div className="flex-col lg:max-w-xs bg-white rounded-2xl">
            <div className="">
              <img src={hallway} className="w-full" alt="" />
            </div>
            <div className="flex-col lg:justify-start text-black m-auto px-6 py-7">
              <div className="text-4xl font-semibold">Pranto Islam</div>
              <div className="text-sm font-semibold">UX UI Designer</div>
              <div className="text-xl text-[#23BDEE] font-semibold pb-5">
                Quadque
              </div>
              <div className="pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.{" "}
              </div>
              <div className="font-bold">Read More</div>
            </div>
          </div>
      </div>
      <div>
          <div className="flex-col lg:max-w-xs bg-white rounded-2xl">
            <div>
              <img src={hallway} className="w-full rounded-2xl" alt="" />
            </div>
            <div className="flex-col lg:justify-start text-black m-auto px-6 py-7">
              <div className="text-4xl font-semibold">Pranto Islam</div>
              <div className="text-sm font-semibold">UX UI Designer</div>
              <div className="text-xl text-[#23BDEE] font-semibold pb-5">
                Quadque
              </div>
              <div className="pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.{" "}
              </div>
              <div className="font-bold">Read More</div>
            </div>
          </div>
      </div>
      <div>
          <div className="flex-col lg:max-w-xs bg-white rounded-2xl">
            <div>
              <img src={hallway} className="w-full rounded-2xl" alt="" />
            </div>
            <div className="flex-col lg:justify-start text-black m-auto px-6 py-7">
              <div className="text-4xl font-semibold">Pranto Islam</div>
              <div className="text-sm font-semibold">UX UI Designer</div>
              <div className="text-xl text-[#23BDEE] font-semibold pb-5">
                Quadque
              </div>
              <div className="pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.{" "}
              </div>
              <div className="font-bold">Read More</div>
            </div>
          </div>
      </div>
      <div>
          <div className="flex-col lg:max-w-xs bg-white rounded-2xl">
            <div>
              <img src={hallway} className="w-full rounded-2xl" alt="" />
            </div>
            <div className="flex-col lg:justify-start text-black m-auto px-6 py-7">
              <div className="text-4xl font-semibold">Pranto Islam</div>
              <div className="text-sm font-semibold">UX UI Designer</div>
              <div className="text-xl text-[#23BDEE] font-semibold pb-5">
                Quadque
              </div>
              <div className="pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.{" "}
              </div>
              <div className="font-bold">Read More</div>
            </div>
          </div>
      </div>
      <div>
          <div className="flex-col lg:max-w-xs bg-white rounded-2xl">
            <div>
              <img src={hallway} className="w-full rounded-2xl" alt="" />
            </div>
            <div className="flex-col lg:justify-start text-black m-auto px-6 py-7">
              <div className="text-4xl font-semibold">Pranto Islam</div>
              <div className="text-sm font-semibold">UX UI Designer</div>
              <div className="text-xl text-[#23BDEE] font-semibold pb-5">
                Quadque
              </div>
              <div className="pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.{" "}
              </div>
              <div className="font-bold">Read More</div>
            </div>
          </div>
      </div>
      
{/*     ))} */}
  </Slider>
  </>
  )
}

export default InstructorsSlider