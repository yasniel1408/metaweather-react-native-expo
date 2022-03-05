import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import NavigationDrawer from "./navigations/NavigationDrawer";
import NavigationStacks from "./navigations/NavigationStacks";
import NavigationTabs from "./navigations/NavigationTabs";

const App = () => (
  <NavigationContainer>
    <NavigationStacks />
    <NavigationTabs />
    <NavigationDrawer />
  </NavigationContainer>
);
export default App;
