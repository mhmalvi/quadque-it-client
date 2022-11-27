import React from "react";
import World from "../../Asset/Image/world.png";
import Icons from "../../Components/Shared/Icons";

export default function Header() {
  return (
    <div className="w-full pt-10 font-poppins pb-20">
      <div className="bg-home-color text-center lg:text-start m-auto lg:mx-10 rounded-3xl pt-24 pb-8 px-10 lg:px-20">
        <div className="flex flex-col-reverse lg:flex lg:flex-row justify-evenly m-auto">
          <div className="lg:w-1/2 text-white">
            <div className="text-2xl lg:text-5xl font-bold pb-5">
              <span className="text-[#23BDEE]"> Paragraph </span>is a series
              series sentences
            </div>
            <div className="md:text-base pb-13">
              Skilline is an interesting platform that will teach you in more an
              interactive way Skilline is an interesting platform that will
              teach you in more an interactive way
            </div>
            <div className="flex justify-center lg:justify-start h-16 gap-14 text-white text-sm lg:text-xl mb-6">
              <div className="bg-brand-color rounded-full text-white px-8 py-4">
                Browse Courses
              </div>
              <div className="py-4"> Video Content</div>
            </div>
          </div>
          <div className="lg:first-letter:w-1/2">
            <img src={World} width={433} className="m-auto" alt="QIT logo" />
          </div>
        </div>
        <div className="flex justify-center lg:justify-start"><Icons.Calender className="md:shrink-0"/><span className="text-white text-base px-2">Our new seminar in wordpress 26 June</span></div>
      </div>

      <div className="lg:flex lg:justify-evenly lg:visible hidden text-black text-lg pt-30 m-auto"> 
        <div className="flex bg-[#5C5BFD1A] px-4 py-2"><Icons.ProblemSol/><span className="px-2 py-2">Problem Solving</span></div>
        <div className="flex bg-[#5C5BFD1A] px-4 py-2"><Icons.Chat/><span className="px-2 py-2">Live Chat</span></div>
        <div className="flex bg-[#5C5BFD1A] px-4 py-2"><Icons.People/><span className="px-2 py-2">Group Reading</span></div>
        <div className="flex bg-[#5C5BFD1A] px-4 py-2"><Icons.Courses/><span className="px-2 py-2">10k Courses</span></div>
      </div>
    </div>
  );
}
