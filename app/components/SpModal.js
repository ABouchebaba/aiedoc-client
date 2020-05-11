import React from "react";
import { Entypo } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Image, Modal, StyleSheet, Text, View } from "react-native";

export const SpModal = ({ showModal, sp, onClose }) => {
  const male = require("../../assets/maleIntervention.png");
  const female = require("../../assets/femalePin.png");

  const pin = sp.sex === "male" ? male : female;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Image source={pin} style={styles.pin} />
          <Text style={styles.primaryText}>
            {sp.lastname} {sp.firstname}
          </Text>
          <Text style={styles.primaryText}>{sp.jobTitle}</Text>
          <Text style={styles.secondaryText}>Contact du préstataire</Text>
          <Text style={styles.secondaryText}>Veuillez patienter ...</Text>
          <Entypo
            name="cross"
            color="white"
            size={40}
            style={styles.cancel}
            onPress={() => {
              onClose();
            }}
          />
        </View>
        <BlurView tint="light" intensity={50} style={styles.notBlurred} />
      </View>
    </Modal>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    zIndex: 2,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#4EC7E6",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 200,
  },
  primaryText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  secondaryText: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
  },
  notBlurred: { ...StyleSheet.absoluteFill },
  pin: { height: 80, width: 80 },
  cancel: {
    borderRadius: 20,
    backgroundColor: "#d61f2c",
    marginTop: 30,
  },
};
