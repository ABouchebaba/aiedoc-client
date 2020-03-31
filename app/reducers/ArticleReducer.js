import {
  SET_ARTICLES,
  LOADING_ARTICLES,
  ERROR_ARTICLES
} from "../constants/ActionTypes";

const initialState = {
  articles: [],
  error: false,
  loading: false
};

const ArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_ARTICLES: {
      return {
        ...state,
        loading: true
      };
    }
    case SET_ARTICLES: {
      console.log("setting data");
      console.log(action.data[action.data.length - 1].date);
      return {
        ...state,
        loading: false,
        error: false,
        articles: action.data
      };
    }
    case ERROR_ARTICLES: {
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

export default ArticleReducer;
