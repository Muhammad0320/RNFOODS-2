import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import MealsInfo from "./MealsInfo";

function MealItem({
  title,
  affordability,
  complexity,
  imageUrl,
  duration,
  id,
}) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("MealDetails", {
      id,
    });
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressIos : null)}
        android_ripple={{ color: "#ccc" }}
        onPress={handlePress}
      >
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View style={styles.textContainer}>
          <Text style={styles.title}> {title} </Text>
          <MealsInfo
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",

    borderRadius: 16,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    margin: 16,
  },

  textContainer: {
    marginVertical: 15,
    rowGap: 8,
    marginHorizontal: 20,
  },

  image: {
    width: "100%",
    height: 200,
    objectFit: "cover",
  },

  pressIos: { opacity: 0.75 },

  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
  },
});
