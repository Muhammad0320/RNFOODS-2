import { StyleSheet, Text, View } from "react-native";

function MealsInfo({ duration, complexity, affordability, style }) {
  return (
    <View style={styles.detailContainer}>
      <Text style={style && style}> {duration}m </Text>
      <Text style={style && style}> {complexity.toUpperCase()} </Text>
      <Text style={style && style}> {affordability.toUpperCase()} </Text>
    </View>
  );
}

export default MealsInfo;

const styles = StyleSheet.create({
  detailContainer: {
    flexDirection: "row",
    columnGap: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});
