import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TabsNavigation from "./navigations/NavigationTabs";
import colors from "./utils/colors";

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={colors.carmine} />
      <TabsNavigation />
    </NavigationContainer>
  </SafeAreaProvider>
);
export default App;
