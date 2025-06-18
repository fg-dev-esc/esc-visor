import { types } from "../types/types";

export const motivosReducer = (state = [], action) => {
  switch (action.type) {
    case types.storeMotivos:
      return [...action.payload];
    default:
      return state;
  }
};
