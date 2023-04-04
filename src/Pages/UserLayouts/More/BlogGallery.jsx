import React, { useEffect, useState } from "react";
import Graphics from "../../../Asset/Image/graphics.png";
import Motion from "../../../Asset/Image/motion.png";
import Uiux from "../../../Asset/Image/uiux.png";
import Blog from "../../../Components/Shared/JsonData/blogs.json";
import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import Footer from "../LandingPage/Footer";

const BlogGallery = () => {
  const [toogleTab, setToogleTab] = useState(1);
  const [blogData, setBlogData] = useState();
  const menu = (
    <Menu
      onClick={({ key }) => {
        ToogleTab(key);
      }}
      items={[
        {
          key: 1,
          label: <a>All</a>,
        },
        {
          key: 2,
          label: <a>UI Design</a>,
        },
        {
          key: 3,
          label: <a>UX Design</a>,
        },
        {
          key: 4,
          label: <a>Product Design</a>,
        },
        {
          key: 5,
          label: <a>Articles</a>,
        },
        {
          key: 6,
          label: <a>Tutorials</a>,
        },
        {
          key: 7,
          label: <a>News</a>,
        },
      ]}
    />
  );

  const ToogleTab = (index) => {
    setToogleTab(index);
  };

  useEffect(() => {
    let BlogDetail;
    if (toogleTab !== 1) {
      BlogDetail = Blog?.filter((blog) => blog.category == toogleTab);
    } else {
      BlogDetail = Blog?.map((blog) => blog);
    }
    setBlogData(BlogDetail);
  }, [Blog, toogleTab]);

  return (
    <div className="w-full h-screen text-white">
      <div className="bg-home-color py-13">
        <div className="flex-col lg:w-2/3 m-auto px-5">
          <div className="hidden lg:block">
            <div className="flex justify-evenly py-5 leading-10">
              <div
                onClick={() => ToogleTab(1)}
                className={
                  toogleTab === 1
                    ? "text-[#23BDEE] border-[#23BDEE] border-b-2 scale-110 cursor-pointer duration-150"
                    : "cursor-pointer"
                }
              >
                All
              </div>
              <div
                onClick={() => ToogleTab(2)}
                className={
                  toogleTab === 2
                    ? "text-[#23BDEE] border-[#23BDEE] border-b-2 scale-110 cursor-pointer duration-150"
                    : "cursor-pointer"
                }
              >
                Graphics Design
              </div>
              <div
                onClick={() => ToogleTab(3)}
                className={
                  toogleTab === 3
                    ? "text-[#23BDEE] border-[#23BDEE] border-b-2 scale-110 cursor-pointer duration-150"
                    : "cursor-pointer"
                }
              >
                Programming
              </div>
              <div
                onClick={() => ToogleTab(4)}
                className={
                  toogleTab === 4
                    ? "text-[#23BDEE] border-[#23BDEE] border-b-2 scale-110 cursor-pointer duration-150"
                    : "cursor-pointer"
                }
              >
                Digital Marketing
              </div>
              <div
                onClick={() => ToogleTab(5)}
                className={
                  toogleTab === 5
                    ? "text-[#23BDEE] border-[#23BDEE] border-b-2 scale-110 cursor-pointer duration-150"
                    : "cursor-pointer"
                }
              >
                Content
              </div>
              <div
                onClick={() => ToogleTab(6)}
                className={
                  toogleTab === 6
                    ? "text-[#23BDEE] border-[#23BDEE] border-b-2 scale-110 cursor-pointer duration-150"
                    : "cursor-pointer"
                }
              >
                Tutorials
              </div>
              <div
                onClick={() => ToogleTab(7)}
                className={
                  toogleTab === 7
                    ? "text-[#23BDEE] border-[#23BDEE] border-b-2 scale-110 cursor-pointer duration-150"
                    : "cursor-pointer"
                }
              >
                News
              </div>
              <div
                onClick={() => ToogleTab(8)}
                className={
                  toogleTab === 8
                    ? "text-[#23BDEE] border-[#23BDEE] border-b-2 scale-110 cursor-pointer duration-150 "
                    : "cursor-pointer"
                }
              >
                Others
              </div>
            </div>
          </div>
          <Dropdown overlay={menu} className="flex justify-center lg:hidden">
            <a>
              <Space className="border py-2 px-4 rounded-full">
                Course Catagory
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <div className="w-full pt-8 lg:pt-2">
            {/* Gallery */}
            {/* row1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 text-white lg:gap-6">
              {/* card1 */}
              {blogData?.map((details,i) => (
                <Link key={i} to={"./blog-detail"}>
                  <div className="flex-col group rounded-xl">
                    <div className="flex-wrap overflow-hidden rounded-xl">
                      <img
                        src={Uiux}
                        alt=""
                        className="w-full rounded-xl group-hover:scale-110 ease-in duration-500"
                      />
                    </div>
                    <div className="py-5">
                      <div className="flex-col">
                        <div className="text-[#828282] bg-opacity-50 rounded-full py-2">
                          {details?.date}
                        </div>
                      </div>
                      <div className="text-2xl pt-2 left-0">
                        {details?.title}
                      </div>
                      <div className="max-h-20 overflow-hidden py-2">
                        {details?.para}
                      </div>
                      {/* <button className="text-[#23BDEE] hover:text-[#50d5fd] font-semibold py-2">
                        READ MORE
                      </button>      */}        
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default BlogGallery;
