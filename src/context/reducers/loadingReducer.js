import { types } from "../types/types";

const init = {
  loadingPage: true,
};
export const loadingReducer = (state = init, action) => {
  switch (action.type) {
    case types.setLoadingPage:
      return {
        ...state,
        loadingPage: action.payload,
      };

    default:
      return state;
  }
};
