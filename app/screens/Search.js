import React from "react";
import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ArticleCard from "../components/ArticleCard";

function SearchScreen(props) {
  const search = useSelector(state => state.search);

  const keyExtractor = item => item.id;
  const renderItem = ({ item }) => <ArticleCard key={item.id} data={item} />;
  return (
    <View>
      <FlatList
        style={styles.list}
        data={search.results}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        refreshing={search.loading}
      />
    </View>
  );
}

const styles = {
  list: { marginBottom: 25 }
};

export default SearchScreen;
