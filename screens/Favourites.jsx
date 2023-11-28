import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/meealsList/mealsList";
import { MEALS } from "../data/test-data";
import { useFavouriteContext } from "../store/context/FavouriteContext";

function Favourites() {
  const { ids } = useFavouriteContext();

  if (!ids.length) {
    return (
      <View>
        <Text> You have no favourite meal to display at the monent</Text>
      </View>
    );
  }

  const items = MEALS.filter((meal) => ids.includes(meal.id));

  return <MealsList items={items} />;
}

export default Favourites;

const styles = StyleSheet.create({});
