import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import colors from "../utils/colors";
import {
  SettingsStacksNavigation,
  UserStacksNavigation,
} from "./NavigationStacks";
import TabsNavigation from "./NavigationTabs";

const Drawer = createDrawerNavigator();

const NavigationDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="MetaWeather">
      <Drawer.Screen name="MetaWeather" component={TabsNavigation} />
      <Drawer.Screen name="User" component={UserStacksNavigation} />
      <Drawer.Screen name="Settings" component={SettingsStacksNavigation} />
    </Drawer.Navigator>
  );
};

export default NavigationDrawer;
