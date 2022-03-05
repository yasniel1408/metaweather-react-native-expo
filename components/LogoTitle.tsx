import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../utils/colors";
import SvgUri from "react-native-svg-uri";

const LogoTitle = () => {
  return (
    <View style={styles.container}>
      <SvgUri
        width="40"
        height="40"
        source={{
          uri: `https://dd7tel2830j4w.cloudfront.net/f1532620903696x278477401239797470/if_Weather_669958.svg`,
        }}
      />
      <Text style={styles.title}>Meta Weather</Text>
    </View>
  );
};

export default LogoTitle;

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontSize: 34,
    fontWeight: "bold",
    marginLeft: 10,
  },
  stretch: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 50,
  },
  container: {
    flex: 1,
    flexDirection: "row",
  },
});
