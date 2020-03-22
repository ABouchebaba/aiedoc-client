const initialState = {
  topics: [],
  error: false,
  loading: false
};

const TopicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_TOPICS": {
      return {
        ...state,
        loading: true
      };
    }
    case "SET_TOPICS": {
      console.log("setting TOPICS");
      return {
        ...state,
        loading: false,
        error: false,
        topics: action.data
      };
    }
    case "ERROR_TOPICS": {
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

export default TopicsReducer;
