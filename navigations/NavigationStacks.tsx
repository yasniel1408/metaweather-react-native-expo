import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Button } from "react-native";
import LogoTitle from "../components/LogoTitle";
import DetailsByCity from "../pages/DetailsByCity/DetailsByCity";
import Home from "../pages/Home/Home";
import Settings from "../pages/Settings/Settings";
import User from "../pages/User/User";
import colors from "../utils/colors";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: colors.dark,
  },
  headerTintColor: colors.white,
};

const MainStacksNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="MetaWeather"
        component={Home}
        options={{
          headerTitle: (props: any) => <LogoTitle {...props} />,
          headerRight: () => (
            <Button onPress={() => alert("This is a button!")} title="Info" />
          ),
        }}
      />
      <Stack.Screen name="DetailsByCity" component={DetailsByCity} />
    </Stack.Navigator>
  );
};

const SettingsStacksNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

const UserStacksNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
};

export { MainStacksNavigation, UserStacksNavigation, SettingsStacksNavigation };
