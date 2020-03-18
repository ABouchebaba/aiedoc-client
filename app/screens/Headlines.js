import React, { useEffect } from "react";
import { Text, Button, View } from "react-native";
import MainLayout from "../Layouts/MainLayout";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { getArticles } from "../actions/articles";

function Headlines(props) {
  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles);

  useEffect(() => {
    // console.log(props);
    dispatch(getArticles());
  }, []);

  return (
    <View style={style.content}>
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

const style = {
  content: {}
};

export default Headlines;
