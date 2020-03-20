import React, { useState } from "react";
import { Text, TextInput } from "react-native";
import search from "../actions/search";
import { useDispatch, useSelector } from "react-redux";

function SearchHeader(props) {
  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles);
  const oldQuery = useSelector(state => state.search.query);
  const [initialQuery, setInitialQuery] = useState(oldQuery);

  const submit = e => {
    const query = e.nativeEvent.text;
    dispatch(search(articles.articles, query));
  };

  return (
    <TextInput
      editable
      value={initialQuery}
      maxLength={50}
      autoFocus
      placeholder="Type to search"
      onSubmitEditing={submit}
      onChangeText={setInitialQuery}
    />
  );
}

export default SearchHeader;
