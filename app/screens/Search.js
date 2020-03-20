import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

function SearchScreen(props) {
  const search = useSelector(state => state.search);

  console.log(search);

  return (
    <View>
      {search.loading ? (
        <Text>Loading</Text>
      ) : (
        search.results.map(a => <Text key={a.id}> {a.title}</Text>)
      )}
    </View>
  );
}

export default SearchScreen;
