import React from "react";
import { Text, TouchableWithoutFeedback, View, Image } from "react-native";
import getDimensions from "../helpers/getDimensions";
import getImageSource from "../helpers/getImageSource";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { addBookmark, removeBookmark } from "../actions/bookmark";

const { height } = getDimensions();

function Item(props) {
  const dispatch = useDispatch();
  const image = getImageSource(props.item.images);
  const bookmarked = useSelector(state => state.bookmarks[props.item.id]);
  const bookmarkStyle = bookmarked
    ? styles.bookmarked()
    : styles.notBookmarked();

  const pressed = () => {
    alert(props.item.title);
  };
  const bookmark = () => {
    if (bookmarked) return dispatch(removeBookmark(props.item.id));
    dispatch(addBookmark(props.item));
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={pressed}>
        <View style={styles.itemContainer}>
          <Image source={image} style={styles.itemImage} />
          <Text style={styles.itemTitleText}>{props.item.title}</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={bookmarkStyle}>
        <TouchableWithoutFeedback onPress={bookmark}>
          <Ionicons name="md-bookmark" size={30} color="white" />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = {
  container: { position: "relative" },
  itemContainer: {
    alignItems: "center",
    position: "relative"
  },
  itemImage: {
    width: "100%",
    height: 0.3 * height,
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
  },
  bookmark: {
    width: 50,
    height: 40,
    borderRadius: 10,
    position: "absolute",
    top: 20,
    right: -10,
    justifyContent: "center",
    paddingLeft: 10
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

export default Item;
