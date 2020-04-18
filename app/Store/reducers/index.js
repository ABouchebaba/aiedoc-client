import { combineReducers } from "redux";
import InitReducer from "./InitReducer";
import UserReducer from "./UserReducer";
import SpsReducer from "./SpsReducer";
import ServiceReducer from "./ServiceReducer";
import StoreReducer from "./StoreReducer";
import InterventionsReducer from "./InterventionsReducer";
import CommandsReducer from "./CommandsReducer";

const rootReducer = combineReducers({
  init: InitReducer,
  user: UserReducer,
  sps: SpsReducer,
  services: ServiceReducer,
  store: StoreReducer,
  interventions: InterventionsReducer,
  commands: CommandsReducer
});

export default rootReducer;
