import React from "react";
import { View, Text, FlatList } from "react-native";
import ArticleCard from "../components/ArticleCard";
import { useSelector } from "react-redux";
import { useTheme } from "@react-navigation/native";
import { getBookmarks } from "../Store/selectors";

const ReadLater = (props) => {
  const articles = useSelector(getBookmarks);
  const theme = useTheme();
  const keyExtractor = (item) => item.id;
  const renderItem = ({ item }) => <ArticleCard data={item} deletebtn />;

  return (
    <View>
      {articles.length === 0 && (
        <Text style={[styles.emptyText, { color: theme.colors.text }]}>
          Press the bookmark icon to add articles as favorites
        </Text>
      )}
      <FlatList
        style={styles.list}
        data={articles}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = {
  list: { marginBottom: 25 },
  emptyText: { margin: 20, alignSelf: "center", textAlign: "center" },
};

export default ReadLater;
