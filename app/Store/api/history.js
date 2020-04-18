import { BACKEND_URL } from "react-native-dotenv";
import axios from "axios";

export const commands = async (id) => {
  return axios.get(`${BACKEND_URL}/api/commands/${id}`);
};

export const interventions = async (id) => {
    return axios.get(`${BACKEND_URL}/api/clients/${id}/interventions/`);
  };
