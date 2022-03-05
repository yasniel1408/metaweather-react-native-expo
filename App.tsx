import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import NavigationDrawer from "./navigations/NavigationDrawer";
import { MainStacksNavigation } from "./navigations/NavigationStacks";
import TabsNavigation from "./navigations/NavigationTabs";

const App = () => (
  <NavigationContainer>
    {/* <NavigationDrawer /> */}
    {/* <TabsNavigation /> */}
    <MainStacksNavigation />
  </NavigationContainer>
);
export default App;
