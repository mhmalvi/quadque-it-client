import React, { useState, useEffect } from "react";
import Icons from "../../../Components/Shared/Icons";
import { Select, Modal } from "antd";

import useCategory from "../../../Components/Shared/Hooks/useCategory";

const AddCourse = () => {
  const [open, setOpen] = useState(false);
  const [Category, setUseCategory] = useCategory();
  const [categoryItems, setCategoryItems] = useState([]);

  const handleCancel = () => {
    setOpen(false);
  };

  const handleAddStudent = () => {
    setOpen(true);
  };

  useEffect(() => {
    const items = [];

    (async () => {
      Category.forEach((category) => {
        items.push({
          id: `${category?.id}`,
          value: `${category?.name}`,
        });
      });
      setCategoryItems(items);
      console.log("category data", categoryItems);
    })();
  }, [Category]);

  return (
    <>
      <div className="w-full">
        <div className="flex gap-10 py-3 mx-6">
          <div
            onClick={handleAddStudent}
            className="flex bg-blue-600 hover:bg-blue-700 duration-150 shadow-lg text-white rounded-full px-4 py-2"
          >
            <span className="pr-2 cursor-pointer">Add Course</span>{" "}
            <Icons.Cancel className="w-3 rotate-45 cursor-pointer" />
          </div>
        </div>
      </div>
      <Modal
        className="cross_btn"
        title="Enter Student Details"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        footer={false}
        width="50%"
      >
        <div className="w-full h-full flex flex-col">
          <Select
            style={{
              width: "50%",
            }}
            className="my-2"
            defaultValue="Select Category"
            placeholder="Select Category"
            //onChange={ToogleCategory}
            options={categoryItems}
          />
          <div className="flex justify-between gap-4">
            <input
              className="w-full bg-zinc-50 outline-none border-b-2 px-2 py-2 my-2 rounded-lg"
              type="text"
              name="Name"
              placeholder="Full Name"
              id="Name"
            />
            <input
              className="w-full bg-zinc-50 outline-none border-b-2 px-2 py-2 my-2 rounded-lg"
              type="text"
              name="Price"
              placeholder="Price"
              id="Price"
            />
          </div>
          <textarea
            className="bg-zinc-50 outline-none border-b-2 px-2 py-2 my-2 w-full rounded-lg"
            type="text"
            name="Description"
            placeholder="Description"
            id="Description"
          />
        </div>
        <div className="flex justify-end">
          <div
            onClick={handleCancel}
            className="mx-2 p-2 shadow rounded-lg cursor-pointer hover:shadow-md"
          >
            Cancel
          </div>
          <div
            //onClick={handleDeleteCategory}
            className="bg-green-500 hover:bg-green-600 shadow rounded-lg text-white px-4 py-2 mx-2 cursor-pointer"
          >
            Save
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddCourse;
