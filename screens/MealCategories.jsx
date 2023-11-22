import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/test-data";

const testCat = [1, 2, 3, 5, , 6, 7, 8, 9, 10];

function MealCategories() {
  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { color, title } }) => (
        <CategoryGridTile title={title} color={color} />
      )}
    />
  );
}

export default MealCategories;
