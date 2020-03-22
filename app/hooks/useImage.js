import { BACKEND_IMAGE_DIR } from "react-native-dotenv";

export default useImage = partial_link => {
  if (partial_link) return { uri: BACKEND_IMAGE_DIR + partial_link };

  // fallback image in assest
  return require("../../assets/splash.png");
};
