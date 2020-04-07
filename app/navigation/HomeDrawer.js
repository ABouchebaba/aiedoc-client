import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import History from "../screens/History";
import About from "../screens/About";

const HomeDrawer = createDrawerNavigator();

function HomeDrawerScreen() {
  return (
    <HomeDrawer.Navigator drawerType="slide">
      <HomeDrawer.Screen name="Home" component={Home} />
      <HomeDrawer.Screen name="Profile" component={Profile} />
      <HomeDrawer.Screen name="History" component={History} />
      <HomeDrawer.Screen name="About" component={About} />
    </HomeDrawer.Navigator>
  );
}

export default HomeDrawerScreen;
