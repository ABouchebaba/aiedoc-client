import React, { useState } from "react";
import { Text, TouchableWithoutFeedback, View, Image } from "react-native";
import ArticleModal from "./ArticleModal";
import useDimensions from "../hooks/useDimensions";
import useImage from "../hooks/useImage";

const { height } = useDimensions();

function Item(props) {
  const image = useImage(props.item.images);

  const pressed = () => {
    alert(props.item.title);
  };
  const bookmark = async () => {
    alert("bookmarked");
  };
  return (
    <TouchableWithoutFeedback
      onPress={pressed}
      onLongPress={bookmark}
      style={{ position: "relative" }}
    >
      <View style={styles.itemContainer}>
        <Image source={image} style={styles.itemImage} />
        <Text style={styles.itemTitleText}>{props.item.title}</Text>
        {/* <ArticleModal
          visible={modalVisible}
          closeModal={() => setModalVisible(false)}
        /> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = {
  itemContainer: {
    alignItems: "center"
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
  },
  bookmark: {
    position: "absolute",
    top: 10,
    left: 10
  }
};

export default Item;
