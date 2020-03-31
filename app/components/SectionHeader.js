import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SectionHeader = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = {
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#efefef",
    marginVertical: 10
  },
  text: {
    fontSize: 18,
    fontWeight: "bold"
  }
};

export default SectionHeader;
