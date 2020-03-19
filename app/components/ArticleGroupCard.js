import React, { useEffect, useState } from "react";
import { Text, View, Dimensions, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import useDimensions from "../hooks/useDimensions";

const { width, height } = useDimensions();

const getImage = image => {
  const homePath = "http://t-algerie.com/veille/src/Public/Images/";
  if (image) {
    return { uri: homePath + image };
  }
  return require("../../assets/splash.png");
};

function Item({ item, index }) {
  const image = getImage(item.images);
  return (
    <View style={styles.itemContainer}>
      <Image source={image} style={styles.itemImage} />
      <View style={styles.itemTitle}>
        <Text style={styles.itemTitleText}>{item.title}</Text>
      </View>
    </View>
  );
}

function ArticleGroupCard(props) {
  const [ref, setRef] = useState(null);
  return (
    <View>
      {/* <Text>Group: {props.data[0].title}</Text> */}
      <Carousel
        ref={ref => setRef(ref)}
        data={props.data}
        renderItem={Item}
        sliderWidth={0.8 * width}
        itemWidth={0.7 * width}
        firstItem={1}
        containerCustomStyle={styles.sliderContainer}
      />
    </View>
  );
}

const styles = {
  sliderContainer: {
    marginTop: 10,
    marginBottom: 10
  },
  itemContainer: {
    alignItems: "center",
    position: "relative"
  },
  itemImage: {
    width: 0.8 * width,
    height: 0.25 * height
  },
  itemTitle: {
    position: "absolute",
    bottom: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  itemTitleText: {
    color: "white",
    backgroundColor: "rgba(192,192,192,0.3);"
  }
};

export default ArticleGroupCard;
