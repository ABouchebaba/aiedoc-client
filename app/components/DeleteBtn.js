import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import getDimensions from "../helpers/getDimensions";

const { height, width } = getDimensions();

const DeleteBtn = props => {
  return (
    <TouchableOpacity style={styles.deletebtn} onPress={props.onPress}>
      <Ionicons name="md-trash" size={20} color="white" />
    </TouchableOpacity>
  );
};

const styles = {
  deletebtn: {
    position: "absolute",
    backgroundColor: "#d9534f",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    right: 10,
    width: 0.1 * width,
    height: 0.05 * height,
    borderRadius: 0.05 * width
  }
};

export default React.memo(DeleteBtn);
