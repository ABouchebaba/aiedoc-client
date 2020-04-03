import { SET_PREFERENCE } from "../../constants/ActionTypes";

export const setPreference = (pref, value) => dispatch => {
  return dispatch({
    type: SET_PREFERENCE,
    preference: pref,
    data: value
  });
};
