import React from "react";
import Icons from "../../Components/Shared/Icons";
import Logo from "../../Asset/Image/Logo.svg";

export default function Footer() {
  return (
    <div className="w-full font-poppins text-white">
      <div className="md:flex bg-black pt-20 px-10 md:px-20 pb-13 gap-8">
        <div className="md:w-2/5 pb-4">
          <div className="py-4">
            <img src={Logo} width={120} alt="" />
          </div>
          <div className="text-xl md:text-lg pb-8">
            This is your opportunity to learn the most demandable IT and digital
            marketing skills from some of the best experts in the industry.{" "}
            <br />
            Feel free to get in touch with our team. We would love to hear from
            you!
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
        <div className="md:flex justify-between gap-6">
          <div className="md:w-1/3 flex md:flex-none gap-10">
            <div className=" flex-col text-2xl md:text-lg py-4 lg:py-0">
              <div className="p-2">
                <a href="" className="no-underline">
                  Home
                </a>
              </div>
              <div className="p-2">
                <a href="" className="no-underline">
                  About
                </a>
              </div>
              <div className="p-2">
                <a href="" className="no-underline">
                  Courses
                </a>
              </div>
              <div className="p-2">
                <a href="" className="no-underline">
                  Story
                </a>
              </div>
              <div className="p-2">
                <a href="" className="no-underline">
                  Contact
                </a>
              </div>
            </div>

            <div className="flex-col text-2xl md:text-lg py-4 lg:py-0">
              <div className="p-2">
                <a href="" className="text-white no-underline">
                  Blog
                </a>
              </div>
              <div className="p-2">
                <a href="" className="text-white no-underline">
                  Gallery
                </a>
              </div>
              <div className="p-2">
                <a href="" className="text-white no-underline">
                  Workshops
                </a>
              </div>
              <div className="p-2">
                <a href="" className="text-white no-underline">
                  Success stories
                </a>
              </div>
            </div>

            <div className="flex-col text-2xl md:text-lg hidden lg:inline-block py-4 lg:py-0">
              <div className="p-2">
                <a href="" className="text-white no-underline">
                  Graphic design
                </a>
              </div>
              <div className="p-2">
                <a href="" className="text-white no-underline">
                  Programming
                </a>
              </div>
              <div className="p-2">
                <a href="" className="text-white no-underline">
                  Digital marketing
                </a>
              </div>
              <div className="p-2">
                <a href="" className="text-white no-underline">
                  UI UX design
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 flex-col text-2xl md:text-lg py-4 md:py-0">
            <div className="font-bold mx-4 mb-6">
              <a href="" className="text-white">
                Stay Connected
              </a>
            </div>
            <div className="p-2">
              <a href="" className="text-white no-underline">
                <div className="flex mb-6">
                  <Icons.Telephone width={30} className="mx-2" />
                  (+880) 193 336 9702
                </div>
              </a>
            </div>
            <div className="p-2">
              <a href="" className="text-white no-underline">
                <div className="flex">
                  <Icons.Location width={30} className="mx-2" />
                  Panthapath, Dhaka
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap bg-black justify-center text-sm border-t py-5">
        <div className="md :w-1/4">© 2022 Quadque Tech</div>
        <div className="flex gap-24">
          <div>Privacy</div>
          <div>Security</div>
          <div>Terms</div>
        </div>
      </div>
    </div>
  );
}
