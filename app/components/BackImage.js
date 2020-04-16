import React from "react";
import { View, ImageBackground } from "react-native";

export const BackImage = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={props.source} style={styles.image}>
        {props.children}
      </ImageBackground>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
};
