import React, { useState } from "react";
import { View } from "react-native";
import Carousel from "react-native-snap-carousel";
import useDimensions from "../hooks/useDimensions";
import Item from "./ArticleGroupItem";
import Pagination from "./ArticleGroupPagination";

const { width } = useDimensions();

function ArticleGroupCard(props) {
  const [ref, setRef] = useState(null);
  const [index, setIndex] = useState(0);
  return (
    <View style={{ position: "relative" }}>
      <Carousel
        ref={ref => setRef(ref)}
        data={props.data}
        renderItem={Item}
        sliderWidth={width}
        itemWidth={0.7 * width}
        firstItem={0}
        containerCustomStyle={styles.sliderContainer}
        onSnapToItem={index => setIndex(index)}
      />
      <Pagination
        carouselRef={ref}
        tappableDots={ref ? true : false}
        nbDots={props.data.length}
        activeDot={index}
      />
    </View>
  );
}

const styles = {
  sliderContainer: {
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
    width: "100%"
  },

  dotElement: {
    width: 50,
    height: 10,
    borderRadius: "50%",
    color: "black"
  }
};

export default ArticleGroupCard;
