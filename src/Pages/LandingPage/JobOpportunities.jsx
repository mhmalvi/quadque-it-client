import React from "react";
import shourav from "../../Asset/Image/shourav.png";
import Icons from "../../Components/Shared/Icons";

const JobOpportunities = () => {
  return (
    <div className="w-full font-poppins pb-18 lg:pb-44">
      <div className="">
        <div className="w-4/5 font-poppins font-bold text-3xl lg:text-4xl text-center lg:text-start m-auto pb-8 lg:pb-16">
          {" "}
          Quality Training to Improve Your Career{" "}
        </div>
      </div>
      <div className="lg:w-4/5 lg:flex justify-center m-auto lg:gap-20">
        <div className="lg:w-1/2 relative">
          <div className="w-full min-w-[500px] flex-wrap shrink-0 lg:rounded-tr-3xl lg:rounded-tl-3xl lg:rounded-br-[5rem] lg:rounded-bl-3xl overflow-hidden">
            <img
              src={shourav}
              alt=""
              className="w-full lg:rounded-tr-3xl lg:rounded-tl-3xl lg:rounded-br-[5rem] lg:rounded-bl-3xl hover:scale-110 duration-1000"
            />
          </div>

          <Icons.JobOpportunities className="hidden lg:inline-block m-auto absolute -right-[25%] bottom-[10%] sm:shrink-0" />
        </div>
        <div className="lg:w-1/2 pt-12 lg:pt-0 px-10 lg:px-0">
          <div className="font-bold text-2xl lg:text-5xl pb-5">
            {" "}
            Develop Your Expertise through Our Amazing Facilities
          </div>
          <div className="flex py-4">
            <div className="my-auto">
              <Icons.EBook />
            </div>
            <span className="font-poppins font-semibold text-base md:text-lg lg:text-xl pl-5 py-2">
              Get free E-books, videos and kits{" "}
            </span>
          </div>
          <div className="flex py-4">
            <div className="my-auto">
              <Icons.Learning />
            </div>
            <span className="font-poppins font-semibold text-base md:text-lg lg:text-xl pl-5 py-2">
              Learn at your own pace{" "}
            </span>
          </div>
          <div className="flex py-4">
            <div className="my-auto">
              <Icons.Colab />
            </div>
            <span className="font-poppins font-semibold text-base md:text-lg lg:text-xl pl-5 py-2">
              Collaborate with different learners from all over the world{" "}
            </span>
          </div>
          <div className="flex py-4">
            <div className="my-auto">
              <Icons.instructors />
            </div>
            <span className="font-poppins font-semibold text-base md:text-lg lg:text-xl pl-5 py-2">
              Learn from our expert trainers with years of industry experience{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOpportunities;
