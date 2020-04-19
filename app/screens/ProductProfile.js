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
import Gallery from "react-native-image-gallery";

// import {
//   SelectMultipleButton,
//   SelectMultipleGroupButton,
// } from "react-native-selectmultiple-button";

const { width, height } = Dimensions.get("window");

const ProductProfile = (props) => {
  // const product = props.product

  const data = [
    { id: 1, label: "Money" },
    { id: 2, label: "Credit card" },
    { id: 3, label: "Debit card" },
    { id: 4, label: "Online payment" },
    { id: 5, label: "Bitcoin" },
  ];

  const product = {
    discount: 0,
    _id: "5e8283076079920016fb9586",
    name: "Gél hydro",
    brand: "Venus",
    category: "Gel",
    price: 1000,
    options: [
      {
        qty: 100,
        name: "Red 45",
      },
      {
        qty: 100,
        name: "Blue 45",
      },
    ],
    rating: 3,
  };

  function addTocart() {
    console.log(options.length);
  }

  return (
    <BackImage source={require("../../assets/bg/bgMarket.png")}>
      <View style={styles.header}>
        <MarketHeader navigation={props.navigation} />
      </View>
      <View style={styles.mainView}>
        <View style={styles.search}>
          <Gallery
            style={{ flex: 1, paddingVertical: 10, backgroundColor: "white" }}
            images={[
              {
                source: require("../../assets/logo.png"),
                dimensions: { width: 300, height: 300 },
              },
              {
                source: require("../../assets/logo.png"),
                dimensions: { width: 300, height: 300 },
              },
              {
                source: require("../../assets/logo.png"),
                dimensions: { width: 300, height: 300 },
              },
            ]}
            initialNumToRender={2}
            // Turning this off will make it feel faster
            // and prevent the scroller to slow down
            // on fast swipes.
            sensitiveScroll={false}
          />
        </View>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.brand}>{product.brand.toUpperCase()}</Text>
        <View style={styles.ratingView}>
          {[...Array(5)].map((x, i) =>
            product.rating > i ? (
              <Entypo key={i} name="star" size={20} color="#D6C41F" />
            ) : (
              <Entypo key={i} name="star" size={20} color="white" />
            )
          )}
          <Text style={{ color: "#D6C41F", fontWeight: "bold" }}> (22)</Text>
        </View>
        <View style={styles.buy}>
          <Text style={styles.name}>{product.price} DA</Text>
          <TouchableOpacity style={styles.buyButton} onPress={addTocart}>
            <Text style={styles.buyText}>Acheter</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.brand}>Variation</Text>
          <Text>Taille</Text>
          <View style={styles.ratingView}>
            {/* <SelectMultipleGroupButton
              multiple={false}
              // defaultSelectedIndexes={defaultSelectedIndex_group_gender}
              containerViewStyle={{ flexDirection: "column", width: 100 }}
              highLightStyle={{
                borderColor: "gray",
                backgroundColor: "transparent",
                textColor: "gray",
                borderTintColor: "green",
                backgroundTintColor: "green",
                textTintColor: "white",
              }}
              buttonViewStyle={{ width: 40, height: 40, borderRadius: 20 }}
              singleTap={(valueTap) => {
                alert(valueTap);
              }}
              group={data}
            /> */}
          </View>
        </View>
        <Text style={styles.brand}>Desciption</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis
          laoreet lorem vitae rhoncus. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum
          convallis vestibulum. Praesent fringilla semper vestibulum. Proin eget
          tincidunt lorem. Phasellus fermentum placerat urna.
        </Text>
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
  },
  search: {
    height: 200,
    width: width,
    marginVertical: 10,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 140,
    margin: 5,
    height: 140,
    resizeMode: "contain",
  },
  name: {
    fontSize: 25,
    color: "white",
  },
  brand: {
    fontSize: 20,
    color: "white",
  },
  ratingView: {
    flexDirection: "row",
    alignItems: "center",
  },
  buy: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    //backgroundColor:'red',
    justifyContent: "space-between",
  },
  buyButton: {
    backgroundColor: "#D61F2C",
    width: "65%",
    borderRadius: 30,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buyText: {
    color: "white",
    fontSize: 30,
  },
  description: {
    color: "white",
    fontSize: 15,
    textAlign: "justify",
  },
});
