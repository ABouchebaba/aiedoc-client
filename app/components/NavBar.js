import React from "react";
import { Text, View, Button } from "react-native";
import { useDispatch } from "react-redux";

function NavBar(props) {
  return (
    <View style={style}>
      <Text>NavBar</Text>
    </View>
  );
}

const style = {
  backgroundColor: "white",
  flex: 2,
  alignItems: "center",
  justifyContent: "center",
  elevation: 2
};
export default NavBar;
