import React, {useState} from 'react'
import { InboxOutlined } from "@ant-design/icons";
import { Modal, message, Upload } from "antd";
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

const EditCourse = ({ editCourseModal, handleCancel, editCourseId }) => {
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
        <div className="h-[90vh] overflow-y-auto">
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
          <textarea
            className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full rounded-md"
            type="text"
            name="Overview"
            placeholder="Overview"
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
          <div>Course Overview image</div>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </p>
          </Dragger>
          <textarea
            className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full rounded-md"
            type="text"
            name="Outcome"
            placeholder="Course Outcome"
            id="Outcome"
          />
          <textarea
            className="bg-zinc-100 outline-none border-none bg-transparent px-2 py-2 my-2 w-full rounded-md"
            type="text"
            name="OutcomeAreas"
            placeholder="Course Outcome Areas"
            id="OutcomeAreas"
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
        </div>
      </Modal>
    </div>
  );
};

export default EditCourse