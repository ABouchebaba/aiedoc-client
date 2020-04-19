import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

export const SexFilter = ({ style, setFilter, selected }) => {
  const bothStyle =
    Object.keys(selected).length % 2 === 0
      ? styles.selectedBtn
      : styles.notSelectedBtn;
  const maleStyle = selected["male"]
    ? styles.selectedBtn
    : styles.notSelectedBtn;
  const femaleStyle = selected["female"]
    ? styles.selectedBtn
    : styles.notSelectedBtn;

  return (
    <View style={style}>
      <TouchableOpacity
        style={[maleStyle, styles.leftBtn]}
        onPress={() => setFilter("sex", "male")}
      >
        <Image
          style={styles.pin}
          source={require("../../assets/malePin.png")}
        />
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={[bothStyle, styles.middleBtn]}
        onPress={() => setFilter("sex", false)}
      >
        <Text>Both</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={[femaleStyle, styles.rightBtn]}
        onPress={() => setFilter("sex", "female")}
      >
        <Image
          style={styles.pin}
          source={require("../../assets/femalePin.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  leftBtn: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  rightBtn: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  middleBtn: {
    // borderRightWidth: 1,
    // borderLeftWidth: 1,
    // borderColor: "grey",
  },
  selectedBtn: {
    padding: 10,
    backgroundColor: "#5cb85c",
  },
  notSelectedBtn: {
    padding: 10,
    backgroundColor: "white",
  },
  pin: {
    width: 45,
    height: 45,
  },
};
