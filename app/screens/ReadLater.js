import React from "react";
import { Text, Button, View } from "react-native";

function ReadLater(props) {
  return (
    <View>
      <Text>ReadLater</Text>
      <Button
        title="Go to search"
        onPress={() => props.navigation.push("Search")}
      />
    </View>
  );
}

export default ReadLater;
