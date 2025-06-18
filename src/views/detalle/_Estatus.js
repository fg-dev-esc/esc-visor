import React from "react";
import { useSelector } from "react-redux";

export default function Estatus() {
  const {
    servicio: { estatusServicio },
  } = useSelector((state) => state.serviciosReducer);

  const claseCss =
    estatusServicio === "En Atención" ? "EnAtencion" : estatusServicio;

  return <div className={`circulo ${claseCss}`}>{estatusServicio}</div>;
}
