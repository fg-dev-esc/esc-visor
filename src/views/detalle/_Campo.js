import { Col } from "antd";
import React from "react";

export default function Campo({ label, valor }) {
  return (
    <Col xs={24} md={12} lg={8} xl={6}>
      <div className="labelDetalle">{label}</div>
      <div className="valueDetalle">{valor}&nbsp;</div>
    </Col>
  );
}
