import { StyleSheet } from "react-native";
import colors from "../../../utils/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charade,
    justifyContent: "center",
  },
  item: {
    backgroundColor: colors.primary,
    padding: 15,
    marginVertical: 3,
    marginHorizontal: 3,
    width: "97%",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  horizontalItem: {
    backgroundColor: colors.carmine,
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 3,
    width: 140,
    height: 120,
    borderRadius: 10,
    flex: 1,
    flexDirection: "column",
  },
  title: {
    fontSize: 17,
    color: colors.white,
  },
  abbreviation: {
    fontSize: 13,
    color: colors.white,
  },
  title2: {
    fontSize: 15,
    color: colors.white,
    marginBottom: 5,
  },
  abbreviation2: {
    fontSize: 10,
    color: colors.white,
  },
  stretch: {
    width: 40,
    height: 40,
  },
  stretch2: {
    width: 70,
    height: 70,
  },
});

export default styles;
