import React from "react";
import { Pressable, Text, View } from "react-native";
import { Image } from "react-native-svg";
import SvgUri from "react-native-svg-uri";
import IItem from "../../../types/IItem";
import styles from "./styles";

const HorizontalItem = ({
  navigation,
  title,
  abbreviation,
}: IItem & { navigation: any }) => (
  <Pressable
    onPress={() => navigation.navigate("DetailsByCity", { abbreviation })}
  >
    <View style={styles?.horizontalItem}>
      <View>
        <Text style={styles?.title2}>Name: {title}</Text>
      </View>
      <View>
        {/* <SvgUri
          width="40"
          height="40"
          source={{
            uri: `https://www.metaweather.com/static/img/weather/${abbreviation}.svg`,
          }}
        /> */}
      </View>
    </View>
  </Pressable>
);

export default HorizontalItem;
