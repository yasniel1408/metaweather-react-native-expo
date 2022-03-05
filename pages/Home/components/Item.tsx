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
  <View style={styles?.item}>
    <Pressable
      onPress={() => navigation.navigate("DetailsByCity", { abbreviation })}
    >
      <View>
        <Text style={styles?.title}>Name: {title}</Text>
        <Text style={styles?.abbreviation}>Abbreviation: {abbreviation}</Text>
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
    </Pressable>
  </View>
);

export default Item;
