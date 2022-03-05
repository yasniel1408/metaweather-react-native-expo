import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import colors from "../utils/colors";
import {
  MainStacksNavigation,
  SettingsStacksNavigation,
  UserStacksNavigation,
} from "./NavigationStacks";

const Tabs = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.dark,
        },
        headerTintColor: colors.white,
      }}
    >
      <Tabs.Screen name="MetaWeather" component={MainStacksNavigation} />
      <Tabs.Screen name="User" component={UserStacksNavigation} />
      <Tabs.Screen name="Settings" component={SettingsStacksNavigation} />
    </Tabs.Navigator>
  );
};

export default TabsNavigation;
