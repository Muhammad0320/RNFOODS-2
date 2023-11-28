import { StyleSheet, View } from "react-native";

import { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/test-data";
import MealsList from "../components/meealsList/MealsList";

function MealsOverView({ route, navigation }) {
  const { categoryId } = route.params;

  const mealItems = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  useLayoutEffect(() => {
    const title = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.title;

    navigation.setOptions({
      title,
    });
  }, [navigation, categoryId]);

  return (
    <View style={styles.container}>
      <MealsList items={mealItems} />
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
