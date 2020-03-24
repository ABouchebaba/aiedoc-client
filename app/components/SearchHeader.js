import React, { useState } from "react";
import { TextInput, View } from "react-native";
import search from "../actions/search";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import getDimensions from "../herlpers/getDimensions";

const { width } = getDimensions();

function SearchHeader(props) {
  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles);
  const oldQuery = useSelector(state => state.search.query);
  const [initialQuery, setInitialQuery] = useState(oldQuery);

  const textChange = e => {
    // const query = e.nativeEvent.text;
    setInitialQuery(e);
    dispatch(search(articles.articles, e));
  };

  const submit = e => {
    const query = e.nativeEvent.text;
    setInitialQuery(query);
    dispatch(search(articles.articles, query));
  };

  console.log(width);
  return (
    <View style={styles.container}>
      <Ionicons style={styles.icon} name="md-search" size={25} color="black" />
      <TextInput
        style={styles.input}
        editable
        value={initialQuery}
        maxLength={width / 20}
        autoFocus
        placeholder="Type to search                "
        placeholderTextColor="#aaa"
        onChangeText={textChange}
      />
    </View>
  );
}
const styles = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#efefef",
    borderRadius: 10
  },
  input: {
    fontSize: 15,
    paddingRight: 10
  },
  icon: {
    padding: 10
  }
};
export default SearchHeader;
