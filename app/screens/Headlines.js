import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getArticles } from "../actions/articles";
import ListArticles from "../components/ListArticles";

const groupArticles = articles => {
  let topics = {};
  articles.map(article => {
    if (topics[article.group_nb]) {
      topics[article.group_nb] = [...topics[article.group_nb], article];
    } else {
      topics[article.group_nb] = [article];
    }
  });

  return Object.values(topics)
    .filter(a => a.length > 1)
    .sort((a, b) => a.length < b.length);
};

function Headlines(props) {
  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles);
  const topics = groupArticles(articles.articles);
  // console.log(topics);

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  return (
    <View style={style.content}>
      {articles.error ? (
        <Text>Error</Text>
      ) : (
        <ListArticles
          data={topics}
          isLoading={articles.loading}
          onRefresh={() => dispatch(getArticles())}
          grouped
        />
      )}
    </View>
  );
}

const style = {
  content: {}
};

export default Headlines;
