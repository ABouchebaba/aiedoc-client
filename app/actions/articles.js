import { loadArticles } from "../api/articles";
import {
  LOADING_ARTICLES,
  SET_ARTICLES,
  ERROR_ARTICLES
} from "../constants/ActionTypes";
import { getTopics } from "./topics";
import { getCategories } from "./categories";

export const getArticles = () => dispatch => {
  dispatch({ type: LOADING_ARTICLES });

  loadArticles()
    .then(res => {
      // triggers articles grouping to topics
      dispatch(getTopics(res.data));
      dispatch(getCategories(res.data));

      return dispatch({
        type: SET_ARTICLES,
        data: res.data
      });
    })
    .catch(err => {
      return dispatch({
        type: ERROR_ARTICLES,
        data: err
      });
    });
};
