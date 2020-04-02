import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export function HeaderLeft(props) {
  const theme = useTheme();
  const onPress = () => props.navigation.openDrawer();
  return (
    <TouchableOpacity style={style.left} onPress={onPress}>
      {/* <Image source={require("../../assets/hamburger.png")} /> */}
      <Ionicons name="md-menu" size={30} color={theme.colors.text} />
    </TouchableOpacity>
  );
}

export function HeaderRight(props) {
  const theme = useTheme();
  const onPress = () => props.navigation.navigate("Search");
  return (
    <TouchableOpacity style={style.right} onPress={onPress}>
      {/* <Image source={require("../../assets/search.png")} /> */}
      <Ionicons name="md-search" size={30} color={theme.colors.text} />
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
