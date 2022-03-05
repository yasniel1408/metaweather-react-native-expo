import React from "react";
import { Pressable, Text, View } from "react-native";
import SvgUri from "react-native-svg-uri";
import IItem from "../../../types/IItem";
import colors from "../../../utils/colors";
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
      <View>
        <SvgUri
          width="40"
          height="40"
          // source={{
          //   uri: `https://metaweather.com/static/img/weather/${abbreviation}.svg`,
          // }}
          source={{
            uri: `https://dd7tel2830j4w.cloudfront.net/f1532620903696x278477401239797470/if_Weather_669958.svg`,
          }}
        />
      </View>
    </View>
  </Pressable>
);

export default Item;
