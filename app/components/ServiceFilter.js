import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Animated, { Easing } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";

const timing = (value, toValue, duration = 300) => {
  return Animated.timing(value, {
    toValue,
    duration,
    easing: Easing.linear,
  });
};

export const ServiceFilter = ({ style }) => {
  const { services, loading, error } = useSelector((state) => state.services);
  const [open, setopen] = useState(false);
  const [height, setheight] = useState(new Animated.Value(0));
  const [opacity, setopacity] = useState(new Animated.Value(0));

  const openFilters = () => {
    timing(height, 250).start();
    timing(opacity, 1).start();
    // timing(height, 250).start();
    setopen(true);
  };

  const closeFilters = () => {
    timing(height, 0).start();
    timing(opacity, 0).start();
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
        <Animated.View style={{ opacity }}>
          {services.map((s) => (
            <Animated.Text key={s._id}>{s.type}</Animated.Text>
          ))}
        </Animated.View>
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
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
};
