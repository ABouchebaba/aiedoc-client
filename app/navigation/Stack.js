import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./Main";
import Search from "../screens/Search";

const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen name="Home" component={Main} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}

export default StackScreen;
