import React, { useEffect } from "react";
import { View, Text } from "react-native";

export const SpInfo = ({ sp }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>
        name : {sp.firstname} {sp.lastname}
      </Text>
      <Text>sex : {sp.sex} </Text>
      <Text>email : {sp.email} </Text>
    </View>
  );
};

const styles = {
  container: {
    alignItems: "flex-start",
    justifyContent: "space-around",
    // height: 200,
    // flex: 1,
    // padding: 10,
    // backgroundColor: "red",
  },
};
