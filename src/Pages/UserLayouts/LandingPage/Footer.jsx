import React from "react";
import Icons from "../../../Components/Shared/Icons";
import Logo from "../../../Asset/Image/qit-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full text-white">
      <div className="md:flex justify-evenly items-center bg-black pt-10 lg:pt-20 px-10 md:px-20 pb-7 lg:pb-13">
        <div className="md:w-3/12 pb-4">
          <div className="py-4">
            <img src={Logo} alt="" className="w-[10rem]" />
          </div>
          <div className="text-sm text-justify pb-8">
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
        <div className="flex flex-wrap md:flex-row justify-evenly gap-10">
          <div className="flex-col text-sm py-4 lg:py-0">
            <div className="p-2">
              <a href="/" className="no-underline">
                Home
              </a>
            </div>
            <div className="p-2">
              <a href="/about-us" className="no-underline">
                About
              </a>
            </div>
            <div className="p-2">
              <a href="/course" className="no-underline">
                Courses
              </a>
            </div>
            <div className="p-2">
              <a href="/contact" className="no-underline">
                Contact
              </a>
            </div>
          </div>

          <div className="flex-col text-sm py-4 lg:py-0">
            <div className="p-2">
              <a href="/blog" className="text-white no-underline">
                Blogs
              </a>
            </div>
            <div className="p-2">
              <a href="/gallery" className="text-white no-underline">
                Gallery
              </a>
            </div>
            <div className="p-2">
              <a href="/stories" className="no-underline">
                Stories
              </a>
            </div>
          </div>

          <div className="flex-col hidden text-sm lg:inline-block py-4 lg:py-0">
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
          <div className="flex-col text-sm py-4 md:py-0">
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
      <div className="flex flex-wrap bg-black justify-center text-xs border-t py-5">
        <div className="md:w-1/4">© 2023 Quadque Technologies Pvt Ltd</div>
        <div className="flex justify-between gap-2 ">
          <Link to={"../privacy-policy"}>
            <div className="underline">Privacy Policy</div>
          </Link>
          <Link to={"../terms-of-use"}>
            <div className="underline">Terms of Use</div>
          </Link>
          <Link to={"../copywrite-policy"}>
            <div className="underline">Copywrite Policy</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
