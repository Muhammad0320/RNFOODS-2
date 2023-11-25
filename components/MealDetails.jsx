import { Text } from "react-native";

function MealDetails({ route }) {
  const { id } = route.params;

  return <Text>This is meal details page - {id}</Text>;
}

export default MealDetails;
