import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Button,
} from "react-native";
import React from "react";
import { BackImage, MarketHeader, ProductCard } from "../components";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Gallery from 'react-native-image-gallery';

const { width, height } = Dimensions.get("window");

const ProductProfile = (props) => {
  // const product = props.product
  const product = {
    discount:0,
    _id: "5e8283076079920016fb9586",
    name: "Gél hydro",
    brand: "Venus",
    category: "Gel",
    price: 1000,
    options: [],
    rating: 3,
  };

  function addTocart(){

  }

  return (
    <BackImage source={require("../../assets/bg/bgMarket.png")}>
      <View style={styles.header}>
        <MarketHeader navigation={props.navigation} />
      </View>
      <View style={styles.mainView}>
        {/* <View style={styles.search}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.scrollContain}
          >
            {[...Array(10)].map((x, i) => (
              <View
                style={{
                  borderWidth:1,
                  borderRadius: 20,
                  padding: 1,
                  margin: 3,
                }}
                key={i}
              >
                <Image
                  source={require("../../assets/logo.png")}
                  style={styles.image}
                />
              </View>
            ))}
          </ScrollView>
        </View> */}
        <View style={styles.search}>
          <Gallery
          style={{ flex: 1}}
          images={[
            { source: require('../../assets/logo.png'), dimensions: { width: 300, height: 300 } },
            { source: require('../../assets/logo.png'), dimensions: { width: 300, height: 300 } },
            { source: require('../../assets/logo.png'), dimensions: { width: 300, height: 300 } },
          ]}
          initialNumToRender={2}
              // Turning this off will make it feel faster
              // and prevent the scroller to slow down
              // on fast swipes.
          sensitiveScroll={false}
        />
      </View>
        <Text style={styles.name}>Lorem ipsum</Text>
        <View style={styles.ratingView}>
          <View>
            <Text style={styles.brand}>Marque</Text>
            <View>
              <View style={styles.ratingView}>
                {[...Array(3)].map((x, i) => (
                  <Entypo
                    key={i}
                    name="star"
                    size={25}
                    color="#FFD700"
                  />
                ))} 
              </View>
              <Text>(22)</Text>
              <Button title={"aze"} onPress={addTocart} />
            </View>
          </View>
        </View>
      </View>
    </BackImage>
  );
};

export default ProductProfile;

const styles = StyleSheet.create({
  header: {
    height: "10%",
    width: "100%",
    justifyContent: "center",
  },
  mainView: {
    height: "90%",
    width: "100%",
    backgroundColor: "rgba(17, 160, 193, .7)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
  },
  scrollContain: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    // borderRightWidth: 4,
    // backgroundColor: "green",
  },
  search: {
    height: 200,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 140,
    margin: 5,
    height: 140,
    resizeMode: "contain",
  },
  name: {
    fontSize: 30,
    color: "white",
  },
  brand: {
    fontSize: 25,
    color: "white",
  },
  ratingView: {
    flexDirection: "row",
  },
});
