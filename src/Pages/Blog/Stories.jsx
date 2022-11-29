import React from "react";
import stories1 from "../../Asset/Image/stories1.png";
import stories2 from "../../Asset/Image/stories2.png";
import stories3 from "../../Asset/Image/stories3.png";
import stories4 from "../../Asset/Image/stories4.png";
import stories5 from "../../Asset/Image/stories5.png";
import stories6 from "../../Asset/Image/stories6.png";
import meeting from "../../Asset/Image/meeting.png";
import hallway from "../../Asset/Image/hallway.png";

const Stories = () => {
  return (
    <div className="w-full bg-home-color font-poppins pt-32 pb-20 px-30 mt-10">
      <div className="font-poppins text-white">
        <div className="flex-col m-auto pb-18">
          <div className="text-5xl font-bold text-center leading-snug">
            Success
          </div>
          <div className="text-4xl font-bold text-center leading-snug">
            I think so, this is it.
          </div>
          <div className="w-2/3 text-center text-lg py-5 pb-7 m-auto">
            Design begins after I begin to think about how to present an <br />{" "}
            experience most successfully, whether a button I put in can solve{" "}
            <br /> a problem. The only point in design is not ui design.
          </div>
        </div>
        <div className="flex justify-between pb-72">
          <div className="flex-col m-auto gap-6">
            {/* card */}
            <div className="flex bg-white rounded-2xl mb-6">
              <div>
                <img src={hallway} className="h-full rounded-tl-2xl rounded-bl-2xl" alt="" />
              </div>
              <div className="flex-col lg:justify-start text-black m-auto px-6 py-7">
                <div className="text-4xl font-semibold">Pranto Islam</div>
                <div className="text-sm font-semibold">UX UI Designer</div>
                <div className="text-xl text-[#23BDEE] font-semibold pb-5">
                  Quadque
                </div>
                <div className="pb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  <br /> Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                  dapibus leo.{" "}
                </div>
                <div className="font-bold">Read More</div>
              </div>
            </div>
            {/* card */}
            <div className="flex bg-white rounded-2xl mt-6">
              <div className="flex-col lg:justify-start text-black m-auto px-6 py-7">
                <div className="text-4xl font-semibold">Pranto Islam</div>
                <div className="text-sm font-semibold">UX UI Designer</div>
                <div className="text-xl text-[#23BDEE] font-semibold pb-5">
                  Quadque
                </div>
                <div className="pb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  <br /> Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                  dapibus leo.{" "}
                </div>
                <div className="font-bold">Read More</div>
              </div>
              <div>
                <img src={hallway} className="h-full rounded-tr-2xl rounded-br-2xl" alt="" />
              </div>
            </div>
          </div>
          {/* card */}
          <div className="flex-col max-w-xs bg-white rounded-2xl">
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
        <div className="w-full lg:flex justify-evenly">
          <div className="m-auto">
            <img
              src={meeting}
              alt=""
              width={498}
              className="rounded-xl shrink-0 pl-20"
            />
          </div>
          <div className="flex-col lg:justify-start m-auto px-10">
            <div className="text-4xl font-semibold pb-5">Students Work</div>
            <div className="text-xl font-semibold pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Ut
              elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.{" "}
            </div>
            <div className="text-lg pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Ut
              elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.{" "}
            </div>
          </div>
        </div>
        <div className="m-auto pt-32 pb-18">
          <div className="text-4xl text-center leading-snug pb-12">Art Works</div>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="flex-col">
              <div className="flex-wrap overflow-hidden rounded-xl my-2">
                <img
                  src={stories1}
                  alt=""
                  className="rounded-xl hover:scale-110 duration-1000"
                />
              </div>
              <div className="flex-wrap overflow-hidden rounded-xl my-2">
                <img
                  src={stories2}
                  alt=""
                  className="rounded-xl hover:scale-110 duration-1000"
                />
              </div>
              <div className="flex-wrap overflow-hidden rounded-xl my-2">
                <img
                  src={stories3}
                  alt=""
                  className="rounded-xl hover:scale-110 duration-1000"
                />
              </div>
            </div>
            <div className="flex-col">
              <div className="flex-wrap overflow-hidden rounded-xl my-2">
                <img
                  src={stories4}
                  alt=""
                  className="rounded-xl hover:scale-110 duration-1000"
                />
              </div>
              <div className="flex-wrap overflow-hidden rounded-xl my-2">
                <img
                  src={stories5}
                  alt=""
                  className="rounded-xl hover:scale-110 duration-1000"
                />
              </div>
              <div className="flex-wrap overflow-hidden rounded-xl my-2">
                <img
                  src={stories6}
                  alt=""
                  className="rounded-xl hover:scale-110 duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
