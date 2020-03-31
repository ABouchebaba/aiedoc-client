import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Preferences from "../screens/Preferences";
const PreferenceStack = createStackNavigator();

function PreferenceStackScreen() {
  return (
    <PreferenceStack.Navigator headerMode="screen">
      <PreferenceStack.Screen
        name="Preferences"
        component={Preferences}
        // options={{ headerShown: false }}
      />
    </PreferenceStack.Navigator>
  );
}

export default PreferenceStackScreen;
