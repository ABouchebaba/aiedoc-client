import React from "react";
import { Text, View, Image } from "react-native";
import useDimensions from "../hooks/useDimensions";
import { BACKEND_IMAGE_DIR } from "react-native-dotenv";

const { height } = useDimensions();

const getImage = image => {
  if (image) return { uri: BACKEND_IMAGE_DIR + image };

  // fallback image in assest
  return require("../../assets/splash.png");
};

function Item({ item }) {
  const image = getImage(item.images);
  return (
    <View style={styles.itemContainer}>
      <Image source={image} style={styles.itemImage} />
      <Text style={styles.itemTitleText}>{item.title}</Text>
    </View>
  );
}

const styles = {
  itemContainer: {
    alignItems: "center",
    position: "relative"
  },
  itemImage: {
    width: "100%",
    height: 0.35 * height,
    borderRadius: 10,
    margin: 10
  },
  itemTitleText: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    color: "white",
    backgroundColor: "rgba(150,150,150,0.5);",
    fontSize: 16,
    textAlign: "center"
  }
};

export default Item;
