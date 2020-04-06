import React from "react";
import { View, Text } from "react-native";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is Home screen</Text>
    </View>
  );
};

const styles = {
  container: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default Home;
