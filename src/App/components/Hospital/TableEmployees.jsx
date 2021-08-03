import { useEffect } from "react";
import { Button, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getEmployees } from "../../redux/actions/actionEmpoyees";
import DataBase from "./DataBase";

function Employess() {
  const employees = useSelector((state) => state.employees.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  const dateBirthDay = (str) => {
    let stroke = str.split("");
    let years = stroke.slice(0, 4).join("");
    let months = stroke.slice(5, 7).join("");
    let days = stroke.slice(8, 11).join("");
    return `${days}-${months}-${years}`;
  };

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
            to={`/database/${item.id}`}
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

  return (
    <div className="table">
      {
        <>
          <Table columns={columns} dataSource={employees} />
          <DataBase employees={employees} />
        </>
      }
    </div>
  );
}

export default Employess;
