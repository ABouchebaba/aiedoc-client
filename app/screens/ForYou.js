import React from "react";
import { Text, Button, View } from "react-native";

function ForYou(props) {
  return (
    <View>
      <Text>ForYou</Text>
      <Button
        title="Go to search"
        onPress={() => props.navigation.push("Search")}
      />
    </View>
  );
}

export default ForYou;
