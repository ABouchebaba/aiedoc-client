import React from "react";
import { Text, Button, View } from "react-native";

function SettingsScreen(props) {
  return (
    <View>
      <Text>SettingsScreen</Text>
      <Button
        title="Go to Main"
        onPress={() =>
          props.navigation.navigate("Main", { screen: "Settings" })
        }
      />
    </View>
  );
}

export default SettingsScreen;
