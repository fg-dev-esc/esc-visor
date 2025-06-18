import { URL_GET_MOTIVOS } from "../../constants/url";
import { GET } from "../../utils/fetch";
import { types } from "../types/types";

export const startLoadMotivos = () => {
  return async (dispatch) => {
    const data = await GET(URL_GET_MOTIVOS);
    if (data !== -1) {
      dispatch(storeMotivos(data));
    }
  };
};

const storeMotivos = (payload) => ({
  type: types.storeMotivos,
  payload,
});
