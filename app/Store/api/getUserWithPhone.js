import { BACKEND_URL } from "react-native-dotenv";
import axios from "axios";

export const getUserWithPhone = async (phoneNumber) => {
  return axios.post(`${BACKEND_URL}/api/clients/verifyPhone`, {
    phone: phoneNumber,
  });
};
