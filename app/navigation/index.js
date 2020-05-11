import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";
import { setToken } from "../Store/api";
import AuthStack from "./AuthStack";
import HomeDrawer from "./HomeDrawer";
import InterventionStack from "./InterventionStack";

const Navigator = () => {
  const { user, token } = useSelector((state) => state.user);
  const { intervention } = useSelector((state) => state.current);
  // recover token from storage and put it in Axios
  if (token) setToken("x-auth-token", token);

  // console.log(intervention._id);
  return (
    <NavigationContainer theme={DefaultTheme}>
      {intervention ? (
        <InterventionStack />
      ) : user ? (
        <HomeDrawer />
      ) : (
        <AuthStack />
      )}
      {/* {user ? <HomeDrawer /> : <AuthStack />} */}
    </NavigationContainer>
  );
};

export default Navigator;
