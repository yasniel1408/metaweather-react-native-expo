import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Button } from "react-native";
import LogoTitle from "../components/LogoTitle";
import Home from "../pages/Home/Home";
import Settings from "../pages/Settings/Settings";
import colors from "../utils/colors";

const Drawer = createDrawerNavigator();

const NavigationDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.dark,
        },
        headerTintColor: colors.white,
      }}
    >
      <Drawer.Screen
        name="MetaWeather"
        component={Home}
        options={{
          headerTitle: (props: any) => <LogoTitle {...props} />,
          headerRight: () => (
            <Button onPress={() => alert("This is a button!")} title="Info" />
          ),
        }}
      />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default NavigationDrawer;
