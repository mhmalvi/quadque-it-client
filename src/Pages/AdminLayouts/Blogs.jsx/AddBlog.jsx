import React, { useState, useEffect } from "react";
import Icons from "../../../Components/Shared/Icons";
import { InboxOutlined } from "@ant-design/icons";
import { Modal, message, Upload, Select } from "antd";
//import useCategory from "../../../Components/Shared/Hooks/useCategory";
import Categories from "../../UserLayouts/LandingPage/JsonData/categories.json";

const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const AddBlog = () => {
  const [open, setOpen] = useState(false);
  //const [Category, setUseCategory] = useCategory();
  const [categoryItems, setCategoryItems] = useState([]);
  const [toogleTab, setToogleTab] = useState();

  const handleCancel = () => {
    setOpen(false);
  };

  const toogleAddStudentModal = () => {
    setOpen(true);
  };

  useEffect(() => {
    const items = [];

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

  const ToogleCategory = (index) => {
    setToogleTab(index);
    console.log("toogleTab", toogleTab);
  };

  const handleAddCourse = () => {
    alert("Deleted");
  };
  return (
    <>
      <div className="w-full">
        <div className="flex gap-10 py-3 mx-6">
          <div
            onClick={toogleAddStudentModal}
            className="flex bg-blue-600 hover:bg-blue-700 duration-150 shadow-lg text-white rounded-full px-4 py-2"
          >
            <span className="pr-2 cursor-pointer">Add Blog</span>{" "}
            <Icons.Cancel className="w-3 rotate-45 cursor-pointer" />
          </div>
        </div>
      </div>
      <Modal
        open={open}
        footer={false}
        onCancel={handleCancel}
        width="50%"
        className="h-full"
      >
        <div className="text-xl font-bold">Edit Course Details</div>
        <div className="h-[90vh] overflow-y-auto mt-4">
          <Select
            style={{
              width: "50%",
            }}
            /* defaultValue={categoryItems[0]?.value} */
            placeholder="category name"
            onChange={ToogleCategory}
            options={categoryItems}
          />
          <input
            className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full rounded-md"
            type="text"
            name="Name"
            placeholder="Name"
            id="Name"
          />
          <input
            className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full rounded-md"
            type="text"
            name="Author"
            placeholder="Author"
            id="Author"
          />
          

          <div className="flex justify-end py-4">
            <div
              onClick={handleCancel}
              className="mx-2 p-2 shadow rounded-lg cursor-pointer hover:shadow-md"
            >
              Cancel
            </div>
            <div
              onClick={handleAddCourse}
              className="bg-green-500 hover:bg-green-600 shadow rounded-lg text-white px-4 py-2 mx-2 cursor-pointer"
            >
              Save
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddBlog;
