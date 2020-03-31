import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ForYou from "../screens/ForYou";
import Headlines from "../screens/Headlines";
import ReadLater from "../screens/ReadLater";
import Test from "../screens/Test";
import HeadlinesNav from "./HeadlinesNav";
import ReadLaterNav from "./ReadLaterNav";
import ForYouNav from "./ForYouNav";
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
    initialRouteName="Headlines"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={icons[route.name]} size={size} color={color} />
      )
    })}
  >
    {/* <Main.Screen name="Test" component={Test} /> */}
    <Main.Screen name="For You" component={ForYouNav} />
    <Main.Screen name="Headlines" component={HeadlinesNav} />
    <Main.Screen name="Read Later" component={ReadLaterNav} />
  </Main.Navigator>
);

export default MainScreen;
