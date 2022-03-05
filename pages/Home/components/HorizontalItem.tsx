import React from "react";
import { Pressable, Text, View } from "react-native";
import SvgUri from "react-native-svg-uri";
import IItem from "../../../types/IItem";
import styles from "./styles";

const HorizontalItem = ({
  navigation,
  title,
  abbreviation,
}: IItem & { navigation: any }) => {
  const getImageUrl: string = "../../../assets/" + "t" + ".svg";

  return (
    <View style={styles?.horizontalItem}>
      <Pressable
        onPress={() => navigation.navigate("DetailsByCity", { abbreviation })}
      >
        <View>
          <Text style={styles?.title2}>Name: {title}</Text>
        </View>
        <View>
          <SvgUri width="70" height="70" source={require(getImageUrl)} />
        </View>
      </Pressable>
    </View>
  );
};

export default HorizontalItem;
