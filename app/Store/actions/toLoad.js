import { SET_TOLOAD } from "../../constants/ActionTypes";

export const setToLoad = (category, toload) => dispatch => {
  dispatch({
    type: SET_TOLOAD,
    category,
    toload
  });
};
