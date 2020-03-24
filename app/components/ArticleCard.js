import React from "react";
import { Text, TouchableWithoutFeedback, Image, View } from "react-native";
import getImageSource from "../herlpers/getImageSource";
import getDimensions from "../herlpers/getDimensions";
import { Ionicons } from "@expo/vector-icons";

const { height } = getDimensions();

function ArticleCard(props) {
  const image = getImageSource(props.data.images);
  const direction = props.data.lang === "Arabic" ? "row-reverse" : "row";

  const pressed = () => {
    alert(props.data.title);
  };
  return (
    <View style={{ position: "relative" }}>
      <TouchableWithoutFeedback onPress={pressed}>
        <View style={{ ...styles.container, flexDirection: direction }}>
          <Image source={image} style={styles.image} />
          <Text style={styles.title}>{props.data.title}</Text>
        </View>
      </TouchableWithoutFeedback>
      {props.deletebtn && (
        <View style={styles.deletebtn}>
          <TouchableWithoutFeedback
            onPress={() => props.unbookmark(props.data.id)}
          >
            <Ionicons name="md-trash" size={20} color="white" />
          </TouchableWithoutFeedback>
        </View>
      )}
    </View>
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
  },
  deletebtn: {
    position: "absolute",
    backgroundColor: "#d9534f",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    right: 10,
    width: 30,
    height: 30,
    borderRadius: 20
  }
};
export default ArticleCard;
