import React from "react";
import { Text, Image, View } from "react-native";
import { useDispatch } from "react-redux";
import { getImageSource, getDimensions } from "../helpers";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { useTheme } from "@react-navigation/native";
import ArticleCard from "../components/ArticleCard";

const { width, height } = getDimensions();

function ArticleScreen(props) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const settings = useSelector(state => state.settings);
  const articles = useSelector(state => state.articles.articles);
  const article = props.route.params;
  const image = getImageSource(article.images);

  /// Getting related articles as :
  /// articles from same group and
  /// articles from same category
  let sameGroup = [];
  let sameCategory = [];

  articles.map(a => {
    if (a.group_nb === article.group_nb && a.id !== article.id)
      sameGroup = [...sameGroup, a];
    else if (a.category === article.category && a.id !== article.id)
      sameCategory = [...sameCategory, a];
  });

  const relatedArticles = [...sameGroup, ...sameCategory.slice(0, 3)];

  const contentStyle = {
    fontSize: settings.fontSize,
    lineHeight: settings.lineHeight,
    textAlign: settings.textAlign,
    color: theme.colors.text,
    marginHorizontal: 10
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.title, { color: theme.colors.text }]}>
        {article.title}
      </Text>
      <View style={styles.meta}>
        <Text style={[{ color: theme.colors.text }]}>{article.source}</Text>
        <Text style={[{ color: theme.colors.text }]}>{article.date}</Text>
      </View>
      <Image source={image} style={styles.image} />
      <Text style={contentStyle}>{article.content}</Text>
      {article.author && (
        <Text style={contentStyle}>Author : {article.author.trim()}</Text>
      )}
      <Text style={[styles.relatedArticlesTitle, { color: theme.colors.text }]}>
        Related Articles :
      </Text>
      {relatedArticles.map(a => (
        <ArticleCard key={a.id} data={a} />
      ))}
    </ScrollView>
  );
}

const styles = {
  container: {
    alignSelf: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 50
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 5,
    marginVertical: 10
  },
  image: { width: "95%", height: 0.35 * height, margin: 10 },
  relatedArticlesTitle: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 10
  },
  meta: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  sourceDate: {
    color: "#efefef"
  }
};

export default ArticleScreen;
