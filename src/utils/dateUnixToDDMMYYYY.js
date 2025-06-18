import moment from "moment";

export default function dateUnixToDDMMYYYY(date) {
  return moment(Number(date)).format("DD/MM/YY HH:mm");
}
