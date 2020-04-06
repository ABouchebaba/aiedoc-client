import React, { useState } from "react";
import { View, Text } from "react-native";
import Presenter from "../components/Presenter";
import ArticleCard from "../components/ArticleCard";
import { getArticles } from "../Store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@react-navigation/native";
import { preferedArticles } from "../Store/selectors";

function ForYou(props) {
  const dispatch = useDispatch();
  const [toLoad, setToLoad] = useState(10);
  const theme = useTheme();

  const { data, loading, error } = useSelector(preferedArticles);

  const renderItem = ({ item }) => <ArticleCard data={item} bookmarkBtn />;

  const onRefresh = () => dispatch(getArticles());
  const keyExtractor = (item) => item.id;
  const loadMore = () => setToLoad(toLoad + 5);

  return (
    <View>
      {data.length === 0 && (
        <Text style={[styles.emptyText, { color: theme.colors.text }]}>
          Check the preferences tab to customize the content
        </Text>
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
  emptyText: { margin: 20, alignSelf: "center", textAlign: "center" },
};

export default ForYou;
