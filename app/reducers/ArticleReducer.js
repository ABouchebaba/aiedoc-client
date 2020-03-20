const initialState = {
  articles: [],
  error: false,
  loading: false
};

const ArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_ARTICLES": {
      return {
        ...state,
        loading: true
      };
    }
    case "SET_ARTICLES": {
      return {
        ...state,
        loading: false,
        articles: action.data
      };
    }
    case "ERROR_ARTICLES": {
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