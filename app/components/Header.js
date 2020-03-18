import React, { useEffect } from "react";
import { Text, View, Button, Image, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

function Header(props) {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Image source={require("../../assets/hamburger.png")} />

      <Text>Open News</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SearchArticle");
        }}
      >
        <Image source={require("../../assets/search.png")} />
      </TouchableOpacity>
    </View>
  );
}

const style = {
  container: {
    backgroundColor: "white",
    elevation: 2,
    padding: 15,
    flex: 2,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between"
  }
};
export default Header;
