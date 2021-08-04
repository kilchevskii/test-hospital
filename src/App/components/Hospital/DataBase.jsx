import { Table, Typography } from "antd";
import { useEffect } from "react";
import { useParams } from "react-router";
import { getBreackRules } from "./Helpers";
const { Text } = Typography;

const DataBase = ({ worklog }) => {
  let { id } = useParams();
  const columns = [
    {
      title: "Id",
      dataIndex: "employee_id",
    },
    {
      title: "Прибыл",
      dataIndex: "from",
      align: "center",
    },
    {
      title: "Убыл",
      dataIndex: "myId",
      align: "center",
      render: (text) => (
        <div type={getBreackRules(worklog, text?.id)}>{text?.to}</div>
      ),
    },
  ];
  useEffect(() => {
    console.log(id);
  }, [])
  const data = worklog
    .filter((item) => item.employee_id === +id)
    .map((item) => ({
      ...item,
      myId: { id: item.id, to: item.to },
    }));

  return (
    <Table columns={columns} dataSource={data} pagination={false} rowKey="id" />
  );
};

export default DataBase;
