import React, { useState } from "react";
import Icons from "../../../Components/Shared/Icons";
import { Modal } from "antd";

const AddTeacher = () => {
  const [open, setOpen] = useState(false);

  const handleCancel = () => {
    setOpen(false);
  };

  const handleAddTeacher = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="w-full">
        <div className="flex gap-10 py-5 mx-6">
          <div
            onClick={handleAddTeacher}
            className="flex bg-blue-600 hover:bg-blue-700 duration-150 shadow-lg text-white rounded-full px-4 py-2"
          >
            <span className="pr-2 cursor-pointer">Add Teacher</span>{" "}
            <Icons.Cancel className="w-3 rotate-45 cursor-pointer" />
          </div>
        </div>
      </div>
      <Modal
        className="cross_btn"
        title="Enter Teacher Details"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        footer={false}
        width="60%"
      >
        <div className="w-full h-full flex flex-col">
          <input
            className="outline-none  border-b-2 px-2 py-1 my-4 w-1/3"
            type="text"
            name="Name"
            placeholder="Full Name"
            id="Name"
          />
          <input
            className="outline-none  border-b-2 px-2 py-1 my-4 w-1/3"
            type="text"
            name="Phone"
            placeholder="Phone"
            id="Phone"
          />
          <input
            className="outline-none  border-b-2 px-2 py-1 my-4 w-1/3"
            type="text"
            name="Email"
            placeholder="Email"
            id="Email"
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

export default AddTeacher;
