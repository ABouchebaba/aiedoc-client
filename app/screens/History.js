import { Entypo } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BackImage, Interventions } from "../components";
import { useDispatch, useSelector } from "react-redux";

// const initialLayout = { width: Dimensions.get('window').width };

const History = (props) => {

  const data = useSelector((state) => state.history);

  return (
    <BackImage source={require("../../assets/bg/bgHome.png")}>
      <View style={styles.header}>
        <TouchableOpacity onPress={props.navigation.openDrawer}>
          <Entypo name="menu" size={60} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.mainView}>
        <View style={styles.head}>
          <Text style={styles.text}>MES PRESTATIONS ({data.interventions.length}) </Text>
        </View>
        <Interventions data={data} />
      </View>
    </BackImage>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "contain",
  },
  header: {
    height: "15%",
    width: "100%",
    justifyContent: "center",
    paddingLeft: 30,
  },
  mainView: {
    height: "85%",
    width: "100%",
  },
  head: {
    backgroundColor: "white",
    height: 50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#11A0C1",
  },
});

export default History;
