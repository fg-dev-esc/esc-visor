import { URL_GET_SERVICIO, URL_GET_SERVICIOS } from "../../constants/url";
import { GET } from "../../utils/fetch";
import { types } from "../types/types";
import { setLoadingPage } from "./loadingActions";

export const startLoadServiciosByEstatus = (status) => {
  return async (dispatch) => {
    const fechaAhora = () => {
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed);
      return (
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
      );
    };

    const data = await GET(`${URL_GET_SERVICIO}/${status}`);

    if (data !== -1) {
      dispatch(storeServicios(data));
      dispatch(setLastCheck(`Última verifiación ${fechaAhora()} de ${status}`));
    } else {
      dispatch(setLastCheck(`Error ${fechaAhora()} de ${status}`));
    }

    // const inter = setInterval(async () => {
    //   const data2 = await GET(`${URL_GET_SERVICIOS}/${status}`);
    //   console.log({ data2, status });
    //   if (data2 !== -1) {
    //     dispatch(storeServicios(data));
    //     dispatch(
    //       setLastCheck(`Última verifiación ${fechaAhora()} de ${status}`)
    //     );
    //   } else {
    //     dispatch(setLastCheck(`Error ${fechaAhora()} de ${status}`));
    //   }
    // }, 30000);
  };
};

const storeServicios = (payload) => ({
  type: types.storeServicios,
  payload,
});

const setLastCheck = (payload) => ({
  type: types.setLastCheck,
  payload,
});
/////////////////////////////////////////////////////////////////////

export const startLoadServicio = (folioAsignacion) => {
  return async (dispatch) => {
    await dispatch(setLoadingPage(true));
    const data = await GET(`${URL_GET_SERVICIOS}/${folioAsignacion}`);

    console.log('respuesta en startloadservicio:', data);

    if (data !== -1) {
      dispatch(storeServicio(data));
    }

    dispatch(setLoadingPage(false));
  };
};

const storeServicio = (payload) => ({
  type: types.storeServicio,
  payload,
});
