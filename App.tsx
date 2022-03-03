import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DetailsByCity from "./pages/DetailsByCity/DetailsByCity";
import Home from "./pages/Home/Home";
import colors from "./utils/colors";

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.dark,
        },
        headerTintColor: colors.white,
      }}
    >
      <Stack.Screen name="MetaWeather" component={Home} />
      <Stack.Screen name="DetailsByCity" component={DetailsByCity} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default App;
