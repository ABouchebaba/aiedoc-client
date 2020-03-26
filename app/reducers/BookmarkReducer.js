import { ADD_BOOKMARK, REMOVE_BOOKMARK } from "../constants/ActionTypes";

const initialState = {};

const BookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKMARK: {
      let newState = { ...state };
      newState[action.data.id] = action.data;
      return newState;
    }
    case REMOVE_BOOKMARK: {
      delete state[action.id];
      return { ...state };
    }
    default:
      return state;
  }
};

export default BookmarkReducer;
