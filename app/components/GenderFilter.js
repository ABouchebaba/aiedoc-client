import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setGenderFilter } from "../Store/actions";

export const GenderFilter = ({ style }) => {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.spFilter.gender);

  const maleStyle =
    current === "male" ? styles.selectedBtn : styles.notSelectedBtn;
  const femaleStyle =
    current === "female" ? styles.selectedBtn : styles.notSelectedBtn;

  const setFilter = (gender) => {
    if (current === false) return dispatch(setGenderFilter(gender));
    if (current !== gender) return dispatch(setGenderFilter(gender));
    return dispatch(setGenderFilter(false));
  };

  return (
    <View style={style}>
      <TouchableOpacity
        style={[maleStyle, styles.leftBtn]}
        onPress={() => setFilter("male")}
      >
        <Image
          style={styles.pin}
          source={require("../../assets/malePin.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[femaleStyle, styles.rightBtn]}
        onPress={() => setFilter("female")}
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
