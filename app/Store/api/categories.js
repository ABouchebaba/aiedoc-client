import { BACKEND_URL } from "react-native-dotenv";

export const loadCategories = async () => {
  return fetch(`${BACKEND_URL}/api/categories`, {
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
};
