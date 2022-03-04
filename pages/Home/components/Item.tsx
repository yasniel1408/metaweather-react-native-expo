import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import IItem from "../../../types/IItem";
import styles from "./styles";

const Item = ({
  navigation,
  title,
  abbreviation,
}: IItem & { navigation: any }) => (
  <Pressable
    onPress={() => navigation.navigate("DetailsByCity", { abbreviation })}
  >
    <View style={styles?.item}>
      <View>
        <Text style={styles?.title}>Name: {title}</Text>
        <Text style={styles?.abbreviation}>Abbreviation: {abbreviation}</Text>
      </View>
      <Image
        style={styles.stretch}
        source={{
          uri: `https://www.metaweather.com/static/img/weather/${abbreviation}.png`,
        }}
      />
    </View>
  </Pressable>
);

export default Item;
