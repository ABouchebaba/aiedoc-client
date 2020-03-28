import React from "react";
import {
  Text,
  TouchableWithoutFeedback,
  Image,
  View,
  TouchableOpacity
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import getImageSource from "../helpers/getImageSource";
import getDimensions from "../helpers/getDimensions";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { addBookmark, removeBookmark } from "../actions/bookmark";

const { height, width } = getDimensions();

function ArticleCard(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const image = getImageSource(props.data.images);
  const cardStyle =
    props.data.lang === "Arabic" ? styles.cardRTL() : styles.cardLTR();

  const bookmarked = useSelector(state => state.bookmarks[props.data.id]);
  const bookmarkStyle = bookmarked
    ? styles.bookmarked()
    : styles.notBookmarked();

  const pressed = () => navigation.navigate("Article", props.data);
  const unbookmark = () => props.unbookmark(props.data.id);
  const bookmark = () => {
    if (bookmarked) return dispatch(removeBookmark(props.data.id));
    dispatch(addBookmark(props.data));
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={pressed}>
        <View style={cardStyle}>
          <Image source={image} style={styles.image} />
          <Text style={styles.title}>{props.data.title}</Text>
        </View>
      </TouchableWithoutFeedback>
      {/* <View style={bookmarkStyle}>
        <TouchableWithoutFeedback onPress={bookmark}>
          <Ionicons name="md-bookmark" size={30} color="white" />
        </TouchableWithoutFeedback>
      </View> */}
      {props.deletebtn && (
        <TouchableOpacity style={styles.deletebtn} onPress={unbookmark}>
          <Ionicons name="md-trash" size={20} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = {
  container: { position: "relative", borderWidth: 1, margin: 5 },
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
    width: "35%",
    borderRadius: 5
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
  },
  bookmark: {
    width: 40,
    height: 40,
    borderRadius: 10,
    position: "absolute",
    top: 5,
    right: 0,
    alignItems: "center",
    justifyContent: "center"
    // paddingLeft: 10
  },
  bookmarked: function() {
    return {
      ...this.bookmark,
      backgroundColor: "#28a745"
    };
  },
  notBookmarked: function() {
    return {
      ...this.bookmark,
      backgroundColor: "#007bff"
    };
  }
};
export default ArticleCard;
