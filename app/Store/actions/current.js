import {
  UNSET_CURRENT,
  SET_CURRENT,
  SET_CURRENT_INTERVENTION,
  LOADING_CURRENT_INTERVENTION,
  SET_CURRENT_SP,
} from "../../constants/ActionTypes";
import { Socket } from "../../helpers";
import { getInterventionById } from "../api/interventions";

export const unsetCurrent = () => (dispatch) => {
  dispatch({
    type: UNSET_CURRENT,
  });
};

export const setCurrentIntervention = (intervention) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_INTERVENTION,
    intervention,
  });
};

export const setCurrentSp = (sp) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_SP,
    sp,
  });
};
export const setCurrent = (intervention, sp) => (dispatch) => {
  dispatch({
    type: SET_CURRENT,
    intervention,
    sp,
  });
};
export const loadCurrentIntervention = () => (dispatch) => {
  dispatch({
    type: LOADING_CURRENT_INTERVENTION,
  });
};

export const resetCurrentIntervention = (int_id) => (dispatch) => {
  dispatch(loadCurrentIntervention());
  // loading dismissed in resync event listener

  const socket = Socket.getInstance();
  socket.sync();
  getInterventionById(int_id)
    .then((res) => {
      console.log("Got intervention :  ", res.data._id);
      dispatch(setCurrentIntervention(res.data));
    })
    .catch((err) => {
      console.log("Error getting intervention by id");
    });
};
