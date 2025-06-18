import React from "react";
import { useSelector } from "react-redux";
import { estatusServicioCons } from "../../constants/cons";
import BotonArribo from "./_BotonArribo";
import BotonConfirmar from "./_BotonConfirmar";
import BotonEnAtencion from "./_BotonEnAtencion";
import BotonTerminado from "./_BotonTerminado";

export default function BotonAcciones() {
  const {
    servicio: { estatusServicio },
  } = useSelector((state) => state.serviciosReducer);

  if (estatusServicio === estatusServicioCons.ASIGNADO.nombre)
    return <BotonConfirmar />;

  if (estatusServicio === estatusServicioCons.CONFIRMADO.nombre)
    return <BotonEnAtencion />;

  if (estatusServicio === estatusServicioCons.EN_ATENCION.nombre)
    return <BotonArribo />;

  if (estatusServicio === estatusServicioCons.ARRIBO.nombre)
    return <BotonTerminado />;

  return <div></div>;
}
