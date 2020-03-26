import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ForYou from "../screens/ForYou";
import Headlines from "../screens/Headlines";
import ReadLater from "../screens/ReadLater";
import Test from "../screens/Test";
import { Ionicons } from "@expo/vector-icons";

const icons = {
  "For You": "md-person",
  Headlines: "ios-globe",
  "Read Later": "md-bookmarks",
  Test: "md-bookmarks"
};

const Main = createBottomTabNavigator();

const MainScreen = () => (
  <Main.Navigator
    initialRouteName="Test"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={icons[route.name]} size={size} color={color} />
      )
    })}
  >
    <Main.Screen name="Test" component={Test} />
    <Main.Screen name="For You" component={ForYou} />
    <Main.Screen name="Headlines" component={Headlines} />
    <Main.Screen name="Read Later" component={ReadLater} />
  </Main.Navigator>
);

export default MainScreen;
