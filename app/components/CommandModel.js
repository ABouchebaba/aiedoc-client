import { FontAwesome, Entypo } from "@expo/vector-icons";
import React from "react";
import { Image, Modal, StyleSheet, Text, View, Animated } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export const CommandModel = (props) => {
  // const intervention = props.intervention
  console.log(props.products);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.showModel}
      onRequestClose={props.close}
    >
      <View style={styles.modelCard}>
        <View style={styles.modelInfo}>
          <Text style={styles.modelText}>Liste des produits</Text>
          <ScrollView
            style={styles.list}
            contentContainerStyle={styles.listStyle}
          >
            {props.products.map((prd, index) => (
              <View key={index} style={styles.prd}>
                <Text style={styles.prdText} >Nom: {prd.product_name}</Text>
                <Text style={styles.prdText} >Option: {prd.option}</Text>
                <Text style={styles.prdText} >Quantité: {prd.qty}</Text>
              </View>
            ))}
            {props.products.map((prd, index) => (
              <View key={index} style={styles.prd}>
                <Text style={styles.prdText} >{prd.product_name}</Text>
                <Text style={styles.prdText} >Option: {prd.option}</Text>
                <Text style={styles.prdText} >Quantité: {prd.qty}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <Entypo
          name="cross"
          size={60}
          color="white"
          style={styles.icon}
          onPress={props.close}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modelCard: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba( 250, 250, 250, 0.5 )",
  },
  modelInfo: {
    backgroundColor: "#4EC7E6",
    width: "80%",
    height: "50%",
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderRadius: 20,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  modelText: {
    alignSelf: "center",
    color: "white",
    fontSize: 20,
  },
  icon: {
    backgroundColor: "#4EC7E6",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  list: {
    flex: 1,
    height:100,
    width: "100%",
    paddingVertical: 30,
  },
  listStyle: {
    height: 250,
    // backgroundColor: "blue",
    // alignItems: "center",
    justifyContent: "flex-start",
  },
  prd:{
    paddingLeft:10,
    paddingBottom:10,
    borderBottomWidth:3
  },
  prdText:{
    // alignSelf: "center",
    color: "white",
    fontSize: 15,
  }
});
