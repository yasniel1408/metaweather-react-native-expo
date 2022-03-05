import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Button } from "react-native";
import LogoTitle from "../components/LogoTitle";
import Home from "../pages/Home/Home";
import Settings from "../pages/Settings/Settings";
import colors from "../utils/colors";

const Tabs = createBottomTabNavigator();

const NavigationTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.dark,
        },
        headerTintColor: colors.white,
      }}
    >
      <Tabs.Screen
        name="MetaWeather"
        component={Home}
        options={{
          headerTitle: (props: any) => <LogoTitle {...props} />,
          headerRight: () => (
            <Button onPress={() => alert("This is a button!")} title="Info" />
          ),
        }}
      />
      <Tabs.Screen name="Settings" component={Settings} />
    </Tabs.Navigator>
  );
};

export default NavigationTabs;
