import React from "react";
import {
  Text,
  TouchableWithoutFeedback,
  Image,
  View,
  TouchableOpacity
} from "react-native";
import getImageSource from "../helpers/getImageSource";
import getDimensions from "../helpers/getDimensions";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { height, width } = getDimensions();

function ArticleCard(props) {
  const navigation = useNavigation();
  const image = getImageSource(props.data.images);
  const cardStyle =
    props.data.lang === "Arabic" ? styles.cardRTL() : styles.cardLTR();

  const pressed = () => navigation.navigate("Article", props.data);
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
        <TouchableOpacity style={styles.deletebtn} onPress={unbookmark}>
          <Ionicons name="md-trash" size={20} color="white" />
        </TouchableOpacity>
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
  cardRTL: function() {
    return {
      ...this.card,
      flexDirection: "row-reverse"
    };
  },
  cardLTR: function() {
    return {
      ...this.card,
      flexDirection: "row"
    };
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
    width: 0.1 * width,
    height: 0.05 * height,
    borderRadius: 0.05 * width
  }
};
export default ArticleCard;
