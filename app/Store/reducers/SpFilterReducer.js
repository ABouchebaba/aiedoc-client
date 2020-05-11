import {
  SET_GENDER_FILTER,
  SET_SERVICE_FILTER,
} from "../../constants/ActionTypes";

const initialState = {
  gender: false,
  services: {},
};

const SpFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GENDER_FILTER: {
      return {
        ...state,
        gender: action.data,
      };
    }
    case SET_SERVICE_FILTER: {
      if (state.services[action.data]) delete state.services[action.data];
      else state.services[action.data] = true;

      return { ...state };
    }
    default:
      return state;
  }
};

export default SpFilterReducer;
