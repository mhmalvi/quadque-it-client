import React, { useEffect, useState } from "react";
import Graphics from "../../Asset/Image/graphics.png";
import Motion from "../../Asset/Image/motion.png";
import Uiux from "../../Asset/Image/uiux.png";
import Blog from "./blogs.json";
import { NavLink } from "react-router-dom";
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
                <div className="flex-col group rounded-xl">
                <div className="flex-wrap overflow-hidden rounded-xl">
                  <img src={Graphics} alt="" className="w-full rounded-xl group-hover:scale-110 ease-in duration-500" />
                </div>
                <div className="py-5">
                  <div className="flex-col">
                  <div className="text-[#828282] bg-opacity-50 rounded-full py-2">
                      {details.date}
                      </div>
                  </div>
                  <div className="text-2xl pt-2 left-0">{details.title}</div>
                  <div className="py-2">
                  {details.para}
                  </div>
                  <NavLink to={"./blog-detail"}>
                  <div className="text-[#23BDEE] py-2">
                  READ MORE
                  </div>
                  </NavLink>
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
