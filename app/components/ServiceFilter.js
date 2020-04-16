import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Animated, { Easing } from "react-native-reanimated";

export const ServiceFilter = ({ style }) => {
  const [open, setopen] = useState(false);
  const [height, setheight] = useState(new Animated.Value(0));

  const openFilters = () => {
    Animated.timing(height, {
      toValue: 300,
      duration: 300,
      easing: Easing.sin,
    }).start();
    setopen(true);
  };

  const closeFilters = () => {
    Animated.timing(height, {
      toValue: 0,
      duration: 300,
      easing: Easing.quad,
    }).start();
    setopen(false);
  };

  const toggleFilters = () => {
    if (open) closeFilters();
    else openFilters();
  };

  return (
    <View style={style}>
      <TouchableOpacity style={styles.filterToggle} onPress={toggleFilters}>
        <Text style={styles.toggleText}>Filtres</Text>
      </TouchableOpacity>

      <Animated.View style={[styles.content, { height }]}>
        <Text>Filter here</Text>
      </Animated.View>
    </View>
  );
};

const styles = {
  filterToggle: {
    padding: 15,
    backgroundColor: "white",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderColor: "#c6c6c6",
    borderWidth: 1,
  },
  toggleText: {
    width: "100%",
    alignSelf: "center",
    textAlign: "center",
    color: "#8edbef",
    fontSize: 24,
  },
  content: {
    width: "100%",
    backgroundColor: "white",
  },
};
