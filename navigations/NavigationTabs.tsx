import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Button } from "react-native";
import LogoTitle from "../components/LogoTitle";
import DetailsByCity from "../pages/DetailsByCity/DetailsByCity";
import Home from "../pages/Home/Home";
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
      <Tabs.Screen name="DetailsByCity" component={DetailsByCity} />
    </Tabs.Navigator>
  );
};

export default NavigationTabs;
