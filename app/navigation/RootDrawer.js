import React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";

const RootDrawer = createDrawerNavigator();

function RootDrawerScreen() {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <RootDrawer.Navigator drawerType="slide">
        <RootDrawer.Screen name="Home" component={Home} />
      </RootDrawer.Navigator>
    </NavigationContainer>
  );
}

export default RootDrawerScreen;
