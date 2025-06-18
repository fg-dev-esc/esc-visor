import moment from "moment";

export default function dateUnixHora(date, hora) {
  const fecha = moment(Number(date)).format("DD/MM/YY");
  const salida = `${fecha} ${hora}`;
  return salida;
}
