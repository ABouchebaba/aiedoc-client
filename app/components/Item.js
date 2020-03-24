import React, { useState, useEffect } from "react";
import { Text, TouchableWithoutFeedback, View, Image } from "react-native";
import useDimensions from "../hooks/useDimensions";
import useImage from "../hooks/useImage";
import { addItemTo, removeItemFrom, getItem } from "../hooks/handleStorage";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";

const { height } = useDimensions();

function Item(props) {
  const image = useImage(props.item.images);
  const [bookmarked, setbookmarked] = useState(false);
  const color = bookmarked ? "#28a745" : "#007bff";

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      getItem("bookmarked")
        .then(data => setbookmarked(Boolean(data[props.item.id])))
        .catch(e => console.log("Error item:getBookmarks ::: " + e));
    }, [])
  );

  const pressed = () => {
    alert(props.item.title);
  };
  const bookmark = async () => {
    setbookmarked(!bookmarked);
    if (!bookmarked) await addItemTo(props.item, "bookmarked");
    else await removeItemFrom("bookmarked", props.item.id);
  };
  return (
    <View style={{ position: "relative" }}>
      <TouchableWithoutFeedback onPress={pressed}>
        <View style={styles.itemContainer}>
          <Image source={image} style={styles.itemImage} />
          <Text style={styles.itemTitleText}>{props.item.title}</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={{ ...styles.bookmark, backgroundColor: color }}>
        <TouchableWithoutFeedback onPress={bookmark}>
          <Ionicons name="md-bookmark" size={30} color="white" />
        </TouchableWithoutFeedback>
      </View>
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
    left: -10,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 10
  }
};

export default Item;
