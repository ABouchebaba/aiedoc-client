import { Dimensions } from "react-native";

export default useDimensions = () => {
  const { height, width } = Dimensions.get("window");
  const dims = {
    height,
    width
  };
  return dims;
};
