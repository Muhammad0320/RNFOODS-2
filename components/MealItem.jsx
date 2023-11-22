import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 16,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    margin: 16,
  },

  image: {
    width: "100%",
    height: 200,
    objectFit: "cover",
  },

  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
  },

  detailContainer: {
    flexDirection: "row",
    columnGap: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});
