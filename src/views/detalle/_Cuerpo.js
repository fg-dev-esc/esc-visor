import { Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import dateUnixToDDMMYYYY from "../../utils/dateUnixToDDMMYYYY";
import Campo from "./_Campo";

export default function Cuerpo() {
  const { servicio: s } = useSelector((state) => state.serviciosReducer);
  console.log("servicio recibido en cuerpo:", s);
  return (
    <>
      <Row gutter={[10, 10]}>
        <Campo label="Folio de asignación" valor={s.folioAsignacion} />
        <Campo label="Número de póliza" valor={s.numeroPoliza} />
        <Campo label="Fecha" valor={dateUnixToDDMMYYYY(s.fechaReporte)} />

        <Campo
          label="Nombre reporta"
          valor={`${s.apellidoPaternoReportante} ${s.apellidoMaternoReportante} ${s.nombreReportante}`}
        />

        <Campo label="Número de contacto" valor={s.numeroContacto} />
        <Campo label="Email" valor={s.email} />

        <Campo label="Cobertura afectada" valor={s.coberturaAfectada} />
        <Campo label="Tipo de servicio" valor={s.tipoServicio} />
      </Row>
      <div className="subTitulo">Vehiculo</div>
      <Row gutter={[10, 10]}>
        <Campo label="Tipo de vehículo" valor={s.vehiculo?.tipoVehiculo} />
        <Campo label="Modelo" valor={s.vehiculo?.modelo} />
        <Campo label="Número de serie" valor={s.vehiculo?.numeroSerie} />
        <Campo label="Placas" valor={s.vehiculo?.placas} />
        <Campo label="Color" valor={s.vehiculo?.color} />
      </Row>
      <div className="subTitulo">Origen</div>
      <Row gutter={[10, 10]}>
        <Campo label="Estado" valor={s.ubicacionOrigen?.estadoOrigen} />
        <Campo label="Municipio" valor={s.ubicacionOrigen?.municipioOrigen} />
        <Campo label="Colonia" valor={s.ubicacionOrigen?.coloniaOrigen} />
        <Campo label="Calle" valor={s.ubicacionOrigen?.calleOrigen} />
        <Campo label="Ext" valor={s.ubicacionOrigen?.numeroExteriorOrigen} />

        <Campo label="CP" valor={s.ubicacionOrigen?.codigoPostalOrigen} />
        <Campo
          label="Referencias"
          valor={s.ubicacionOrigen?.referenciasOrigen}
        />
      </Row>
      <div className="subTitulo">Destino</div>
      <Row gutter={[10, 10]}>
        <Campo label="Estado" valor={s.ubicacionOrigen?.estadoDestino} />
        <Campo label="Municipio" valor={s.ubicacionDestino?.municipioDestino} />
        <Campo label="Colonia" valor={s.ubicacionDestino?.coloniaDestino} />
        <Campo label="Calle" valor={s.ubicacionDestino?.calleDestino} />
        <Campo label="Ext" valor={s.ubicacionDestino?.numeroExteriorDestino} />

        <Campo label="CP" valor={s.ubicacionDestino?.codigoPostalDestino} />
        <Campo
          label="Referencias"
          valor={s.ubicacionDestino?.referenciasDestino}
        />
        <Campo label="Es cta especial" valor={s.cuentaEspecial} />
        <Campo label="Condiciones especiales" valor={s.condicionesEspeciales} />
      </Row>
    </>
  );
}
