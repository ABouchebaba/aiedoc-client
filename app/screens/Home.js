import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { BackImage, GenderFilter, Header, LoadingModal, Map, Markers, ServiceFilter, SpModal } from "../components";
import { AppStateEvents, Socket } from "../helpers";
import { getAvailableSps, getLocation, getServices, resetCurrentIntervention, setCurrentIntervention, setCurrentSp, unsetCurrent } from "../Store/actions";
import { available_sps } from "../Store/selectors";

const Home = (props) => {
  const dispatch = useDispatch();
  const sps = useSelector(available_sps);
  const { location, user } = useSelector((state) => state.user);
  const { intervention, sp, loading } = useSelector((state) => state.current);

  const modalShown = intervention.state === "pending";

  // Socket is a singleton class, only one socket is needed at a time
  const socket = Socket.getInstance();
  if (intervention && !socket.isInitialized()) {
    // Starting app after initing an intervention & closed app
    console.log("home init + join");
    dispatch(resetCurrentIntervention(intervention._id));
    socket.on("refused", (int_id) => {
      AppStateEvents.removeNamedEvent("resync");
      socket.destroy();
      dispatch(unsetCurrent());
      alert("Intervention refused by sp");
    });
    socket.on("accepted", (intervention) => {
      dispatch(setCurrentIntervention(intervention));
    });
  }

  useEffect(() => {
    dispatch(getLocation());
    dispatch(getAvailableSps());
    dispatch(getServices());
  }, []);

  const onValidate = () => {
    const int = {
      client_id: user._id,
      sp_id: sp._id,
      services: ["Injection"],
    };
    // initialise connexion to server
    socket.init();
    // after emitting "init", server responds with "wait"
    socket.on("wait", (intervention) => {
      // Show sp modal + waiting message
      dispatch(setCurrentIntervention(intervention));
    });
    socket.emit("init", int);

    socket.on("refused", (int_id) => {
      AppStateEvents.removeNamedEvent("resync");
      socket.destroy();
      dispatch(unsetCurrent());
      alert("Intervention refused by sp");
    });
    socket.on("accepted", (intervention) => {
      dispatch(setCurrentIntervention(intervention));
    });
  };

  const cancel = () => {
    socket.on("canceled", (intervention) => {
      AppStateEvents.removeNamedEvent("resync");
      socket.destroy();
      dispatch(unsetCurrent());
      Alert.alert("Annuler","vous avez annulé le demande");
    });
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
