import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ArticleGroup from "../components/ArticleGroup";
import ArticleCard from "../components/ArticleCard";
import Presenter from "../components/Presenter";
import getDimensions from "../helpers/getDimensions";
import { getArticles } from "../actions/articles";
import CategoryHeader from "../components/CategoryHeader";

const { width } = getDimensions();

const filter = (category, articles) => {
  return articles.filter(a => a.category === category);
};
const group = articles => {
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

const renderCard = ({ item }) => <ArticleCard data={item} />;
const renderGroup = ({ item }) => <ArticleGroup data={item} />;

const cardKeyExtractor = item => item.id;
const groupKeyExtractor = item => item[0].id;

const extractCategories = articles => {
  let categories = {};

  articles.map(a => {
    categories[a.category] = true;
  });

  return Object.keys(categories);
};

function Headlines(props) {
  const [category, setCategory] = useState("All");
  const dispatch = useDispatch();

  const data = useSelector(state => state.articles);

  let treatment = () => filter(category, data.articles);
  let renderItem = renderCard;
  let keyExtractor = cardKeyExtractor;

  if (category === "All") {
    treatment = () => group(data.articles);
    renderItem = renderGroup;
    keyExtractor = groupKeyExtractor;
  }

  // POTENTIAL RE-RENDER PROBLEM HERE WITH categories & toDisplay
  //  ==> THINK IT OVER
  const categories = ["All", ...extractCategories(data.articles)];
  const toDisplay = treatment();
  //////////////////////////////////////////////////////
  const onRefresh = () => dispatch(getArticles());

  return (
    <View style={styles.container}>
      {data.error && (
        <View style={styles.errorContainer}>
          <Text>Error</Text>
          <Button title="Retry" onPress={onRefresh} />
        </View>
      )}
      <CategoryHeader
        categories={categories}
        setCategory={setCategory}
        selected={category}
      />
      <Presenter
        data={toDisplay}
        category={category}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        loading={data.loading}
        onRefresh={onRefresh}
      />
    </View>
  );
}

const styles = {
  container: { width: width, alignSelf: "center", backgroundColor: "white" },
  errorContainer: { backgroundColor: "#a94442" }
};

export default Headlines;
