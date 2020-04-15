import React, { useEffect } from "react";
import { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import { getAvailableSps } from "../Store/actions";

const markers = [
  { id: "mk0", coordinates: { latitude: 36.735, longitude: 3.1801299 } },
  { id: "mk1", coordinates: { latitude: 36.736, longitude: 3.17015 } },
  { id: "mk2", coordinates: { latitude: 36.737, longitude: 3.1601 } },
  { id: "mk3", coordinates: { latitude: 36.738, longitude: 3.15008 } },
  { id: "mk4", coordinates: { latitude: 36.7322, longitude: 3.14808 } },
  { id: "mk5", coordinates: { latitude: 36.733, longitude: 3.19007 } },
];

export const Markers = ({ location }) => {
  const dispatch = useDispatch();
  const { sps, loading, error } = useSelector((state) => state.sps);

  useEffect(() => {
    console.log(sps);
    dispatch(getAvailableSps());
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
          key={sp._id}
          title={sp.email}
          identifier={sp._id}
          coordinate={{
            longitude: sp.location.coordinates[0],
            latitude: sp.location.coordinates[1],
          }}
          image={require("../../assets/malePin.png")}
          // image= {require(sp.gender=="male"?"../../assets/malePin.png":"../../assets/malePin.png")}
        />
      ))}
    </React.Fragment>
  );
};
