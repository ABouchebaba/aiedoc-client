import React from "react";
import useDimensions from "../hooks/useDimensions";
import { Pagination } from "react-native-snap-carousel";

const { width } = useDimensions();

function ArticleGroupPagination(props) {
  return (
    <Pagination
      carouselRef={props.carouselRef}
      tappableDots={props.tappableDots}
      dotsLength={props.nbDots}
      activeDotIndex={props.activeDot}
      animatedDuration={50}
      dotStyle={styles.dotStyle}
      containerStyle={styles.containerStyle}
    />
  );
}

const styles = {
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

export default ArticleGroupPagination;
