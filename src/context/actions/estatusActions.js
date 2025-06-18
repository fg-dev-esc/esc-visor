import { URL_GET_ESTATUS } from "../../constants/url";
import { GET } from "../../utils/fetch";
import { types } from "../types/types";

export const startLoadEstatus = () => {
  return async (dispatch) => {
    const data = await GET(URL_GET_ESTATUS);

    if (data !== -1) {
      dispatch(storeEstatus(data));
    }
  };
};

const storeEstatus = (payload) => ({
  type: types.storeEstatus,
  payload,
});

///////////////////////////////////////////////////////////////////////////

export const setEstatusSelected = (payload) => ({
  type: types.setEstatusSelected,
  payload,
});
