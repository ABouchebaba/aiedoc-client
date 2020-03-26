import { SET_CATEGORIES, LOADING_CATEGORIES } from "../constants/ActionTypes";

export const getCategories = articles => dispatch => {
  dispatch({ type: LOADING_CATEGORIES });

  let categories = {};
  articles.map(article => {
    if (categories[article.category]) {
      categories[article.category] = [...categories[article.category], article];
    } else {
      categories[article.category] = [article];
    }
  });

  return dispatch({
    type: SET_CATEGORIES,
    data: categories
  });
};
