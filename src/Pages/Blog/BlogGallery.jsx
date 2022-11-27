import React, { useEffect, useState } from "react";
import Graphics from "../../Asset/Image/graphics.png";
import Motion from "../../Asset/Image/motion.png";
import Uiux from "../../Asset/Image/uiux.png";
import Blog from "./blogs.json";
//import './card.css'

const BlogGallery = () => {
  const [toogleTab, setToogleTab] = useState(1);
  const [blogData, setBlogData] = useState();

  const ToogleTab = (index) => {
    setToogleTab(index);
  };

  useEffect(() => {
    let BlogDetail; 
    if(toogleTab !== 1){
    BlogDetail = Blog.filter(blog => blog.category == toogleTab)
    }else{
    BlogDetail = Blog.map(blog => blog)
    }
    setBlogData(BlogDetail);
  },[Blog, toogleTab]);

  return (
    <div className="w-full font-poppins text-white">
      <div className="bg-home-color py-13">
        <div className="flex-col w-2/3 m-auto">
          <div className="flex justify-evenly py-5 leading-10">
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
              {blogData?.map((details) => (
                <div className="flex-col group bg-home-color rounded-3xl hover:border-4 hover:bg-[#050042] hover:border-[#23BDEE] transition-ease-out duration-300">
                <div className="">
                  <img src={Graphics} alt="" className="w-full rounded-3xl scale-90 group-hover:scale-100 ease-in duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex-col">
                    <div className="flex justify-between">
                      <div className="bg-[#1483a4] text-[#23BDEE] bg-opacity-50 rounded-full py-2 px-4">
                      {details.date}
                      </div>
                      <div className="text-xl py-2">15000 tk</div>
                    </div>
                  </div>
                  <div className="text-2xl pt-2 left-0">{details.title}</div>
                  <div className="py-2">
                  {details.para}
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
