import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ArticleGroup from "../components/ArticleGroup";
import ArticleCard from "../components/ArticleCard";
import Presenter from "../components/Presenter";
import getDimensions from "../helpers/getDimensions";
import { getArticles } from "../actions/articles";
import CategoryHeader from "../components/CategoryHeader";

const { width } = getDimensions();

const renderCard = ({ item }) => <ArticleCard data={item} />;
const renderGroup = ({ item }) => <ArticleGroup data={item} />;

const cardKeyExtractor = item => item.id;
const groupKeyExtractor = item => item[0].id;

function Test(props) {
  const [category, setCategory] = useState("All");
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.articles);
  const topics = useSelector(state => state.topics);
  const categories = useSelector(state => state.categories);

  let toDisplay = topics.topics;
  let renderItem = renderGroup;
  let keyExtractor = groupKeyExtractor;
  let ready = !loading && !topics.loading && !categories.loading;

  if (category !== "All") {
    toDisplay = categories.categories[category];
    renderItem = renderCard;
    keyExtractor = cardKeyExtractor;
  }

  const onRefresh = () => dispatch(getArticles());

  return (
    <View style={style.container}>
      {error && (
        <View>
          <Text>Error</Text>
          <Button title="Retry" onPress={onRefresh} />
        </View>
      )}
      <CategoryHeader
        categories={["All", ...Object.keys(categories.categories)]}
        setCategory={setCategory}
        selected={category}
      />
      <Presenter
        data={toDisplay}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        toLoad={10}
        loading={!ready}
        onRefresh={onRefresh}
      />
    </View>
  );
}

const style = {
  container: { width: width, alignSelf: "center", backgroundColor: "white" }
};

export default Test;
