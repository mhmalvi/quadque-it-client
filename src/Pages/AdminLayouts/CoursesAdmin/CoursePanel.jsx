import React, { useEffect, useState } from "react";
import Graphics from "../../../Asset/Image/graphics.png";
import Motion from "../../../Asset/Image/motion.png";
import Uiux from "../../../Asset/Image/uiux.png";
import Banner from "../../../Asset/Image/banner.png";
import Reading from "../../../Asset/Image/reading.png";
import Course from "../../../Components/Shared/JsonData/Course.json";
import Categories from "../../../Components/Shared/JsonData/categories.json"
import { useNavigate } from "react-router-dom";
import { Select, Modal } from "antd";
import Icons from "../../../Components/Shared/Icons";
import AddCourse from "./AddCourse";
import EditCourse from "./EditCourse";

//import useCategory from "../../../Components/Shared/Hooks/useCategory";
//import { handleDeleteCourseCategory } from "../../../Components/Services/company";

const CoursePanel = () => {
  //const [Category, setUseCategory] = useCategory();
  const navigate = useNavigate();
  const [toogleTab, setToogleTab] = useState("All");
  const [toogleMediumTab, setToogleMediumTab] = useState("all");
  const [categoryItems, setCategoryItems] = useState([]);
  const [courseData, setCourseData] = useState();
  const [categoryDelModal, setCategoryDelModal] = useState(false);
  const [categoryAddModal, setCategoryAddModal] = useState(false);
  const [deleteCategory, setDeleteCategory] = useState();
  const [openEditCourseModal, setOpenEditCourseModal] = useState(false);
  const [deleteCourseModal, setDeleteCourseModal] = useState(false);
  const [editCourseId, setEditCourseId] = useState();

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
    if (toogleTab !== "All") {
      if (toogleMediumTab !== "all") {
        CourseDetail = Course.filter(
          (cor) => cor.category == toogleTab && cor.platform == toogleMediumTab
        );
      } else {
        CourseDetail = Course.filter((cor) => cor.category == toogleTab);
      }
      setCourseData(CourseDetail);
    } else {
      setCourseData(Course);
    }
  }, [toogleTab, toogleMediumTab]);

  useEffect(() => {
    const items = [
      {
        id: "0",
        value: "All",
      },
    ];

    (async () => {
        Categories.forEach((category) => {
        items.push({
          id: `${category?.id}`,
          value: `${category?.name}`,
        });
      });
      setCategoryItems(items);
      console.log("category data", categoryItems);
    })();
  }, [Categories]);

/*   const confirmCategoryDeleteModal = (id) => {
    setDeleteCategory(id);
    //console.log(deleteCategory);
    setCategoryDelModal(true);
  }; */

