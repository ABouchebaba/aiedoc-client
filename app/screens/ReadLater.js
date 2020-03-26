import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { getItem, removeItemFrom } from "../helpers/handleStorage";
import ArticleCard from "../components/ArticleCard";
import { useFocusEffect } from "@react-navigation/native";
import { BOOKMARKED } from "../constants/StorageKeys";
import { removeBookmark } from "../actions/bookmark";
import { useSelector, useDispatch } from "react-redux";

const ReadLater = props => {
  const dispatch = useDispatch();
  const articles = Object.values(useSelector(state => state.bookmarks));

  const keyExtractor = item => item.id;
  const renderItem = ({ item }) => (
    <ArticleCard key={item.id} data={item} unbookmark={unbookmark} deletebtn />
  );
  const unbookmark = id => dispatch(removeBookmark(id));

  return (
    <View>
      <FlatList
        style={styles.list}
        data={articles}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        // refreshing={loading}
      />
    </View>
  );
};

const styles = {
  list: { marginBottom: 25 }
};

export default ReadLater;
