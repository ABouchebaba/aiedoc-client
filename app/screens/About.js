import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, AppState } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Socket } from "../helpers";
import { useFocusEffect } from "@react-navigation/native";

const About = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [facture, setfacture] = useState({ services: [], total_price: 0 });
  const [spreview, setspreview] = useState({ comment: "nice", rating: 4 });
  const socket = Socket.getInstance();

  if (!socket.isInitialized()) {
    console.log("about init ");
    socket.init();
  }

  const int_id = "5ea6c6374448270016285bb7";

  const init_events = () => {
    socket.on("goWait", (intervention) => {
      alert("going to wait screen");
    });

    socket.on("goFacture", (intervention) => {
      alert("going to facture");
      setfacture({
        ...facture,
        services: ["Injection", "Massage"],
        total_price: 5000,
      });
    });

    socket.on("goReview", () => {
      alert("going to review");
    });

    socket.on("goHome", () => {
      alert("Intervention finished successfully, going home ...");
    });
  };

  const refuse = () => {
    init_events();
    socket.emit("refuse", int_id);
  };
  const accept = () => {
    init_events();
    socket.emit("accept", int_id);
  };
  const finish = () => {
    socket.emit("finish", int_id);
  };

  const validate = () => {
    socket.emit("validate", { int_id, ...facture });
  };

  const review = () => {
    socket.emit("spReview", { int_id, ...spreview });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={refuse} style={styles.action}>
        <Text>Refuse intervention</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={accept} style={styles.action}>
        <Text>Accept intervention</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={finish} style={styles.action}>
        <Text>Finish intervention</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={validate} style={styles.action}>
        <Text>Validate intervention</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={review} style={styles.action}>
        <Text>Review intervention</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  action: {
    padding: 10,
    margin: 10,
    backgroundColor: "yellow",
  },
};

export default About;
