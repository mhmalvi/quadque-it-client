import React, { useState } from "react";
import Graphics from "../../Asset/Image/graphics.png";
import Motion from "../../Asset/Image/motion.png";
import Uiux from "../../Asset/Image/uiux.png";
import Blog from "./blogs.json";

const BlogGallery = () => {
  const [toogleTab, setToogleTab] = useState(1);
  const [blogData, setBlogData] = useState();

  const ToogleTab = (index) => {
    console.log(index);
    setToogleTab(index);
    var BlogDetail = Blog.filter(blog => blog.category === index);
    console.log("details", BlogDetail);
    setBlogData(BlogDetail);
  };
  return (
    <div className="w-full font-poppins text-white">
      <div className="bg-home-color py-13">
        <div className="flex-col w-2/3 m-auto">
          <div className="flex justify-center justify-evenly py-5 leading-10">
            <div
              onClick={() => ToogleTab(1)}
              className={
                toogleTab === 1
                  ? "text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              All
            </div>
            <div
              onClick={() => ToogleTab(2)}
              className={
                toogleTab === 2
                  ? "text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              UI Design
            </div>
            <div
              onClick={() => ToogleTab(3)}
              className={
                toogleTab === 3
                  ? "text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              UX Design
            </div>
            <div
              onClick={() => ToogleTab(4)}
              className={
                toogleTab === 4
                  ? "text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Product Design
            </div>
            <div
              onClick={() => ToogleTab(5)}
              className={
                toogleTab === 5
                  ? "text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Articles
            </div>
            <div
              onClick={() => ToogleTab(6)}
              className={
                toogleTab === 6
                  ? "text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Tutorials
            </div>
            <div
              onClick={() => ToogleTab(7)}
              className={
                toogleTab === 7
                  ? "text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              News
            </div>
          </div>
          <div className="w-full">
            {/* Gallery */}
            {/* row1 */}
            <div className="grid grid-cols-2 text-white gap-6">
              {/* card1 */}
              {/* Blog?.filter((blog) => blog?.category === toogleTab) */}
              {Blog?.map((details) => (
                <div className="flex-col bg-home-color rounded-3xl">
                  <div className="flex">
                    <img src={Graphics} alt="" className="w-full" />
                  </div>
                  <div className="p-5">
                    <div className="flex-col">
                      <div className="rounded-2xl py-2 px-4">
                        {details.date}
                      </div>
                    </div>
                    <div className="text-2xl pt-2 left-0">{details.title}</div>
                    <div className="py-4">{details.para}</div>
                    <div>
                      <a className="text-[#23BDEE]" href="">
                        READ MORE
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGallery;
