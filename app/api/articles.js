import axios from "axios";
import { BACKEND_URL } from "react-native-dotenv";

export const loadArticles = () => {
  return axios.get(`${BACKEND_URL}/api/articles`);
};
