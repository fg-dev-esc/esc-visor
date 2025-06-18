import { Select } from "antd";
import React, { useEffect } from "react";

const { Option } = Select;

export default function SelectSimple({ value, opciones, onChange }) {
  return (
    <Select value={value} style={{ width: 120 }} onChange={onChange}>
      {opciones.map((o, i) => (
        <Option key={i} value={o.value}>
          {o.text}
        </Option>
      ))}
    </Select>
  );
}
