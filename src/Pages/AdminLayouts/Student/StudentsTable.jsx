import { Table } from "antd";
import AddStudent from "./AddStudent";
const columns = [
  {
    title: "Full Name",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  {
    title: "Age",
    width: 100,
    dataIndex: "age",
    key: "age",
    fixed: "left",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "1",
    width: 150,
  },
  {
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
  },
  {
    title: "Column 4",
    dataIndex: "address",
    key: "4",
    width: 150,
  },
  {
    title: "Column 5",
    dataIndex: "address",
    key: "5",
    width: 150,
  },
  {
    title: "Column 6",
    dataIndex: "address",
    key: "6",
    width: 150,
  },
  {
    title: "Column 7",
    dataIndex: "address",
    key: "7",
    width: 150,
  },
  /* {
    title: "Column 8",
    dataIndex: "address",
    key: "8",
  }, */
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
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
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
    course: `programming ${i}`,
  });
}

const deleteStudent = () => {
  alert("delete");
};
const StudentsTable = () => {
  return (
    <div id="adminStudent" className="w-full h-[100vh] overflow-y-auto px-5">
      <div className="flex gap-10 py-5">
        <div className="flex items-center text-lg py-4 whitespace-nowrap">
          Students List
        </div>
        <AddStudent />
      </div>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{
          x: 1000,
          y: 700,
        }}
      />
    </div>
  );
};
export default StudentsTable;
