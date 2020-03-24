import { combineReducers } from "redux";
import ArticleReducer from "./ArticleReducer";
import SearchReducer from "./SearchReducer";

rootReducer = combineReducers({
  articles: ArticleReducer,
  search: SearchReducer
});

export default rootReducer;
