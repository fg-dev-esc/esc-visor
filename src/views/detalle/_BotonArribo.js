import { Button } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import InputValue from "../../components/inputValue/InputValue";
import MotivosSelect from "../../components/select/MotivosSelect";
import { startPostServicio } from "../../context/actions/postActions";

export default function BotonArribo() {
  const [data, setData] = useState({});
  const { folioAsignacion } = useParams();
  const dispatch = useDispatch();
  const onChange = ({ target: { name, value } }) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleClick = () => {
    const fechaHoraEstatus = Date.now();
    const estatusActual = "AR";
    const final = {
      ...data,
      folioAsignacion,
      fechaHoraEstatus,
      estatusActual,
    };
    dispatch(startPostServicio(final));
  };

  return (
    <div className="formaCambioEstatus">
      <InputValue
        name="nombrePrestadorServicio"
        label="Nombre proveedor"
        value={data.nombrePrestadorServicio}
        onChange={onChange}
      />
      <InputValue
        name="telefonoPrestadorServicio"
        label="Teléfono proveedor"
        value={data.telefonoPrestadorServicio}
        onChange={onChange}
      />

      <MotivosSelect
        claveEstatusServicio="x"
        name="idMotivo"
        onChange={onChange}
        label="Motivo"
      />

      <Button style={{ marginTop: 10, marginLeft: 20 }} onClick={handleClick}>
        Confirmar Arribo
      </Button>
    </div>
  );
}
