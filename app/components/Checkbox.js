import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const checkedIcon = <MaterialIcons name="check-box" color="green" size={20} />;
const uncheckedIcon = (
  <MaterialIcons name="check-box-outline-blank" size={20} />
);

export const Checkbox = (props) => {
  //   const container = props.selected ? styles.selected : styles.notSelected;
  const Icon = props.selected ? checkedIcon : uncheckedIcon;
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      {Icon}
      <Text> {props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    width: "40%",
    maxWidth: 150,
    padding: 10,
    margin: 10,
    flexDirection: "row",
  },
};
