import React from "react";
import { View, FlatList } from "react-native";
import ArticleCard from "../components/ArticleCard";
import { useSelector } from "react-redux";

const ReadLater = props => {
  const articles = Object.values(useSelector(state => state.bookmarks));

  const keyExtractor = item => item.id;
  const renderItem = ({ item }) => (
    <ArticleCard key={item.id} data={item} deletebtn />
  );

  return (
    <View>
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
  list: { marginBottom: 25 }
};

export default ReadLater;
