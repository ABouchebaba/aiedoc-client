import {
  SET_USER,
  UNSET_USER,
  LOGIN_LOADING,
} from "../../constants/ActionTypes";

const initialState = {
  user: false,
  loading: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.data,
        loading: false,
      };
    }
    case UNSET_USER: {
      return {
        ...state,
        user: false,
        loading: false,
      };
    }
    case LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    default:
      return state;
  }
};

export default UserReducer;
