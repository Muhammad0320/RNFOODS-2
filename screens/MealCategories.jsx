import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

const testCat = [1, 2, 3, 5, , 6, 7, 8, 9, 10];

function MealCategories() {
  return (
    <FlatList
      data={testCat}
      numColumns={2}
      key={Math.random()}
      renderItem={() => <CategoryGridTile />}
    />
  );
}

export default MealCategories;
