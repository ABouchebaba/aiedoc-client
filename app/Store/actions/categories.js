import {
  SET_CATEGORIES,
  LOADING_CATEGORIES,
  ERROR_CATEGORIES
} from "../../constants/ActionTypes";
import { loadCategories } from "../api/categories";

export const getCategories = () => dispatch => {
  dispatch({ type: LOADING_CATEGORIES });

  loadCategories()
    .then(res =>
      dispatch({
        type: SET_CATEGORIES,
        data: res
      })
    )
    .catch(err => {
      console.log("errored get categories");
      return dispatch({
        type: ERROR_CATEGORIES,
        data: err
      });
    });
};
