import React from "react";
import BlogGallery from "./BlogGallery";
import AnimatedText from "react-animated-text-content";

const Blog = ({theme}) => {
  return (
    <div className={`w-full ${theme==="dark"? "bg-home-color":"bg-[#F3F3F3]"} duration-700 pb-20`}>
      <div className="">
        <div className="lg:mt-10">
          <div className={`flex-col ${theme==="dark"? "text-white":"text-black"} m-auto pt-32`}>
            <div className="text-5xl font-bold text-center leading-snug">
              Blog Articles
            </div>
            <div className="text-4xl font-semibold text-center leading-snug">
              The latest in digital marketing and IT.
            </div>
            <div className="w-2/3 text-center font-thin text-lg py-5 pb-7 m-auto">
              Learn more about the newest IT tools, digital strategies and
              upcoming trends <br /> from our informative articles.
            </div>
            <BlogGallery theme={theme}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
