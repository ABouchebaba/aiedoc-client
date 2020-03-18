import React from "react";
import { Text, Button, View } from "react-native";

function profileScreen(props) {
  return (
    <View>
      <Text>profileScreen</Text>
      <Button
        title="Go to Main"
        onPress={() => props.navigation.navigate("Main", { screen: "Profile" })}
      />
    </View>
  );
}

export default profileScreen;
