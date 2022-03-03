import React from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IItem from "../../types/IItem";
import Item from "./components/Item";
import { weatherStates } from "./constants";
import styles from "./styles";

export default function Home({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={weatherStates}
          renderItem={({ item }: { item: IItem }) => (
            <Item navigation={navigation} {...item} />
          )}
          keyExtractor={(item: IItem) => item.id}
        />
      </SafeAreaView>
    </View>
  );
}
