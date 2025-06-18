import { Col, Input } from "antd";

export default function TextareaValue({ name, label, valor, onChange }) {
  return (
    <Col xs={24}  xl={16}>
      <div className="label">{label}</div>
      <div className="inputValue">
        <Input.TextArea
          rows={4}
          name={name}
          onChange={onChange}
          value={valor}
        />
      </div>
    </Col>
  );
}
