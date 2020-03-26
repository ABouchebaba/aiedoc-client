import { combineReducers } from "redux";
import ArticleReducer from "./ArticleReducer";
import SearchReducer from "./SearchReducer";
import CategoryReducer from "./CategoryReducer";
import TopicReducer from "./TopicReducer";

rootReducer = combineReducers({
  articles: ArticleReducer,
  search: SearchReducer,
  topics: TopicReducer,
  categories: CategoryReducer
});

export default rootReducer;
