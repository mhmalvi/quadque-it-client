import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Modal } from "antd";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const ReactBigCalendar = () => {
  const [open, setOpen] = useState(false);
  const [eventsData, setEventsData] = useState(events);
  const [selectedEventTime, setSelectedEventTime] = useState();

  const handleSelect = ({ start, end }) => {
    console.log(start);
    console.log(end);
    /* const title = window.prompt("New Event name");
    if (title)
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title
        }
      ]); */
    setOpen(true);
    setSelectedEventTime({
      start: `${start}`,
      end: `${end}`,
    });
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Calendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        style={{ height: "90vh" }}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleSelect}
      />
      <Modal
        className="cross_btn"
        title="Enter Event Name"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        footer={false}
        width="50%"
      >
        <div className="w-full h-full flex flex-col">
          <input
            className="outline-none  border-b-2 px-2 py-1 my-4 w-100"
            type="text"
            name="Name"
            placeholder="Event Name"
            id="Name"
          />
          <span className="text-xl font-bold">Selected time:</span> <br />{" "}
          {selectedEventTime?.start} <br /> to <br /> {selectedEventTime?.end}
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
    </div>
  );
};
export default ReactBigCalendar;
