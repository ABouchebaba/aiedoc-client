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
import { getLocation, getAvailableSps } from "../Store/actions";

// function fitToMarkersToMap() {
//   mapRef.current.fitToSuppliedMarkers(["user"], {
//     edgePadding: { top: 100, right: 100, bottom: 100, left: 100 },
//   });
// }

const Home = (props) => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.user.location);
  const { sps, loading, error } = useSelector((state) => state.sps);
  const [mapRef, setMapRef] = useState(null);
  const [filters, setFilters] = useState({ sex: {}, service: {} });

  const setFilter = (filter, value) => {
    if (filters[filter][value]) {
      delete filters[filter][value];
    } else {
      filters[filter][value] = true;
    }
    setFilters({ ...filters });
  };

  useEffect(() => {
    dispatch(getLocation());
    dispatch(getAvailableSps());
  }, []);

  let filtered = [...sps];
  if (Object.keys(filters.sex).length > 0)
    filtered = filtered.filter((sp) => Boolean(filters.sex[sp.sex]));

  return (
    <BackImage source={require("../../assets/bg/bgHome.png")}>
      <View style={styles.header}>
        <Header navigation={props.navigation} />
      </View>

      <SexFilter
        setFilter={setFilter}
        style={styles.sexFilter}
        selected={filters.sex}
      />

      <Map setRef={setMapRef} location={location}>
        <Markers sps={filtered} location={location} />
      </Map>

      <ServiceFilter style={styles.serviceFilter} />
    </BackImage>
  );
};

const styles = StyleSheet.create({
  header: {
    height: "15%",
    width: "100%",
    justifyContent: "center",
  },
  sexFilter: {
    position: "absolute",
    top: 120,
    zIndex: 1,
    width: "60%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-around",
  },
  serviceFilter: {
    position: "absolute",
    bottom: 0,
    zIndex: 1,
    width: "100%",
    alignSelf: "center",
    justifyContent: "space-around",
  },
});

export default Home;
