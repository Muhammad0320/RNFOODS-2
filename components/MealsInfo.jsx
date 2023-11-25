import { StyleSheet } from "react-native";

function MealsInfo({ duration, complexity, affordability }) {
  return (
    <View style={styles.detailContainer}>
      <Text> {duration}m </Text>
      <Text> {complexity.toUpperCase()} </Text>
      <Text> {affordability.toUpperCase()} </Text>
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
