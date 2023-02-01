import React from 'react'
import { Modal } from "antd";

const EditCourse = ({ editCourseModal, handleCancel, editCourseId }) => {
    console.log("in modal", editCourseId);
  const handleEditCourse = () => {
    alert("Deleted");
  };
  return (
    <div>
      <Modal
        title="Edit Course"
        open={editCourseModal}
        footer={false}
        onCancel={handleCancel}
        width="50%"
        className="h-full"
      >
        <input
          className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full"
          type="text"
          name="Name"
          placeholder="Name"
          id="Name"
        />
        <textarea
          className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full"
          type="text"
          name="Description"
          placeholder="Description"
          id="Description"
        />
        <div className="flex gap-5">
          <input
            className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full"
            type="text"
            name="Duration"
            placeholder="Duration"
            id="Duration"
          />
          <input
            className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full"
            type="text"
            name="Lectures"
            placeholder="Lectures"
            id="Lectures"
          />
        </div>
        <textarea
          className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full"
          type="text"
          name="Overview"
          placeholder="Overview"
          id="Overview"
        />
        <textarea
          className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full"
          type="text"
          name="Tools"
          placeholder="Tools"
          id="Tools"
        />
        <textarea
          className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full"
          type="text"
          name="Plugins"
          placeholder="Plugins"
          id="Plugins"
        />
        <textarea
          className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full"
          type="text"
          name="Prerequisite"
          placeholder="Pre-requisites"
          id="Prerequisite"
        />
        <textarea
          className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full"
          type="text"
          name="Modules"
          placeholder="Course Modules"
          id="Modules"
        />
        <div className="flex justify-end">
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
      </Modal>
    </div>
  );
};

export default EditCourse