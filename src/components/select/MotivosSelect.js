import { Col, Select } from "antd";
import { useSelector } from "react-redux";

const { Option } = Select;
export default function MotivosSelect({
  label,
  name,
  claveEstatusServicio,
  onChange,
}) {
  const todosMotivos = useSelector((state) => state.motivosReducer);
  let opciones = [];

  if (claveEstatusServicio !== "x") {
    todosMotivos.map((m) => {
      if (m.claveEstatusServicio === claveEstatusServicio) {
        opciones = [...opciones, { text: m.descripcion, value: m.clave }];
      }
    });
  } else {
    todosMotivos.map((m) => {
      opciones = [...opciones, { text: m.descripcion, value: m.clave }];
    });
  }

  const handleChange = (value) => {
    const salida = {
      target: {
        name,
        value,
      },
    };
    onChange(salida);
  };

  return (
    <Col xs={24} xl={16}>
      <div className="label">{label}</div>
      <div className="inputValue">
        <Select name={name} style={{ width: "100%" }} onChange={handleChange}>
          {opciones.map((o, i) => (
            <Option key={i} value={o.value}>
              {o.text}
            </Option>
          ))}
        </Select>
      </div>
    </Col>
  );
}
