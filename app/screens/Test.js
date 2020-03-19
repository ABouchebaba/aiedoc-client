import React, { useEffect, useState } from "react";
import { Text, View, Dimensions, Image } from "react-native";
import Carousel from "react-native-snap-carousel";

const data = [
  {
    title: "Beautiful and dramatic Antelope Canyon",
    caption: "Lorem ipsum dolor sit amet et nuncat mergitur",
    url: "https://i.imgur.com/UYiroysl.jpg"
  },
  {
    title: "Earlier this morning, NYC",
    caption: "Lorem ipsum dolor sit amet",
    url: "https://i.imgur.com/UPrs1EWl.jpg"
  },
  {
    title: "White Pocket Sunset",
    caption: "Lorem ipsum dolor sit amet et nuncat ",
    url: "https://i.imgur.com/MABUbpDl.jpg"
  },
  {
    title: "Acrocorinth, Greece",
    caption: "Lorem ipsum dolor sit amet et nuncat mergitur",
    url: "https://i.imgur.com/KZsmUi2l.jpg"
  }
];

const useDimensions = () => {
  const { height, width } = Dimensions.get("window");
  const dims = {
    height,
    width
  };
  return dims;
};

const { width, height } = useDimensions();

function Item({ item, index }) {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.url }} style={styles.itemImage} />
      <View style={styles.itemTitle}>
        <Text
          style={{
            color: "white",
            backgroundColor: "rgba(192,192,192,0.3);"
          }}
        >
          {item.title}
        </Text>
      </View>
    </View>
  );
}

function Test(props) {
  const [ref, setRef] = useState(null);
  return (
    <View>
      <Carousel
        ref={ref => setRef(ref)}
        data={data}
        renderItem={Item}
        sliderWidth={width}
        itemWidth={0.7 * width}
        firstItem={1}
        containerCustomStyle={{
          marginTop: 10,
          marginBottom: 10
        }}
      />
    </View>
  );
}

const styles = {
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
  }
};

export default Test;
