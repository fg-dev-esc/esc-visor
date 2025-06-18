import { types } from "../types/types";

export const setLoadingPage = (state) => ({
  type: types.setLoadingPage,
  payload: state,
});
