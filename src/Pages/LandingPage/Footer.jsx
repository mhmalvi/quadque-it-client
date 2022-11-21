import React from "react";
import Icons from "../../Components/Shared/Icons";
import Logo from "../../Asset/Image/Logo.svg";

export default function Footer() {
  return (
    <div className="w-full font-poppins text-white">
      <div className="flex bg-black pt-20 px-20 pb-13 gap-8">
        <div className="w-2/5">
          <div className="py-4">
            <img src={Logo} width={120} alt="" />
          </div>
          <div className="pb-8">
            Learn from educational videos. Courses, which are not accredited,
            are available by subscription. The majority of courses focus study
          </div>
          <div className="flex">
            <a className="px-2" href="">
              <Icons.Facebook />
            </a>
            <a className="px-2" href="">
              <Icons.Twitter />
            </a>
            <a className="px-2" href="">
              <Icons.Youtube />
            </a>
            <a className="px-2" href="">
              <Icons.Instagram />
            </a>
          </div>
        </div>

        <div className="w-1/4 flex-col">
          <div className="font-bold">
            <a href="">
              Links
            </a>
          </div>
          <div className="p-2">
            <a href="">
              Home
            </a>
          </div>
          <div className="p-2">
            <a href="">
              About
            </a>
          </div>
          <div className="p-2">
            <a href="">
              Courses
            </a>
          </div>
          <div className="p-2">
            <a href="">
              Story
            </a>
          </div>
          <div className="p-2">
            <a href="">
              Contact
            </a>
          </div>
        </div>

        <div className="w-1/4 flex-col">
          <div className="font-bold">
            <a href="">
            Courses
            </a>
          </div>
          <div className="p-2">
            <a href="">
            Graphic design
            </a>
          </div>
          <div className="p-2">
            <a href="">
            Programming
            </a>
          </div>
          <div className="p-2">
            <a href="">
            Digital marketing   
            </a>
          </div>
          <div className="p-2">
            <a href="">
            UI UX design
            </a>
          </div>
        </div>

        <div className="w-1/4 flex-col">
          <div className="font-bold">
            <a href="">
            Other
            </a>
          </div>
          <div className="p-2">
            <a href="">
            Blog
            </a>
          </div>
          <div className="p-2">
            <a href="">
            Gallery
            </a>
          </div>
          <div className="p-2">
            <a href="">
            Workshops
            </a>
          </div>
          <div className="p-2">
            <a href="">
            Success stories
            </a>
          </div>
        </div>

        <div className="w-2/5 flex-col">
          <div className="font-bold mx-4 mb-6">
            <a href="">
            Stay Connected
            </a>
          </div>
          <div className="p-2">
            <a href="">
            <div className="flex mb-6"><Icons.Telephone width={30} className="mx-2"/>(+880) 193 336 9702</div>
            </a>
          </div>
          <div className="p-2">
            <a href="">
            <div className="flex"><Icons.Location width={30} className="mx-2"/>Panthapath, Dhaka</div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex bg-black justify-center text-sm border-t py-5">
        <div className="w-1/4">© 2022 Quadque Tech</div>
        <div className="flex gap-24">
            <div>Privacy</div>
            <div>Security</div>
            <div>Terms</div>
        </div>
      </div>
    </div>
  );
}
