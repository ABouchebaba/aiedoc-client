import React, { useState } from "react";
import { View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import useDimensions from "../hooks/useDimensions";
import Item from "./Item";

const { width } = useDimensions();

function ArticleGroup(props) {
  const [ref, setRef] = useState(null);
  const [index, setIndex] = useState(0);

  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <View style={{ position: "relative" }}>
      <Carousel
        ref={setRef}
        data={props.data}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={0.7 * width}
        firstItem={0}
        containerCustomStyle={styles.sliderContainer}
        inactiveSlideOpacity={0}
        onSnapToItem={setIndex}
      />
      <Pagination
        carouselRef={ref}
        tappableDots={Boolean(ref)}
        dotsLength={props.data.length}
        activeDotIndex={index}
        animatedDuration={50}
        dotStyle={styles.dotStyle}
        containerStyle={styles.containerStyle}
      />
    </View>
  );
}

const styles = {
  sliderContainer: {
    backgroundColor: "white",
    marginVertical: 10,
    alignSelf: "center",
    width: "100%"
  },
  dotStyle: {
    width: 30,
    height: 5,
    borderRadius: 50
  },
  containerStyle: {
    width: 0.7 * width,
    position: "absolute",
    bottom: -25,
    left: "15%"
  }
};

export default ArticleGroup;
