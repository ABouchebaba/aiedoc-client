import {
  SET_SOURCES,
  LOADING_SOURCES,
  ERROR_SOURCES
} from "../../constants/ActionTypes";

const initialState = {
  sources: [],
  loading: false,
  error: false
};

const SourcesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_SOURCES: {
      return {
        ...state,
        loading: true
      };
    }
    case SET_SOURCES: {
      return {
        ...state,
        loading: false,
        sources: action.data
      };
    }
    case ERROR_SOURCES: {
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

export default SourcesReducer;
