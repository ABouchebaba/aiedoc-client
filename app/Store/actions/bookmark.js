import { ADD_BOOKMARK, REMOVE_BOOKMARK } from "../../constants/ActionTypes";

export const addBookmark = article => dispatch => {
  dispatch({
    type: ADD_BOOKMARK,
    data: article
  });
};

export const removeBookmark = id => dispatch => {
  dispatch({
    type: REMOVE_BOOKMARK,
    id
  });
};
