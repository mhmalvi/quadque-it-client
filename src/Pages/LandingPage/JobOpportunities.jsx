import React from "react";
import shourav from "../../Asset/Image/shourav.png";
import Icons from "../../Components/Shared/Icons";

const JobOpportunities = () => {
  return (
    <div className="w-full font-poppins pb-44">
      <div className="">
        <div className="w-2/3 font-poppins font-bold text-4xl m-auto pb-16">
          {" "}
          We Bring The Good Education To Life{" "}
        </div>
      </div>
      <div className="lg:w-2/3 lg:flex lg:justify-center m-auto gap-28">
        <div className="flex m-auto">
          <div className="flex-wrap shrink-0 rounded-tr-3xl rounded-tl-3xl rounded-br-[5rem] rounded-bl-3xl overflow-hidden">
          <img
            src={shourav}
            alt=""
            className="rounded-tr-3xl rounded-tl-3xl rounded-br-[5rem] rounded-bl-3xl hover:scale-110 duration-1000"
          />
          </div>

          <Icons.JobOpportunities className="m-auto relative right-36 top-15 sm:shrink-0" />
        </div>
        <div className="m-auto pt-12 lg:pt-0">
          <div className="font-bold text-2xl lg:text-4xl pb-10">
            {" "}
            Let Your Education Do The Walking
          </div>
          <div className="flex py-4">
            <div><Icons.EBook /></div>
            <span className="font-poppins font-semibold text-base md:text-lg lg:text-xl px-5 py-2">
              Free E-book, videos and kits{" "}
            </span>
          </div>
          <div className="flex py-4">
            <div><Icons.Learning /></div>
            <span className="font-poppins font-semibold text-base md:text-lg lg:text-xl px-5 py-2">
              Learn at your own pace{" "}
            </span>
          </div>
          <div className="flex py-4">
            <div><Icons.Colab /></div>
            <span className="font-poppins font-semibold text-base md:text-lg lg:text-xl px-5 py-2">
              Collaborate with different learners around{" "}
            </span>
          </div>
          <div className="flex py-4">
            <div><Icons.instructors /></div>
            <span className="font-poppins font-semibold text-base md:text-lg lg:text-xl px-5 py-2">
              Top Instructors around the globe{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOpportunities;
