import { combineReducers } from "redux";
import InitReducer from "./InitReducer";
import UserReducer from "./UserReducer";

const rootReducer = combineReducers({
  init: InitReducer,
  user: UserReducer,
});

export default rootReducer;
