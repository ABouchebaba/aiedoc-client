import React from "react";
import { Text, Button, View } from "react-native";

function SettingsScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>SettingsScreen</Text>
      <Button
        title="Go to Home"
        onPress={() => props.navigation.navigate("Home", { screen: "Home" })}
      />
    </View>
  );
}

export default SettingsScreen;
