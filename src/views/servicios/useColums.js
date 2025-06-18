import { EyeOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import dateUnixHora from "../../utils/dateUnixHora";

export default function useColums() {
  const history = useHistory();
  const handleClick = (row) => history.push(`/detalle/${row.folioAsignacion}`);
  const columns = [
    {
      title: "Fecha",
      dataIndex: "fecha",
      render: (val, row) => (
        <div>{dateUnixHora(row.fechaReporte, row.horaReporte)}</div>
      ),
    },
    {
      title: "Folio",
      dataIndex: "folioAsignacion",
      key: "folioAsignacion",
    },
    {
      title: "Póliza",
      dataIndex: "numeroPoliza",
      key: "numeroPoliza",
    },
    {
      title: "Reportante",
      dataIndex: "address",
      render: (val, row) => (
        <div>
          {row.apellidoPaternoReportante} {row.apellidoMaternoReportante}{" "}
          {row.nombreReportante}
        </div>
      ),
    },
    {
      title: "Especial",
      dataIndex: "cuentaEspecial",
      render: (val, row) => <div>{row.cuentaEspecial !== 0 ? "Si" : "No"}</div>,
    },
    {
      title: "VIP",
      dataIndex: "clienteVip",
      render: (val, row) => <div>{row.clienteVip !== 0 ? "Si" : "No"}</div>,
    },
    {
      title: "",
      render: (val, row) => (
        <EyeOutlined onClick={() => handleClick(row)} className="iconTable" />
      ),
    },
  ];

  return { columns };
}
