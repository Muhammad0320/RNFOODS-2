import { Text } from "react-native";

function MealsDetails({ route }) {
  const { id } = route.params;

  return <Text>This is meal details page - {id}</Text>;
}

export default MealsDetails;
