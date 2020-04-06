import { combineReducers } from "redux";
import InitReducer from "./InitReducer";

rootReducer = combineReducers({
  init: InitReducer,
});

export default rootReducer;
