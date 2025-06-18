import { Col, Input } from "antd";

export default function InputValue({ name, label, valor, onChange }) {
  return (
    <Col xs={24}  xl={16}>
      <div className="label">{label}</div>
      <div className="inputValue">
        <Input name={name} onChange={onChange} value={valor} />
      </div>
    </Col>
  );
}
