import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import colors from "../utils/colors";
import {
  MainStacksNavigation,
  SettingsStacksNavigation,
  UserStacksNavigation,
} from "./NavigationStacks";

const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }: any) => {
            return <Ionicons name="home" size={size} color={color} />;
          },
        })}
        name="MetaWeather"
        component={MainStacksNavigation}
      />
      <Tab.Screen
        options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }: any) => {
            return <Ionicons name="people" size={size} color={color} />;
          },
        })}
        name="User"
        component={UserStacksNavigation}
      />
      <Tab.Screen
        options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }: any) => {
            return <Ionicons name="list" size={size} color={color} />;
          },
        })}
        name="Settings"
        component={SettingsStacksNavigation}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigation;
