import { Table } from "antd";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "ID",
    key: "id",
    render: (item) => (
      <div>
        <p>{`${item?.id}`}</p>
      </div>
    ),
  },
  {
    title: "ФИО",
    key: "name",
    render: (item) => (
      <div>
        <Link
          to={`${item.id}`}
        >{`${item?.firstName} ${item?.middleName} ${item?.lastName}`}</Link>
      </div>
    ),
  },
  {
    title: "Дата рождения",
    key: "birthDate",
    render: (item) => (
      <div>
        <p>{`${dateBirthDay(item?.birthDate)}`}</p>
      </div>
    ),
  },
];

const dateBirthDay = (str) => {
  let stroke = str.split("");
  let years = stroke.slice(0, 4).join("");
  let months = stroke.slice(5, 7).join("");
  let days = stroke.slice(8, 11).join("");
  return `${days}-${months}-${years}`;
};

function Employess({ employees }) {


  return (
    <div className="table">
      {
        <>
          <Table
            columns={columns}
            dataSource={employees}
            pagination={false}
            rowKey="id"
          />
        </>
      }
    </div>
  );
}

export default Employess;
