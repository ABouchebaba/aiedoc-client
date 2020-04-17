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

// function fitToMarkersToMap() {
//   mapRef.current.fitToSuppliedMarkers(["user"], {
//     edgePadding: { top: 100, right: 100, bottom: 100, left: 100 },
//   });
// }

const Home = (props) => {
  const dispatch = useDispatch();
  const { location } = useSelector((state) => state.user);
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
    dispatch(getServices());
  }, []);

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
      <Map setRef={setMapRef} location={location}>
        <Markers sps={filtered} location={location} />
      </Map>
      <ServiceFilter
        setFilter={setFilter}
        selected={filters.service}
        style={styles.serviceFilter}
      />
    </BackImage>
  );
};

const styles = StyleSheet.create({
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
  },
});

export default Home;
