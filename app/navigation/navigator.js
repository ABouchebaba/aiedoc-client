import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../screens/Profile";
import PreferenceStack from "./PreferenceStack";
import SettingStack from "./SettingsStack";
import Stack from "./Stack";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { useSelector } from "react-redux";

const Drawer = createDrawerNavigator();

function Navigator() {
  let myTheme = { ...DefaultTheme };
  myTheme.colors.background = "#fff";
  let theme = useSelector(state => state.settings.theme);
  if (theme === "dark") theme = DarkTheme;
  else theme = myTheme;

  return (
    <NavigationContainer theme={theme}>
      <Drawer.Navigator drawerType="slide" screenOptions={{}}>
        <Drawer.Screen name="Home" component={Stack} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Preferences" component={PreferenceStack} />
        <Drawer.Screen name="Settings" component={SettingStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
