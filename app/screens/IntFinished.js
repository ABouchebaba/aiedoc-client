import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Socket } from "../helpers";
import {
  setCurrentIntervention,
  resetCurrentIntervention,
} from "../Store/actions";
import { Octicons } from "@expo/vector-icons";
import { LoadingModal, BackImage } from "../components";

const IntFinished = (props) => {
  const dispatch = useDispatch();
  const { intervention, loading } = useSelector((state) => state.current);

  const socket = Socket.getInstance();

  if (!socket.isInitialized()) {
    console.log("finish resync");
    dispatch(resetCurrentIntervention(intervention._id));
  }

  socket.on("validated", (intervention) =>
    dispatch(setCurrentIntervention(intervention))
  );

  return (
    <BackImage source={require("../../assets/bg/bg1.png")}>
      <View style={styles.container}>
        <LoadingModal showModal={loading} text="synchronisation" />
        <Octicons name="unverified" size={100} color="white" />
        <Text style={styles.primaryText}>
          Veuillez vérifier le montant de l'intervention sur le téléphone du
          préstataire
        </Text>
      </View>
    </BackImage>
  );
};

const styles = {
  container: {
    height: 300,
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 150,
  },
  primaryText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
  },
  action: {
    padding: 10,
    margin: 10,
    backgroundColor: "yellow",
  },
};

export default IntFinished;
