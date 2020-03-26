import React from "react";
import { Text, TouchableWithoutFeedback, Image, View } from "react-native";
import getImageSource from "../helpers/getImageSource";
import getDimensions from "../helpers/getDimensions";
import { Ionicons } from "@expo/vector-icons";

const { height } = getDimensions();

function ArticleCard(props) {
  const image = getImageSource(props.data.images);
  const cardStyle =
    props.data.lang === "Arabic" ? styles.cardRTL : styles.cardLTR;

  const pressed = () => {
    alert(props.data.title);
  };

  const unbookmark = () => props.unbookmark(props.data.id);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={pressed}>
        <View style={cardStyle}>
          <Image source={image} style={styles.image} />
          <Text style={styles.title}>{props.data.title}</Text>
        </View>
      </TouchableWithoutFeedback>
      {props.deletebtn && (
        <View style={styles.deletebtn}>
          <TouchableWithoutFeedback onPress={unbookmark}>
            <Ionicons name="md-trash" size={20} color="white" />
          </TouchableWithoutFeedback>
        </View>
      )}
    </View>
  );
}
const styles = {
  container: { position: "relative" },
  card: {
    width: "90%",
    height: 0.15 * height,
    backgroundColor: "white",
    margin: 5,
    alignSelf: "center"
  },
  cardRTL: {
    ...styles.card,
    flexDirection: "row-reverse"
  },
  cardLTR: {
    ...styles.card,
    flexDirection: "row"
  },
  image: {
    height: "100%",
    width: "35%"
  },
  title: {
    width: "65%",
    padding: 10,
    fontSize: 13,
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
