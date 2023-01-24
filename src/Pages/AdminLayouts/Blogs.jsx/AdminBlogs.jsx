import React, { useEffect, useState } from "react";
import Graphics from "../../../Asset/Image/graphics.png";
import Motion from "../../../Asset/Image/motion.png";
import Uiux from "../../../Asset/Image/uiux.png";
import Blog from "../../UserLayouts/Blog/blogs.json";
import { Link } from "react-router-dom";
import Icons from "../../../Components/Shared/Icons";

const AdminBlogs = () => {
  const [toogleTab, setToogleTab] = useState(1);
  const [blogData, setBlogData] = useState();

  const ToogleTab = (index) => {
    setToogleTab(index);
  };

  useEffect(() => {
    let BlogDetail;
    if (toogleTab !== 1) {
      BlogDetail = Blog.filter((blog) => blog.category == toogleTab);
    } else {
      BlogDetail = Blog.map((blog) => blog);
    }
    setBlogData(BlogDetail);
  }, [Blog, toogleTab]);

  return (
    <div className="w-full h-[100vh] overflow-y-auto">
      <div className="py-13">
        <div className="flex-col m-auto px-5">
          <div className="">
            <div className="lg:w-2/3 flex flex-col lg:flex-row justify-evenly py-5 leading-10">
              <div
                onClick={() => ToogleTab(1)}
                className={
                  toogleTab === 1
                    ? "text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer duration-150"
                    : "cursor-pointer"
                }
              >
                All
              </div>
              <div
                onClick={() => ToogleTab(2)}
                className={
                  toogleTab === 2
                    ? "text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer duration-150"
                    : "cursor-pointer"
                }
              >
                Graphics Design
              </div>
              <div
                onClick={() => ToogleTab(3)}
                className={
                  toogleTab === 3
                    ? "text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer duration-150"
                    : "cursor-pointer"
                }
              >
                Programming
              </div>
              <div
                onClick={() => ToogleTab(4)}
                className={
                  toogleTab === 4
                    ? "text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer duration-150"
                    : "cursor-pointer"
                }
              >
                Digital Marketing
              </div>
              <div
                onClick={() => ToogleTab(5)}
                className={
                  toogleTab === 5
                    ? "text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer duration-150"
                    : "cursor-pointer"
                }
              >
                Content
              </div>
              <div
                onClick={() => ToogleTab(6)}
                className={
                  toogleTab === 6
                    ? "text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer duration-150"
                    : "cursor-pointer"
                }
              >
                Tutorials
              </div>
              <div
                onClick={() => ToogleTab(7)}
                className={
                  toogleTab === 7
                    ? "text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer duration-150"
                    : "cursor-pointer"
                }
              >
                News
              </div>
              <div
                onClick={() => ToogleTab(8)}
                className={
                  toogleTab === 8
                    ? "text-[#23BDEE] border-[#23BDEE] border-b-2 cursor-pointer duration-150 "
                    : "cursor-pointer"
                }
              >
                Others
              </div>
            </div>
          </div>

          <div className="w-full pt-8 lg:pt-2">
            {/* Gallery */}
            {/* row1 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
              {/* card1 */}
              {blogData?.map((details) => (
                <div className="relative flex-col rounded-xl p-2 border">
                  <div className="flex-col justify-end absolute right-4 top-6">
                    <div
                      title="Edit"
                      className="bg-white rounded-lg p-2 border mb-2 cursor-pointer"
                    >
                      <Icons.Edit className="w-5 text-black m-auto" />
                    </div>
                    <div
                      title="Delete"
                      className="bg-white rounded-lg p-2 border cursor-pointer"
                    >
                      <Icons.Delete className="w-5 text-black m-auto" />
                    </div>
                  </div>
                  <div className="flex-wrap overflow-hidden rounded-xl">
                    <img
                      src={Uiux}
                      alt=""
                      className="w-full rounded-xl"
                    />
                  </div>
                  <div className="py-5">
                    <div className="flex-col">
                      <div className="text-[#828282] bg-opacity-50 rounded-full py-2">
                        {details.date}
                      </div>
                    </div>
                    <div className="text-2xl pt-2 left-0">{details.title}</div>
                    <div className="max-h-20 overflow-hidden py-2">
                      {details.para}
                    </div>
                    <Link to={"./blog-detail"}>
                      <button className="text-[#23BDEE] hover:text-[#50d5fd] font-semibold py-2">
                        READ MORE
                      </button>
                    </Link>
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

export default AdminBlogs;
