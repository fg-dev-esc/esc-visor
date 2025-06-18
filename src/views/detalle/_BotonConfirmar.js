import { Button } from "antd";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import InputValue from "../../components/inputValue/InputValue";
import TextareaValue from "../../components/inputValue/TextareaValue";
import MotivosSelect from "../../components/select/MotivosSelect";
import { startPostServicio } from "../../context/actions/postActions";

export default function BotonConfirmar() {
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
    const estatusActual = "CO";
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
      <InputValue
        name="especialidad"
        label="Especialidad"
        value={data.especialidad}
        onChange={onChange}
      />
      <MotivosSelect
        claveEstatusServicio="CO"
        name="idMotivo"
        onChange={onChange}
        label="Motivo"
      />
      <TextareaValue
        name="comentarios"
        label="Comentarios"
        value={data.comentarios}
        onChange={onChange}
      />
      <Button style={{ marginTop: 10, marginLeft: 20 }} onClick={handleClick}>
        Confirmar Servicio
      </Button>
    </div>
  );
}
