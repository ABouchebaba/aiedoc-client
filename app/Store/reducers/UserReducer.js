import { SET_USER, UNSET_USER } from "../../constants/ActionTypes";

const initialState = false;

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        ...action.user,
      };
    }
    case UNSET_USER:
      return false;

    default:
      return state;
  }
};

export default UserReducer;
