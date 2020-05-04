import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { CustomDrawerContent } from "../components";
import About from "../screens/About";
import History from "../screens/History";
import Home from "../screens/Home";
import ProfileStack from "./ProfileStack";
import StoreStack from "./StoreStack";
import Commands from "../screens/Commands";

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
      <HomeDrawer.Screen name="Boutique" component={StoreStack} />
      <HomeDrawer.Screen name="Mes prestations" component={History} />
      <HomeDrawer.Screen name="Mes achats" component={Commands} />
      <HomeDrawer.Screen name="Profile" component={ProfileStack} />
      <HomeDrawer.Screen name="A propos" component={About} />
    </HomeDrawer.Navigator>
  );
}

export default HomeDrawerScreen;
