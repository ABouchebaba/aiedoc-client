import {
  UNSET_CURRENT,
  SET_CURRENT,
  SET_CURRENT_INTERVENTION,
  LOADING_CURRENT_INTERVENTION,
  SET_CURRENT_SP,
} from "../../constants/ActionTypes";
import { Socket } from "../../helpers";

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

  const socket = Socket.getInstance();
  // Cleaning socket disconnect mess
  // Overkill ...
  if (socket.isInitialized()) socket.destroy();
  socket.init();
  socket.emit("join", int_id);

  // Socket should be initialized
  // expecting to receive intervention
  // from server as resync response
  socket.on("resync", (intervention) => {
    dispatch(setCurrentIntervention(intervention));
  });
  // triggering resync
  socket.emit("resync", int_id);
};
