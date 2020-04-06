import { combineReducers } from "redux";
import ArticleReducer from "./ArticleReducer";
import SearchReducer from "./SearchReducer";
import CategoryReducer from "./CategoryReducer";
import BookmarkReducer from "./BookmarkReducer";
import SourceReducer from "./SourceReducer";
import PreferenceReducer from "./PreferenceReducer";
import SettingReducer from "./SettingReducer";

rootReducer = combineReducers({
  articles: ArticleReducer,
  search: SearchReducer,
  categories: CategoryReducer,
  bookmarks: BookmarkReducer,
  sources: SourceReducer,
  preferences: PreferenceReducer,
  settings: SettingReducer,
});

export default rootReducer;
