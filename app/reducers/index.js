import { combineReducers } from "redux";
import ArticleReducer from "./ArticleReducer";
import SearchReducer from "./SearchReducer";
import CategoryReducer from "./CategoryReducer";
import TopicReducer from "./TopicReducer";
import BookmarkReducer from "./BookmarkReducer";
import ToLoadReducer from "./ToLoadReducer";
import SourceReducer from "./SourceReducer";
import PreferenceReducer from "./PreferenceReducer";

rootReducer = combineReducers({
  articles: ArticleReducer,
  search: SearchReducer,
  topics: TopicReducer,
  categories: CategoryReducer,
  bookmarks: BookmarkReducer,
  toload: ToLoadReducer,
  sources: SourceReducer,
  preferences: PreferenceReducer
});

export default rootReducer;
