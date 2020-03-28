import React from "react";
import { Image, TouchableOpacity } from "react-native";

export function HeaderLeft(props) {
  const onPress = () => props.navigation.openDrawer();
  return (
    <TouchableOpacity style={style.left} onPress={onPress}>
      <Image source={require("../../assets/hamburger.png")} />
    </TouchableOpacity>
  );
}

export function HeaderRight(props) {
  const onPress = () => props.navigation.navigate("Search");
  return (
    <TouchableOpacity style={style.right} onPress={onPress}>
      <Image source={require("../../assets/search.png")} />
    </TouchableOpacity>
  );
}

export function renderMainHeader(props) {
  return {
    headerRight: () => <HeaderRight {...props} />,
    headerLeft: () => <HeaderLeft {...props} />,
    headerTitle: "Open News",
    headerTitleAlign: "center",
    headerTitleStyle: { fontWeight: "bold" }
  };
}

const style = {
  left: {
    paddingLeft: 20
  },
  right: {
    paddingRight: 20
  }
};
