import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const DetailsByCity = ({
  route: {
    params: { abbreviation },
  },
}: {
  route: any;
}) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const load = async () => {
      let res: any = await axios.get(
        `https://www.metaweather.com/api/location/search/?query=${abbreviation}`
      );
      console.log(res);
      setList(res.data);
    };
    load();
  }, []);

  return (
    <View>
      <Text>DetailsByCity</Text>
      <Text>{JSON.stringify(list)}</Text>
    </View>
  );
};

export default DetailsByCity;

const styles = StyleSheet.create({});
