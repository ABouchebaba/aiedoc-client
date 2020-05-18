import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  BackImage,
  GenderFilter,
  Header,
  LoadingModal,
  Map,
  Markers,
  ServiceFilter,
  SpModal,
} from "../components";
import { Socket } from "../helpers";
import {
  getAvailableSps,
  getLocation,
  getServices,
  setCurrentSp,
} from "../Store/actions";
import { available_sps } from "../Store/selectors";
import { initSocket, syncSocket } from "../Store/api";
import { BACKEND_URL } from "react-native-dotenv";

const Home = (props) => {
  const dispatch = useDispatch();
  const sps = useSelector(available_sps);
  const { location, user } = useSelector((state) => state.user);
  const { intervention, sp, loading } = useSelector((state) => state.current);

  const modalShown = intervention.state === "pending";

  // Socket is a singleton class, only one socket is needed at a time
  const socket = Socket.getInstance();

  useEffect(() => {
    dispatch(getLocation());
    dispatch(getAvailableSps());
    dispatch(getServices());
  }, []);

  useEffect(() => {
    if (intervention && !socket.isInitialized()) {
      socket.init(BACKEND_URL, syncSocket(dispatch, intervention._id));
    }
  }, []);

  const onValidate = () => {
    const int = {
      client_id: user._id,
      sp_id: sp._id,
      services: ["Injection"],
    };

    socket.init(BACKEND_URL, initSocket(dispatch, int));
  };

  const cancel = () => {
    socket.emit("cancel", intervention._id);
  };

  const selectSp = (sp) => dispatch(setCurrentSp(sp));

  return (
    <BackImage source={require("../../assets/bg/bgHome.png")}>
      <LoadingModal showModal={loading} text="synchronisation" />
      <Header />
      <SpModal showModal={modalShown} onClose={cancel} sp={sp} />
      <GenderFilter style={styles.genderFilter} />
      <Map location={location} onPress={() => selectSp(false)}>
        <Markers sps={sps} location={location} setSelectedSp={selectSp} />
      </Map>
      <View style={styles.serviceFilter}>
        <TouchableOpacity
          style={styles.validate}
          onPress={onValidate}
          disabled={!sp}
        >
          <Ionicons name="md-checkmark" color="white" size={40} />
        </TouchableOpacity>
        <ServiceFilter />
      </View>
    </BackImage>
  );
};

const styles = StyleSheet.create({
  validate: {
    position: "relative",
    alignSelf: "flex-end",
    marginEnd: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#8edbef",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  genderFilter: {
    position: "absolute",
    top: 120,
    zIndex: 1,
    width: "100%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
  },
  serviceFilter: {
    position: "absolute",
    bottom: 0,
    zIndex: 1,
    width: "100%",
  },
});

export default Home;
