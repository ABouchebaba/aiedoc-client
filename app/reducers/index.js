import { combineReducers } from "redux";
import ArticleReducer from "./ArticleReducer";

rootReducer = combineReducers({ articles: ArticleReducer });

export default rootReducer;
