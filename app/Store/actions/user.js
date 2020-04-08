import {
  SET_USER,
  UNSET_USER,
  LOGIN_LOADING,
} from "../../constants/ActionTypes";
import { validatePin } from "../api/validatePin";
import { getUserWithPhone } from "../api/getUserWithPhone";

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
        .catch(callbacks.onVerfiyPhoneError);
    })
    // user typed wrong pin code
    .catch(callbacks.onPinError);
};

export const logout = () => (dispatch) => {
  return dispatch({
    type: UNSET_USER,
  });
};