/*   const handleDeleteCategory = () => {
    console.log(deleteCategory);
    (async () => {
      const response = await handleDeleteCourseCategory(deleteCategory);
      console.log("res", response);
      if (response.message) {
        setCategoryDelModal(false);
        alert("Deleted");
        setUseCategory(Category.filter((cat) => cat.id !== deleteCategory));
      } else {
        setCategoryDelModal(false);
        alert("Failed to Delete");
      }
    })();
  }; */

  const confirmCourseDeleteModal = (id) => {
    //setDeleteCourse(id);
    //console.log(deleteCategory);
    setDeleteCourseModal(true);
  };

  const handleCancel = () => {
    setCategoryDelModal(false);
    setCategoryAddModal(false);
    setOpenEditCourseModal(false);
    setDeleteCourseModal(false);
  };

  const handleAddCategory = () => {
    setCategoryAddModal(true);
  };

  const handleEditCourseModal = (id) => {
    setEditCourseId(id);
    setOpenEditCourseModal(true);
  };

  return (
    <>
      <div className="w-full h-auto text-black">
        <div className="px-10">
          <div id="course" className="py-6">
            <div className="flex gap-10">
              <div className="flex text-xl items-center">Categories List</div>
              <div
                onClick={handleAddCategory}
                className="flex bg-blue-600 hover:bg-blue-700 duration-150 shadow-lg text-white rounded-full px-4 py-2"
              >
                <span className="pr-2 cursor-pointer">Add Category</span>{" "}
                <Icons.Cancel className="w-3 rotate-45 cursor-pointer" />
              </div>
            </div>
            <div
              id="adminCourseCategory"
              className="w-full flex flex-wrap py-3 text-sm font-thin leading-10"
            >
              {/* {Category?.map((category) => (
                <div
                  className="h-10 flex justify-between flex-wrap gap-4 border px-2 mx-2 my-2 rounded-lg shadow"
                  key={category?.id}
                >
                  <div className="">{category?.name}</div>
                  <Icons.Delete
                    className="w-4 text-red-700 cursor-pointer"
                    onClick={() => confirmCategoryDeleteModal(category?.id)}
                  />
                </div>
              ))} */}
            </div>

            <div className="flex justify-between">
              <div className="w-full">
                <div className="flex gap-10">
                  <div className="flex text-xl items-center whitespace-nowrap">
                    Courses List
                  </div>
                  <AddCourse />
                </div>

                <div className="flex justify-start">
                  <Select
                    style={{
                      width: "30%",
                    }}
                    defaultValue={categoryItems[0]?.value}
                    placeholder="All"
                    onChange={ToogleCategory}
                    options={categoryItems}
                  />

                  {toogleTab !== "All" && (
                    <div className="flex justify-start">
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
                      <div
                        onClick={() => ToogleMedium("live")}
                        className={`px-4 rounded-2xl m-2 cursor-pointer ${
                          toogleMediumTab === "live"
                            ? " text-[#23BDEE] duration-500"
                            : " text-black duration-500"
                        }`}
                      >
                        Live
                      </div>
                    </div>
                  )}
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
            <div className="grid grid-col-1 lg:grid-cols-3 2xl:grid-cols-5 text-black gap-6 xl:gap-4 my-6">
              {/* cards */}
              {courseData?.map((details,i) =>
                details ? (
                  <div
                  key={i}
                    /* onClick={navigateToCourseDetails} */
                    className="relative flex-col group border border-black border-opacity-30 rounded-3xl hover:border-2 hover:border-[#23BDEE] ease-in duration-300 shadow-lg cursor-pointer"
                  >
                    <div className="flex-col justify-end absolute right-4 top-6">
                      <div
                        onClick={() => handleEditCourseModal(details?.id)}
                        title="Edit"
                        className="bg-white rounded-lg p-2 border mb-2 cursor-pointer"
                      >
                        <Icons.Edit className="w-5 text-black m-auto" />
                      </div>
                      <div
                        onClick={confirmCourseDeleteModal}
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
                      <div className="bg-[#1483a4] text-black text-sm bg-opacity-50 rounded-full py-2 px-2 my-1 overflow-hidden">
                        {details?.category}
                      </div>
                      <div className="py-2 whitespace-nowrap">
                        {details?.price} tk
                      </div>
                      <div className="text-xl pt-2 left-0">
                        {details?.title}
                      </div>
                      <p className="text-sm py-2">{details?.para}</p>
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

      {openEditCourseModal && (
        <EditCourse
          open={openEditCourseModal}
          handleCancel={handleCancel}
          editCourseId={editCourseId}
        />
      )}

      <Modal
        title="Confirm Deletion"
        open={categoryDelModal}
        footer={false}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to delete this category?</p>
        <div className="flex justify-end">
          <div
            onClick={handleCancel}
            className="mx-2 p-2 shadow rounded-lg cursor-pointer hover:shadow-md"
          >
            Cancel
          </div>
          <div
            /* onClick={handleDeleteCategory} */
            className="bg-red-500 hover:bg-red-600 shadow rounded-lg text-white p-2 mx-2 cursor-pointer"
          >
            Delete
          </div>
        </div>
      </Modal>

      <Modal
        title="Add Category"
        open={categoryAddModal}
        footer={false}
        onCancel={handleCancel}
      >
        <input
          className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full"
          type="text"
          name="Name"
          placeholder="Name"
          id="Name"
        />
        <div className="flex justify-end">
          <div
            onClick={handleCancel}
            className="mx-2 p-2 shadow rounded-lg cursor-pointer hover:shadow-md"
          >
            Cancel
          </div>
          <div
            /* onClick={handleDeleteCategory} */
            className="bg-green-500 hover:bg-green-600 shadow rounded-lg text-white px-4 py-2 mx-2 cursor-pointer"
          >
            Save
          </div>
        </div>
      </Modal>

      <Modal
        title="Confirm Deletion"
        open={deleteCourseModal}
        footer={false}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to delete this Course?</p>
        <div className="flex justify-end">
          <div
            onClick={handleCancel}
            className="mx-2 p-2 shadow rounded-lg cursor-pointer hover:shadow-md"
          >
            Cancel
          </div>
          <div
            /* onClick={handleDeleteCategory} */
            className="bg-red-500 hover:bg-red-600 shadow rounded-lg text-white p-2 mx-2 cursor-pointer"
          >
            Delete
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CoursePanel;
