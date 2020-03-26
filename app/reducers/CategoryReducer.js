import { SET_CATEGORIES, LOADING_CATEGORIES } from "../constatnts/ActionTypes";

const initialState = {
  categories: {},
  loading: false
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
    default:
      return state;
  }
};

export default CategoryReducer;
