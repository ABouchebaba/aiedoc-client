import React, { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../actions/articles";

function dumbScreen(props) {
  const dispatch = useDispatch();
  const articles = useSelector(store => store.articles);

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  return (
    <View>
      {articles.loading ? (
        <Text>Loading</Text>
      ) : articles.error ? (
        <Text>Error</Text>
      ) : (
        articles.articles.map((a, i) => <Text key={i}>{a.title}</Text>)
      )}
    </View>
  );
}

export default dumbScreen;
