import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../screens/Settings";
const SettingStack = createStackNavigator();

function SettingStackScreen() {
  return (
    <SettingStack.Navigator headerMode="screen">
      <SettingStack.Screen name="Settings" component={Settings} />
    </SettingStack.Navigator>
  );
}

export default SettingStackScreen;
