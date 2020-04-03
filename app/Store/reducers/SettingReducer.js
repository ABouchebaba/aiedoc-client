import { SET_SETTING } from "../../constants/ActionTypes";

const initialState = {
  fontSize: 16,
  lineHeight: 30,
  textAlign: "auto",
  theme: "light"
};

const SettingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SETTING: {
      state[action.setting] = action.value;
      return { ...state };
    }
    default:
      return state;
  }
};

export default SettingReducer;
