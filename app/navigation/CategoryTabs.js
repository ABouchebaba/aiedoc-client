import React from "react";
import Headlines from "../screens/Headlines";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSelector } from "react-redux";

const CategoryTabs = createMaterialTopTabNavigator();

const CategoryTabsScreen = () => {
  const articles = useSelector((state) => state.articles.articles);
  let categories = {};
  articles.map((a) => {
    categories[a.category] = true;
  });

  categories = Object.keys(categories);

  const tabBarOptions = {
    scrollEnabled: true,
    tabStyle: {
      width: "auto",
      paddingHorizontal: 5,
    },
    labelStyle: {
      fontSize: 12,
      alignSelf: "center",
    },
    style: {
      height: 40,
    },
  };

  return (
    <CategoryTabs.Navigator tabBarOptions={tabBarOptions}>
      <CategoryTabs.Screen
        name="All"
        component={Headlines}
        initialParams={{ category: "All" }}
      />
      {categories.map((c) => (
        <CategoryTabs.Screen
          key={c}
          name={c}
          component={Headlines}
          initialParams={{ category: c }}
        />
      ))}
    </CategoryTabs.Navigator>
  );
};

export default CategoryTabsScreen;
