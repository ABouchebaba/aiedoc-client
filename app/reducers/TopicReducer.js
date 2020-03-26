import { SET_TOPICS, LOADING_TOPICS } from "../constants/ActionTypes";

const initialState = {
  topics: [],
  loading: false
};

const TopicReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_TOPICS: {
      return {
        ...state,
        loading: true
      };
    }
    case SET_TOPICS: {
      return {
        ...state,
        loading: false,
        topics: action.data
      };
    }
    default:
      return state;
  }
};

export default TopicReducer;
