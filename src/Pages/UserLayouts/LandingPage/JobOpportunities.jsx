import React from "react";
import shourav from "../../../Asset/Image/job-op2.png";
// import JobIcon from "../../../Asset/Icon/jobopp.svg";
import Icons from "../../../Components/Shared/Icons";
import Fade from "react-reveal/Fade";


const JobOpportunities = () => {
  return (
    <div className="w-full pb-18 lg:pb-44">
      <div className="">
        <div className="w-4/5 font-bold text-2xl lg:text-4xl text-center lg:text-start m-auto pb-8 lg:pb-16 text-shadow">
          {" "}
          Quality Training to Improve Your Career{" "}
        </div>
      </div>
      <div className="relative mx-auto flex flex-col lg:flex-row gap-6 lg:gap-16">
        <Fade left big>
          <div className="m-auto pb-5 lg:pb-0 px-4 lg:px-0 lg:rounded-t-3xl lg:rounded-bt-3xl lg:rounded-br-[5rem] overflow-visible">
            <img
              src={shourav}
              alt=""
              className="lg:w-2/3 mx-auto shrink-0 lg:rounded-t-3xl lg:rounded-bt-3xl lg:rounded-br-[5rem] lg:hover:scale-110 duration-500"
            />
            {/* <img src={JobIcon} alt="" className="w-[14rem] absolute hidden lg:block left-[30%] top-30"/> */}
          </div>
        </Fade>
        <Fade right big>
          <div className="lg:w-1/2 text-start my-auto">
            <div className="font-semibold text-xl lg:text-4xl pb-3 px-10 lg:px-0">
              {" "}
              Develop Your Expertise through Our Amazing Facilities
            </div>
            <div className="flex-col lg:text-xl lg:px-0 font-semibold px-10 leading-5">
              <div className="flex gap-4 py-4">
                <div>
                  <Icons.EBook />
                </div>
                <span className="my-auto">
                  Get free E-books, videos and kits
                </span>
              </div>
              <div className="flex gap-4 py-4">
                <div>
                  <Icons.Learning />
                </div>
                <span className="my-auto">Learn at your own pace</span>
              </div>
              <div className="flex gap-4 py-4">
                <div>
                  <Icons.Colab />
                </div>
                <span className="my-auto">
                  Collaborate with different learners from all over the world
                </span>
              </div>
              <div className="flex gap-4 py-4">
                <div>
                  <Icons.Instructors />
                </div>
                <span className="my-auto">
                  Learn from our expert trainers with years of industry
                  experience
                </span>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default JobOpportunities;
