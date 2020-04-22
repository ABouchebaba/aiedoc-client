import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  Header,
  Markers,
  Map,
  BackImage,
  SexFilter,
  ServiceFilter,
} from "../components";
import { getLocation, getAvailableSps, getServices } from "../Store/actions";
import { Ionicons } from "@expo/vector-icons";
import { Socket } from "../helpers";

// function fitToMarkersToMap() {
//   mapRef.current.fitToSuppliedMarkers(["user"], {
//     edgePadding: { top: 100, right: 100, bottom: 100, left: 100 },
//   });
// }

const Home = (props) => {
  const dispatch = useDispatch();
  const { location, user } = useSelector((state) => state.user);
  const { sps, loading, error } = useSelector((state) => state.sps);
  const [mapRef, setMapRef] = useState(null);
  const [selectedSp, setSelectedSp] = useState(false);
  const [filters, setFilters] = useState({ sex: {}, service: {} });

  const setFilter = (filter, value) => {
    if (value === false) {
      filters[filter] = {};
    } else {
      if (filters[filter][value]) {
        delete filters[filter][value];
      } else {
        filters[filter][value] = true;
      }
    }

    setFilters({ ...filters });
  };

  // console.log(user._id);

  useEffect(() => {
    dispatch(getLocation());
    dispatch(getAvailableSps());
    dispatch(getServices());
  }, []);

  const onValidate = () => {
    const intervention = {
      client_id: user._id,
      sp_id: selectedSp._id,
      client_name: user.firstname + user.lastname,
      sp_name: selectedSp.firstname + selectedSp.lastname,
      services: ["Injection"],
    };
    // Socket is a singleton class, only one socket is needed at a time
    const socket = Socket.getInstance();
    // initialise connexion to server
    socket.init();
    // after emitting "init", server responds with "wait"
    socket.on("wait", (intervention) => {
      alert("intervention created: " + intervention._id);
    });
    socket.emit("init", intervention);
  };

  //Filtering logic
  // empty filters(sex/service) are not taken into consideration
  let filtered = sps;
  if (Object.keys(filters.sex).length > 0)
    filtered = filtered.filter((sp) => filters.sex[sp.sex]);

  if (Object.keys(filters.service).length > 0)
    filtered = filtered.filter((sp) => {
      for (let i = 0; i < sp.services.length; i++) {
        if (filters.service[sp.services[i]]) return true;
      }
      return false;
    });

  return (
    <BackImage source={require("../../assets/bg/bgHome.png")}>
      <Header />
      <SexFilter
        setFilter={setFilter}
        selected={filters.sex}
        style={styles.sexFilter}
      />
      <Map
        setRef={setMapRef}
        location={location}
        onPress={() => setSelectedSp(false)}
      >
        <Markers
          sps={filtered}
          location={location}
          setSelectedSp={setSelectedSp}
        />
      </Map>
      <View style={styles.serviceFilter}>
        <TouchableOpacity
          style={styles.validate}
          onPress={onValidate}
          disabled={!selectedSp}
        >
          <Ionicons name="md-checkmark" color="white" size={40} />
        </TouchableOpacity>
        <ServiceFilter setFilter={setFilter} selected={filters.service} />
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
  sexFilter: {
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
