import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BackImage, MarketHeader, ProductCard } from "../components";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { getCategories, getProducts } from "../Store/actions";
import axios from "axios";

const { width, height } = Dimensions.get("window");

const StoreHome = (props) => {
  const dispatch = useDispatch();
  const { products, categories } = useSelector((state) => state.store);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
    // console.log(categories);
  }, []);

  return (
    <BackImage source={require("../../assets/bg/bgMarket.png")}>
      <View style={styles.header}>
        <MarketHeader navigation={props.navigation} />
      </View>
      <View style={styles.mainView}>
        <View style={styles.search}>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Préservatif DUREX"
              style={styles.TextInput}
            />
            <View style={styles.icon}>
              <FontAwesome name="search" size={25} color="black" />
            </View>
          </View>
          <ScrollView
            horizontal={true}
            style={styles.scroll}
            contentContainerStyle={styles.scrollContain}
          >
            {categories.map((x, i) => (
              <TouchableOpacity key={i} style={styles.filter}>
                <Text style={styles.filterText}>{x.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <ScrollView
          style={styles.list}
          // contentContainerStyle={styles.listStyle}
        >
          {products.map((product, i) => {
            // const category = categories[];
            return (
              <ProductCard
                key={i}
                navigation={props.navigation}
                product={product}
                category={""}
              />
            );
          })}
        </ScrollView>
      </View>
    </BackImage>
  );
};

export default StoreHome;

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
  },
  search: {
    height: 120,
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "blue",
  },
  list: {
    height: "80%",
    flex: 1,
    // justifyContent:'flex-start',
    // alignItems:'center',
    marginHorizontal: 20,
    marginVertical: 10,
    // backgroundColor: "red",
  },
  inputView: {
    flexDirection: "row",
    height: 50,
  },
  TextInput: {
    backgroundColor: "#F2F2F2",
    flex: 1,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    paddingLeft: 10,
    fontSize: 20,
  },
  icon: {
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    padding: 10,
  },
  scrollContain: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 4,
  },
  filter: {
    borderRadius: 50,
    height: 45,
    width: 100,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginRight: 10,
  },
  filterText: {
    color: "#4EC7E6",
    fontSize: 20,
  },
});
