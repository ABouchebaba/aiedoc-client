import { FontAwesome, AntDesign } from "@expo/vector-icons";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { BackImage, MarketHeader, ProductCard } from "../components";
import { getCategories, getProducts } from "../Store/actions";

const { width, height } = Dimensions.get("window");

const StoreHome = (props) => {
  const dispatch = useDispatch();
  const { products, categories, loading } = useSelector((state) => state.store);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
    console.log(products.length);
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
              placeholder="Tensiomètre électronique"
              style={styles.TextInput}
            />
            <View style={styles.icon}>
              <FontAwesome name="search" size={25} color="black" />
            </View>
          </View>
          {loading ? (
            <ActivityIndicator size="large" color="white" />
          ) : (
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
            // <></>
          )}
        </View>
        {loading ? (
          <View style={styles.scrollContain}>
            <ActivityIndicator size="large" color="white" />
          </View>
        ) : (
          <ScrollView
            style={styles.list}
            contentContainerStyle={styles.listStyle}
          >
            {products.map((product, i) => {
              // console.log(product)
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
        )}
      </View>
      <TouchableOpacity style={styles.command}>
        <AntDesign name="CodeSandbox" size={30} color="#11A0C1" />
        <Text style={{fontSize:10, textAlign:'center', color:'#11A0C1', fontWeight:'bold'}}>Commandes</Text>
      </TouchableOpacity>
    </BackImage>
  );
};

export default StoreHome;

const styles = StyleSheet.create({
  header: {
    height: "15%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  mainView: {
    height: "86%",
    width: "100%",
    backgroundColor: "rgba(17, 160, 193, .7)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  search: {
    // height: 120,
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "blue",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
    // alignItems:'baseline'
  },
  list: {
    height: "80%",
    flex: 1,
    margin: 10,
    marginBottom: 10,
  },
  scroll: {
    height: 70,
  },
  listStyle: {
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "100%",
    flexDirection: "row",
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
    paddingLeft: 20,
    fontSize: 18,
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
    height: 35,
    width: 80,
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
    fontSize: 18,
  },
  command: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    position: "absolute",
    bottom: 10,
    right: 10,
    height: 80,
    backgroundColor: "#fff",
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
