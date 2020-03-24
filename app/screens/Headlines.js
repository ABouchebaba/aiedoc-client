import React from "react";
import { Text, View, Button, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getArticles } from "../actions/articles";
import ArticleGroup from "../components/ArticleGroup";
import getDimensions from "../herlpers/getDimensions";

const { width } = getDimensions();

const groupArticles = articles => {
  let topics = [];
  articles.map(article => {
    if (topics[article.group_nb]) {
      topics[article.group_nb] = [...topics[article.group_nb], article];
    } else {
      topics[article.group_nb] = [article];
    }
  });

  let count = 0;
  return topics.filter(a => a.length > 1 && count++ < 20);
};

function Headlines(props) {
  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles);
  const topics = groupArticles(articles.articles);

  const onRefresh = () => dispatch(getArticles());
  const renderItem = ({ item }) => <ArticleGroup data={item} />;
  const keyExtractor = item => item[0].id;

  return (
    <View style={style.container}>
      {articles.error && (
        <View>
          <Text>Error</Text>
          <Button title="Retry" onPress={onRefresh} />
        </View>
      )}

      <FlatList
        // minHeight is necessary for refresh loop to show properly
        style={{ marginBottom: 25, minHeight: 100 }}
        data={topics}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        refreshing={articles.loading}
        onRefresh={onRefresh}
        initialNumToRender={3}
        // ListHeaderComponent={() => <Text>Header</Text>}
        // ListFooterComponent={() => <Text>Footer</Text>}
      />
    </View>
  );
}

const style = {
  container: { width: width, alignSelf: "center", backgroundColor: "white" }
};

export default Headlines;
