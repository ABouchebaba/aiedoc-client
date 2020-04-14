import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import About from "../screens/About";
import History from "../screens/History";
import Home from "../screens/Home";
import Profile from "../screens/Profile";

const HomeDrawer = createDrawerNavigator();

function HomeDrawerScreen() {
  return (
    <HomeDrawer.Navigator drawerType="slide" initialRouteName={"History"}>
      <HomeDrawer.Screen name="Home" component={Home} />
      <HomeDrawer.Screen name="Profile" component={Profile} />
      <HomeDrawer.Screen name="History" component={History} />
      <HomeDrawer.Screen name="About" component={About} />
    </HomeDrawer.Navigator>
  );
}

export default HomeDrawerScreen;
