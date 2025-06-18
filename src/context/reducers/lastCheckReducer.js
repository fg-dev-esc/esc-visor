import { types } from "../types/types";

const init = {
  lastCheck: "",
};
export const lastCheckReducer = (state = init, action) => {
  switch (action.type) {
    case types.setLastCheck:
      return {
        ...state,
        lastCheck: action.payload,
      };

    default:
      return state;
  }
};
