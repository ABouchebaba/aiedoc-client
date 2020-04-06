import React, { useState } from "react";
import { Text, View, Button, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Presenter from "../components/Presenter";
import { getArticles } from "../Store/actions";
import { groupArticles, filterArticles } from "../Store/selectors";
import ArticleCard from "../components/ArticleCard";
import ArticleGroup from "../components/ArticleGroup";

const { width } = Dimensions.get("window");

const getUtils = (category) => {
  if (category === "All") {
    return {
      selector: groupArticles,
      renderItem: ({ item }) => <ArticleGroup data={item} />,
      keyExtractor: (item) => item[0].id,
    };
  }
  return {
    selector: filterArticles(category),
    renderItem: ({ item }) => <ArticleCard data={item} bookmarkBtn />,
    keyExtractor: (item) => item.id,
  };
};

function Headlines(props) {
  const dispatch = useDispatch();
  const [toLoad, setToLoad] = useState(10);
  const { category } = props.route.params;
  const { renderItem, selector, keyExtractor } = getUtils(category);
  const { data, loading, error } = useSelector(selector);

  const onRefresh = () => dispatch(getArticles());
  const loadMore = () => setToLoad(toLoad + 5);

  return (
    <View style={styles.container}>
      {error && (
        <View style={styles.errorContainer}>
          <Text>Error</Text>
          <Button title="Retry" onPress={onRefresh} />
        </View>
      )}
      <Presenter
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        toLoad={toLoad}
        loadMore={loadMore}
        loading={loading}
        onRefresh={onRefresh}
      />
    </View>
  );
}

const styles = {
  container: { width: width, alignSelf: "center" },
  errorContainer: { backgroundColor: "#a94442" },
};

export default React.memo(Headlines);
