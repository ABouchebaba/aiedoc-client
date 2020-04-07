import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";

const HomeDrawer = createDrawerNavigator();

function HomeDrawerScreen() {
  return (
    <HomeDrawer.Navigator drawerType="slide">
      <HomeDrawer.Screen name="Home" component={Home} />
    </HomeDrawer.Navigator>
  );
}

export default HomeDrawerScreen;
