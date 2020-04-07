import { SET_USER, UNSET_USER } from "../../constants/ActionTypes";

export const login = (user) => (dispatch) => {
  return dispatch({
    type: SET_USER,
    user,
  });
};

export const logout = () => (dispatch) => {
  return dispatch({
    type: UNSET_USER,
  });
};
