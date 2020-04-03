import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ForYou from "../screens/ForYou";
import Headlines from "../screens/Headlines";
import ReadLater from "../screens/ReadLater";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import Test from "../screens/Test";

const icons = {
  "For You": "md-person",
  Headlines: "ios-globe",
  "Read Later": "md-bookmarks",
  Test: "md-bookmarks"
};

const MainTabs = createBottomTabNavigator();

const MainTabsScreen = () => {
  const theme = useTheme();
  return (
    <MainTabs.Navigator
      initialRouteName="Headlines"
      // tabBarOptions={{ inactiveTintColor: theme.colors.text }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, color }) => (
          <Ionicons name={icons[route.name]} size={size} color={color} />
        )
      })}
    >
      {/* <MainTabs.Screen name="Test" component={Test} /> */}
      <MainTabs.Screen name="For You" component={ForYou} />
      <MainTabs.Screen name="Headlines" component={Headlines} />
      <MainTabs.Screen name="Read Later" component={ReadLater} />
    </MainTabs.Navigator>
  );
};

export default MainTabsScreen;
