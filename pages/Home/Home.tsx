import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import IItem from "../../types/IItem";
import Item from "./components/Item";
import { weatherStates } from "./constants";

export default function Home({ navigation }: { navigation: any }) {
  return (
    <View>
      <Text style={{ fontSize: 50 }}>Weathers:</Text>
      <FlatList
        data={weatherStates}
        renderItem={({ item }: { item: IItem }) => (
          <Item navigation={navigation} {...item} />
        )}
        keyExtractor={(item: IItem) => item.id}
      />
    </View>
  );
}
