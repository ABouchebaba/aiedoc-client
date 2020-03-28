import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ReadLater from "../screens/ReadLater";
import Article from "../screens/Article";
import { renderMainHeader } from "../components/MainHeader";

const ReadLaterNav = createStackNavigator();

const ReadLaterNavScreen = () => (
  <ReadLaterNav.Navigator initialRouteName="ReadLater">
    <ReadLaterNav.Screen
      name="ReadLater"
      component={ReadLater}
      options={renderMainHeader}
    />
    <ReadLaterNav.Screen name="Article" component={Article} />
  </ReadLaterNav.Navigator>
);

export default ReadLaterNavScreen;
