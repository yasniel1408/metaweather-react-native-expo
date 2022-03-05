import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import IItem from "../../../types/IItem";
import styles from "./styles";

const HorizontalItem = ({
  navigation,
  title,
  abbreviation,
}: IItem & { navigation: any }) => {
  return (
    <View style={styles?.horizontalItem}>
      <Pressable
        onPress={() => navigation.navigate("DetailsByCity", { abbreviation })}
      >
        <View>
          <Text style={styles?.title2}>Name: {title}</Text>
        </View>
        <View>
          <Image
            style={styles.stretch2}
            source={require(`../../../assets/t.png`)}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default HorizontalItem;
