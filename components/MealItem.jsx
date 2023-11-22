import { Image, Pressable, Text, View } from "react-native";

function MealItem({ title, affordability, complexity, imageUrl, duration }) {
  return (
    <View>
      <Pressable>
        <Image source={{ uri: imageUrl }} />
      </Pressable>
    </View>
  );
}

export default MealItem;
