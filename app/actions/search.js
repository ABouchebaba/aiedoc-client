import { LOADING_RESULTS, SET_RESULTS } from "../constants/ActionTypes";

const search = (articles, query) => dispatch => {
  dispatch({ type: LOADING_RESULTS });

  const results = articles.filter(a => a.title.includes(query));

  return dispatch({
    type: SET_RESULTS,
    data: results,
    query
  });
};

export default search;
