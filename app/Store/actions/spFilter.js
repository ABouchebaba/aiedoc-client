import {
  SET_GENDER_FILTER,
  SET_SERVICE_FILTER,
} from "../../constants/ActionTypes";

export const setGenderFilter = (data) => (dispatch) => {
  dispatch({
    type: SET_GENDER_FILTER,
    data,
  });
};

export const setServiceFilter = (data) => (dispatch) => {
  dispatch({
    type: SET_SERVICE_FILTER,
    data,
  });
};
