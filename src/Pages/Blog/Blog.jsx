import React from "react";
import BlogGallery from "./BlogGallery";

const Blog = () => {
  return (
    <div className="w-full bg-home-color font-poppins pb-20">
      <div className="font-poppins">
        <div className="mt-10">
          <div className="flex-col text-white m-auto pt-32">
            <div className="text-5xl font-bold text-center leading-snug">
              Blog Posts
            </div>
            <div className="text-4xl font-bold text-center leading-snug">
              I think so, this is it.
            </div>
            <div className="w-2/3 text-center text-lg py-5 pb-7 m-auto">
              Design begins after I begin to think about how to present an{" "}
              <br /> experience most successfully, whether a button I put in can
              solve <br /> a problem. The only point in design is not ui design.
            </div>
            <BlogGallery/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
