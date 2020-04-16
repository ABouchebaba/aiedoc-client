import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export const SexFilter = ({ style, setFilter, selected }) => {
  return (
    <View style={style}>
      <TouchableOpacity
        style={selected["male"] ? styles.selectedBtn : styles.notSelectedBtn}
        onPress={() => setFilter("sex", "male")}
      >
        <Text>Homme</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={selected["female"] ? styles.selectedBtn : styles.notSelectedBtn}
        onPress={() => setFilter("sex", "female")}
      >
        <Text>Femme</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  selectedBtn: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: "green",
  },
  notSelectedBtn: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#efefef",
  },
};
