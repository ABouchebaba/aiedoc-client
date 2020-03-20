import React, { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import ArticleCard from "./ArticleCard";
import ArticleGroup from "./ArticleGroup";
import useDimensions from "../hooks/useDimensions";

const { width } = useDimensions();

function ListArticles(props) {
  const Element = props.grouped || false ? ArticleGroup : ArticleCard;

  return (
    <View style={styles.container}>
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
const styles = {
  container: { width: width, alignSelf: "center" }
};
export default ListArticles;
