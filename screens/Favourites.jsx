import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/meealsList/MealsList";
import { MEALS } from "../data/test-data";
import { useFavouriteContext } from "../store/context/FavouriteContext";

import { useSelector } from "react-redux";

function Favourites() {
  // const { ids } = useFavouriteContext();

  const { ids } = useSelector((state) => state.favourite);

  if (!ids.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {" "}
          You have no favourite meal to display at the monent
        </Text>
      </View>
    );
  }

  const items = MEALS.filter((meal) => ids.includes(meal.id));

  return <MealsList items={items} />;
}

export default Favourites;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
  },

  text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});
