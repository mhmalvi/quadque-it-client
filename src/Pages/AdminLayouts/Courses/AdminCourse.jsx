import React, { useEffect, useState } from "react";
import Graphics from "../../../Asset/Image/graphics.png";
import Motion from "../../../Asset/Image/motion.png";
import Uiux from "../../../Asset/Image/uiux.png";
import Banner from "../../../Asset/Image/banner.png";
import Reading from "../../../Asset/Image/reading.png";
import Course from "../../UserLayouts/Course/Course.json";
import { useNavigate } from "react-router-dom";
import { Select } from "antd";
import Icons from "../../../Components/Shared/Icons";
import { Modal } from "antd";

import useCategory from "../../../Components/Shared/Hooks/useCategory";
import { handleDeleteCourseCategory } from "../../../Components/Services/company";

const AdminCourse = () => {
  const [Category] = useCategory();
  const navigate = useNavigate();
  const [toogleTab, setToogleTab] = useState(1);
  const [toogleMediumTab, setToogleMediumTab] = useState("all");
  const [categoryItems, setCategoryItems] = useState([]);
  const [courseData, setCourseData] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ToogleCategory = (index) => {
    setToogleTab(index);
    console.log("toogleTab", toogleTab);
  };

  const ToogleMedium = (index) => {
    setToogleMediumTab(index);
    console.log("medium", toogleMediumTab);
  };

  useEffect(() => {
    let CourseDetail;
    if (toogleTab !== 0) {
      if (toogleMediumTab !== "all") {
        CourseDetail = Course.filter(
          (cor) => cor.category === toogleTab && cor.platform == toogleMediumTab
        );
      } else {
        CourseDetail = Course.filter((cor) => cor.category == toogleTab);
      }
      setCourseData(CourseDetail);
    }
  }, [Course, toogleTab, toogleMediumTab]);

  useEffect(() => {
    const items = [];

    (async () => {
      Category.forEach((category) => {
        items.push({
          label: `${category?.name}`,
          value: `${category?.id}`,
        });
      });
      setCategoryItems(items);
    })();
  }, [Category]);

  const confirmDeleteModal = (id) => {
    setIsModalOpen(true);
  };
  const handleDeleteCategory = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-auto text-white">
      <div className="px-10 text-black">
        <div id="course" className="py-10">
          <div className="flex gap-10">
            <div className="flex text-xl items-center">Categories List</div>
            <div className="flex bg-blue-600 hover:bg-blue-700 duration-150 shadow-lg text-white rounded-full px-4 py-2">
              <span className="pr-2">Add Category</span>{" "}
              <Icons.Cancel className="w-3 rotate-45" />
            </div>
          </div>
          <div className="flex py-5 text-sm font-thin leading-10">
            {Category?.map((category) => (
              <div
                className="flex flex-wrap gap-4 border px-2 mx-2 rounded-lg shadow"
                key={category.id}
              >
                <div className="">{category.name}</div>
                <Icons.Delete
                  className="w-4 text-red-700 cursor-pointer"
                  onClick={confirmDeleteModal(category.id)}
                />
                {/* <Icons.Edit className="text-blue-600"/> */}
              </div>
            ))}
          </div>

          <Modal
            title="Confirm Deletion"
            open={isModalOpen}
            footer={false}
            onCancel={handleCancel}
          >
            <p>Are you sure you want to delete this category?</p>
            <div className="flex justify-end">
              <div
                onClick={handleDeleteCategory}
                className="mx-2 p-2 shadow rounded-lg cursor-pointer hover:shadow-md"
              >
                Cancel
              </div>
              <div
                onClick={handleCancel}
                className="bg-red-500 hover:bg-red-600 shadow rounded-lg text-white p-2 mx-2 cursor-pointer"
              >
                Delete
              </div>
            </div>
          </Modal>

          <div className="flex justify-between">
            <div className="w-1/3">
              <div className="flex gap-10 py-5">
                <div className="flex text-xl items-center">Courses List</div>
                <div className="flex bg-blue-600 hover:bg-blue-700 duration-150 shadow-lg text-white rounded-full px-4 py-2">
                  <span className="pr-2">Add Course</span>{" "}
                  <Icons.Cancel className="w-3 rotate-45" />
                </div>
              </div>
              <div className="flex justify-center">
                <div
                  onClick={() => ToogleMedium("all")}
                  className={`px-4 rounded-2xl m-2 cursor-pointer ${
                    toogleMediumTab === "all"
                      ? " text-[#23BDEE] duration-500"
                      : " text-black duration-500"
                  }`}
                >
                  All
                </div>
                <div
                  onClick={() => ToogleMedium("offline")}
                  className={`px-4 rounded-2xl m-2 cursor-pointer ${
                    toogleMediumTab === "offline"
                      ? " text-[#23BDEE] duration-500"
                      : " text-black duration-500"
                  }`}
                >
                  Offline
                </div>
                <div
                  onClick={() => ToogleMedium("online")}
                  className={`px-4 rounded-2xl m-2 cursor-pointer ${
                    toogleMediumTab === "online"
                      ? " text-[#23BDEE] duration-500"
                      : " text-black duration-500"
                  }`}
                >
                  Online
                </div>
              </div>
              <div className="flex justify-center">
                <Select
                  style={{
                    width: "100%",
                  }}
                  placeholder="select Category"
                  onChange={ToogleCategory}
                  options={categoryItems}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          id="adminCourseGallery"
          className="w-full overflow-y-auto"
          style={{
            height: `calc(100vh - ${
              document.getElementById("course")?.offsetHeight
            }px )`,
          }}
        >
          {/* COURSE Gallery */}
          <div className="grid grid-col-1 lg:grid-cols-4 2xl:grid-cols-5 text-black gap-4 my-6">
            {/* cards */}
            {courseData?.map((details) =>
              details ? (
                <div
                  /* onClick={navigateToCourseDetails} */
                  className="relative flex-col group border border-black border-opacity-30 rounded-3xl hover:border-2 hover:border-[#23BDEE] ease-in duration-300 shadow-lg"
                >
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
                  <div className="flex-wrap overflow-hidden rounded-3xl m-2">
                    <img src={Motion} alt="" className="w-full rounded-3xl" />
                  </div>
                  <div className="p-4">
                    <div className="flex-col">
                      <div className="flex justify-between whitespace-nowrap">
                        <div className="bg-[#1483a4] text-black bg-opacity-50 rounded-full py-2 px-2">
                          {details.date}
                        </div>
                        <div className="py-2 whitespace-nowrap">
                          {details.price} tk
                        </div>
                      </div>
                    </div>
                    <div className="text-xl pt-2 left-0">{details.title}</div>
                    <p className="text-sm py-2">{details.para}</p>
                  </div>
                </div>
              ) : (
                "No Course found!"
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCourse;
