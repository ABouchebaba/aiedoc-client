import React, { useEffect } from "react";
import {
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  ViewPagerAndroidComponent
} from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export function HeaderLeft(props) {
  // const navigation = useNavigation();
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
  // const navigation = useNavigation();
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
