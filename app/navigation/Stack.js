import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./Main";
import Search from "../screens/Search";
import { HeaderLeft, HeaderRight } from "../components/MainHeader";

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
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}

export default StackScreen;
