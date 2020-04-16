import { createDrawerNavigator } from "@react-navigation/drawer";

import React from "react";
import About from "../screens/About";
import History from "../screens/History";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import ChangePhoneNumber from "../screens/ChangePhoneNumber";
import { CustomDrawerContent } from "../components";

const HomeDrawer = createDrawerNavigator();

function HomeDrawerScreen() {
  return (
    <HomeDrawer.Navigator
      drawerType="slide"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName={"Accueil"}

      // drawerStyle={{height:"100%"}}
    >
      <HomeDrawer.Screen name="Accueil" component={Home} />
      <HomeDrawer.Screen name="Profile" component={Profile} />
      <HomeDrawer.Screen name="Historique" component={History} />
      <HomeDrawer.Screen name="About" component={About} />
      <HomeDrawer.Screen
        name="ChangePhoneNumber"
        options={{
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => null,
        }}
        component={ChangePhoneNumber}
      />
    </HomeDrawer.Navigator>
  );
}

export default HomeDrawerScreen;
