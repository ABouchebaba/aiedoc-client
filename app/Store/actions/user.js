import {
  SET_USER,
  UNSET_USER,
  LOGIN_LOADING,
} from "../../constants/ActionTypes";
import { validatePin, getUserWithPhone, registerUser, setToken } from "../api";
import axios from "axios";

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
          console.log("logging in");
          dispatch({
            type: SET_USER,
            data: res.data,
            token: res.headers["x-auth-token"],
          });
        })
        // user not registred
        .catch((err) => {
          console.log("loggin error: " + err.message);
          dispatch({
            type: UNSET_USER,
          });
          callbacks.onVerfiyPhoneError(err);
        });
    })
    // user typed wrong pin code
    .catch((err) => {
      console.log("wrong pin");
      dispatch({
        type: UNSET_USER,
      });
      callbacks.onPinError(err);
    });
};

export const register = (user) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  registerUser(user)
    .then((res) => {
      dispatch({
        type: SET_USER,
        data: res.data,
        token: res.headers["x-auth-token"],
      });
    })
    .catch((err) => {
      dispatch({
        type: UNSET_USER,
      });
      alert("Veuillez vérifier votre connexion internet");
      console.log(err.message);
    });
};

export const logout = () => (dispatch) => {
  delete axios.defaults.headers.common["x-auth-token"];
  return dispatch({
    type: UNSET_USER,
  });
};
