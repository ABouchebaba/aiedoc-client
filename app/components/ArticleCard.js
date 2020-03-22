import React, { useEffect, useState } from "react";
import { Text, TouchableWithoutFeedback, Image, View } from "react-native";
import useImage from "../hooks/useImage";
import useDimensions from "../hooks/useDimensions";

const { width, height } = useDimensions();

function ArticleCard(props) {
  const image = useImage(props.data.images);
  const direction = props.data.lang === "Arabic" ? "row-reverse" : "row";

  const pressed = () => {
    alert(props.data.title);
  };
  return (
    <TouchableWithoutFeedback onPress={pressed}>
      <View style={{ ...styles.container, flexDirection: direction }}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{props.data.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = {
  container: {
    width: "90%",
    height: 0.11 * height,
    backgroundColor: "white",
    margin: 5,
    alignSelf: "center"
  },
  image: {
    height: "100%",
    width: "30%"
  },
  title: {
    width: "65%",
    padding: 10,
    fontSize: 14,
    textAlign: "center",
    alignSelf: "center"
  }
};
export default ArticleCard;
