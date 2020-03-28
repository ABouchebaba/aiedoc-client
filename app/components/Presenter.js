import React, { useState, useEffect } from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import getDimensions from "../helpers/getDimensions";
import { useSelector, useDispatch } from "react-redux";
import { setToLoad } from "../actions/toLoad";

const { width } = getDimensions();

function Presenter(props) {
  const dispatch = useDispatch();
  const toLoad = useSelector(state => state.toload);
  if (!toLoad[props.category]) {
    dispatch(setToLoad(props.category, 5));
  }

  const loadMore = () =>
    dispatch(
      setToLoad(
        props.category,
        Math.min(toLoad[props.category] + 5, props.data.length)
      )
    );
  const footer = () => {
    if (props.data.length > 0)
      return (
        <View style={styles.loadMoreBtn}>
          <TouchableOpacity onPress={loadMore}>
            <Text style={styles.loadMoreText}>Load More</Text>
          </TouchableOpacity>
        </View>
      );
    return null;
  };

  return (
    <View style={styles.container}>
      <FlatList
        // minHeight is necessary for refresh loop to show properly
        style={styles.list}
        data={props.data.slice(0, toLoad[props.category])} // KHEMEM CHWIYA F HEDI => RE-RENDER PROBLEM
        keyExtractor={props.keyExtractor}
        renderItem={props.renderItem}
        refreshing={props.loading}
        onRefresh={props.onRefresh}
        initialNumToRender={5}
        // ListHeaderComponent={}
        ListFooterComponent={
          props.data.length > toLoad[props.category] && footer
        }
      />
    </View>
  );
}

const styles = {
  container: { width: width, alignSelf: "center", backgroundColor: "white" },
  list: { marginBottom: 75, minHeight: 100 },
  loadMoreBtn: {
    width: 100,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#337ab7",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 20
  },
  loadMoreText: {
    color: "white",
    fontSize: 16
  }
};

export default Presenter;
