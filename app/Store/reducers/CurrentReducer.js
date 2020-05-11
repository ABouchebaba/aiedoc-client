import {
  LOADING_CURRENT_INTERVENTION,
  SET_CURRENT_INTERVENTION,
  SET_CURRENT_SP,
  UNSET_CURRENT,
  SET_CURRENT,
} from "../../constants/ActionTypes";

const initialState = {
  intervention: false,
  sp: false,
  loading: false,
};

const CurrentReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_CURRENT_INTERVENTION: {
      return {
        ...state,
        loading: true,
      };
    }
    case SET_CURRENT: {
      return {
        ...state,
        intervention: action.intervention,
        sp: action.sp,
        loading: false,
      };
    }
    case SET_CURRENT_INTERVENTION: {
      return {
        ...state,
        intervention: action.intervention,
        loading: false,
      };
    }
    case SET_CURRENT_SP: {
      return {
        ...state,
        sp: action.sp,
        loading: false,
      };
    }
    case UNSET_CURRENT: {
      return {
        ...state,
        intervention: false,
        sp: false,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default CurrentReducer;
