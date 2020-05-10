import { BACKEND_URL } from "react-native-dotenv";
import axios from "axios";

export const getReadySps = async () => {
  // console.log("sp " + BACKEND_URL);
  return axios.get(`${BACKEND_URL}/api/serviceProviders/available`);
};
