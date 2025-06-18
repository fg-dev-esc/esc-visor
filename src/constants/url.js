export const ver = ".03";

// QA
export const api_key = process.env.REACT_APP_API_KEY;
// const urlBase =
//   "https://api-gc-qa.service.gnp.com.mx/apsin/api/asistencia-vial/proveedor"

// //PROD
// export const api_key = process.env.REACT_APP_API_KEY;
// const urlBase =
//   "https://api-gc.service.gnp.com.mx/apsin/api/asistencia-vial/proveedor";

export const urlBase = "https://gnp-conn.escotel.mx/api";

//export const URL_GET_ESTATUS = urlBase + "/catalagos/estatus";
export const URL_GET_ESTATUS = urlBase + "/Catalogo/GetCatalogoEstatus";
// export const URL_GET_SERVICIOS = urlBase + "/asistencia/servicios/estatus";

export const URL_GET_MOTIVOS = urlBase + "/Catalogo/GetCatalogoMotivos";
export const URL_GET_SERVICIO = urlBase + "/Servicio/GetServiciosByEstatus";
export const URL_GET_SERVICIOS = urlBase + "/Servicio/GetDetalleServicioVial";

export const URL_POST_SERVICIO = urlBase + "/Servicio/PostActualizacionAsistenciaVial";
