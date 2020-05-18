import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Socket } from "../helpers";
import { AntDesign } from "@expo/vector-icons";
import { LoadingModal, BackImage } from "../components";
import { syncSocket } from "../Store/api";
import { BACKEND_URL } from "react-native-dotenv";

const IntWait = (props) => {
  const dispatch = useDispatch();
  const { intervention, loading } = useSelector((state) => state.current);

  const socket = Socket.getInstance();

  useEffect(() => {
    if (!socket.isInitialized()) {
      // open app after closing at this screen
      socket.init(BACKEND_URL, syncSocket(dispatch, intervention._id));
    }
  }, []);

  const cancel = () => {
    socket.emit("cancel", intervention._id);
  };

  return (
    <BackImage source={require("../../assets/bg/bg1.png")}>
      <View style={styles.container}>
        <LoadingModal showModal={loading} text="synchronisation" />

        <AntDesign
          style={styles.icon}
          name="checkcircleo"
          size={100}
          color="white"
        />
        <Text style={styles.primaryText}>
          Le prestataire a accepté votre demande.
        </Text>
        <Text style={styles.secondaryText}>
          Il/Elle vous contactera sous peu.
        </Text>
        <Text style={styles.text}>Veuillez patienter ...</Text>

        <TouchableOpacity onPress={cancel} style={styles.action}>
          <Text style={styles.text}>Annuler</Text>
        </TouchableOpacity>
      </View>
    </BackImage>
  );
};

const styles = {
  container: {
    height: "80%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-around",
    // marginTop: 100,
  },
  primaryText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
  },
  secondaryText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  icon: {
    marginTop: 20,
    marginBottom: 30,
  },
  action: {
    borderRadius: 10,
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 10,
    backgroundColor: "red",
  },
};

export default IntWait;
