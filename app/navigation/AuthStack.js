import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Auth_1 from "../screens/Auth_1";

const AuthStack = createStackNavigator();

function AuthStackScreen() {
  return (
    <AuthStack.Navigator drawerType="slide">
      <AuthStack.Screen name="Auth_1" component={Auth_1} />
    </AuthStack.Navigator>
  );
}

export default AuthStackScreen;
