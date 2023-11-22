import { StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/test-data";

function MealsOverView({ route }) {
  const { categoryId } = route.params;

  const mealItems = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  console.log(mealItems);

  return (
    <View style={styles.container}>
      <Text> The meals overview screen - {categoryId} </Text>
    </View>
  );
}

export default MealsOverView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
