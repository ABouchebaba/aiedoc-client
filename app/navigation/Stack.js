import React from "react";
import {
  createStackNavigator,
  HeaderHeightContext
} from "@react-navigation/stack";
import Main from "./Main";
import Search from "../screens/Search";
import { HeaderLeft, HeaderRight } from "../components/MainHeader";
import SearchHeader from "../components/SearchHeader";

const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Home"
        component={Main}
        options={props => ({
          headerRight: () => <HeaderRight {...props} />,
          headerLeft: () => <HeaderLeft {...props} />,
          headerTitle: "Open News",
          headerTitleAlign: "center",
          headerTitleStyle: { fontWeight: "bold" }
        })}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={props => ({
          headerTitle: () => <SearchHeader {...props} />,
          headerTitleAlign: "center"
        })}
      />
    </Stack.Navigator>
  );
}

export default StackScreen;
