import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";

import React from "react";
import About from "../screens/About";
import History from "../screens/History";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { CustomDrawerContent } from "../components";

const HomeDrawer = createDrawerNavigator();

function HomeDrawerScreen() {
  return (
    <HomeDrawer.Navigator
      drawerType="slide"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName={"History"}
      
      // drawerStyle={{height:"100%"}}
    >
      <HomeDrawer.Screen name="Accueil" component={Home} />
      <HomeDrawer.Screen name="Profile" component={Profile} />
      <HomeDrawer.Screen name="Historique" component={History} />
      <HomeDrawer.Screen name="About" component={About} />
    </HomeDrawer.Navigator>
  );
}

export default HomeDrawerScreen;
