import React, { useEffect, useRef } from "react";
import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import { Header, Markers } from "../components";
import { getLocation } from "../Store/actions";

const screen = Dimensions.get("window");

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Home = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const { latitude, longitude } = useSelector((state) => state.user.location);
  const map = useRef();

  function fitToMarkersToMap() {
    map.current.fitToSuppliedMarkers(["user"], {
      edgePadding: { top: 100, right: 100, bottom: 100, left: 100 },
    });
  }

  useEffect(() => {
    dispatch(getLocation());
  }, []);

  // useEffect(fitToMarkersToMap, [latitude, longitude]);

  return (
    <ImageBackground
      source={require("../../assets/bg/bgHome.png")}
      style={styles.container}
    >
      <View style={styles.header}>
        <Header
          navigation={props.navigation}
          fitToMarkersToMap={fitToMarkersToMap}
        />
      </View>
      <View style={styles.mapContainer}>
        <MapView
          ref={map}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          showsTraffic={true}
          loadingEnabled={true}
          style={styles.mapStyle}
        >
          <Markers longitude={longitude} latitude={latitude} />
        </MapView>
        {/* add filter  */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
  mapContainer: {
    overflow: "hidden",
    backgroundColor: "white",
    height: "85%",
    width: "100%",
    borderRadius: 30,
  },
  mapStyle: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderBottomEndRadius: 20,
  },
  header: {
    height: "15%",
    width: "100%",
    justifyContent: "center",
  },
  headerActions: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  tinyLogo: {
    width: 70,
    height: 70,
  },
});

export default Home;
