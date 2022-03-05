import React from "react";
import { FlatList, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import IItem from "../../types/IItem";
import HorizontalItem from "./components/HorizontalItem";
import Item from "./components/Item";
import { weatherStates } from "./constants";

const Home = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView>
      <View style={{ height: 500 }}>
        <FlatList
          data={weatherStates}
          renderItem={({ item }: { item: IItem }) => (
            <Item navigation={navigation} {...item} />
          )}
          keyExtractor={(item: IItem) => item.id}
        />
      </View>
      <View style={{ height: 130 }}>
        <FlatList
          data={weatherStates}
          renderItem={({ item }: { item: IItem }) => (
            <HorizontalItem navigation={navigation} {...item} />
          )}
          keyExtractor={(item: IItem) => item.id}
          horizontal={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
