import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export const Interventions = (props) => {
  const interventions = props.interventions
//   const interventions = [
//     {
//       _id: "5e655fad2e011c00165eeb06",
//       totalPrice: 0,
//       intervention_id: "5e655fad2e011c00165eeb05",
//       date: "2020-03-08T21:12:13.409Z",
//       sp_name: "service provider",
//     },
//     {
//       _id: "5e655fad2e011c00165eeb06",
//       totalPrice: 0,
//       intervention_id: "5e655fad2e011c00165eeb05",
//       date: "2020-03-08T21:12:13.409Z",
//       sp_name: "service provider",
//     },
//   ];

  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
      {[...Array(10)].map((inv, i) => (
        <View
          key={i}
          style={{ height: 120, borderRadius: 30, borderWidth: 1, margin: 15 }}
        ></View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
