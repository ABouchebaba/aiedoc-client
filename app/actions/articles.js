import { loadArticles } from "../api/articles";

export const getArticles = () => dispatch => {
  dispatch({ type: "LOADING_ARTICLES" });

  loadArticles()
    .then(res => {
      return dispatch({
        type: "SET_ARTICLES",
        data: res.data
      });
    })
    .catch(err => {
      // console.log(err);
      return dispatch({
        type: "ERROR_ARTICLES",
        data: err
      });
    });
};
