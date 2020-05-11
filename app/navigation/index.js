import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";
import { setToken } from "../Store/api";
import AuthStack from "./AuthStack";
import HomeDrawer from "./HomeDrawer";

const Navigator = () => {
  const { user, token } = useSelector((state) => state.user);
  // recover token from storage and put it in Axios
  if (token) setToken("x-auth-token", token);
  return (
    <NavigationContainer theme={DefaultTheme}>
      {user ? <HomeDrawer /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigator;
