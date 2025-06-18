import { types } from "../types/types";

const init = {
  estatus: [],
  estatusSelected: "",
};
export const estatusReducer = (state = init, action) => {
  switch (action.type) {
    case types.storeEstatus:
      return {
        ...state,
        estatus: action.payload,
      };

    case types.setEstatusSelected:
      return {
        ...state,
        estatusSelected: action.payload,
      };

    default:
      return state;
  }
};
