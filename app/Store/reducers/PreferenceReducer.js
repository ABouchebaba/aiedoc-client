import { SET_PREFERENCE } from "../../constants/ActionTypes";

const initialState = {
  languages: {},
  sources: {},
  categories: {}
};

const PreferenceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PREFERENCE: {
      let pref = action.preference;
      let data = action.data;
      state[pref][data] = !state[pref][data];
      return { ...state };
    }
    default:
      return state;
  }
};

export default PreferenceReducer;
