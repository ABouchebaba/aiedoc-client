import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StoreHome from "../screens/StoreHome";
import ChangePhoneNumber from "../screens/ChangePhoneNumber";

const StoreStack = createStackNavigator();

function StoreStackScreen() {
  return (
    <StoreStack.Navigator headerMode={false} initialRouteName={"Profile"}>
      <StoreStack.Screen name="StoreHome" component={StoreHome} />
    </StoreStack.Navigator>
  );
}

export default StoreStackScreen;
