import React from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import IItem from "../../types/IItem";
import HorizontalItem from "./components/HorizontalItem";
import Item from "./components/Item";
import { weatherStates } from "./constants";

const Home = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <FlatList
        data={weatherStates}
        renderItem={({ item }: { item: IItem }) => (
          <HorizontalItem navigation={navigation} {...item} />
        )}
        keyExtractor={(item: IItem) => item.id}
        horizontal={true}
      />
      <FlatList
        data={weatherStates}
        renderItem={({ item }: { item: IItem }) => (
          <Item navigation={navigation} {...item} />
        )}
        keyExtractor={(item: IItem) => item.id}
      />
    </View>
  );
};

export default Home;
