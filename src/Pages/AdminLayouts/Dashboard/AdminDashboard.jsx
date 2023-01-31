import { Badge, Calendar, Table } from "antd";
import ReactBigCalendar from "../../../Components/Scheduler/ReactBigCalendar";
import Events from "../../../Components/Scheduler/events";

const columns = [
  {
    title: "title",
    width: 100,
    dataIndex: "title",
    key: "title",
    fixed: "left",
  },
  {
    title: "start",
    width: 100,
    dataIndex: "start",
    key: "start",
    fixed: "left",
  },
  {
    title: "end",
    dataIndex: "end",
    key: "end",
    width: 150,
  },
/*   {
    title: "Course",
    dataIndex: "course",
    key: "2",
    width: 150,
  },
  {
    title: "Column 3",
    dataIndex: "address",
    key: "3",
    width: 150,
  }, */
  /* {
    title: "Column 8",
    dataIndex: "address",
    key: "8",
  }, */
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 60,
    render: () => (
      <div className="flex flex-col">
        <a onClick={deleteStudent} className="text-red-600">
          Delete
        </a>
        <a onClick={deleteStudent} className="text-blue-600">
          Edit
        </a>
      </div>
    ),
  },
];

const data = [];
/* for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
    course: `programming ${i}`,
  });
} */
Events.map((event, i) => {
  data.push({
    key: i,
    title: `${event.title}`,
    start: `${event.start}`,
    end: `${event.end}`,
    /* course: `programming ${i}`, */
  });
})

const deleteStudent = () => {
  alert("delete");
};

const AdminDashboard = () => {
  return (
    <div className="w-full flex h-[100vh] overflow-y-auto px-5 gap-2">
      <div className="w-2/3 my-4">
        <div className="text-xl py-4">Class Schedule</div>
        <ReactBigCalendar />
      </div>
      <div className="w-1/3 my-4">
        <div className="text-xl py-4">All Events list</div>
        <Table 
        className="border"
          columns={columns}
          dataSource={data}
          scroll={{
            x: 500,
            y: 750,
          }}
        />
      </div>
    </div>
  );
};
export default AdminDashboard;
