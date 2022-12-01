import React from "react";
import shourav from "../../Asset/Image/shourav.png";
import Icons from "../../Components/Shared/Icons";

const JobOpportunities = () => {
  return (
    <div className="w-full font-poppins pb-44">
      <div className="">
        <div className="w-4/5 font-poppins font-bold text-3xl lg:text-4xl text-center lg:text-start m-auto pb-16">
          {" "}
          We Bring The Good Education To Life{" "}
        </div>
      </div>
      <div className="lg:w-4/5 lg:flex justify-center m-auto lg:gap-20">
        <div className="flex">
          <div className="flex-wrap shrink-0 lg:rounded-tr-3xl lg:rounded-tl-3xl lg:rounded-br-[5rem] lg:rounded-bl-3xl overflow-hidden">
            <img
              src={shourav}
              alt=""

              className="w-full lg:rounded-tr-3xl lg:rounded-tl-3xl lg:rounded-br-[5rem] lg:rounded-bl-3xl hover:scale-110 duration-1000"
            />
          </div>

          <Icons.JobOpportunities className="invisible lg:visible m-auto relative right-36 top-15 sm:shrink-0" />
        </div>
        <div className="pt-12 lg:pt-0 px-10 lg:px-0">
          <div className="font-bold text-2xl lg:text-4xl pb-10">
            {" "}
            Let Your Education Do The Walking
          </div>
          <div className="flex py-4">
            <div>
              <Icons.EBook />
            </div>
            <span className="font-poppins font-semibold text-base md:text-lg lg:text-xl pl-5 py-2">
              Free E-book, videos and kits{" "}
            </span>
          </div>
          <div className="flex py-4">
            <div>
              <Icons.Learning />
            </div>
            <span className="font-poppins font-semibold text-base md:text-lg lg:text-xl pl-5 py-2">
              Learn at your own pace{" "}
            </span>
          </div>
          <div className="flex py-4">
            <div>
              <Icons.Colab />
            </div>
            <span className="font-poppins font-semibold text-base md:text-lg lg:text-xl pl-5 py-2">
              Collaborate with different learners around{" "}
            </span>
          </div>
          <div className="flex py-4">
            <div>
              <Icons.instructors />
            </div>
            <span className="font-poppins font-semibold text-base md:text-lg lg:text-xl pl-5 py-2">
              Top Instructors around the globe{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOpportunities;
