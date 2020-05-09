import { Entypo } from "@expo/vector-icons";
import React, { useEffect } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  Button,
} from "react-native";
import { BACKEND_URL } from "react-native-dotenv";
import socketIOClient from "socket.io-client";
import { BackImage } from "../components";

const About = (props) => {
  useEffect(() => {
    // http://192.168.43.19:4002/
    const socket = socketIOClient(BACKEND_URL);
    socket.on("message", (data) => {
      alert(data);
    });
  }, []);

  return (
    <BackImage source={require("../../assets/bg/bgHome.png")}>
      <View style={styles.header}>
        <TouchableOpacity onPress={props.navigation.openDrawer}>
          <Entypo name="menu" size={60} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.mainView}>
        <Image source={require("../../assets/logo.png")} style={styles.image} />
        <Text style={styles.text}>{"Nous contacter".toUpperCase()}</Text>
        <View style={styles.contact}>
        {/* onPress={() => Linking.openURL("mailto:support@example.com")} */}
        <TouchableOpacity onPress={() => Linking.openURL("mailto:support@example.com")} style={styles.icon} >
          <Entypo name="mail" size={40} color="#11A0C1" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("tel:+213555077412")} style={styles.icon} >
          <Entypo name="phone" size={40} color="#11A0C1" />
        </TouchableOpacity>
        </View>
        <View
          style={{ borderBottomWidth: 3, borderColor: "white", width: "80%",paddingVertical:20 }}
        />
        <Text style={styles.text}>© 2020 AieDoc. Tous droits réservés</Text>
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
  contact: {
    paddingVertical:20,
    flexDirection: "row",
    width:'100%',
    alignItems:'center',
    justifyContent:'space-around'
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  mainView: {
    height: "85%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    alignSelf: "center",
    width: 200,
    resizeMode: "contain",
  },
  head: {
    backgroundColor: "white",
    height: 50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  icon:{
    borderRadius:50,
    backgroundColor:'white',
    width:60,
    height:60,
    alignItems:'center',
    justifyContent:'center'
  }
});

export default About;
