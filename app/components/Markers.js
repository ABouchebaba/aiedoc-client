import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Marker, Callout } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import { SpInfo } from "./SpInfo";

export const Markers = ({ location, sps }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(sps);
  }, []);

  return (
    <React.Fragment>
      <Marker.Animated
        key={"user"}
        title="User"
        identifier={"user"}
        coordinate={location}
        image={require("../../assets/malePin.png")}
      />
      {sps.map((sp) => (
        <Marker.Animated
          onPress={() => alert("press")}
          key={sp._id}
          title={sp.sex}
          identifier={sp._id}
          coordinate={{
            longitude: sp.location.coordinates[0],
            latitude: sp.location.coordinates[1],
          }}
          image={require("../../assets/malePin.png")}
          // image= {require(sp.gender=="male"?"../../assets/malePin.png":"../../assets/malePin.png")}
        >
          <Callout style={{ position: "absolute" }}>
            <SpInfo sp={sp} />
          </Callout>
        </Marker.Animated>
      ))}
    </React.Fragment>
  );
};
