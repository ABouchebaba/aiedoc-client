import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Bookmark = props => {
  const bookmarkStyle = props.bookmarked
    ? styles.bookmarked()
    : styles.notBookmarked();

  return (
    <View style={bookmarkStyle}>
      <TouchableWithoutFeedback onPress={props.onBookmark}>
        <Ionicons name="md-bookmark" size={25} color="white" />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = {
  bookmark: {
    width: 35,
    height: 35,
    borderRadius: 10,
    position: "absolute",
    top: 5,
    right: 10,
    alignItems: "center",
    justifyContent: "center"
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

export default React.memo(Bookmark);
