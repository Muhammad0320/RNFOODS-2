import { FlatList, StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/test-data";
import MealItem from "../components/MealItem";

function MealsOverView({ route }) {
  const { categoryId } = route.params;

  const mealItems = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mealItems}
        renderItem={({ item }) => <MealItem {...item} />}
      />
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
