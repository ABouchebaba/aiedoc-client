import React from "react";
import { Text, TouchableWithoutFeedback, Image, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import getImageSource from "../helpers/getImageSource";
import getDimensions from "../helpers/getDimensions";
import dateDifference from "../helpers/dateDifference";
import { useNavigation } from "@react-navigation/native";
import { addBookmark, removeBookmark } from "../actions/bookmark";
import Bookmark from "./Bookmark";
import DeleteBtn from "./DeleteBtn";

const { height } = getDimensions();

function ArticleCard(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const bookmarked = useSelector(state => state.bookmarks[props.data.id]);
  const image = getImageSource(props.data.images);
  const cardStyle = styles.card;

  // const hours = dateDifference(props.data.date);

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
          <View style={styles.text}>
            <Text style={styles.sourceAndDate}>{props.data.source}</Text>
            <Text style={styles.title}>{props.data.title}</Text>
            <Text style={styles.sourceAndDate}>{props.data.date}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>

      {props.bookmarkBtn && (
        <Bookmark onBookmark={bookmark} bookmarked={bookmarked} />
      )}
      {props.deletebtn && <DeleteBtn onPress={unbookmark} />}
    </View>
  );
}
const styles = {
  container: { position: "relative", margin: 5 },
  card: {
    width: "95%",
    minHeight: 0.18 * height,
    borderBottomWidth: 1,
    borderColor: "#efefef",
    margin: 5,
    alignSelf: "center",
    flexDirection: "row"
  },
  image: {
    height: "100%",
    width: "35%",
    borderRadius: 5
  },
  sourceAndDate: {
    alignSelf: "center",
    justifyContent: "center",
    padding: 3,
    borderRadius: 10,
    color: "grey",
    backgroundColor: "#efefef",
    fontSize: 12
  },
  text: {
    flexDirection: "column",
    justifyContent: "space-around",
    width: "65%"
  },
  title: {
    width: "100%",
    margin: 5,
    fontSize: 13,
    textAlign: "center"
  }
};
export default ArticleCard;
