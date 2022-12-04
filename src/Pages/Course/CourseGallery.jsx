import React, { useEffect, useState } from "react";
import Graphics from "../../Asset/Image/graphics.png";
import Motion from "../../Asset/Image/motion.png";
import Uiux from "../../Asset/Image/uiux.png";
import Course from "./Course.json";
import { useNavigate } from "react-router-dom";

import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

export default function CourseGallery() {
  const navigate = useNavigate();
  const [toogleTab, setToogleTab] = useState(1);
  const [courseData, setCourseData] = useState();

  const ToogleTab = (index) => {
    console.log("sidemenu", index);
    setToogleTab(index);
  };

  const menu = (
    <Menu
      onClick={({ key }) => {
        console.log("dropdown menu", key);
        setToogleTab(key);
      }}
      items={[
        {
          key: 1,
          label: <a>All</a>,
        },
        {
          key: 2,
          label: <a>Content Writing</a>,
        },
        {
          key: 3,
          label: <a>Advanced Programming</a>,
        },
        {
          key: 4,
          label: <a>Digital Marketing</a>,
        },
        {
          key: 5,
          label: <a>Programming</a>,
        },
        {
          key: 6,
          label: <a>Video & Animation</a>,
        },
        {
          key: 7,
          label: <a>Graphics & Design</a>,
        },
      ]}
    />
  );

  const navigateToCourseDetails = () => {
    navigate("./course-detail");
  };

  useEffect(() => {
    let CourseDetail;
    if (toogleTab !== 1) {
      CourseDetail = Course.filter((cor) => cor.category == toogleTab);
    } else {
      CourseDetail = Course.map((cor) => cor);
    }
    setCourseData(CourseDetail);
  }, [Course, toogleTab]);

  return (
    <div className="w-full font-poppins text-white">
      <div className="bg-home-color lg:py-13 px-10 py-10 lg:px-30 relative">
        <div className="lg:flex">
          <div className="w-1/3 hidden lg:block">
            <div className="text-xl">Course Category</div>
            <ul className="flex-col py-5 leading-10">
              <li onClick={() => ToogleTab(1)}>
                <div
                  className={
                    toogleTab === 1
                      ? "w-1/2 text-[#23BDEE] border-[#23BDEE] border-b-2 scale-110 cursor-pointer"
                      : "cursor-pointer"
                  }
                >
                  All
                </div>
              </li>
              <li onClick={() => ToogleTab(2)}>
                <div
                  className={
                    toogleTab === 2
                      ? "w-1/2 text-[#23BDEE] border-[#23BDEE] border-b-2 scale-110 cursor-pointer"
                      : "cursor-pointer"
                  }
                >
                  Content Writing
                </div>
              </li>
              <li onClick={() => ToogleTab(3)}>
                <div
                  className={
                    toogleTab === 3
                      ? "w-1/2 text-[#23BDEE] border-[#23BDEE] border-b-2 scale-110 cursor-pointer"
                      : "cursor-pointer"
                  }
                >
                  Advanced Programming
                </div>
              </li>
              <li onClick={() => ToogleTab(4)}>
                <div
                  className={
                    toogleTab === 4
                      ? "w-1/2 text-[#23BDEE] border-[#23BDEE] border-b-2 scale-110 cursor-pointer"
                      : "cursor-pointer"
                  }
                >
                  Digital Marketing
                </div>
              </li>
              <li onClick={() => ToogleTab(5)}>
                <div
                  className={
                    toogleTab === 5
                      ? "w-1/2 text-[#23BDEE] border-[#23BDEE] border-b-2 scale-110 cursor-pointer"
                      : "cursor-pointer"
                  }
                >
                  Programming
                </div>
              </li>
              <li onClick={() => ToogleTab(6)}>
                <div
                  className={
                    toogleTab === 6
                      ? "w-1/2 text-[#23BDEE] border-[#23BDEE] border-b-2 scale-110 cursor-pointer"
                      : "cursor-pointer"
                  }
                >
                  Video & Animation
                </div>
              </li>
              <li onClick={() => ToogleTab(7)}>
                <div
                  className={
                    toogleTab === 7
                      ? "w-1/2 text-[#23BDEE] border-[#23BDEE] border-b-2 scale-110 cursor-pointer"
                      : "cursor-pointer"
                  }
                >
                  Graphics & Design
                </div>
              </li>
            </ul>
          </div>
          <Dropdown overlay={menu} className="flex justify-center lg:hidden">
            <a>
              <Space className="border py-2 px-4 rounded-full">
                Course Catagory
                <DownOutlined className="pl-4"/>
              </Space>
            </a>
          </Dropdown>
          <div className="w-full">
          <div className="flex">
                <div className="bg-white text-black px-4 rounded-2xl m-2">
                  All
                </div>
                <div className="bg-black text-white px-4 rounded-2xl m-2">
                  Offline
                </div>
                <div className="bg-black text-white px-4 rounded-2xl m-2">
                  Online
                </div>
              </div>
            <div className="text-2xl lg:text-4xl py-4">
              {(() => {
                switch (toogleTab) {
                  case 1:
                    return "All Courses";
                  case 2:
                    return "Writing Courses";
                  case 3:
                    return "Advanced Programming Courses";
                  case 4:
                    return "Digital Marketing Courses";
                  case 5:
                    return "Programming Courses";
                  case 6:
                    return "Video & Animation Courses";
                  case 7:
                    return "Graphics & Design Courses";
                  default:
                    return null;
                }
              })()}
            </div>
            {/* Gallery */}
            {/* row1 */}
            <div className="grid grid-col-1 lg:grid-cols-2 text-white gap-6 my-6">
              {/* card1 */}
              {courseData?.map((details) => (details? (
                <div
                  onClick={navigateToCourseDetails}
                  className="flex-col group bg-home-color border rounded-3xl hover:border-4 hover:bg-[#050042] hover:border-[#23BDEE] ease-in duration-300"
                >
                  <div className="flex-wrap overflow-hidden rounded-3xl m-2">
                    <img
                      src={Motion}
                      alt=""
                      className="w-full rounded-3xl scale-100 group-hover:scale-125 ease-in duration-700"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex-col">
                      <div className="flex justify-between">
                        <div className="bg-[#1483a4] text-[#23BDEE] bg-opacity-50 rounded-full py-2 px-4">
                          {details.date}
                        </div>
                        <div className="text-xl py-2">{details.price} tk</div>
                      </div>
                    </div>
                    <div className="text-2xl pt-2 left-0">{details.title}</div>
                    <div className="py-2">{details.para}</div>
                  </div>
                </div>
):("NO DATA")
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
