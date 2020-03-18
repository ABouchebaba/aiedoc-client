import React from "react";
import { Text, Button, View } from "react-native";

function preferencesScreen(props) {
  return (
    <View>
      <Text>preferencesScreen</Text>
      <Button
        title="Go to Main"
        onPress={() =>
          props.navigation.navigate("Main", { screen: "Preferences" })
        }
      />
    </View>
  );
}

export default preferencesScreen;
