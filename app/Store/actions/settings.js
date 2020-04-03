import { SET_SETTING } from "../../constants/ActionTypes";

export const setSetting = (setting, value) => dispatch => {
  return dispatch({
    type: SET_SETTING,
    setting,
    value
  });
};
