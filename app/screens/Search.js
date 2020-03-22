import React from "react";
import { Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ArticleCard from "../components/ArticleCard";

function SearchScreen(props) {
  const search = useSelector(state => state.search);

  // use list articles instead of flatlist
  return (
    <View>
      <FlatList
        style={{ marginBottom: 25 }}
        data={search.results}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => <ArticleCard key={item.id} data={item} />}
        refreshing={search.loading}
      />
    </View>
  );
}

export default SearchScreen;
