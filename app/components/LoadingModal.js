import React from "react";
import { Entypo } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";

export const LoadingModal = ({ showModal, text }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={() => {}}
    >
      <View style={styles.container}>
        <ActivityIndicator size={70} />
        <Text style={styles.primaryText}>{text}</Text>
        <BlurView tint="dark" intensity={50} style={styles.notBlurred} />
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

  primaryText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  notBlurred: { ...StyleSheet.absoluteFill },
};
