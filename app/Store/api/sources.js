import { BACKEND_URL } from "react-native-dotenv";

export const loadSources = async () => {
  return fetch(`${BACKEND_URL}/api/sources`, {
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
};
