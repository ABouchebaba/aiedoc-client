import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ForYou from "../screens/ForYou";
import Headlines from "../screens/Headlines";
import ReadLater from "../screens/ReadLater";
import Test from "../screens/Test";

const Main = createBottomTabNavigator();

const MainScreen = () => (
  <Main.Navigator initialRouteName="Headlines">
    <Main.Screen name="Test" component={Test} />
    <Main.Screen name="For You" component={ForYou} />
    <Main.Screen name="Headlines" component={Headlines} />
    <Main.Screen name="Read Later" component={ReadLater} />
  </Main.Navigator>
);

export default MainScreen;
