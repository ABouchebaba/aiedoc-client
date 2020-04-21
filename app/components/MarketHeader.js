import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Entypo, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const MarketHeader = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.image}>
      <TouchableOpacity onPress={navigation.openDrawer}>
        <SimpleLineIcons
          name="menu"
          size={50}
          color="white"
          style={styles.logo}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert("Hi")}>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/logo_V2.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/cart.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "space-between",
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom:10,
    alignSelf: "center",
    width: "90%",
  },
  tinyLogo: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  logo: {
    width: 60,
    height: 60,
  },
});
