import { Button, Col, Row } from "antd";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Titulo from "../../components/titulo/Titulo";
import Cuerpo from "./_Cuerpo";

export default function Datos() {
  const history = useHistory();

  const handleRegresar = () => history.push("/");
  return (
    <>
      <Row>
        <Col span={12}>
          <Titulo titulo="Detalle de Servicio" />
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <Button
            style={{ color: "orange", fontWeight: 500 }}
            type="text"
            danger
            onClick={handleRegresar}
          >
            regresar
          </Button>
        </Col>
      </Row>

      <Cuerpo />
    </>
  );
}
