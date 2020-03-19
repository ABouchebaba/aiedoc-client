import React from "react";
import { Image, TouchableOpacity } from "react-native";

export function HeaderLeft(props) {
  return (
    <TouchableOpacity
      style={style.left}
      onPress={() => {
        props.navigation.openDrawer();
      }}
    >
      <Image source={require("../../assets/hamburger.png")} />
    </TouchableOpacity>
  );
}

export function HeaderRight(props) {
  return (
    <TouchableOpacity
      style={style.right}
      onPress={() => {
        props.navigation.navigate("Search");
      }}
    >
      <Image source={require("../../assets/search.png")} />
    </TouchableOpacity>
  );
}

const style = {
  left: {
    paddingLeft: 20
  },
  right: {
    paddingRight: 20
  }
};
