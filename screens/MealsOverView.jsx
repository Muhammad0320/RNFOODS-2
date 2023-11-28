import { FlatList, StyleSheet, Text, View } from "react-native";

import { CATEGORIES, MEALS } from "../data/test-data";
import MealItem from "../components/mealsList/MealItem";
import { useLayoutEffect } from "react";
import MealsList from "../components/mealsList/mealsList";

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
