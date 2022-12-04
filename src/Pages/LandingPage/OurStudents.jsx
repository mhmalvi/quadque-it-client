import React from "react";
import PersonOne from "../../Asset/Image/person-1.png";
import PersonTwo from "../../Asset/Image/person-2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Instructor from "./JsonData/student.json";


export default function OurStudents() {
  const settings = {
    dots: true,
    infinite: false,
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
    <div className="w-full pb-36 lg:visible">
      <div className="lg:flex">
        <div className="text-center font-poppins rounded-3xl mx-9">
          <div className="w-full text-black text-3xl lg:text-5xl font-bold px-1 lg:mx-12">
            What our <span className="text-brand-color">Students</span> say <br />
            about us
          </div>
        </div>
        <div className="w-full lg:w-2/3 text-start font-poppins">
          <div className="text-black lg:px-10 gap-8">
          <Slider {...settings}>
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
            {/* card1 */}
{/*               <div className="w-full shadow pt-9 px-12 pb-12">
                <div className="flex pb-6">
                  <div className="pr-4"><img src={PersonOne} alt="" width={70}/></div>
                  <div className="flex-col pt-2">
                    <div className="text-xl font-semibold">Fahim Fayaz</div>
                    <div className="text-brand-color text-base font-semibold">Software Developer</div>
                    </div>
                </div>
                <div className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis </div>
              </div> */}
              {/* card2 */}
{/*               <div className="w-full shadow pt-9 px-12 pb-12">
                <div className="flex pb-6">
                  <div className="pr-4"><img src={PersonTwo} alt="" width={70}/></div>
                  <div className="flex-col pt-2">
                    <div className="text-xl font-semibold">Mohh Jumah</div>
                    <div className="text-brand-color text-base font-semibold">Data Analyst</div>
                    </div>
                </div>
                <div className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis </div>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
