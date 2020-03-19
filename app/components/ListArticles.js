import React, { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import ArticleCard from "./ArticleCard";
import ArticleGroupCard from "./ArticleGroupCard";
import useDimensions from "../hooks/useDimensions";

function ListArticles(props) {
  const Element = props.grouped || false ? ArticleGroupCard : ArticleCard;
  const { width } = useDimensions();

  return (
    <View style={{ width: 0.8 * width, alignSelf: "center" }}>
      <FlatList
        style={{ marginBottom: 25 }}
        data={props.data}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => <Element data={item} />}
        refreshing={props.isLoading}
        onRefresh={props.onRefresh}

        // ListHeaderComponent={() => <Text>Header</Text>}
        // ListFooterComponent={() => <Text>Footer</Text>}
      />
    </View>
  );
}

export default ListArticles;
