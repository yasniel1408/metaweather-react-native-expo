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
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }: any) => {
            return <Ionicons name="home" size={size} color={color} />;
          },
        })}
        name="MetaWeatherTab"
        component={MainStacksNavigation}
      />
      <Tab.Screen
        options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }: any) => {
            return <Ionicons name="people" size={size} color={color} />;
          },
        })}
        name="UserTab"
        component={UserStacksNavigation}
      />
      <Tab.Screen
        options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }: any) => {
            return <Ionicons name="list" size={size} color={color} />;
          },
        })}
        name="SettingsTab"
        component={SettingsStacksNavigation}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigation;
