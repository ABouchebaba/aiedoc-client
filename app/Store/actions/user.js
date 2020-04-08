import {
  SET_USER,
  UNSET_USER,
  LOGIN_LOADING,
} from "../../constants/ActionTypes";
import { validatePin, getUserWithPhone, registerUser } from "../api";

export const login = (info, callbacks) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });

  // verify if pin code is correct
  validatePin(info.verificationId, info.verificationCode)
    .then((res) => {
      // Correct pin code !!
      // then check phone number in backend
      getUserWithPhone(info.phoneNumber)
        .then((res) => {
          // user already registred
          // so user goes home
          dispatch({
            type: SET_USER,
            data: res.data,
          });
        })
        // user not registred
        .catch((err) => {
          dispatch({
            type: UNSET_USER,
          });
          callbacks.onVerfiyPhoneError(err);
        });
    })
    // user typed wrong pin code
    .catch((err) => {
      dispatch({
        type: UNSET_USER,
      });
      callbacks.onPinError(err);
    });
};

export const register = (user) => (dispatch) => {
  registerUser(user)
    .then((res) => {
      dispatch({
        type: SET_USER,
        data: res.data,
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const logout = () => (dispatch) => {
  return dispatch({
    type: UNSET_USER,
  });
};
