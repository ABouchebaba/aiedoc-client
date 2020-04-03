import { SET_TOLOAD } from "../../constants/ActionTypes";

const initialState = {};

const ToLoadReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOLOAD: {
      state[action.category] = action.toload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default ToLoadReducer;
