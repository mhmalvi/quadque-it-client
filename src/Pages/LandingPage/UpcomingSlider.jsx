import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Graphics from "../../Asset/Image/graphics.png";

export default function MultipleItems(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
    };
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
          <div className="flex-col group bg-home-color rounded-3xl hover:border-4 hover:bg-[#050042] hover:border-[#23BDEE]">
            <div className="">
              <img
                src={Graphics}
                alt=""
                className="w-full rounded-3xl scale-90 group-hover:scale-100 ease-in duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex-col">
                <div className="flex justify-between">
                  <div className="bg-[#1483a4] text-[#23BDEE] bg-opacity-50 rounded-full py-2 px-4">
                    5.6.22
                  </div>
                  <div className="text-xl py-2">15000 tk</div>
                </div>
              </div>
              <div className="text-2xl pt-2 left-0">Motion Graphics</div>
              <div className="py-2">
                Our new seminar in wordpress 26 June Our new wordpress 26 June
              </div>
            </div>
          </div>
          </div>
          <div>
          <div className="flex-col group bg-home-color rounded-3xl hover:border-4 hover:bg-[#050042] hover:border-[#23BDEE]">
            <div className="">
              <img
                src={Graphics}
                alt=""
                className="w-full rounded-3xl scale-90 group-hover:scale-100 ease-in duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex-col">
                <div className="flex justify-between">
                  <div className="bg-[#1483a4] text-[#23BDEE] bg-opacity-50 rounded-full py-2 px-4">
                    5.6.22
                  </div>
                  <div className="text-xl py-2">15000 tk</div>
                </div>
              </div>
              <div className="text-2xl pt-2 left-0">Motion Graphics</div>
              <div className="py-2">
                Our new seminar in wordpress 26 June Our new wordpress 26 June
              </div>
            </div>
          </div>
          </div>
          <div>
          <div className="flex-col group bg-home-color rounded-3xl hover:border-4 hover:bg-[#050042] hover:border-[#23BDEE]">
            <div className="">
              <img
                src={Graphics}
                alt=""
                className="w-full rounded-3xl scale-90 group-hover:scale-100 ease-in duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex-col">
                <div className="flex justify-between">
                  <div className="bg-[#1483a4] text-[#23BDEE] bg-opacity-50 rounded-full py-2 px-4">
                    5.6.22
                  </div>
                  <div className="text-xl py-2">15000 tk</div>
                </div>
              </div>
              <div className="text-2xl pt-2 left-0">Motion Graphics</div>
              <div className="py-2">
                Our new seminar in wordpress 26 June Our new wordpress 26 June
              </div>
            </div>
          </div>
          </div>
          <div>
          <div className="flex-col group bg-home-color rounded-3xl hover:border-4 hover:bg-[#050042] hover:border-[#23BDEE]">
            <div className="">
              <img
                src={Graphics}
                alt=""
                className="w-full rounded-3xl scale-90 group-hover:scale-100 ease-in duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex-col">
                <div className="flex justify-between">
                  <div className="bg-[#1483a4] text-[#23BDEE] bg-opacity-50 rounded-full py-2 px-4">
                    5.6.22
                  </div>
                  <div className="text-xl py-2">15000 tk</div>
                </div>
              </div>
              <div className="text-2xl pt-2 left-0">Motion Graphics</div>
              <div className="py-2">
                Our new seminar in wordpress 26 June Our new wordpress 26 June
              </div>
            </div>
          </div>
          </div>
          <div>
          <div className="flex-col group bg-home-color rounded-3xl hover:border-4 hover:bg-[#050042] hover:border-[#23BDEE]">
            <div className="">
              <img
                src={Graphics}
                alt=""
                className="w-full rounded-3xl scale-90 group-hover:scale-100 ease-in duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex-col">
                <div className="flex justify-between">
                  <div className="bg-[#1483a4] text-[#23BDEE] bg-opacity-50 rounded-full py-2 px-4">
                    5.6.22
                  </div>
                  <div className="text-xl py-2">15000 tk</div>
                </div>
              </div>
              <div className="text-2xl pt-2 left-0">Motion Graphics</div>
              <div className="py-2">
                Our new seminar in wordpress 26 June Our new wordpress 26 June
              </div>
            </div>
          </div>
          </div>
          <div>
          <div className="flex-col group bg-home-color rounded-3xl hover:border-4 hover:bg-[#050042] hover:border-[#23BDEE]">
            <div className="">
              <img
                src={Graphics}
                alt=""
                className="w-full rounded-3xl scale-90 group-hover:scale-100 ease-in duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex-col">
                <div className="flex justify-between">
                  <div className="bg-[#1483a4] text-[#23BDEE] bg-opacity-50 rounded-full py-2 px-4">
                    5.6.22
                  </div>
                  <div className="text-xl py-2">15000 tk</div>
                </div>
              </div>
              <div className="text-2xl pt-2 left-0">Motion Graphics</div>
              <div className="py-2">
                Our new seminar in wordpress 26 June Our new wordpress 26 June
              </div>
            </div>
          </div>
          </div>
          <div>
          <div className="flex-col group bg-home-color rounded-3xl hover:border-4 hover:bg-[#050042] hover:border-[#23BDEE]">
            <div className="">
              <img
                src={Graphics}
                alt=""
                className="w-full rounded-3xl scale-90 group-hover:scale-100 ease-in duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex-col">
                <div className="flex justify-between">
                  <div className="bg-[#1483a4] text-[#23BDEE] bg-opacity-50 rounded-full py-2 px-4">
                    5.6.22
                  </div>
                  <div className="text-xl py-2">15000 tk</div>
                </div>
              </div>
              <div className="text-2xl pt-2 left-0">Motion Graphics</div>
              <div className="py-2">
                Our new seminar in wordpress 26 June Our new wordpress 26 June
              </div>
            </div>
          </div>
          </div>
          <div>
          <div className="flex-col group bg-home-color rounded-3xl hover:border-4 hover:bg-[#050042] hover:border-[#23BDEE]">
            <div className="">
              <img
                src={Graphics}
                alt=""
                className="w-full rounded-3xl scale-90 group-hover:scale-100 ease-in duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex-col">
                <div className="flex justify-between">
                  <div className="bg-[#1483a4] text-[#23BDEE] bg-opacity-50 rounded-full py-2 px-4">
                    5.6.22
                  </div>
                  <div className="text-xl py-2">15000 tk</div>
                </div>
              </div>
              <div className="text-2xl pt-2 left-0">Motion Graphics</div>
              <div className="py-2">
                Our new seminar in wordpress 26 June Our new wordpress 26 June
              </div>
            </div>
          </div>
          </div>
          <div>
          <div className="flex-col group bg-home-color rounded-3xl hover:border-4 hover:bg-[#050042] hover:border-[#23BDEE]">
            <div className="">
              <img
                src={Graphics}
                alt=""
                className="w-full rounded-3xl scale-90 group-hover:scale-100 ease-in duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex-col">
                <div className="flex justify-between">
                  <div className="bg-[#1483a4] text-[#23BDEE] bg-opacity-50 rounded-full py-2 px-4">
                    5.6.22
                  </div>
                  <div className="text-xl py-2">15000 tk</div>
                </div>
              </div>
              <div className="text-2xl pt-2 left-0">Motion Graphics</div>
              <div className="py-2">
                Our new seminar in wordpress 26 June Our new wordpress 26 June
              </div>
            </div>
          </div>
          </div>
        </Slider>
      </div>
    );
}