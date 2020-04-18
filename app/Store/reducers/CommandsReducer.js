import {
  GET_COMMANDS,
  ERROR_GET_COMMANDS,
  GET_COMMANDS_LOADING
} from "../../constants/ActionTypes";

const initialState = {
    commands: [],
    loading: false,
    error: false,
};

const CommandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMANDS: {
      return {
        ...state,
        commands: action.data,
        loading: false,
        error: false,
      };
    }
    case ERROR_GET_COMMANDS: {
      return {
        ...state,
        error: action.data,
        loading: false,
      };
    }

    case GET_COMMANDS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
};

export default CommandsReducer;
