import React from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { getDimensions } from "../helpers";

const { width, height } = getDimensions();

function Presenter(props) {
  const footer = () => {
    const loadMore = () => props.loadMore(props.data.length);
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
        data={props.data.slice(0, props.toLoad)} // KHEMEM CHWIYA F HEDI => RE-RENDER PROBLEM
        keyExtractor={props.keyExtractor}
        renderItem={props.renderItem}
        refreshing={props.loading}
        onRefresh={props.onRefresh}
        initialNumToRender={5}
        // ListHeaderComponent={}
        ListFooterComponent={props.data.length > props.toLoad && footer}
      />
    </View>
  );
}

const styles = {
  container: {
    width: width,
    height: height,
    alignSelf: "center"
  },
  list: { marginBottom: 75, minHeight: 100 },
  loadMoreBtn: {
    width: 100,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#337ab7",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 100
  },
  loadMoreText: {
    color: "white",
    fontSize: 16
  }
};

export default Presenter;
