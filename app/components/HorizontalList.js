import React, { useState } from "react";
import { View, FlatList, Dimensions } from "react-native";
import { useTheme } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

function HorizontalList(props) {
  const [index, setindex] = useState(0);
  const theme = useTheme();

  const onScrollFinished = e => {
    let contentOffset = e.nativeEvent.contentOffset;
    let viewSize = e.nativeEvent.layoutMeasurement;
    let pageNum = Math.floor((contentOffset.x + 1) / viewSize.width);
    setindex(pageNum);
  };

  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        {props.data.map((e, i) => {
          let style = { ...styles.notSelected };
          if (i === index) {
            style = { ...styles.selected };
            style["backgroundColor"] = theme.colors.text;
          }
          return <View style={style} key={i} />;
        })}
      </View>
    );
  };

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={props.data}
        keyExtractor={props.keyExtractor}
        renderItem={props.renderItem}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={1000}
        style={styles.container}
        onMomentumScrollEnd={onScrollFinished}
      />
      {renderPagination()}
    </View>
  );
}

const styles = {
  listContainer: {
    marginBottom: 10
  },
  container: {
    width: "100%",
    maxHeight: 0.4 * height,
    alignSelf: "center",
    marginVertical: 10,
    borderColor: "grey",
    borderRadius: 10
  },
  paginationContainer: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center"
  },
  selected: {
    marginHorizontal: 5,
    width: 30,
    height: 5,
    borderRadius: 10,
    backgroundColor: "black"
  },
  notSelected: {
    marginHorizontal: 5,
    width: 15,
    height: 5,
    borderRadius: 5,
    backgroundColor: "grey"
  }
};

export default HorizontalList;
