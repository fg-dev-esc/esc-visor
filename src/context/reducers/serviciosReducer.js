import { types } from "../types/types";

const init = {
  servicios: [],
  servicio: {},
};
export const serviciosReducer = (state = init, action) => {
  switch (action.type) {
    case types.storeServicios:
      return {
        ...state,
        servicios: action.payload,
      };

    case types.storeServicio:
      return {
        ...state,
        servicio: action.payload,
      };

    default:
      return state;
  }
};
