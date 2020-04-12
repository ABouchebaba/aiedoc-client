import React from "react";
import {Marker} from "react-native-maps";

export const Markers = (props) => {

    return [...Array(10)].map((x, i) => (
        <Marker.Animated
          key={i}
          title="tbib"
          identifier={'mk'+i}
          description={"lorem loram lorem\n loram"}
          coordinate={{
            latitude: props.latitude + Math.random() * 0.01,
            longitude: props.longitude + Math.random() * 0.01,
          }}
          image={require("../../assets/malePin.png")}
        />
      ))
  }