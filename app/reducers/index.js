import { combineReducers } from "redux";
import ArticleReducer from "./ArticleReducer";
import SearchReducer from "./SearchReducer";
import TopicsReducer from "./TopicsReducer";

rootReducer = combineReducers({
  articles: ArticleReducer,
  search: SearchReducer,
  topics: TopicsReducer
});

export default rootReducer;
