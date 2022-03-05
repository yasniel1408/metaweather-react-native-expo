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
    padding: 20,
    marginVertical: 3,
    marginHorizontal: 3,
    width: "97%",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  horizontalItem: {
    backgroundColor: colors.primary,
    padding: 20,
    marginVertical: 3,
    marginHorizontal: 3,
    width: 80,
    height: 80,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 17,
    color: colors.white,
  },
  abbreviation: {
    fontSize: 13,
    color: colors.white,
  },
  stretch: {
    width: 40,
    height: 40,
  },
});

export default styles;
