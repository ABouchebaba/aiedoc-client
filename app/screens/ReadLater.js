import React, { useState, useEffect } from "react";
import { Text, Button, View, FlatList } from "react-native";
import { getItem, removeItemFrom } from "../hooks/handleStorage";
import ArticleCard from "../components/ArticleCard";
import { useFocusEffect } from "@react-navigation/native";

const ReadLater = props => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      getItem("bookmarked")
        .then(data => {
          setarticles(Object.values(data));
          setloading(false);
        })
        .catch(e => {
          console.log("Error (readlater):::" + e);
        });
    }, [])
  );

  const keyExtractor = item => item.id;
  const renderItem = ({ item }) => (
    <ArticleCard key={item.id} data={item} unbookmark={unbookmark} deletebtn />
  );
  const unbookmark = id => {
    console.log("unbookmark" + id);
    removeItemFrom("bookmarked", id)
      .then(data => setarticles(Object.values(data)))
      .catch(e => console.log("Error {unbookmark}::: " + e));
  };
  return (
    <View>
      <FlatList
        style={{ marginBottom: 25 }}
        data={articles}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        refreshing={loading}
      />
    </View>
  );
};

export default ReadLater;
