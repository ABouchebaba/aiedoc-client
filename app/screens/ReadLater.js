import React from "react";
import { View, Text, FlatList } from "react-native";
import ArticleCard from "../components/ArticleCard";
import { useSelector } from "react-redux";
import { useTheme } from "@react-navigation/native";

const ReadLater = (props) => {
  const articles = Object.values(useSelector((state) => state.bookmarks));
  const theme = useTheme();
  const keyExtractor = (item) => item.id;
  const renderItem = ({ item }) => (
    <ArticleCard key={item.id} data={item} deletebtn />
  );

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
