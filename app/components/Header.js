import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

export const Header = (props) => {
  return (
    <View style={styles.image}>
      <View style={styles.headerActions}>
        <TouchableOpacity onPress={props.navigation.openDrawer}>
          <Entypo name="menu" size={70} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.fitToMarkersToMap}>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/boutique.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Hi")}>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/emergency.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderBottomEndRadius: 20,
  },
  headerActions: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  tinyLogo: {
    width: 70,
    height: 70,
  },
});
