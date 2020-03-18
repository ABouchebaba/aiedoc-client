import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dumb from "../screens/dumb";
import Headlines from "../screens/Headlines";
import SearchArticle from "../screens/SearchArticle";

function Navigator() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Headlines" headerMode="none">
        <Stack.Screen name="Dumb" component={Dumb} />
        <Stack.Screen name="Headlines" component={Headlines} />
        <Stack.Screen name="SearchArticle" component={SearchArticle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
