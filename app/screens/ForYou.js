import React from "react";
import { View, Text } from "react-native";
import Presenter from "../components/Presenter";
import ArticleCard from "../components/ArticleCard";
import { getArticles, setToLoad } from "../Store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@react-navigation/native";

// REFACTORING THIS MIGHT BE A GOOD IDEA
const filter = (articles, preferences) => {
  return articles.filter((a) => {
    if (Object.keys(preferences["languages"]).length > 0)
      if (!preferences["languages"][a["lang"]]) return false;
    if (Object.keys(preferences["sources"]).length > 0)
      if (!preferences["sources"][a["source"]]) return false;
    if (Object.keys(preferences["categories"]).length > 0)
      if (!preferences["categories"][a["category"]]) return false;
    return true;
  });
};

function ForYou(props) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const articles = useSelector((state) => state.articles);
  const preferences = useSelector((state) => state.preferences);
  const toLoad = useSelector((state) => state.toload);
  if (!toLoad["ForYou"]) {
    dispatch(setToLoad("ForYou", 10));
  }

  const toDisplay = filter(articles.articles, preferences);

  const renderItem = ({ item }) => <ArticleCard data={item} bookmarkBtn />;

  const onRefresh = () => dispatch(getArticles());
  const keyExtractor = (item) => item.id;
  const loadMore = (length) =>
    dispatch(setToLoad("ForYou", Math.min(toLoad["ForYou"] + 5, length)));

  return (
    <View>
      {toDisplay.length === 0 && (
        <Text style={[styles.emptyText, { color: theme.colors.text }]}>
          Check the preferences tab to customize the content
        </Text>
      )}
      <Presenter
        data={toDisplay}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        toLoad={toLoad["ForYou"]}
        loadMore={loadMore}
        loading={articles.loading}
        onRefresh={onRefresh}
      />
    </View>
  );
}

const styles = {
  emptyText: { margin: 20, alignSelf: "center", textAlign: "center" },
};

export default ForYou;
