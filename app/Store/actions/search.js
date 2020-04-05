import { LOADING_RESULTS, SET_RESULTS } from "../../constants/ActionTypes";

export const search = (articles, query) => dispatch => {
  dispatch({ type: LOADING_RESULTS });

  const results = articles.filter(a =>
    a.title.toUpperCase().includes(query.toUpperCase())
  );

  return dispatch({
    type: SET_RESULTS,
    data: results,
    query
  });
};
