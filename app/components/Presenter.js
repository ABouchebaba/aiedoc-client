import React, { useState } from "react";
import { View, FlatList, Button } from "react-native";
import getDimensions from "../helpers/getDimensions";

const { width } = getDimensions();

function Presenter(props) {
  const [toload, setToload] = useState(10);

  const loadMore = () => setToload(Math.min(toload + 5, props.data.length));
  const footer = () => <Button title="Load More" onPress={loadMore} />;

  console.log("presenter list render");

  return (
    <View style={style.container}>
      <FlatList
        // minHeight is necessary for refresh loop to show properly
        style={style.list}
        data={props.data.slice(0, toload)} // KHEMEM CHWIYA F HEDI => RE-RENDER PROBLEM
        keyExtractor={props.keyExtractor}
        renderItem={props.renderItem}
        refreshing={props.loading}
        onRefresh={props.onRefresh}
        // initialNumToRender={3}
        // ListHeaderComponent={}
        ListFooterComponent={footer}
      />
    </View>
  );
}

const style = {
  container: { width: width, alignSelf: "center", backgroundColor: "white" },
  list: { marginBottom: 75, minHeight: 100 }
};

export default Presenter;
