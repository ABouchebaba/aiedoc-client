import React from "react";
import { Text, Image, View } from "react-native";
import { useDispatch } from "react-redux";
import getImageSource from "../helpers/getImageSource";
import getDimensions from "../helpers/getDimensions";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

const { width, height } = getDimensions();

function ArticleScreen(props) {
  const dispatch = useDispatch();
  const settings = useSelector(state => state.settings);
  const article = props.route.params;
  const image = getImageSource(article.images);

  const contentStyle = {
    fontSize: settings.fontSize,
    lineHeight: settings.lineHeight,
    textAlign: settings.textAlign
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{article.title}</Text>
      <Image source={image} style={styles.image} />
      <Text style={contentStyle}>{article.content}</Text>
    </ScrollView>
  );
}

const styles = {
  container: {
    alignSelf: "center",
    alignItems: "center",
    width: "90%",
    marginBottom: 50
  },
  title: { fontSize: 18, fontWeight: "bold", textAlign: "center", padding: 5 },
  image: { width: 0.8 * width, height: 0.3 * height, margin: 10 },
  content: {}
};

export default ArticleScreen;
