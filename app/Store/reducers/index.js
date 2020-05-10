import { combineReducers } from "redux";
import InitReducer from "./InitReducer";
import UserReducer from "./UserReducer";
import SpsReducer from "./SpsReducer";
import ServiceReducer from "./ServiceReducer";
import StoreReducer from "./StoreReducer";
import HistoryReducer from "./HistoryReducer";
import CartReducer from "./CartReducer";
import SpFilterReducer from "./SpFilterReducer";
import CurrentReducer from "./CurrentReducer";

const rootReducer = combineReducers({
  init: InitReducer,
  user: UserReducer,
  sps: SpsReducer,
  services: ServiceReducer,
  store: StoreReducer,
  interventions: InterventionsReducer,
  commands: CommandsReducer,
  spFilter: SpFilterReducer,
  current: CurrentReducer,
  history: HistoryReducer,
  cart: CartReducer,
});

export default rootReducer;
