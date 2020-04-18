import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StoreHome from "../screens/StoreHome";
import ProductProfile from "../screens/ProductProfile";
import Basket from "../screens/Basket";

const StoreStack = createStackNavigator();

function StoreStackScreen() {
  return (
    <StoreStack.Navigator headerMode={false} initialRouteName={"Profile"}>
      <StoreStack.Screen name="StoreHome" component={StoreHome} />
      <StoreStack.Screen name="ProductProfile" component={ProductProfile} />
      <StoreStack.Screen name="Basket" component={Basket} />
    </StoreStack.Navigator>
  );
}

export default StoreStackScreen;
