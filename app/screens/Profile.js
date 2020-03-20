import React from "react";
import { Text, Button, View } from "react-native";

function profileScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>profileScreen</Text>
      <Button
        title="Go to Home"
        onPress={() => props.navigation.navigate("Home", { screen: "Home" })}
      />
    </View>
  );
}

export default profileScreen;
