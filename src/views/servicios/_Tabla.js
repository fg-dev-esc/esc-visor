import { Input, Table } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import useColums from "./useColums";

export default function Tabla() {
  const { columns } = useColums();
  const { servicios } = useSelector((state) => state.serviciosReducer);

  console.log("servicios recibidos en tabla:", servicios);

  return (
    <>
      {/* <Input
        onChange={handleChange}
        style={{ width: 250 }}
        placeholder="Póliza / Folio"
      /> */}
      <Table
        rowKey="folioAsignacion"
        style={{ marginTop: 10 }}
        dataSource={servicios}
        columns={columns}
      />
    </>
  );
}
