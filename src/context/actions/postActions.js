import { URL_POST_SERVICIO } from "../../constants/url";
import { POST } from "../../utils/fetch";
import { startLoadServicio } from "./serviciosActions";

export const startPostServicio = (data) => {
  return async (dispatch, getState) => {
    console.log(data);
    const resul = await POST(URL_POST_SERVICIO, data);

    console.log(data);
    if (resul !== -1) dispatch(startLoadServicio(data.folioAsignacion));
  };
};
