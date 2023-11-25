import { Image, Text, View } from "react-native";
import { MEALS } from "../data/test-data";
import MealsInfo from "../components/MealsInfo";

function MealsDetails({ route }) {
  const { id } = route.params;

  const {
    affordability,
    complexity,
    duration,
    ingredients,
    steps,
    title,
    imageUrl,
  } = MEALS.find((meals) => meals.id === id);

  return (
    <View>
      <Image source={{ uri: imageUrl }} />
      <Text> {title} </Text>

      <MealsInfo
        affordability={affordability}
        complexity={complexity}
        duration={duration}
      />

      <Text> Ingredient </Text>

      <View>
        {ingredients.map((ingredient) => (
          <Text key={ingredient}> {ingredient} </Text>
        ))}
      </View>

      <Text> Steps </Text>

      <View>
        {steps.map((ingredient) => (
          <Text key={ingredient}> {ingredient} </Text>
        ))}
      </View>
    </View>
  );
}

export default MealsDetails;
