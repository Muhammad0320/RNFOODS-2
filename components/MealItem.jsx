import { Image, Pressable, Text, View } from "react-native";

function MealItem({ title, affordability, complexity, imageUrl, duration }) {
  return (
    <View>
      <Pressable>
        <Image source={{ uri: imageUrl }} />
        <View>
          <Text> {title} </Text>
          <View>
            <Text> {duration}m </Text>
            <Text> {complexity.toUpperCase()} </Text>
            <Text> {affordability.toUpperCase()} </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;
