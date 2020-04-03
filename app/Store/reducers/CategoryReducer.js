import {
  SET_CATEGORIES,
  LOADING_CATEGORIES,
  ERROR_CATEGORIES
} from "../../constants/ActionTypes";

const initialState = {
  categories: [],
  loading: false,
  error: false
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_CATEGORIES: {
      return {
        ...state,
        loading: true
      };
    }
    case SET_CATEGORIES: {
      return {
        ...state,
        loading: false,
        categories: action.data
      };
    }
    case ERROR_CATEGORIES: {
      return {
        ...state,
        loading: false,
        error: action.data
      };
    }
    default:
      return state;
  }
};

export default CategoryReducer;
