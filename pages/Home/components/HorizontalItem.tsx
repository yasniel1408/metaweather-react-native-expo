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
            // source={require(`../../../assets/${abbreviation}.png`)}
            source={{
              uri: `https://dd7tel2830j4w.cloudfront.net/f1532620903696x278477401239797470/if_Weather_669958.svg`,
            }}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default HorizontalItem;
