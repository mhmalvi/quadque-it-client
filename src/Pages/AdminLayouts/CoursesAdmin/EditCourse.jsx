import React, { useEffect, useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Modal, message, Upload, Select } from "antd";
//import useCategory from "../../../Components/Shared/Hooks/useCategory";
import Categories from "../../../Components/Shared/JsonData/categories.json";

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

const EditCourse = ({ open, handleCancel, editCourseId }) => {
  //const [Category, setUseCategory] = useCategory();
  const [categoryItems, setCategoryItems] = useState([]);
  const [toogleTab, setToogleTab] = useState();

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

  const handleEditCourse = () => {
    alert("Deleted");
  };
  return (
    <div>
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
          <textarea
            className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full rounded-md"
            type="text"
            name="Description"
            placeholder="Description"
            id="Description"
          />
          <input
            className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full rounded-md"
            type="text"
            name="Price"
            placeholder="Price"
            id="Price"
          />
          <div className="flex gap-5">
            <input
              className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full rounded-md"
              type="text"
              name="Duration"
              placeholder="Duration"
              id="Duration"
            />
            <input
              className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full rounded-md"
              type="text"
              name="Lectures"
              placeholder="Lectures"
              id="Lectures"
            />
          </div>
          <div className="text-lg pt-4">Course Overview</div>
          <textarea
            className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full rounded-md"
            type="text"
            name="Overview"
            placeholder="Overview text"
            id="Overview"
          />
          <textarea
            className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full rounded-md"
            type="text"
            name="Tools"
            placeholder="Tools"
            id="Tools"
          />
          <textarea
            className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full rounded-md"
            type="text"
            name="Plugins"
            placeholder="Plugins"
            id="Plugins"
          />
          <textarea
            className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full rounded-md"
            type="text"
            name="Prerequisite"
            placeholder="Pre-requisites"
            id="Prerequisite"
          />
          <textarea
            className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full rounded-md"
            type="text"
            name="Modules"
            placeholder="Course Modules"
            id="Modules"
          />
          <div className="text-zinc-400 pl-2">Course Overview image</div>
          <div>
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              {/* <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </p> */}
            </Dragger>
          </div>
          <div className="text-lg pt-4">Career Outcome</div>
          <textarea
            className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full rounded-md"
            type="text"
            name="Outcome"
            placeholder="Career Outcome"
            id="Outcome"
          />
          <div className="text-zinc-400 pl-2">Career Outcome Areas</div>
          <div>
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              {/* <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </p> */}
            </Dragger>
          </div>
          <div className="text-lg pt-4">Special Services</div>
          <div className="text-zinc-400 pl-2 pt-4">Special Service 1</div>
          <input
            className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full rounded-md"
            type="text"
            name="ServiceTitle1"
            placeholder="Service Title"
            id="ServiceTitle1"
          />
          <textarea
            className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full rounded-md"
            type="text"
            name="ServiceDesc1"
            placeholder="Description"
            id="ServiceDesc1"
          />
          <div>
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              {/* <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </p> */}
            </Dragger>
          </div>
          <div className="text-zinc-400 pl-2 pt-4">Special Service 2</div>
          <input
            className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full rounded-md"
            type="text"
            name="ServiceTitle2"
            placeholder="Service Title"
            id="ServiceTitle2"
          />
          <textarea
            className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full rounded-md"
            type="text"
            name="ServiceDesc2"
            placeholder="Description"
            id="ServiceDesc2"
          />
          <div>
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              {/* <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </p> */}
            </Dragger>
          </div>
          <div className="text-zinc-400 pl-2 pt-4">Special Service 3</div>
          <input
            className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full rounded-md"
            type="text"
            name="ServiceTitle3"
            placeholder="Service Title"
            id="ServiceTitle3"
          />
          <textarea
            className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full rounded-md"
            type="text"
            name="ServiceDesc3"
            placeholder="Description"
            id="ServiceDesc3"
          />
          <div>
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              {/* <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </p> */}
            </Dragger>
          </div>
          <div className="text-zinc-400 pl-2 pt-4">Special Service 4</div>
          <input
            className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full rounded-md"
            type="text"
            name="ServiceTitle4"
            placeholder="Service Title"
            id="ServiceTitle4"
          />
          <textarea
            className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full rounded-md"
            type="text"
            name="ServiceDesc4"
            placeholder="Description"
            id="ServiceDesc4"
          />
          <div>
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              {/* <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </p> */}
            </Dragger>
          </div>

          <div className="flex justify-end py-4">
            <div
              onClick={handleCancel}
              className="mx-2 p-2 shadow rounded-lg cursor-pointer hover:shadow-md"
            >
              Cancel
            </div>
            <div
              onClick={handleEditCourse}
              className="bg-green-500 hover:bg-green-600 shadow rounded-lg text-white px-4 py-2 mx-2 cursor-pointer"
            >
              Save
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditCourse;
