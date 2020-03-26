import {
  LOADING_RESULTS,
  SET_RESULTS,
  ERROR_SEARCH
} from "../constants/ActionTypes";

const initialState = {
  query: "",
  results: [],
  error: false,
  loading: false
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_RESULTS: {
      return {
        ...state,
        loading: true
      };
    }
    case SET_RESULTS: {
      return {
        ...state,
        loading: false,
        results: action.data,
        query: action.query
      };
    }
    case ERROR_SEARCH: {
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

export default SearchReducer;
