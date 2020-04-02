import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import { useTheme } from "@react-navigation/native";

function CategoryHeader(props) {
  const [ref, setref] = useState(null);
  const theme = useTheme();

  const onItemPress = item => {
    const index = props.categories.indexOf(item);
    ref.scrollToIndex({ index, viewPosition: 0.5 });
    props.setCategory(item);
  };

  const renderItem = ({ item }) => {
    const style = item === props.selected ? styles.selectedItem() : styles.item;
    const textStyle = {
      fontSize: 16,
      color: theme.colors.text
    };
    const onPress = () => onItemPress(item);
    return (
      <View style={style}>
        <TouchableOpacity onPress={onPress}>
          <Text style={textStyle}>{item}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const keyExtractor = (item, index) => `${index}`;
  let containerStyle = { ...styles.container };
  containerStyle["backgroundColor"] = theme.colors.background;
  return (
    <View style={containerStyle}>
      <FlatList
        ref={setref}
        horizontal
        data={props.categories}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 40,
    backgroundColor: "white"
    // borderColor: "grey",
    // borderBottomWidth: 1
  },
  text: { fontSize: 16 },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  selectedItem: function() {
    return {
      ...this.item,
      borderBottomWidth: 2,
      borderBottomColor: "#007bff"
    };
  }
});

export default CategoryHeader;
