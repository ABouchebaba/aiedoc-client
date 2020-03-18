import React from "react";
import { Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./Main";
import Search from "../screens/Search";
import { HeaderLeft, HeaderRight, HeaderTitle } from "../components/Header";

const MainHeader = props => <Text>Header</Text>;

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
          headerTitleStyle: {
            fontWeight: "bold"
          }
        })}
      />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}

export default StackScreen;
