import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import NavigationStacks from "./navigations/NavigationStacks";
import NavigationTabs from "./navigations/NavigationTabs";

const App = () => (
  <NavigationContainer>
    <NavigationStacks />
    <NavigationTabs />
  </NavigationContainer>
);
export default App;
