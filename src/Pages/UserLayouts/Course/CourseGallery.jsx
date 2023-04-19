import React, { useEffect, useState } from "react";
import Banner from "../../../Asset/Image/banner.png";
import Reading from "../../../Asset/Image/reading.png";
import Course from "../../../Components/Shared/JsonData/Course.json";
import Catagories from "../../../Components/Shared/JsonData/categories.json";
import { useNavigate } from "react-router-dom";
import { Select } from "antd";
import Instructors from "../ReusableComponents/Instructors";
import Footer from "../LandingPage/Footer";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

import Motion from "../../../Asset/Image/motion.png";
import Jquery from "../../../Asset/Image/courses/prog-course.jpg";
import Ai from "../../../Asset/Image/courses/illustrator-course.jpg";
import APS from "../../../Asset/Image/courses/ps-course.png";
import Android from "../../../Asset/Image/courses/mobdev-course.png";
import Content from "../../../Asset/Image/courses/content-course.png";
import Python from "../../../Asset/Image/courses/python-course.jpg";
import Blender from "../../../Asset/Image/courses/blender-course.jpg";
import Digital from "../../../Asset/Image/courses/digi-rs-course.jpg";
import Grammar from "../../../Asset/Image/courses/digi-2-course.jpg";
import Writing from "../../../Asset/Image/courses/writing-course.jpg";
import Writing2 from "../../../Asset/Image/courses/writing-2-course.jpg";
import Mkt101 from "../../../Asset/Image/courses/mkt-101-course.jpg";
import DotNet from "../../../Asset/Image/courses/dotnet-course.jpg";

//import useCategory from "../../../Components/Shared/Hooks/useCategory";

