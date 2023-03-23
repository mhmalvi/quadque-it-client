import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { Avatar, List, message, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import VirtualList from "rc-virtual-list";

const { Dragger } = Upload;
const fakeDataUrl =
  "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";
const ContainerHeight = 400;

const StudentEnrolment = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
        /* message.success(`${body.results.length} more items loaded!`); */
      });
  };

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

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = (e) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      ContainerHeight
    ) {
      appendData();
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleAddTeacher = () => {
    setOpen(true);
  };
  return (
    <>
      <div className=" w-full h-auto text-black my-5 mx-5">
        <div className="text-lg py-2 px-5">Enrolled Course</div>
        <div className="grid grid-col-1 lg:grid-cols-3 2xl:grid-cols-5 gap-6 xl:gap-4 my-3">
          <div className="relative flex-col group border border-black border-opacity-30 rounded-xl ease-in duration-300 shadow-lg">
            <div className="flex-col justify-end absolute right-4 top-6"></div>
            <div className="p-4">
              <div className="py-2 whitespace-nowrap">
                {/* {details?.price} tk */}Adobe Illustrator 101
              </div>
              <div className="bg-[#1483a4] text-black text-sm bg-opacity-50 rounded-full py-2 px-2 my-1 overflow-hidden">
                {/* {details?.category} */}Graphics Design
              </div>
              <div className="font-semibold text-sm pt-2 left-0">
                {/* {details?.title} */}Medium: Offline
              </div>
              <div className="font-semibold text-sm pt-2 left-0">
                {/* {details?.title} */}Status: Valid
              </div>
              <p className="font-semibold text-sm py-2">
                {/* {details?.para} */}Result:
              </p>
              <div className="flex text-sm">
                <div
                  onClick={handleAddTeacher}
                  className="border rounded-md p-2 cursor-pointer"
                >
                  {" "}
                  materials
                </div>
              </div>
            </div>
          </div>
          <div
            /* onClick={navigateToCourseDetails} */
            className="relative flex-col group border border-black border-opacity-30 rounded-xl ease-in duration-300 shadow-lg"
          >
            <div className="flex-col justify-end absolute right-4 top-6"></div>
            <div className="p-4">
              <div className="py-2 whitespace-nowrap">
                {/* {details?.price} tk */}Django
              </div>
              <div className="bg-[#1483a4] text-black text-sm bg-opacity-50 rounded-full py-2 px-2 my-1 overflow-hidden">
                {/* {details?.category} */}Programming
              </div>
              <div className="font-semibold text-sm pt-2 left-0">
                {/* {details?.title} */}Medium: Online
              </div>
              <div className="font-semibold text-sm pt-2 left-0">
                {/* {details?.title} */}Status: Valid
              </div>
              <p className="font-semibold text-sm py-2">
                {/* {details?.para} */}Result:
              </p>
              <div className="flex text-sm">
                <div
                  onClick={handleAddTeacher}
                  className="border rounded-md p-2 cursor-pointer"
                >
                  {" "}
                  materials
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        className="cross_btn float-right h-full"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        footer={false}
        width="50%"
      >
        <div className="w-full h-full flex flex-col">
          <div className="flex-col">
            <div className="text-xl font-bold">Course Title: </div>
            <div className="text-lg">Teacher: </div>
          </div>
          <div className="text-xl font-semibold pt-10">Course Materials </div>
          <div className="border rounded-lg my-5">
            <List>
              <VirtualList
                data={data}
                height={ContainerHeight}
                itemHeight={47}
                itemKey="email"
                onScroll={onScroll}
              >
                {(item) => (
                  <List.Item key={item?.email}>
                    <List.Item.Meta
                      /* avatar={<Avatar src={item.picture.large} />} */
                      title={<a href="https://ant.design">{item?.name?.last}</a>}
                      /* description={item.email} */
                    />
                    <a className="px-2">Download</a>
                    <a className="text-red-500 px-2">Delete</a>
                  </List.Item>
                )}
              </VirtualList>
            </List>
          </div>

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
        </div>
        {/* <div className="flex justify-end">
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
        </div> */}
      </Modal>
    </>
  );
};

export default StudentEnrolment;
