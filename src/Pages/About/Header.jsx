import React from "react";
//import Rectangle from "../../Asset/Image/rectangle.png";
//import RectangleTwo from "../../Asset/Image/rectangle2.png";
import Classroom from "../../Asset/Image/classroom.png";
import Students from "../../Asset/Image/students.png";
import MobilePic from "../../Asset/Image/mobile-browse.png";
import Box from "../../Asset/Image/box.png";
import Box2 from "../../Asset/Image/box2.png";
import Icons from "../../Components/Shared/Icons";
import AboutMaterial from "./AboutMaterial";
import AnimatedText from "react-animated-text-content";

export default function Header() {
  return (
    <div className="w-full bg-home-color font-poppins">
      <div className="w-full font-poppins">
        <div className="lg:mt-10">
          <div className="lg:w-2/3 flex-col justify-center text-white m-auto pt-32">
            <div className="lg:text-5xl text-2xl font-bold text-center leading-snug">
              <AnimatedText
                type="chars"
                interval={0.03}
                duration={0.45}
                animation={{
                  ease: "ease-in-out",
                  scale: 0,
                }}
              >
                Delve into the World of Digital Marketing and IT with QIT.
              </AnimatedText>
            </div>
            <div className="w-2/3 lg:text-base text-xs text-center py-5 pb-7 m-auto">
              <AnimatedText
                type="chars"
                interval={0.02}
                duration={0.1}
                animation={{
                  ease: "ease-in-out",
                  scale: 0,
                }}
              >
              Let Us Help You to Develop the Skills You Need to Stand Out in the
              Fast-Paced World of Digital Marketing and IT.
              </AnimatedText>
            </div>
            <div className="flex justify-center gap-2 lg:gap-6 pb-8">
              <div>
                <button className="bg-[#2F327D] text-xs lg:text-sm rounded-lg py-2 px-6">
                  Online Courses
                </button>
              </div>
              <div>
                <button className="bg-white bg-opacity-10 text-xs lg:text-sm rounded-lg py-2 px-6">
                  Offline Courses
                </button>
              </div>
            </div>
            <div className="">
              <img src={Classroom} className="m-auto px-4 lg:px-0" alt="" />
            </div>
            <div className="flex-col lg:flex lg:flex-row m-auto gap-6 py-12 lg:py-20 px-3">
              <div className="lg:w-1/2 m-auto justify-center">
                <div className="lg:text-3xl text-2xl text-center lg:text-start pb-5">
                  We are a digital marketing and IT training provider.
                </div>
                <div className="pb-4 text-center lg:text-start font-thin">
                  We are here to mentor you and help you grow a sustainable and
                  solid career in the digital marketing and IT industry.
                </div>
                <div className="text-center lg:text-start pb-10 font-thin">
                  Our training courses combine the most innovative technological
                  methods and a personalised approach to deliver in-demand
                  skills for your portfolio.
                </div>
              </div>

              <div>
                <img src={Students} className="lg:w-full px-4" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white relative">
          <img
            src={Box}
            className="invisible lg:visible absolute top-0 left-[10%] w-20"
            alt=""
          />
          <div className="text-4xl font-bold text-center pt-13 lg:pt-24">
            Our Core Values
          </div>
          <div className="w-2/3 text-center text-lg py-5 pb-7 m-auto">
            We strongly believe in training our students according to <br />{" "}
            their strengths and weaknesses while ensuring a high-quality
            standard.
          </div>
          <div className="flex-col lg:w-3/4 lg:flex lg:flex-row text-center gap-6 pb-8 lg:pb-30 m-auto">
            <div className="flex-col p-7">
              <div className="">
                <Icons.Instructor className="h-25 m-auto" />
              </div>
              <div className="text-xl font-semibold py-2">
                Effective Lessons
              </div>
              <div className="text-base">
                We aim to enhance the expertise of our trainees through our
                experienced team of instructors with years of industry
                experience.
              </div>
            </div>
            <div className="flex-col p-7">
              <div>
                <Icons.Bachelor className="h-25 m-auto" />
              </div>
              <div className="text-xl font-semibold py-2">
                Personalised Training
              </div>
              <div className="text-base">
                We uniquely approach every student to identify their training
                requirements and develop practical solutions for effective
                training.
              </div>
            </div>
            <div className="flex-col p-7">
              <div>
                <Icons.Ribbon className="h-25 m-auto" />
              </div>
              <div className="text-xl font-semibold py-2">
                High-Quality Courses
              </div>
              <div className="text-base">
                We do not compromise on quality; our expert team strives to
                improve the resumes of our students through high-quality and
                impactful courses.
              </div>
            </div>
          </div>
          <img
            src={Box2}
            className="invisible lg:visible absolute float-right -bottom-0 right-[25%] w-60"
            alt=""
          />
        </div>
        <div className="text-white relative">
          <div className="text-4xl font-bold text-center pt-13 lg:pt-36">
            Why Choose Us
          </div>
          <div className="w-2/3 text-center text-lg font-thin py-5 m-auto">
            We have collaborated with some of the most reputed names in the
            digital marketing and IT scene. Therefore, we have a good idea of
            what works and what doesn’t. Take a look at some of the main reasons
            you should enrol in one of our courses.
          </div>
          <div className="lg:w-4/5 flex flex-wrap justify-center m-auto pb-7">
            <div className="w-38 sm:w-66 flex-col p-5">
              <div className="sm:flex pb-4">
                <Icons.TickBox className="w-12 shrink-0 mr-4" />
                <div className="text-lg text-start font-semibold my-auto">
                  Expert Instructors
                </div>
              </div>
              <div className="hidden sm:block text-base font-thin">
                Build a vast array of digital marketing and IT skills with the
                assistance of our qualified instructors.
              </div>
            </div>
            <div className="w-38 sm:w-66 flex-col p-5">
              <div className="sm:flex pb-4">
                <Icons.TickBox className="w-12 shrink-0 mr-4" />
                <div className="text-lg text-start font-semibold my-auto">
                  Learn from Scratch
                </div>
              </div>
              <div className="hidden sm:block text-base font-thin">
                It doesn’t matter if you’re a beginner or have a more advanced
                industry knowledge. Our courses are designed for different
                levels of difficulty.
              </div>
            </div>
            <div className="w-38 sm:w-66 flex-col p-5">
              <div className="sm:flex pb-4">
                <Icons.TickBox className="w-12 shrink-0 mr-4" />
                <div className="text-lg text-start font-semibold my-auto">
                  Recognised Certification
                </div>
              </div>
              <div className="hidden sm:block text-base font-thin">
                Obtain a recognised and Accredited Australian Certificate to
                take your portfolio to another level.
              </div>
            </div>
            <div className="w-38 sm:w-66 flex-col p-5">
              <div className="sm:flex pb-4">
                <Icons.TickBox className="w-12 shrink-0 mr-4" />
                <div className="text-lg text-start font-semibold my-auto">
                  Amazing Career Prospects
                </div>
              </div>
              <div className="hidden sm:block text-base font-thin">
                Grow your career and find exciting opportunities by developing
                the most valuable skills for the competitive job market.
              </div>
            </div>
            <div className="w-38 sm:w-66 flex-col p-5">
              <div className="sm:flex pb-4">
                <Icons.TickBox className="w-12 shrink-0 mr-4" />
                <div className="text-lg text-start font-semibold my-auto">
                  Advanced Technological Applications
                </div>
              </div>
              <div className="hidden sm:block text-base font-thin">
                Get to learn deeply about the most trending applications and
                know how to use them effectively and efficiently.
              </div>
            </div>
            <div className="w-38 sm:w-66 flex-col p-5">
              <div className="sm:flex pb-4">
                <Icons.TickBox className="w-12 shrink-0 mr-4" />
                <div className="text-lg text-start font-semibold my-auto">
                  Customised Training
                </div>
              </div>
              <div className="hidden sm:block text-base font-thin">
                Our classes are customised for every student to ensure fantastic
                results and an enjoyable training experience.
              </div>
            </div>
            <div className="w-38 sm:w-66 flex-col p-5">
              <div className="sm:flex pb-4">
                <Icons.TickBox className="w-12 shrink-0 mr-4" />
                <div className="text-lg text-start font-semibold my-auto">
                  Real-life Applications
                </div>
              </div>
              <div className="hidden sm:block text-base font-thin">
                Learn from actual examples, special freelancing classes and case
                studies to get a solid idea of industry standards and trends.
              </div>
            </div>
            <div className="w-38 sm:w-66 flex-col p-5">
              <div className="sm:flex pb-4">
                <Icons.TickBox className="w-12 shrink-0 mr-4" />
                <div className="text-lg text-start font-semibold my-auto">
                  24/7 Support
                </div>
              </div>
              <div className="hidden sm:block text-base font-thin">
                Our dedicated team will support you at all times during the
                course and after its completion. We also provide free
                consultancy support for everyone.
              </div>
            </div>
          </div>
          <AboutMaterial />
        </div>
      </div>
    </div>
  );
}
