import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/test-data";

function MealCategories({ navigation }) {
  const handlePress = (id) => {
    console.log(id);

    navigation.navigate("MealOverview", { categoryId: id });
  };

  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { color, title, id } }) => (
        <CategoryGridTile
          title={title}
          color={color}
          onPress={handlePress}
          id={id}
        />
      )}
    />
  );
}

export default MealCategories;