const CourseGallery = () => {
  //const [Category] = useCategory();
  const navigate = useNavigate();
  const [toogleTab, setToogleTab] = useState("All");
  const [toogleMediumTab, setToogleMediumTab] = useState("all");
  const [categoryItems, setCategoryItems] = useState([]);
  const [courseData, setCourseData] = useState();
  const [filteredData, setFilteredData] = useState([]);

  const ToogleCategory = (index) => {
    setToogleTab(index);
    console.log("toogleTab", toogleTab);
  };

  const ToogleMedium = (index) => {
    setToogleMediumTab(index);
    console.log("medium", toogleMediumTab);
  };

  const navigateToCourseDetails = (id) => {
    navigate(`./course-detail/${id}`);
  };

  useEffect(() => {
    let CourseDetail;
    if (toogleTab !== "All") {
      if (toogleMediumTab !== "all") {
        CourseDetail = Course.filter(
          (cor) =>
            cor.category === toogleTab && cor.platform === toogleMediumTab
        );
      } else {
        CourseDetail = Course.filter((cor) => cor.category === toogleTab);
      }
      console.log(CourseDetail);
      setCourseData(CourseDetail);
    } else {
      if (toogleMediumTab === "all") {
        // CourseDetail = Course;
        CourseDetail = Course.filter((cor) => cor.category !== "Others");
      } else {
        CourseDetail = Course.filter((cor) => cor.platform === toogleMediumTab);
      }
      setCourseData(CourseDetail);
    }
  }, [toogleTab, toogleMediumTab]);

  /* THIS IS THE LAZY LOADING EFFECT */
  useEffect(() => {
    console.log("course data", courseData);
    setFilteredData([]);
    let i = -1;
    const interval = setInterval(() => {
      if (i >= courseData.length-1) {
        clearInterval(interval);
      } else { 
        i++;
        setFilteredData((prev) => [...prev, courseData[i]]);
      }
    }, 200);
    return () => clearInterval(interval);
  }, [courseData]);

  useEffect(() => {
    const items = [
      {
        id: "0",
        value: "All",
      },
    ];

    (async () => {
      Catagories.forEach((category) => {
        items.push({
          id: `${category?.id}`,
          value: `${category?.name}`,
        });
      });
      setCategoryItems(items);
    })();
  }, []);
  // console.log("items,", categoryItems);

  return (
    <div className="w-full bg-[#040422] h-screen text-white">
      <div className="flex lg:mt-10 pt-44 lg:pb-20">
        <div className="w-full ">
          <div className="flex m-auto justify-between items-center">
            <div className="hidden lg:block -mb-48 ml-20">
              <Fade left>
                <img src={Banner} className="w-full" alt="" />
              </Fade>
            </div>
            <div className="w-2/3 sm:w-1/2 lg:w-1/3 text-white text-center mx-auto">
              <div className="text-4xl pb-2 text-shadow-white">Courses</div>
              <div className="m-auto pb-8">
                Browse through our extensive collection of courses to choose one
                that fits your experience level and goals.
              </div>
              <div className="flex justify-center">
                <div
                  onClick={() => ToogleMedium("all")}
                  className={`px-4 rounded-2xl m-2 cursor-pointer ${
                    toogleMediumTab === "all"
                      ? "bg-white text-black duration-500"
                      : "bg-black text-white duration-500"
                  }`}
                >
                  All
                </div>
                <div
                  onClick={() => ToogleMedium("offline")}
                  className={`px-4 rounded-2xl m-2 cursor-pointer ${
                    toogleMediumTab === "offline"
                      ? "bg-white text-black duration-500"
                      : "bg-black text-white duration-500"
                  }`}
                >
                  Offline
                </div>
                <div
                  onClick={() => ToogleMedium("online")}
                  className={`px-4 rounded-2xl m-2 cursor-pointer ${
                    toogleMediumTab === "online"
                      ? "bg-white text-black duration-500"
                      : "bg-black text-white duration-500"
                  }`}
                >
                  Online
                </div>
              </div>
            </div>
            <div className="hidden lg:block -mb-[150px] mr-20">
              <Fade right>
                <img src={Reading} className="w-full" alt="" />
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-home-color lg:py-13 px-5 py-10 lg:px-30 lg:relative overflow-x-hidden">
        <div className="lg:flex">
          <div className="w-1/3 hidden lg:block">
            <div className="text-xl">Course Category</div>
            <ul className="flex-col py-5 text-sm font-thin leading-10">
              <li onClick={() => ToogleCategory("All")}>
                <div
                  className={
                    toogleTab === "All"
                      ? "text-[#23BDEE] text-lg duration-200 cursor-pointer py-2"
                      : "cursor-pointer py-2"
                  }
                >
                  <Fade bottom>All</Fade>
                </div>
              </li>
              {Catagories?.map((category, i) => (
                <li key={i} onClick={() => ToogleCategory(category?.name)}>
                  <div
                    className={
                      toogleTab === category?.name
                        ? "text-[#23BDEE] text-lg duration-200 cursor-pointer py-2"
                        : "cursor-pointer py-2"
                    }
                  >
                    <Fade bottom>{category?.name}</Fade>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:hidden flex justify-center">
            <Select
              style={{
                width: "60%",
              }}
              placeholder={categoryItems[0]?.value}
              onChange={ToogleCategory}
              options={categoryItems}
            />
          </div>

          <div className="w-full bg-[#040422]">
            {/* COURSE Gallery */}
            <Fade right cascade>
              <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 text-white gap-6 sm:px-5 lg:px-0 my-6">
                {/* cards */}
                {filteredData?.map((details) => (
                  <div
                    key={details?.id}
                    onClick={()=>{navigateToCourseDetails(details?.id)}}
                    className="flex-col group bg-home-color border border-white border-opacity-30 rounded-3xl hover:border-2 hover:bg-[#050042] hover:border-[#23BDEE] ease-in duration-300 cursor-pointer"
                  >
                    <div className="flex-wrap overflow-hidden rounded-3xl m-2">
                      <img
                        src={
                          CourseImage?.find(
                            (wtf) => wtf.title === details?.title
                          )
                            ? CourseImage?.find(
                                (wtf) => wtf.title === details?.title
                              )?.image
                            : Motion
                        }
                        alt=""
                        className="w-full h-[225px] rounded-3xl scale-100 group-hover:scale-125 ease-in duration-700"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex-col">
                        <div className="flex justify-between">
                          <div className="bg-[#1483a4] text-[#23BDEE] bg-opacity-50 rounded-full text-sm py-2 px-4">
                            starts:&nbsp;{details?.date}
                          </div>
                          <div className="py-2">{details?.price} tk</div>
                        </div>
                      </div>
                      <div className="text-xl pt-2 left-0">
                        {details?.title}
                      </div>
                      <div className="h-25 overflow-hidden py-2">{details?.para}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </div>
        <Instructors />
      </div>
      <Footer />
    </div>
  );
};
export default CourseGallery;

const CourseImage = [
  { title: "Jquery", image: Jquery },
  { title: "Adobe Illustrator", image: Ai },
  { title: "Adobe Photoshop", image: APS },
  { title: "Sculpting with Blender (Online)", image: Blender },
  { title: "Android Development (Online)", image: Android },
  { title: "Python Programming (Online)", image: Python },
  { title: "Digital Marketing Research Strategy", image: Digital },
  { title: "Advanced .NET (Online)", image: Motion },
  { title: "Content Creation", image: Grammar },
  { title: "Rhyno (Architecture)", image: Motion },
  { title: "Writing (Offline)", image: Writing },
  { title: "Writing (Online)", image: Writing2 },
  { title: "Writing Strategy", image: Content },
  { title: ".NET Development", image: DotNet },
  { title: "Digital Marketing 101", image: Mkt101 },
];
