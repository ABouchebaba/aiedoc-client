import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ForYou from "../screens/ForYou";
import Article from "../screens/Article";
import { renderMainHeader } from "../components/MainHeader";

const ForYouNav = createStackNavigator();

const ForYouNavScreen = () => (
  <ForYouNav.Navigator initialRouteName="For You">
    <ForYouNav.Screen
      name="For You"
      component={ForYou}
      options={renderMainHeader}
    />
    <ForYouNav.Screen name="Article" component={Article} />
  </ForYouNav.Navigator>
);

export default ForYouNavScreen;
