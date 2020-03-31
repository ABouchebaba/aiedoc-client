import {
  SET_SOURCES,
  LOADING_SOURCES,
  ERROR_SOURCES
} from "../constants/ActionTypes";
import { loadSources } from "../api/sources";

export const getSources = () => dispatch => {
  dispatch({ type: LOADING_SOURCES });

  loadSources()
    .then(res => {
      return dispatch({
        type: SET_SOURCES,
        data: res
      });
    })
    .catch(err => {
      console.log("errored get sources");
      return dispatch({
        type: ERROR_SOURCES,
        data: err
      });
    });
};
