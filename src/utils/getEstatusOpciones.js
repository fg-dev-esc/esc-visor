export default function getEstatusOpciones(array = []) {
  return array.map((a) => ({
    value: a.clave,
    text: a.descripcion,
  }));
}