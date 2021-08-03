import { Form, Input, Button } from "antd";
import React, { useState, useEffect } from "react";
import { createEmployee } from "../../redux/actions/actionEmpoyees";
import { useDispatch } from "react-redux";


const DataBase = ( {employees} ) => {
  const dispatch = useDispatch();
  // console.log(employees.map(item => item.id));  
  // useEffect(() => {
  //   console.log(employees);
  // }, [])
  return (
    <>
      <p>{employees?.id}</p>
    </>
  );
};

export default DataBase;
