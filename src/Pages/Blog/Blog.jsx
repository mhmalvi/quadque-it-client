import React from "react";
import BlogGallery from "./BlogGallery";
import AnimatedText from "react-animated-text-content";

const Blog = () => {
  return (
    <div className="w-full bg-home-color font-poppins pb-20">
      <div className="font-poppins">
        <div className="lg:mt-10">
          <div className="flex-col text-white m-auto pt-32">
            <div className="text-5xl font-bold text-center leading-snug">
              <AnimatedText
                type="words" // animate words or chars
                animation={{
                  x: "200px",
                  y: "-20px",
                  scale: 1.1,
                  ease: "ease-in-out",
                }}
                animationType="lights"
                interval={0.06}
                duration={0.8}
                tag="p"
                className="animated-paragraph"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
              >
              Blog Articles
              </AnimatedText>
            </div>
            <div className="text-4xl font-semibold text-center leading-snug">
              The latest in digital marketing and IT.
            </div>
            <div className="w-2/3 text-center font-thin text-lg py-5 pb-7 m-auto">
              Learn more about the newest IT tools, digital strategies and
              upcoming trends <br /> from our informative articles.
            </div>
            <BlogGallery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
