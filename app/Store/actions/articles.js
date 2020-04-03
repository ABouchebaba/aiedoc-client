import { loadArticles } from "../api/articles";
import {
  LOADING_ARTICLES,
  SET_ARTICLES,
  ERROR_ARTICLES
} from "../../constants/ActionTypes";

export const getArticles = () => dispatch => {
  dispatch({ type: LOADING_ARTICLES });

  loadArticles()
    .then(res => {
      return dispatch({
        type: SET_ARTICLES,
        data: res
      });
    })
    .catch(err => {
      console.log("errored");
      return dispatch({
        type: ERROR_ARTICLES,
        data: err
      });
    });
};
