import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Headlines from "../screens/Headlines";
import Article from "../screens/Article";
import { renderMainHeader } from "../components/MainHeader";

const HeadLinesNav = createStackNavigator();

const HeadLinesNavScreen = () => (
  <HeadLinesNav.Navigator initialRouteName="Headlines">
    <HeadLinesNav.Screen
      name="Headlines"
      component={Headlines}
      options={renderMainHeader}
    />
    <HeadLinesNav.Screen name="Article" component={Article} />
  </HeadLinesNav.Navigator>
);

export default HeadLinesNavScreen;
