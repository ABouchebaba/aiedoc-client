import React from "react";
import HomeDrawer from "./HomeDrawer";
import AuthStack from "./AuthStack";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { useSelector } from "react-redux";

const Navigator = () => {
  const user = useSelector((state) => state.user);

  return (
    <NavigationContainer theme={DefaultTheme}>
      {user ? <HomeDrawer /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigator;
