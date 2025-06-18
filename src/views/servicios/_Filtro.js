import { Col, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import SelectSimple from "../../components/select/SelectSimple";
import Titulo from "../../components/titulo/Titulo";
import { setEstatusSelected } from "../../context/actions/estatusActions";
import { startLoadServiciosByEstatus } from "../../context/actions/serviciosActions";
import getEstatusOpciones from "../../utils/getEstatusOpciones";

export default function Filtro() {
  const dispatch = useDispatch();
  const { lastCheck } = useSelector((state) => state.lastCheckReducer);
  const { estatus, estatusSelected } = useSelector(
    (state) => state.estatusReducer
  );

  console.log("estatus recibidos en filtro:", estatus);

  const estatusOpciones = getEstatusOpciones(estatus);

  const handleChange = async (val) => {
    dispatch(setEstatusSelected(val));
    dispatch(startLoadServiciosByEstatus(val));
  };

  return (
    <Row>
      <Col span={12}>
        <Titulo titulo="Listado de servicios" />
      </Col>
      <Col span={12} style={{ textAlign: "right" }}>
        <span style={{ marginRight: 20, fontWeight: 600 }}>{lastCheck}</span>
        <SelectSimple
          value={estatusSelected}
          opciones={estatusOpciones}
          onChange={handleChange}
        />
      </Col>
    </Row>
  );
}
