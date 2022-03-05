import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Button } from "react-native";
import LogoTitle from "../components/LogoTitle";
import DetailsByCity from "../pages/DetailsByCity/DetailsByCity";
import Home from "../pages/Home/Home";
import Settings from "../pages/Settings/Settings";
import User from "../pages/User/User";
import colors from "../utils/colors";

const MainStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: colors.dark,
  },
  headerTintColor: colors.white,
};

const MainStacksNavigation = () => {
  return (
    <MainStack.Navigator screenOptions={screenOptionStyle}>
      <MainStack.Screen
        name="MetaWeather"
        component={Home}
        options={{
          headerTitle: (props: any) => <LogoTitle {...props} />,
          headerRight: () => (
            <Button onPress={() => alert("This is a button!")} title="Info" />
          ),
        }}
      />
      <MainStack.Screen name="DetailsByCity" component={DetailsByCity} />
    </MainStack.Navigator>
  );
};

const SettingsStacksNavigation = () => {
  return (
    <SettingsStack.Navigator screenOptions={screenOptionStyle}>
      <SettingsStack.Screen name="Settings" component={Settings} />
    </SettingsStack.Navigator>
  );
};

const UserStacksNavigation = () => {
  return (
    <UserStack.Navigator screenOptions={screenOptionStyle}>
      <UserStack.Screen name="User" component={User} />
    </UserStack.Navigator>
  );
};

export { MainStacksNavigation, UserStacksNavigation, SettingsStacksNavigation };
