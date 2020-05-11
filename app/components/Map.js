import React, { useRef } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

const screen = Dimensions.get("window");

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.50922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export const Map = (props) => {

  // const mapRef = useRef(null);
  // setTimeout(()=>{
  //   mapRef.current.fitToSuppliedMarkers(["markers"], {
  //     edgePadding: { top: 100, right: 100, bottom: 100, left: 100 },
  //     animated: true,
  //   });
  // },1000)

  return (
    <View style={styles.mapContainer}>
      <MapView
        // ref={mapRef}
        initialRegion={{
          latitude: props.location.latitude,
          longitude: props.location.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        onPress={props.onPress}
        showsTraffic={true}
        loadingEnabled={true}
        style={styles.mapStyle}
      >
        {props.children}
      </MapView>
    </View>
  );
};

const styles = {
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
};
