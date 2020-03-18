import React from "react";
import { Text, Button, View } from "react-native";

function SearchScreen(props) {
  return (
    <View>
      <Text>SearchScreen</Text>
      <Button title="Go Back" onPress={() => props.navigation.goBack()} />
    </View>
  );
}

export default SearchScreen;
