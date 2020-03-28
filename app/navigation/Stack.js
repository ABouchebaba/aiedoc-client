import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./Main";
import Search from "../screens/Search";
import SearchHeader from "../components/SearchHeader";

const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Home"
        component={Main}
        options={{ headerShown: false }}
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
