import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Checkbox = props => {
  let containerStyle = { ...styles.container };
  let titleStyle = { ...styles.title };
  if (props.checked) {
    titleStyle["color"] = "white";
    containerStyle["backgroundColor"] = "#28a745";
  }

  return (
    <TouchableOpacity style={containerStyle} onPress={props.onPress}>
      <Text style={titleStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    width: "45%",
    maxWidth: 200,
    height: 50,
    justifyContent: "center",
    backgroundColor: "white",
    // borderColor: "#efefef",
    borderWidth: 1,
    borderRadius: 10,
    margin: 5
  },
  title: {
    alignSelf: "center",
    textAlign: "center"
  }
};

export default Checkbox;
